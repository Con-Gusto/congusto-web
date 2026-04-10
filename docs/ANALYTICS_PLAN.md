# Analytics Plan

This document is the starting scaffold for adding analytics to the Con Gusto marketing site.

## Goal

Add analytics in a way that helps the team understand marketing performance without turning a small public site into a heavy or privacy-hostile implementation.

## Recommended Rollout

### Phase 1: Baseline Traffic

Use Vercel Web Analytics for:

- page views
- top routes
- referrers
- device and browser breakdowns

Why this is the default recommendation:

- the site already deploys on Vercel
- the integration is low-friction for an Astro static site
- it avoids building custom tracking too early

### Phase 2: CTA Event Tracking

After baseline traffic is live, track key conversion actions:

- request walkthrough
- view rollout details
- view features
- view audience page
- contact support
- open preview

This repo now includes `data-analytics-event` attributes on major CTA links so event wiring can be added later without another markup audit.

### Phase 3: Product-Level Funnel Tracking

Only add this if the marketing team actually needs it.

Possible additions:

- campaign attribution parameters
- outbound source tracking
- A/B landing-page experiments
- provider-backed event pipelines such as PostHog

## Files To Touch For Implementation

- `src/layouts/Layout.astro`
  - best place for provider bootstrap script or analytics component
- `src/data/analytics.ts`
  - event taxonomy and shared analytics constants
- `src/pages/`
  - route-level CTA placement
- `src/components/Header.astro`
  - top navigation CTA tracking
- `src/components/Footer.astro`
  - footer support and preview tracking

## Event Taxonomy

Current scaffolded events:

- `cta_request_walkthrough`
- `cta_view_rollout`
- `cta_view_features`
- `cta_view_audience`
- `cta_contact_support`
- `cta_open_preview`

Keep event names:

- lower-case
- consistent
- action-oriented
- stable across providers

## Privacy Constraints

- This is a public marketing repo, so analytics choices should stay documented and understandable
- Avoid collecting sensitive user data
- Do not track anything that would conflict with the site’s public privacy posture
- If analytics behavior changes meaningfully, update `privacy` copy and documentation

## Suggested Next Implementation Step

1. Decide whether Phase 1 should use Vercel Web Analytics only or a dual setup
2. Add the provider bootstrap in `Layout.astro`
3. Bind click handlers to elements carrying `data-analytics-event`
4. Validate events on staging before pushing the same analytics commit to `main`
