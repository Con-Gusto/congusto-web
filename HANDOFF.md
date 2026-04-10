# Handoff

This repository powers the public Con Gusto marketing site at `https://congustoapp.com`.

## What This Repo Is

- A small Astro marketing site for explaining what Con Gusto is, what it does, who it is for, and what is public today.
- Not the backend, dashboard application, or internal operations system.
- A public-facing codebase, so docs and copy should stay accurate and sanitized.

## Stack

- Astro
- TypeScript
- Static site output
- Vercel via GitHub Actions

## Quick Start

```bash
npm install
npm run dev
```

## Before You Ship Changes

```bash
npm run check
npm run build
```

## Where To Edit Things

- Site-wide messaging, navigation, and route content models: `src/data/site.ts`
- Shared page shell, metadata, favicon, and SEO tags: `src/layouts/Layout.astro`
- Header/footer branding and repeated UI: `src/components/`
- Home page and route content: `src/pages/`
- Design system and responsive styling: `src/styles/global.css`
- Brand assets and social images: `public/`

## Branches And Deploys

- `main` deploys production
- `staging` deploys the public staging site
- Keep `main` and `staging` aligned unless there is an intentional staging-only test in progress

## Content Guardrails

- Do not claim backend or dashboard availability unless it is actually public
- Keep preview surfaces clearly labeled as preview-only
- Do not add private infrastructure details, secrets, account recovery notes, or sensitive operational data to docs

## Read Next

- `README.md` for repo overview
- `CONTRIBUTING.md` for contributor workflow
- `.github/DEPLOYMENT.md` for deployment behavior
- `docs/HANDOFF.md` for a fuller repo status note
