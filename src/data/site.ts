export const site = {
  name: 'Con Gusto',
  tagline: 'The shared workflow for property operations.',
  description:
    'Con Gusto is a property operations platform that keeps requests, assignments, field updates, and closeout records visible in one shared workflow for property managers, contractors, and in-house teams.',
  siteUrl: 'https://congustoapp.com',
  previewUrl: 'https://preview.congustoapp.com',
  dashboardUrl: 'https://dashboard.congustoapp.com',
  stagingDashboardUrl: 'https://staging-dashboard.congustoapp.com',
  supportEmail: 'support@congustoapp.com',
  privacyEmail: 'privacy@congustoapp.com',
  socialImage: '/social-share.svg',
} as const;

export const navigation = [
  { href: '/features', label: 'What It Does' },
  { href: '/who-its-for', label: 'Who It Is For' },
  { href: '/coming-soon', label: 'Rollout' },
  { href: '/support', label: 'Contact' },
] as const;

export const coordinationTags = [
  'Property managers',
  'In-house teams',
  'Vendor partners',
  'Owners and stakeholders',
] as const;

export const definitionCards = [
  {
    icon: 'layers',
    eyebrow: 'What it is',
    title: 'A shared property operations workflow',
    description:
      'Con Gusto keeps requests, assignments, updates, and closeout details on the same operating record.',
  },
  {
    icon: 'inbox',
    eyebrow: 'What it does',
    title: 'Turns intake into accountable work',
    description:
      'Every request starts with property context, priority, ownership, and a status trail that can survive handoffs.',
  },
  {
    icon: 'camera',
    eyebrow: 'Why it matters',
    title: 'Connects the office and the field',
    description:
      'Managers, contractors, and in-house teams can see what happened on site without recreating the story from scattered messages.',
  },
  {
    icon: 'shield',
    eyebrow: 'Rollout',
    title: 'Keeps the public story accurate',
    description:
      'The marketing site explains what is live today while preview surfaces stay clearly labeled and controlled.',
  },
] as const;

export const rolloutStates = [
  {
    title: 'Public today',
    description:
      'congustoapp.com is the public marketing site for understanding the product and requesting a walkthrough.',
  },
  {
    title: 'Preview remains guided',
    description:
      'Preview routes are for controlled review and testing, not for broad public use or implied general availability.',
  },
  {
    title: 'The rollout is phased',
    description:
      'Dashboard and backend surfaces are still maturing, so public messaging stays aligned with actual availability.',
  },
] as const;

export const audienceCards = [
  {
    icon: 'briefcase',
    title: 'Property Managers',
    summary: 'See what is moving, what is blocked, and what needs attention next.',
    description:
      'Manage requests, priorities, vendors, and field updates without stitching the story together from inboxes, calls, and texts.',
    bullets: [
      'Track work across buildings, units, and teams',
      'Review progress without chasing screenshots or callbacks',
      'Keep residents and stakeholders informed with better context',
    ],
  },
  {
    icon: 'wrench',
    title: 'Contractors',
    summary: 'Arrive with clear scope, property context, and the latest status.',
    description:
      'Reduce confusion around assignments, approvals, and completion details so outside vendors can move faster with fewer missed details.',
    bullets: [
      'See the request details that matter before arrival',
      'Share status, notes, and photos from the field',
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
      'Attach notes and photos before details are lost',
    ],
  },
] as const;

/** Home hero photography (full-bleed). */
export const homeHeroImage = '/officeworker-3.jpg';

/** Large backdrop panels in the field ↔ office bridge (separate from hero art). */
export const bridgeFieldBackdrop = '/worker-5.jpg';
export const bridgeOfficeBackdrop = '/officeworker-4.jpg';

/** Domino-style progression: office, automation, field, back to closeout. */
export const liveTrackerSteps = [
  {
    title: 'Request logged',
    detail: 'Intake captures property, unit, and priority on one shared record.',
    lane: 'office' as const,
  },
  {
    title: 'Routed automatically',
    detail: 'Assignments and handoffs sync so nobody rebuilds the thread.',
    lane: 'sync' as const,
  },
  {
    title: 'Field team notified',
    detail: 'Contractors and in-house crews see scope before they arrive.',
    lane: 'field' as const,
  },
  {
    title: 'On-site updates',
    detail: 'Photos, notes, and status post in real time from the job site.',
    lane: 'field' as const,
  },
  {
    title: 'Office verification',
    detail: 'Managers review proof and next steps without chasing callbacks.',
    lane: 'office' as const,
  },
  {
    title: 'Closed on the record',
    detail: 'Completion stays visible for audits, residents, and the next job.',
    lane: 'sync' as const,
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
      'The point is not another inbox. The point is a durable operating record that can move across people and roles.',
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
    detail: 'Use email for demos, rollout questions, onboarding conversations, and partnerships.',
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
    detail: 'Preview is for internal review and controlled testing before broader public rollout.',
  },
] as const;

export const footerLinks = [
  { href: '/features', label: 'What It Does' },
  { href: '/who-its-for', label: 'Who It Is For' },
  { href: '/coming-soon', label: 'Rollout' },
  { href: '/developer-preview', label: 'Developer Preview' },
  { href: '/support', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
] as const;
