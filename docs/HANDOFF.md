# Handoff
#
## Repo Summary

This repository powers the public Con Gusto marketing site at `https://congustoapp.com`.

The codebase is intentionally small. It is meant to clearly market what Con Gusto is, what it does, who it is for, and what parts of the rollout are public today.

## How The Site Is Built

- Astro for routing and page composition
- TypeScript for data/config and component typing
- Static output deployed to Vercel through GitHub Actions

## Where Things Live

- `src/pages/`: page routes and route-specific content
- `src/components/`: shared UI components such as header, footer, brand mark, and product showcase
- `src/layouts/Layout.astro`: shared HTML shell, metadata, favicon, and social image wiring
- `src/data/site.ts`: shared copy, navigation labels, audience sections, rollout messaging, and support info
- `src/styles/global.css`: entire visual system and responsive behavior
- `public/`: logo asset, favicon, social share image, and other static files

## Current Product Messaging Constraints

- This repo is public and should stay accurate
- Do not overstate backend or dashboard availability
- The public site can market the product clearly, but it must still distinguish between public marketing, preview, and future rollout
- Preview routes should remain clearly labeled as non-public or guided access

## Deployment Model

- `main` deploys production
- `staging` deploys the public staging site
- GitHub Actions run validation and Vercel deployment
- If staging and production are intended to match, push the same commit to both branches

## Owner

**Andrew** — marketing site and backend

## What Changed In This Pass

11 files were recently worked on across components, pages, and styles:

- `src/components/BrandMark.astro` — new component for logo/brand mark display
- `src/components/ProductShowcase.astro` — new component for product feature showcase
- `src/components/Footer.astro` — updated
- `src/components/Header.astro` — updated
- `src/components/Icon.astro` — updated
- `src/components/PageHero.astro` — updated
- `src/styles/global.css` — visual system refreshed
- Several pages updated (index, features, who-its-for, coming-soon)

## Current Pages

- `/` — `index.astro` (home)
- `/features` — features overview
- `/who-its-for` — target audience
- `/coming-soon` — placeholder for upcoming features
- `/developer-preview` — developer preview access
- `/privacy` — privacy policy
- `/support` — support page
- `/404` — not found

## Priority Checks

- **Staging deploy (needs verification):** `deploy-staging.yml` may have a copy-paste error — it may use `environment=production` and the `--prod` flag, which would deploy to the production Vercel project instead of staging. Verify this workflow targets `VERCEL_PROJECT_ID_STAGING` before relying on staging deploys.
- Confirm `BrandMark.astro` and `ProductShowcase.astro` render correctly across breakpoints
- Verify all 8 page routes resolve after any deploy
- Check that `src/data/site.ts` copy is accurate with current rollout state

## Recommended Contributor Workflow

1. Read `README.md`
2. Read `HANDOFF.md`
3. Review `src/data/site.ts` to understand the site copy model
4. Read `docs/ARCHITECTURE.md` for component and routing overview
5. Run `npm install`, `npm run check`, and `npm run build`
6. Make sure any copy changes remain aligned with actual rollout state

## Useful Next Improvements

1. Audit and fix the suspected copy-paste error in `deploy-staging.yml`
2. Add a lightweight visual regression or screenshot review workflow
3. Add link validation to CI
4. Revisit messaging as product availability changes
5. If a finalized brand asset package becomes available, replace any reconstructed SVG marks with source-of-truth files
