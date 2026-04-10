# Deployment Notes

## Purpose

This repo deploys the public Con Gusto marketing site on Vercel.

## Deployment Model

- `main` runs `.github/workflows/deploy-production.yml`
- `staging` runs `.github/workflows/deploy-staging.yml`
- Each branch deploys to its own Vercel project
- Deployments are performed by GitHub Actions using the Vercel CLI

## Expected GitHub Configuration

- Repo variables:
  - `VERCEL_ORG_ID`
  - `VERCEL_PROJECT_ID_PRODUCTION`
  - `VERCEL_PROJECT_ID_STAGING`
- Repo secret:
  - `VERCEL_TOKEN`

This file intentionally does not include actual project IDs or other sensitive operational details.

## Expected Vercel Configuration

- Framework preset: `Astro`
- Build command: `npm run build`
- Output directory: `dist`
- Production site should resolve to `https://congustoapp.com`
- Staging site should resolve to `https://congusto-web-staging.vercel.app`

## CI And Deploy Flow

1. Install dependencies
2. Run `npm run check`
3. Run `npm run build`
4. Deploy the built output to the branch-matched Vercel project

## Post-Deploy Checks

- The correct domain resolves for the branch that was pushed
- Core routes load successfully
- Logo, favicon, and social image assets render correctly
- Metadata still matches the latest marketing copy
- Support, privacy, and preview links still work

## Contributor Notes

- If `main` and `staging` are supposed to match, push the same commit to both branches
- Review public copy before deployment if rollout status changed
- Keep deployment docs high-signal and public-safe
