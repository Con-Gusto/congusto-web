# Con Gusto Web

This repository powers the public Con Gusto marketing site at `https://congustoapp.com`.

## Purpose

The site exists to explain:

- what Con Gusto is
- what it does
- who it is for
- what is public today versus still in preview or rollout

This repo should stay tightly scoped to the public marketing surface. It is not the source of truth for the backend, dashboard product, or private internal operations.

## Current State

- `main` deploys the production marketing site
- `staging` deploys the public staging marketing site
- Deployments run through GitHub Actions and Vercel
- The broader product rollout is still in progress, so public copy must stay accurate and conservative
- The current site has an updated brand pass, responsive landing page, shared logo usage, and refreshed social metadata

## Stack

- Astro
- TypeScript
- Static site output
- Vercel for deployment

## Local Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run check
npm run build
```

## Project Structure

- `src/pages/`: route content
- `src/components/`: shared UI and branded building blocks
- `src/layouts/Layout.astro`: page shell, SEO metadata, favicon wiring
- `src/data/site.ts`: shared messaging, navigation, and page content models
- `src/styles/global.css`: design system and responsive styles
- `public/`: brand assets, favicon, and social share imagery

## Primary Routes

- `/`
- `/features`
- `/who-its-for`
- `/coming-soon`
- `/developer-preview`
- `/privacy`
- `/support`

## Editing Rules

- Treat this as a public marketing repository
- Do not imply broad product availability unless it is actually live
- Keep preview surfaces clearly labeled
- Keep docs free of secrets, private infrastructure details, and account-level operational notes
- If `main` and `staging` are intended to match, push the same commit to both branches

## Documentation

- [HANDOFF.md](./HANDOFF.md): quick contributor entry point
- [CONTRIBUTING.md](./CONTRIBUTING.md): contributor workflow and review checklist
- [.github/DEPLOYMENT.md](./.github/DEPLOYMENT.md): deployment behavior and validation steps
- [docs/HANDOFF.md](./docs/HANDOFF.md): fuller project state and next-step notes
