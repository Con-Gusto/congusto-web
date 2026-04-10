# Handoff

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

## What Changed Recently

- The homepage was rewritten to be much clearer about the Con Gusto value proposition
- The visual system was upgraded for a more polished desktop, tablet, and mobile presentation
- Shared branding was updated so the header, footer, social card, and favicon all use the same logo family
- Markdown documentation was refreshed to reflect the current repo purpose and workflow

## Recommended Contributor Workflow

1. Read `README.md`
2. Read `HANDOFF.md`
3. Review `src/data/site.ts` to understand the site copy model
4. Run `npm install`, `npm run check`, and `npm run build`
5. Make sure any copy changes remain aligned with actual rollout state

## Useful Next Improvements

1. Add a lightweight visual regression or screenshot review workflow
2. Add link validation to CI
3. Revisit messaging as product availability changes
4. If a finalized brand asset package becomes available, replace any reconstructed SVG marks with source-of-truth files
