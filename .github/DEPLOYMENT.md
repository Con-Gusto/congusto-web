# Deployment Notes

This repo is currently wired for preview deployments only.

## Branch model

- `staging` -> deploys to `preview.congustoapp.com`
- `main` -> CI only
- production deploy remains blocked until the root-domain cutover is approved

## Required secrets

Shared repo secrets:
- `BLUEHOST_SSH_HOST`
- `BLUEHOST_SSH_USER`
- `BLUEHOST_SSH_PORT`
- `BLUEHOST_SSH_KEY`
- `BLUEHOST_SSH_KNOWN_HOSTS`

Staging environment secrets:
- `WEB_PREVIEW_PATH`

## Production cutover

Do not point this repo at `congustoapp.com` yet. Right now that root domain still serves the Laravel backend and public pages from `public_html`.
