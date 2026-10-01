# Website release identity

Observed 2026-10-01, Asia/Shanghai. Release authority and rollback owner: `hsd`.
The source chain is now aligned; the new production build is blocked by Netlify quota.
Independent reviewer is not registered. Historical owner confirmation from 2026-09-29
is superseded by the fresh public read-only receipts below, not by an authenticated read.

| Stage | Verified identity | Evidence |
|---|---|---|
| Validated source on private Gitea `origin/main` | `b9076e1e2c1f9b100ac51bc21cbbd2b9d1146197` | Git Finalizer commit/push and post-verify |
| Public GitHub `main` after source synchronization | `b9076e1e2c1f9b100ac51bc21cbbd2b9d1146197` | Git Finalizer exact non-force synchronization and both-remote post-verify |
| Current published Netlify production | `6ab54d27affd510008b699d4` / `ae2ffc1ee92aa3b9e41b850ffadccf9d90f87bde` | Site `published_deploy` and deploy receipt: `ready`, `production`, `main`; commit URL identifies the GitHub repository |
| Attempted new production | `6abdccfd0102880008937e9e` / `b9076e1e2c1f9b100ac51bc21cbbd2b9d1146197` | Deploy receipt: `error`, `skipped=true`, `published_at=null`; owner confirmed monthly deployment quota exhausted |
| Previous production candidate | `6ab537cb5c6d8a000806add8` / `9edc97f7e7106024775fe17238f53cc4f4232a91` | Successful historical receipt, but fresh mobile-menu acceptance **failed** |
| Accepted baseline for the next successful release | `6ab54d27affd510008b699d4` / `ae2ffc1ee92aa3b9e41b850ffadccf9d90f87bde` | Current production's immutable artifact passed the technical acceptance below; it is currently live, so it is not yet a separate previous rollback target |

API identities were read from Netlify's existing public GET endpoints. No credential was
extracted or configured. The build API returned HTTP 401, so the quota reason is explicitly
owner-confirmed, not inferred from an unavailable build log. No paid plan change, manual
deployment, DNS change or production rollback was performed.

## What changed and what was checked

Private source had advanced while its GitHub deployment mirror remained at `ae2ffc1…`.
The six-commit fast-forward included Foundation alignment, UI fixes, governance records
and the new build/release gates. A private push alone cannot update the Netlify input.
The supported Git Finalizer synchronization aligned both remotes without changing upstream.

`npm run build` now executes Foundation conformance before Astro and checks the actual static
output afterwards. `npm run check:release` reads local/private/public full OIDs and Netlify's
published receipt, verifies an accepted rollback identity on the same site, ancestry and
publication times, and confirms its immutable artifact remains reachable. Unknown identity,
source drift or stale production fails the check. The existing
[deployment checklist](deployment-checklist.md) owns the complete procedure.

- **Passed — source**, Node `24.19.0`: clean install, 6 deterministic release-check cases,
  Foundation gate (376 leaf rules / 4 weight roles), build, and output gate (16 bilingual
  canonical routes / 22 redirects / 405 local links and assets including mobile `srcset`).
- **Passed — gate failure proofs**: wrong Foundation crimson stops build before Astro;
  wrong Chinese project canonical fails the output gate, using task-owned fixtures.
- **Passed — local candidate and current production**: all 16 routes at both 390px and
  1440px (32 browser cases each), menu bounds, no horizontal overflow, no broken images
  or client scripts. English/Chinese home, Projects and Agent Workspace detail screenshots
  were reviewed side by side. This is product acceptance within those viewports, not a
  new claim of full Foundation measurement or an independent reviewer sign-off.
- **Passed — current production HTTP**: all 16 canonical routes, 22 one-hop HTTP 301s
  preserving query, genuine HTTP 404 with noindex, and 29 assets. Apex HTTPS redirects to
  www while preserving the tested Chinese path and query.
- **Failed — previous rollback candidate**: at 390px, each of its 16 menus has left edge
  `x=-14.125px`, outside the viewport. Its ID is now known but it is not accepted.
- **Failed as expected — live release check**: source and mirror agree, but production
  differs from current build inputs. This reports the remaining quota-blocked release.
- **Not run — Netlify new build and new-production acceptance**: the provider skipped
  the attempt. Actual rollback execution and authenticated build-log reading were not run.

Current production CSS SHA-256 is
`42123cd5e56040751e12b656cf50f2d8048b7f584bcec7e3ffbf3719c824c7b0`.
It is the older build and does not consume the new Foundation adoption. The consumer therefore
continues to record `foundation_status=not_deployed`, `foundation_version=null` for runtime,
and `rollback_identity=null`. Source/validation v1.4 and runtime remain separate.

The immutable accepted baseline is
[6ab54d27…](https://6ab54d27affd510008b699d4--xuanhengtech.netlify.app/).
`main--xuanhengtech.netlify.app` is a mutable branch URL and cannot identify a rollback.
Historical artifacts remain subject to the provider's retention policy; recheck before use.

## Recovery after quota is available

1. Owner restores available Netlify deployment quota. Do not assume the calendar month
   determines the account's reset date; do not repeatedly retry a quota-blocked build.
2. In the existing Netlify project's Deploys page, trigger a build of the **latest mirrored
   GitHub main**. Receipt-only follow-up commits use `[skip netlify]`; a later explicit build
   still needs to include the new build gates. Record the actual full `commit_ref`, rather
   than assuming it will remain `b9076e1…`.
3. Read the site's published receipt and that deploy's receipt; require the exact expected
   commit, `ready`, `production`, `main`, and a published deploy ID. Complete bilingual
   routes, redirects, 404, asset-byte/CSS comparison, apex/www and viewport acceptance.
4. Run `npm run check:release -- --rollback netlify:6ab54d27affd510008b699d4@ae2ffc1ee92aa3b9e41b850ffadccf9d90f87bde`.
   Only after new production succeeds does this accepted current baseline become a separate
   previous rollback. The prior `6ab537cb…` candidate is not the fallback.
5. Update `foundation-consumer.json` with the actual runtime receipt, health, Foundation
   evidence and accepted rollback identity; retire the two release exceptions only when
   their exit conditions hold. Deliver receipt-only changes with `[skip netlify]`, synchronize
   both existing main branches and update the Design System's exact declaration ref/digest.

Receipt commits may differ from the deployed revision only when they change `docs/` and
`foundation-consumer.json` without changing Foundation version or build inputs. The checker
proves ancestry and reports the actual production commit; it never relabels a source commit
as a successful deploy. Rollback remains the provider's existing
[atomic deploy-management operation](https://docs.netlify.com/deploy/manage-deploys/manage-deploys-overview/),
performed by the owner through an authorized client when required.
