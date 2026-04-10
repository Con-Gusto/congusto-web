# Contributing

## Environment

- Node `>=22.12.0`
- npm for package management

## Core Commands

```bash
npm install
npm run dev
npm run check
npm run build
```

## What Contributors Should Understand First

- This is a public marketing site, not the product application
- Most copy and navigation changes should start in `src/data/site.ts`
- Most layout, styling, and responsive behavior changes should start in `src/styles/global.css`
- Shared shell, metadata, favicon, and social tags live in `src/layouts/Layout.astro`
- Brand assets live in `public/`

## Branches

- `main` deploys production
- `staging` deploys the public staging site
- Feature branches and pull requests can still use preview deployments when needed
- If the intent is for production and staging to stay identical, make sure both branches receive the same commit

## Content Standards

- Public copy must match the actual rollout state
- Do not describe backend or dashboard functionality as broadly live unless it is publicly available
- Keep preview routes and in-progress surfaces clearly labeled
- Keep the homepage especially clear on what Con Gusto is, what it does, and who it is for

## Before Opening A PR

- Run `npm run check`
- Run `npm run build`
- Review changed copy for rollout accuracy
- Review route links, metadata, support emails, and favicon/social assets if branding changed
- Confirm the expected deployment target: `main` for production, `staging` for staging

## Documentation Standards

- Update markdown files when behavior, deployment flow, or contributor workflow changes
- Keep docs concise, accurate, and useful for a new developer entering the repo cold
- Do not add secrets, private infrastructure details, account recovery notes, or sensitive operational data
