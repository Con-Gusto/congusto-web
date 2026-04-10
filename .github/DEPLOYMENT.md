# Deployment Notes

## Purpose

This repo deploys the public Con Gusto marketing site on Vercel.

## Current State

- `congustoapp.com` is the live marketing site served by this repository.
- Vercel handles production and preview deployments for this repository.
- A second Vercel project exists for the public staging branch deployment.
- The broader backend and product rollout are still in progress, so public copy should not overstate what is already live.

## Deployment Model

- `main` runs `.github/workflows/deploy-production.yml` and deploys only the production Vercel project
- `staging` runs `.github/workflows/deploy-staging.yml` and deploys only the staging Vercel project
- GitHub Actions deploy to Vercel with the CLI rather than via SSH or rsync
- The branch-to-project mapping is fixed in GitHub Actions through separate repo variables: `VERCEL_PROJECT_ID_PRODUCTION=prj_JBCGa9I65W4asD7CzhItaRHUBDvL` for `main` and `VERCEL_PROJECT_ID_STAGING=prj_xryA1sr8077Il5aeZskUcNVDIMM9` for `staging`

## Vercel Project Checks

- Project: `congusto-web`
- Framework preset: `Astro`
- Build command: `npm run build`
- Output directory: `dist`
- Production aliases should include `congustoapp.com` and `www.congustoapp.com`
- Staging project: `congusto-web-staging`
- Staging URL: `https://congusto-web-staging.vercel.app`

## GitHub Configuration

- Repo variables:
  - `VERCEL_ORG_ID`
  - `VERCEL_PROJECT_ID_PRODUCTION`
  - `VERCEL_PROJECT_ID_STAGING`
- Repo secret:
  - `VERCEL_TOKEN`

## Repo Validation Flow

1. Install dependencies with `npm ci`
2. Run site checks
3. Build the site with the Vercel CLI in GitHub Actions
4. Deploy the prebuilt output to the matching Vercel project

## Post-Deploy Checks

- `https://congustoapp.com` returns the current production deployment
- `https://congusto-web-staging.vercel.app` returns the current staging deployment
- Primary routes load successfully
- Static assets and metadata render correctly
- Support and privacy links work
- The deployment shown in Vercel matches the expected branch target

## Public Repo Note

Detailed infrastructure, account ownership, DNS, and server-level operational notes should be maintained outside this public repository.
