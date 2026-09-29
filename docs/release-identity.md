# Phase 5.2 release identity

Observed 2026-09-29, Asia/Shanghai. Release authority and rollback owner: `hsd`.
This is a source/deployment identity record; the mirror and production deployment were
not changed.

| Stage | Recorded identity | Evidence |
|---|---|---|
| Private Gitea `origin/main` | `c6f9bc5f414eb4f719d3078f78db57ff5504d702` | Read-only `git ls-remote origin refs/heads/main` |
| Public GitHub `main` | `ae2ffc1ee92aa3b9e41b850ffadccf9d90f87bde` | GitHub commits API for `xuanheng-tech/xuanheng-website`, resolved full commit |
| Netlify production source | GitHub, branch `main`, short commit `ae2ffc1`; successful deploy and passed build | Owner's Deploys-page confirmation; full GitHub commit above resolves that short ref |
| Netlify production deploy ID | **unverified** | No deploy ID supplied; no existing authenticated Netlify client is available on this machine |
| Previous accepted rollback deploy ID / commit | **unverified** | Requires the immutable identity of a previously accepted deploy |

The owner-confirmed Netlify commit is recorded separately from a direct Netlify deploy
receipt. The consumer declaration therefore keeps runtime identity `unverified` and
`release_id` / `rollback_identity` null. Homepage/CSS HTTP 200 establishes reachability,
not a deployment ID. The served CSS lacks the later Foundation alignment.

## Synchronization relationship

GitHub's commit is an ancestor of Gitea's commit: two commits behind, with no history
divergence. The unpublished source changes are:

1. `5f30aab24ba534fcc1214bc436a907be18407987` — Foundation source alignment.
2. `c6f9bc5f414eb4f719d3078f78db57ff5504d702` — Website UI convergence fixes.

The delta touches `package.json`, `scripts/check-foundation.mjs`,
`src/components/Header.astro` and `src/styles/global.css`. Syncing this main branch would
change the Netlify deployment input and includes UI changes; source identity confirmation
does not authorize that publication or prove its acceptance.

## Closeout and rollback identity

Record the current production deploy ID and full `commit_ref`, plus a previous accepted
deploy ID and its full `commit_ref`, from the existing Netlify Deploys record. Verify the
provider, branch, successful build and immutable IDs against that record before marking
runtime identity verified.

Any later Gitea → GitHub main synchronization needs the normal build, bilingual-route,
domain-redirect and product acceptance checks, followed by verification of the automatically
created Netlify deploy's exact commit. No mirror/config update, manual redeploy or runtime
overwrite was performed in Phase 5.2.

The rollback owner selects a previously accepted immutable deploy and follows
[Netlify's existing deploy management workflow](https://docs.netlify.com/deploy/manage-deploys/manage-deploys-overview/).
Until both identities are supplied, rollback remains an evidence gap; a Git branch or
an inferred CSS filename is not a rollback identity.
