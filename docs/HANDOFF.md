# Handoff

## Project State

- This repo powers the public Con Gusto marketing site at `https://congustoapp.com`
- Vercel is the deployment platform for this site
- `main` should be treated as the production branch in Vercel
- `staging` deploys a separate public staging project at `https://congusto-web-staging.vercel.app`
- GitHub Actions now handle deploys into the two Vercel projects
- The broader backend and product rollout are still in progress

## What Changed In This Pass

- Consolidated stale markdown guidance into a smaller public doc set
- Removed outdated handoff content that no longer matched the live domain setup
- Updated public copy so the site stays honest about what is live versus still in preview
- Refreshed the marketing layout and messaging for property managers, contractors, and employees
- Added stronger metadata and crawlability support for the public site

## What Future Contributors Should Check First

1. Confirm public copy still matches the actual rollout state
2. Confirm the repo is still linked to the correct Vercel project and domain
3. Run `npm run check` and `npm run build`
4. Review `.github/DEPLOYMENT.md` before changing deployment or preview assumptions
5. Confirm `VERCEL_TOKEN` exists in GitHub repo secrets

## Important Guardrails

- Keep public docs free of private infrastructure and account-recovery details
- Do not claim backend or dashboard availability unless those surfaces are actually public
- Keep preview routes clearly labeled as preview-only

## Likely Next Improvements

1. Reconcile any useful branch-only work back into `main`
2. Add real product visuals and logos to the new placeholder areas
3. Add stronger automated checks such as link validation
4. Revisit public messaging when backend rollout status changes
