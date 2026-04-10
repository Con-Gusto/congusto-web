# Con Gusto Web

Marketing site for Con Gusto, live at `https://congustoapp.com`.

## Current Status

- `congustoapp.com` is the public marketing site served by this repo.
- Vercel is the deployment platform for this site.
- Pushes to `main` deploy only the production Vercel project for `congustoapp.com`.
- Pushes to `staging` deploy only the separate staging Vercel project at `https://congusto-web-staging.vercel.app`.
- The two branches are pinned to different Vercel project IDs in GitHub Actions, so pushing one branch does not deploy the other project.
- Deployments are triggered from GitHub Actions using the Vercel CLI.
- The broader backend and product rollout are still in progress, so public copy should stay aligned with what is actually live today.

## Stack

- Astro
- TypeScript
- Vercel for production and preview deployments

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

## Key Routes

- `/`
- `/features`
- `/who-its-for`
- `/coming-soon`
- `/developer-preview`
- `/privacy`
- `/support`

## Content Guardrails

- Treat this repo as the public source for the marketing site.
- Do not describe backend or dashboard capabilities as broadly live unless they are actually public.
- Keep infrastructure details and account-level operational data out of public docs.

## Documentation

- `CONTRIBUTING.md` for contributor workflow and content ownership
- `.github/DEPLOYMENT.md` for Vercel deploy behavior and post-deploy checks
- `docs/HANDOFF.md` for sanitized project status and next-step guidance
