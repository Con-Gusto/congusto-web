export const site = {
  name: 'Con Gusto',
  tagline: 'Field operations clarity for property teams.',
  description:
    'Con Gusto helps property managers, employees, and contractors move work from scattered messages into one mobile and web-ready operations system.',
  dashboardUrl: 'https://dashboard.congustoapp.com',
  stagingDashboardUrl: 'https://staging-dashboard.congustoapp.com',
} as const;

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/who-its-for', label: 'Who It Is For' },
  { href: '/coming-soon', label: 'Coming Soon' },
  { href: '/support', label: 'Support' },
] as const;

export const utilityLinks = [
  { href: '/developer-preview', label: 'Developer Preview' },
] as const;

export const heroHighlights = [
  'Role-aware mobile and web workflows',
  'Job visibility from request to completion',
  'A single place for teams, updates, photos, and replies',
] as const;

export const featureGroups = [
  {
    heading: 'Operations Backbone',
    summary:
      'Organize incoming work, route it clearly, and keep status visible to the people actually doing the job.',
    items: [
      {
        icon: 'building',
        title: 'Job lifecycle tracking',
        description:
          'Move requests from intake to completion with clear priority, status, assignment, and property context.',
      },
      {
        icon: 'message',
        title: 'Email and query handling',
        description:
          'Turn inbox chaos into actionable work instead of leaving property communication buried in threads.',
      },
      {
        icon: 'route',
        title: 'Shared operational visibility',
        description:
          'Give managers and field teams a common source of truth instead of fragmented updates.',
      },
    ],
  },
  {
    heading: 'Mobile + Dashboard Coverage',
    summary:
      'The platform is built to support both in-field execution and browser-based oversight.',
    items: [
      {
        icon: 'phone',
        title: 'Mobile-first field capture',
        description:
          'Let teams review jobs, update status, and attach photos from the property instead of waiting to report back later.',
      },
      {
        icon: 'monitor',
        title: 'Role-based dashboard views',
        description:
          'Support PMs, employees, and contractors with interfaces that fit how they actually work.',
      },
      {
        icon: 'shield',
        title: 'Safer release flow',
        description:
          'Use staging and production environments so future changes can be tested before they reach live operations.',
      },
    ],
  },
] as const;

export const audienceCards = [
  {
    icon: 'briefcase',
    title: 'Property Managers',
    description:
      'See work across buildings, understand what is blocked, and keep communication moving without living inside multiple inboxes and spreadsheets.',
    bullets: [
      'Track requests, priorities, and completions',
      'Review job context without chasing updates',
      'Coordinate teams and vendors from one view',
    ],
  },
  {
    icon: 'wrench',
    title: 'Employees',
    description:
      'Give field teams a cleaner way to see assigned work, capture updates, and close the loop from the property instead of after the fact.',
    bullets: [
      'Work from a mobile-friendly job list',
      'Update progress in real time',
      'Attach photos and notes from the field',
    ],
  },
  {
    icon: 'users',
    title: 'Contractors',
    description:
      'Reduce ambiguity around assignments, expected outcomes, and the status signals that property teams need to keep work moving.',
    bullets: [
      'See the job context that matters',
      'Stay aligned on status and scope',
      'Contribute updates without process friction',
    ],
  },
] as const;

export const workflowSteps = [
  {
    icon: 'inbox',
    title: 'Capture',
    description:
      'Work begins with a request, inquiry, or operational need entering the system with property context attached.',
  },
  {
    icon: 'layers',
    title: 'Coordinate',
    description:
      'Managers prioritize, assign, and route work while keeping the team aligned on what is happening next.',
  },
  {
    icon: 'camera',
    title: 'Execute',
    description:
      'Employees and contractors update jobs from the field with status changes, notes, and photos.',
  },
  {
    icon: 'check-circle',
    title: 'Close',
    description:
      'The full team can see what was completed, what is waiting, and where follow-up is still needed.',
  },
] as const;

export const roadmapItems = [
  {
    title: 'Stronger web dashboard parity',
    description:
      'A cleaner dedicated dashboard experience for browser-based users, with safer staging and production releases.',
  },
  {
    title: 'Shared API contract discipline',
    description:
      'Better alignment between backend, mobile, and future dashboard work so new features are easier to ship safely.',
  },
  {
    title: 'Operational scheduling and planning',
    description:
      'Improved planning views and coordination tools as the scheduling layer matures.',
  },
  {
    title: 'Richer reporting and controls',
    description:
      'More visibility into workload, response patterns, and operational bottlenecks over time.',
  },
] as const;

export const supportChannels = [
  {
    title: 'General support',
    value: 'support@congustoapp.com',
    href: 'mailto:support@congustoapp.com',
  },
  {
    title: 'Privacy requests',
    value: 'privacy@congustoapp.com',
    href: 'mailto:privacy@congustoapp.com',
  },
  {
    title: 'Dashboard access',
    value: site.dashboardUrl,
    href: site.dashboardUrl,
  },
] as const;

export const footerLinks = [
  { href: '/features', label: 'Features' },
  { href: '/who-its-for', label: 'Who It Is For' },
  { href: '/coming-soon', label: 'Coming Soon' },
  { href: '/developer-preview', label: 'Developer Preview' },
  { href: '/support', label: 'Support' },
  { href: '/privacy', label: 'Privacy' },
] as const;
