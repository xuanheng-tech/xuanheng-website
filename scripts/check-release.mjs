// Read-only release check. Public Netlify GETs; no tokens, writes, fetch or deployment.
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const fullCommit = /^[0-9a-f]{40}$/;
const deployId = /^[0-9a-f]{24}$/;
const siteDomain = 'xuanhengtech.netlify.app';
class ReleaseCheckError extends Error {}

export function parseRollback(value) {
  const match = /^netlify:([0-9a-f]{24})@([0-9a-f]{40})$/.exec(value ?? '');
  if (!match) throw new ReleaseCheckError('rollback identity must be netlify:<deploy ID>@<full commit>');
  return { id: match[1], commit: match[2] };
}

export function assessRelease({ local, source, mirror, deployed, rollback, expectedRollback, runtimeChanges }) {
  const problems = [];
  for (const [name, commit] of Object.entries({ local, source, mirror })) {
    if (!fullCommit.test(commit ?? '')) problems.push(`${name}: missing full commit`);
  }
  if (local !== source) problems.push('local HEAD differs from private origin/main');
  if (source !== mirror) problems.push('public GitHub main differs from private origin/main');
  for (const [name, deploy] of Object.entries({ production: deployed, rollback })) {
    if (!deployId.test(deploy?.id ?? '') || !fullCommit.test(deploy?.commit_ref ?? '')) {
      problems.push(`${name}: missing deploy ID or full commit_ref`);
    }
    if (deploy?.state !== 'ready' || deploy?.context !== 'production' || deploy?.branch !== 'main') {
      problems.push(`${name}: not a successful main production deploy`);
    }
  }
  if (!deployed?.site_id || rollback?.site_id !== deployed.site_id) problems.push('rollback belongs to a different or unknown site');
  if (rollback?.id !== expectedRollback.id || rollback?.commit_ref !== expectedRollback.commit) {
    problems.push('rollback receipt differs from the accepted identity');
  }
  if (deployed?.id === rollback?.id) problems.push('rollback must be a separate previous accepted deploy');
  const releasedAt = Date.parse(deployed?.published_at);
  const rollbackAt = Date.parse(rollback?.published_at);
  if (!Number.isFinite(releasedAt) || !Number.isFinite(rollbackAt) || rollbackAt >= releasedAt) {
    problems.push('rollback must have been published before the current production deploy');
  }
  // Receipts are committed after deployment. Only documentation/receipt changes may
  // differ; any other changed input means the deployed build is stale. Caller proves ancestry.
  if (deployed?.commit_ref !== source && (!Array.isArray(runtimeChanges) || runtimeChanges.length)) {
    problems.push('production differs from current build inputs');
  }
  return problems;
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length && (args.length !== 2 || args[0] !== '--rollback')) {
    throw new ReleaseCheckError('usage: npm run check:release -- [--rollback netlify:<deploy ID>@<full commit>]');
  }
  const declaration = JSON.parse(readFileSync('foundation-consumer.json', 'utf8'));
  const expectedRollback = parseRollback(args[1] ?? declaration.deployed_runtime.rollback_identity);
  const git = (...arguments_) => {
    try {
      return execFileSync('git', arguments_, {
        encoding: 'utf8', timeout: 20_000, stdio: ['ignore', 'pipe', 'pipe'],
      }).trim();
    } catch {
      throw new ReleaseCheckError(`Git ${arguments_[0]} read failed; verify remote access, local objects and deployment ancestry`);
    }
  };
  if (git('status', '--porcelain')) throw new ReleaseCheckError('release check requires a clean checkout');
  if (git('branch', '--show-current') !== 'main') throw new ReleaseCheckError('release check requires the main checkout');
  const local = git('rev-parse', 'HEAD');
  const remoteMain = (remote) => {
    const result = git('ls-remote', remote, 'refs/heads/main').split(/\s+/);
    if (result.length !== 2 || result[1] !== 'refs/heads/main' || !fullCommit.test(result[0])) {
      throw new ReleaseCheckError(`${remote}/main: no unique full remote identity`);
    }
    return result[0];
  };
  const source = remoteMain('origin');
  const mirror = remoteMain('github');
  const get = async (path) => {
    const response = await fetch(`https://api.netlify.com/api/v1${path}`, { signal: AbortSignal.timeout(20_000) });
    if (!response.ok) throw new ReleaseCheckError(`Netlify read failed (HTTP ${response.status}); no identity inferred`);
    return response.json();
  };
  const site = await get(`/sites/${siteDomain}`);
  const published = site.published_deploy;
  if (!deployId.test(published?.id ?? '')) throw new ReleaseCheckError('Netlify has no published deploy receipt');
  const deployed = await get(`/deploys/${published.id}`);
  const rollback = await get(`/deploys/${expectedRollback.id}`);
  if (deployed.site_id !== site.id || deployed.commit_ref !== published.commit_ref) {
    throw new ReleaseCheckError('published site identity disagrees with its deploy receipt');
  }
  if (!fullCommit.test(deployed.commit_ref ?? '')) throw new ReleaseCheckError('production receipt lacks a full commit_ref');
  git('merge-base', '--is-ancestor', deployed.commit_ref, source);
  git('merge-base', '--is-ancestor', rollback.commit_ref, deployed.commit_ref);
  const runtimeChanges = git('diff', '--name-only', deployed.commit_ref, source).split('\n')
    .filter((path) => path && path !== 'foundation-consumer.json' && !path.startsWith('docs/'));
  const problems = assessRelease({ local, source, mirror, deployed, rollback, expectedRollback, runtimeChanges });
  if (runtimeChanges.length === 0) {
    const deployedDeclaration = JSON.parse(git('show', `${deployed.commit_ref}:foundation-consumer.json`));
    if (deployedDeclaration.foundation_version !== declaration.foundation_version) {
      problems.push('current Foundation version differs from the deployed source');
    }
  }
  // Check the immutable rollback URL too: a retained receipt alone does not prove
  // that its artifacts are still available under the provider's retention policy.
  const rollbackResponse = await fetch(`https://${rollback.id}--${siteDomain}/`, {
    method: 'HEAD', redirect: 'manual', signal: AbortSignal.timeout(20_000),
  });
  if (rollbackResponse.status !== 200) problems.push('accepted rollback artifact is no longer reachable');
  const freshSite = await get(`/sites/${siteDomain}`);
  if (freshSite.published_deploy?.id !== deployed.id || freshSite.published_deploy?.commit_ref !== deployed.commit_ref) {
    problems.push('production moved during verification; rerun');
  }
  if (remoteMain('origin') !== source || remoteMain('github') !== mirror) problems.push('source moved during verification; rerun');
  if (git('rev-parse', 'HEAD') !== local || git('status', '--porcelain')) problems.push('checkout moved during verification; rerun');
  console.log(JSON.stringify({
    status: problems.length ? 'failed' : 'passed', local, source, mirror,
    production: { id: deployed.id, commit: deployed.commit_ref },
    rollback: { id: rollback.id, commit: rollback.commit_ref },
    build_inputs_match: runtimeChanges.length === 0, problems,
  }, null, 2));
  if (problems.length) process.exitCode = 1;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    // Do not echo raw client stderr, API responses, environment or account fields.
    console.error(`FAIL - ${error instanceof ReleaseCheckError ? error.message : 'release identity read could not complete; verify receipt JSON and read-only network access'}`);
    process.exitCode = 1;
  });
}
