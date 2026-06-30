# Re-entry status — 2026-06-30

This is the current quick-start map for humans and agents opening the public marketing site after the June 2026 safe-sync pass.

## Source of truth

- `main` is the production marketing site line.
- `staging` is the staging marketing site line.
- This repo is not the product/backend source of truth. Use it for public messaging, public routes, brand presentation, and rollout copy.

## What is working

- Astro static site routes are present for home, features, audiences, preview, privacy, support, and 404.
- Local verification on 2026-06-30:
  - `npm run check` passed.
  - `npm test` passed. This includes the build path and 5 Node tests.

## Deployment posture

- `.github/workflows/deploy-production.yml` targets `VERCEL_PROJECT_ID_PRODUCTION`.
- `.github/workflows/deploy-staging.yml` targets `VERCEL_PROJECT_ID_STAGING`.
- The staging workflow uses `vercel pull --environment=production` and `vercel deploy --prod --yes` inside the staging Vercel project. That can be valid when the staging project has its own production alias, but verify Vercel project IDs and aliases before relying on staging deploy behavior.

## Current direction

Keep the site public, conservative, and accurate. It should explain what Con Gusto is and where the rollout stands without exposing private infrastructure details or implying availability that the backend/dashboard/mobile apps cannot yet support.

## Good first web contributions

1. Add link validation to CI so broken docs or route links are caught automatically.
2. Verify all primary routes after a staging deploy.
3. Revisit `src/data/site.ts` whenever product availability changes.
4. Add lightweight screenshot/visual review for the brand-heavy pages.

## Notes for future agents

- Do not treat this repo as the release source of truth for backend, dashboard, iOS, or Android.
- Copy should remain conservative about preview and rollout status.
- Keep `README.md`, `docs/HANDOFF.md`, and this file aligned when public messaging changes.
