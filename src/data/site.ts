export const site = {
  name: 'Con Gusto',
  tagline: 'Operational clarity for property teams.',
  description:
    'Con Gusto helps property managers, contractors, and employees keep requests, updates, and job status visible from intake through completion.',
  siteUrl: 'https://congustoapp.com',
  previewUrl: 'https://preview.congustoapp.com',
  dashboardUrl: 'https://dashboard.congustoapp.com',
  stagingDashboardUrl: 'https://staging-dashboard.congustoapp.com',
  supportEmail: 'support@congustoapp.com',
  privacyEmail: 'privacy@congustoapp.com',
  socialImage: '/social-share.svg',
} as const;

export const navigation = [
  { href: '/features', label: 'Features' },
  { href: '/who-its-for', label: 'Who It Helps' },
  { href: '/support', label: 'Contact' },
] as const;

export const heroHighlights = [
  'Keep every request tied to a property, assignee, and current status.',
  'Give office teams and field teams the same source of truth.',
  'Capture photos, notes, and updates without rebuilding context later.',
] as const;

export const logoSlots = [
  'Regional portfolio logo',
  'Management company logo',
  'Vendor network logo',
  'Operations partner logo',
] as const;

export const audienceCards = [
  {
    icon: 'briefcase',
    title: 'Property Managers',
    summary: 'See what is moving, what is blocked, and what needs attention next.',
    description:
      'Manage requests, priorities, vendors, and field updates without stitching the story together from scattered inboxes and texts.',
    bullets: [
      'Track work across buildings and teams',
      'Review updates without chasing screenshots',
      'Keep owners and residents informed with better context',
    ],
  },
  {
    icon: 'wrench',
    title: 'Contractors',
    summary: 'Arrive with clear scope, property context, and the latest status.',
    description:
      'Reduce confusion around assignments, approvals, and completion details so outside vendors can move faster with fewer callbacks.',
    bullets: [
      'See the request details that matter before arrival',
      'Share updates and photos from the field',
      'Stay aligned on status, timing, and next steps',
    ],
  },
  {
    icon: 'users',
    title: 'Employees',
    summary: 'Work from a clean queue instead of reacting from multiple channels.',
    description:
      'Give in-house teams a mobile-friendly workflow for assigned jobs, progress updates, and completion notes from the property.',
    bullets: [
      'Review assigned work in one place',
      'Update jobs in real time from the field',
      'Attach notes and photos before the moment is lost',
    ],
  },
] as const;

export const workflowSteps = [
  {
    icon: 'inbox',
    title: 'Capture the request',
    description:
      'A request starts with the property, issue, and priority already attached to the same record.',
  },
  {
    icon: 'layers',
    title: 'Assign with context',
    description:
      'Managers route work with enough detail for the next person to act without extra back-and-forth.',
  },
  {
    icon: 'camera',
    title: 'Update from the field',
    description:
      'Employees and contractors can add status, notes, and photos while the work is happening.',
  },
  {
    icon: 'check-circle',
    title: 'Close with a clear record',
    description:
      'Everyone can see what changed, what was completed, and what still needs follow-up.',
  },
] as const;

export const featureGroups = [
  {
    heading: 'Visibility that survives handoffs',
    summary:
      'The point is not another inbox. The point is a durable operational record that can move across people and roles.',
    items: [
      {
        icon: 'route',
        title: 'Shared job timeline',
        description:
          'Keep requests, notes, assignments, and completion updates in one place instead of reconstructing them later.',
      },
      {
        icon: 'message',
        title: 'Cleaner communication flow',
        description:
          'Reduce the drift that happens when work is spread across texts, calls, and disconnected email threads.',
      },
      {
        icon: 'building',
        title: 'Property-aware work records',
        description:
          'Tie every job to the building, unit, and context that the next person actually needs.',
      },
    ],
  },
  {
    heading: 'Built for office and field teams',
    summary:
      'Con Gusto is shaped around how property operations really happen: across dashboards, phones, and active job sites.',
    items: [
      {
        icon: 'phone',
        title: 'Field-ready updates',
        description:
          'Capture photos, notes, and progress updates on site rather than waiting to report back later.',
      },
      {
        icon: 'monitor',
        title: 'Role-based oversight',
        description:
          'Give managers, employees, and contractors views that fit the work each group needs to do.',
      },
      {
        icon: 'shield',
        title: 'Safer rollout path',
        description:
          'Use preview and production environments so messaging and product changes can be reviewed before they go live.',
      },
    ],
  },
] as const;

export const roadmapItems = [
  {
    title: 'Expanded dashboard views',
    description:
      'Clearer browser-based visibility for managers and office teams as the web surface matures.',
  },
  {
    title: 'Stronger scheduling coordination',
    description:
      'Better planning, routing, and follow-up across in-house teams and outside vendors.',
  },
  {
    title: 'Richer reporting',
    description:
      'More insight into volume, response timing, bottlenecks, and property-level workload patterns.',
  },
  {
    title: 'Progressive product rollout',
    description:
      'A tighter path from preview review to public release as backend and dashboard surfaces come online.',
  },
] as const;

export const supportChannels = [
  {
    title: 'Request a walkthrough',
    value: site.supportEmail,
    href: `mailto:${site.supportEmail}`,
    detail: 'Use email for demos, rollout questions, and partnership conversations.',
  },
  {
    title: 'Privacy requests',
    value: site.privacyEmail,
    href: `mailto:${site.privacyEmail}`,
    detail: 'Use this address for privacy questions or data handling requests.',
  },
  {
    title: 'Preview environment',
    value: site.previewUrl,
    href: site.previewUrl,
    detail: 'Preview is for internal review and controlled testing before public rollout.',
  },
] as const;

export const footerLinks = [
  { href: '/features', label: 'Features' },
  { href: '/who-its-for', label: 'Who It Helps' },
  { href: '/coming-soon', label: 'What Is Next' },
  { href: '/developer-preview', label: 'Developer Preview' },
  { href: '/support', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
] as const;
