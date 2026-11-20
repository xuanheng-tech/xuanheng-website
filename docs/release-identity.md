# Website release identity

Observed 2026-11-20, Asia/Shanghai. Release authority and rollback owner: `hsd`.
Production now serves the current source. Independent reviewer is not registered.

| Stage | Verified identity | Evidence |
|---|---|---|
| Validated source on private Gitea `origin/main` | `f4961c4d86f0419c89baa64276ce78cad172d019` | Git Finalizer resume-publish (25 commits) and post-verify |
| Public GitHub `main` after source synchronization | `f4961c4d86f0419c89baa64276ce78cad172d019` | Git Finalizer exact non-force sync-published-branch and both-remote post-verify |
| Current published Netlify production | `6b0045d3f642720d39624f29` / `f4961c4d86f0419c89baa64276ce78cad172d019` | Site `published_deploy` and deploy receipt: `ready`, `production`, `main`, published 2026-11-20T13:06:48Z |
| Accepted rollback (previous production) | `6ab54d27affd510008b699d4` / `ae2ffc1ee92aa3b9e41b850ffadccf9d90f87bde` | Accepted 2026-10-01; immutable permalink re-checked reachable on 2026-11-20 before release |

Rollback identity: `netlify:6ab54d27affd510008b699d4@ae2ffc1ee92aa3b9e41b850ffadccf9d90f87bde`.
Immutable production permalink:
[6b0045d3…](https://6b0045d3f642720d39624f29--xuanhengtech.netlify.app/).
`main--xuanhengtech.netlify.app` is a mutable branch URL and cannot identify a rollback.
Historical artifacts remain subject to the provider's retention policy; recheck before use.

API identities were read from Netlify's public GET endpoints. No credential was extracted
or configured. No DNS change, paid plan change, manual deployment or rollback was performed.

## What was checked

- **Passed — source**, Node `24.19.0`: `npm ci`, 6 deterministic release-check cases,
  Foundation gate (542 leaf rules / 4 weight roles), build, and output gate (36 bilingual
  routes / 48 redirects / 1165 local links and assets, zh webfont coverage, inquiry form,
  JSON-LD, `llms.txt`, share cards, 404 noindex).
- **Passed — immutable permalink**: all 36 routes HTTP 200; all 48 redirects one-hop 301
  to the expected target, each target HTTP 200; genuine HTTP 404 with noindex; fonts, QR
  codes, share cards, `llms.txt`, favicon, robots and sitemap. Contact forms on both
  locales are processed by Netlify (form detection was enabled before the release).
- **Passed — browser**, 8 routes × 390px/1440px: no horizontal overflow, broken images,
  page errors, failed requests or cookies.
- **Passed — custom domain spot checks**: key routes 200 with the new content, processed
  forms, `/en/` 301, apex → www 301 preserving path and query, real 404.
- **Passed — release check**: `npm run check:release -- --rollback <identity above>`
  reported no problems and `build_inputs_match=true`.
- **Observed — mainland network path**: direct access from mainland China to Netlify was
  slow or intermittently failing (2–22 s, TLS resets), both for the custom domain and the
  `netlify.app` host. This is a hosting/region observation, not a defect of this deploy.
- **Not run**: an actual rollback, authenticated build-log reading, and a live form
  submission (the owner tests one per locale after adding the email notification).

## Next release

1. Record the then-current published deploy as the rollback baseline and re-check its
   immutable permalink.
2. Deliver to private `origin/main` with Git Finalizer, then `--sync-published-branch` to
   GitHub `main`; each sync of changed build inputs triggers one production build.
3. Verify the exact published receipt, run the online checks above and
   `npm run check:release -- --rollback <previous accepted identity>`.
4. Update this file and `foundation-consumer.json`. Receipt-only commits change only `docs/`
   and `foundation-consumer.json` and use `[skip netlify]`.

Rollback remains the provider's existing
[atomic deploy-management operation](https://docs.netlify.com/deploy/manage-deploys/manage-deploys-overview/),
performed by the owner through an authorized client when required.
