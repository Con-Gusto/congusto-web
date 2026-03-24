# Con Gusto Web

Marketing site for Con Gusto.

## Stack

- Astro
- TypeScript
- Static-first pages with shared content data

## Routes

- `/`
- `/features`
- `/who-its-for`
- `/coming-soon`
- `/developer-preview`
- `/privacy`
- `/support`

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment Model

- `staging` branch -> `preview.congustoapp.com`
- `main` branch -> CI only
- production root-domain cutover is intentionally blocked until `api.congustoapp.com` and `dashboard.congustoapp.com` are live with DNS and SSL

Top-right login routes to `https://dashboard.congustoapp.com`.
Developer preview messaging routes to the future staging surfaces.
