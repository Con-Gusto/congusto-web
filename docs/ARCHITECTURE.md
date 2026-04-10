# Architecture

## Components

Located in `src/components/`:

| Component | Purpose |
|-----------|---------|
| `BrandMark.astro` | Logo/brand mark display |
| `Footer.astro` | Site footer with links and legal |
| `Header.astro` | Site navigation header |
| `Icon.astro` | SVG icon wrapper utility |
| `PageHero.astro` | Hero section used across pages |
| `ProductShowcase.astro` | Product feature showcase (new) |

## Data Layer

- **`src/data/site.ts`** — Single source of truth for all marketing copy, navigation labels, audience sections, rollout messaging, metadata, and site config.
- Components consume from `site.ts`. Content changes go here, not in individual `.astro` files.

## Pages

All routes in `src/pages/`:

| Route | File | Purpose |
|-------|------|---------|
| `/` | `index.astro` | Home |
| `/features` | `features.astro` | Features overview |
| `/who-its-for` | `who-its-for.astro` | Target audience |
| `/coming-soon` | `coming-soon.astro` | Upcoming features placeholder |
| `/developer-preview` | `developer-preview.astro` | Developer preview access |
| `/privacy` | `privacy.astro` | Privacy policy |
| `/support` | `support.astro` | Support |
| `/404` | `404.astro` | Not found |

Generated routes: `robots.txt.ts`, `sitemap.xml.ts`

## Layouts

- **`src/layouts/Layout.astro`** — Base layout wrapping all pages: metadata, fonts, favicon, social image, global CSS.

## Styles

- **`src/styles/global.css`** — Global styles: color system, typography, resets, responsive behavior.

## Build

```bash
npm run check    # TypeScript/Astro type validation
npm run build    # Produces dist/ for Vercel deployment
```

Static output only — no server-side rendering. Deployed via GitHub Actions to Vercel.
