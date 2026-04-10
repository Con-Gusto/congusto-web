export const analyticsPlan = {
  recommendedProvider: 'Vercel Web Analytics',
  optionalProductAnalytics: 'PostHog or another event pipeline',
  publicEnvKey: 'PUBLIC_ANALYTICS_PROVIDER',
  goals: [
    'Measure page-level traffic across the marketing funnel',
    'Track CTA clicks for walkthrough, rollout, feature, and preview interest',
    'Keep analytics implementation privacy-conscious and public-site appropriate',
  ],
} as const;

export const analyticsEvents = [
  'cta_request_walkthrough',
  'cta_view_rollout',
  'cta_view_features',
  'cta_view_audience',
  'cta_contact_support',
  'cta_open_preview',
] as const;

export const analyticsTouchpoints = [
  '/',
  '/features',
  '/who-its-for',
  '/coming-soon',
  '/support',
] as const;
