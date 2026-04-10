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

## Branches

- `main` is the Vercel production branch for `congustoapp.com`
- `staging` deploys the separate public staging Vercel project
- Pull requests and feature branches can still use Vercel preview deployments when needed
- Pull requests should pass CI before merge

## Content Ownership

- Shared site messaging and route-level links live in `src/data/site.ts`
- Layout shell and metadata live in `src/layouts/Layout.astro`
- Public-facing copy should stay aligned with the current rollout state
- Preview, backend, and future dashboard language should remain clearly marked as preview or in progress until those surfaces are live

## Before Opening a PR

- Run `npm run check`
- Run `npm run build`
- Review changed copy for rollout accuracy
- Review metadata, route links, and contact details if you touched public pages
- Confirm the expected deployment target is correct: `main` for production, `staging` for staging

## Public Repo Rules

- Do not add private infrastructure details, secret values, or account recovery notes to markdown files
- Keep handoff docs useful for contributors without exposing internal operational data
