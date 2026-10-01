import assert from 'node:assert/strict';
import { test } from 'node:test';
import { assessRelease, parseRollback } from './check-release.mjs';

const current = 'a'.repeat(40);
const previous = 'b'.repeat(40);
const accepted = { id: '2'.repeat(24), commit: previous };
const production = { id: '1'.repeat(24), commit_ref: current, site_id: 'test-site',
  state: 'ready', context: 'production', branch: 'main', published_at: '2026-10-01T00:00:00Z' };
const rollback = { ...production, id: accepted.id, commit_ref: previous, published_at: '2026-09-24T00:00:00Z' };
const input = { local: current, source: current, mirror: current, deployed: production,
  rollback, expectedRollback: accepted, runtimeChanges: [] };

test('aligned source, mirror, deploy and accepted rollback pass', () => {
  assert.deepEqual(assessRelease(input), []);
});

test('source or mirror drift fails even with a successful live deploy', () => {
  assert(assessRelease({ ...input, source: previous }).includes('local HEAD differs from private origin/main'));
  assert(assessRelease({ ...input, mirror: previous }).includes('public GitHub main differs from private origin/main'));
});

test('post-release receipts can differ only when build inputs match', () => {
  const deployed = { ...production, commit_ref: previous };
  assert.deepEqual(assessRelease({ ...input, deployed, runtimeChanges: [] }), []);
  assert(assessRelease({ ...input, deployed, runtimeChanges: ['src/styles/global.css'] })
    .includes('production differs from current build inputs'));
  assert(assessRelease({ ...input, deployed, runtimeChanges: undefined })
    .includes('production differs from current build inputs'));
});

test('unknown identity, preview, failed or unpublished deploys fail closed', () => {
  for (const patch of [{ commit_ref: 'short' }, { id: null }, { state: 'error' },
    { context: 'deploy-preview' }, { branch: 'feature' }, { published_at: null }]) {
    assert(assessRelease({ ...input, deployed: { ...production, ...patch } }).length > 0);
  }
});

test('rollback must match its accepted full identity on the same site and predate production', () => {
  for (const patch of [{ site_id: 'other-site' }, { commit_ref: current }, { id: production.id },
    { published_at: production.published_at }, { published_at: null }, { state: 'error' }]) {
    assert(assessRelease({ ...input, rollback: { ...rollback, ...patch } }).length > 0);
  }
});

test('rollback strings cannot silently degrade to a deploy name or short commit', () => {
  assert.deepEqual(parseRollback(`netlify:${accepted.id}@${previous}`), accepted);
  for (const value of [null, '', accepted.id, `netlify:${accepted.id}@short`, 'production']) {
    assert.throws(() => parseRollback(value));
  }
});
