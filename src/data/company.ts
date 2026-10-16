import { ProcessStep, ValueCardItem, IndustryCard } from '@/types';

export const TRUST_VALUE_CARDS: ValueCardItem[] = [
  {
    title: 'Safety-focused approach',
    description:
      'Prioritizing proactive vigilance, disciplined post monitoring, and orderly premises security tailored to your exact site specifications.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Service-oriented support',
    description:
      'Attentive manpower coordination backed by responsive supervisory check-ins, clear reporting, and open client communication channels.',
    icon: 'UserCheck',
  },
  {
    title: 'Flexible manpower solutions',
    description:
      'Adaptable staffing configurations ranging from dedicated security guards and corporate housekeeping to professional cooks and verified 4-wheeler drivers.',
    icon: 'Layers',
  },
];

export const CORE_VALUES = [
  {
    title: 'Responsibility',
    description:
      'We treat each assignment with integrity and dedication, understanding that the safety of your people and premises rests in our care.',
  },
  {
    title: 'Professionalism',
    description:
      'Uniformed, punctual, and respectful personnel who uphold your organization’s reputational standards and workplace discipline.',
  },
  {
    title: 'Client satisfaction',
    description:
      'We listen closely to operational nuances and continuously refine duty arrangements to meet evolving site requirements.',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Client-focused service',
    description:
      'Every client has unique operational parameters. We tailor deployments to your facility layout, work shifts, and access policies.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Multiple manpower solutions',
    description:
      'One reliable local partner in Sambalpur for security guards, corporate cleaning, experienced kitchen cooks, and skilled drivers.',
    icon: 'Briefcase',
  },
  {
    title: 'Local service presence',
    description:
      'Based centrally in Saraswati Vihar, Ainthapali, Sambalpur, enabling rapid local coordination and close on-ground oversight.',
    icon: 'MapPin',
  },
  {
    title: 'Clear communication',
    description:
      'Transparent enquiry channels via direct calls, WhatsApp messaging, and dedicated supervisory contacts without bureaucratic delays.',
    icon: 'MessageSquare',
  },
  {
    title: 'Flexible enquiry options',
    description:
      'Enquire for single-post security guards, multi-shift deployments, short-term assignments, or comprehensive facility manpower.',
    icon: 'Sliders',
  },
  {
    title: 'Professional approach',
    description:
      'Our team respects client protocol, privacy, and operating guidelines to deliver seamless day-to-day operational support.',
    icon: 'Award',
  },
];

export const WORKING_PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'Share your requirement',
    description:
      'Reach out via phone (+91 98536 92650), WhatsApp, or our online quote form detailing your required service, location, and staff count.',
    icon: 'PhoneCall',
    highlights: [
      'Phone, WhatsApp, or web enquiry',
      'Location and staff count specification',
      'Prompt same-day response',
    ],
  },
  {
    step: '02',
    title: 'Discuss service needs',
    description:
      'We conduct a detailed consultation to understand your premise layout, shift timings, specific duties, and expected timeline.',
    icon: 'Users',
    highlights: [
      'Premise layout and gate inspection',
      'Duty shift timings and post mapping',
      'Site-specific security guidelines',
    ],
  },
  {
    step: '03',
    title: 'Review tailored options',
    description:
      'We present tailored manpower recommendations, shift configurations, and clear commercial terms suited to your operational goals.',
    icon: 'FileSpreadsheet',
    highlights: [
      'Police-verified personnel allotment',
      'Transparent commercial structure',
      'Customizable shift rotation schedules',
    ],
  },
  {
    step: '04',
    title: 'Confirm the arrangement',
    description:
      'Once terms are aligned, we finalize service schedules, duty protocols, post-orders, and emergency escalation lines.',
    icon: 'ShieldCheck',
    highlights: [
      'Signed service agreement',
      'Standard operating post orders',
      'Designated supervisor assigned',
    ],
  },
  {
    step: '05',
    title: 'Service coordination',
    description:
      'Deployment begins with active on-ground supervision, periodic review meetings, and continuous support to ensure smooth daily operations.',
    icon: 'Radio',
    highlights: [
      'Uniformed on-ground deployment',
      'Vehicle patrol inspection rounds',
      '24/7 emergency supervisory response',
    ],
  },
];

export const INDUSTRIES_SERVED: IndustryCard[] = [
  {
    title: 'Corporate Offices',
    description: 'Reception security, visitor logs, and daily professional office cleaning.',
    icon: 'Building2',
  },
  {
    title: 'Residential Properties',
    description: 'Gated community gatekeeping, perimeter checks, and private household cooks.',
    icon: 'Home',
  },
  {
    title: 'Commercial Establishments',
    description: 'Retail stores, showrooms, and commercial complexes requiring vigilance.',
    icon: 'Store',
  },
  {
    title: 'Educational Institutions',
    description: 'Campus gate security, student transit safety, and facility housekeeping.',
    icon: 'GraduationCap',
  },
  {
    title: 'Hospitality Facilities',
    description: 'Hotels, guest houses, culinary kitchen personnel, and driver coordination.',
    icon: 'UtensilsCrossed',
  },
  {
    title: 'Events & Functions',
    description: 'Temporary crowd management, entry regulation, and VIP parking assistance.',
    icon: 'CalendarCheck',
  },
  {
    title: 'Warehouses & Logistics',
    description: 'Material gate passes, truck entry checks, and perimeter surveillance support.',
    icon: 'Warehouse',
  },
  {
    title: 'Private Households',
    description: 'Dedicated personal four-wheeler drivers, home cooks, and domestic cleaning.',
    icon: 'Users',
  },
];

export const COMPANY_MISSION =
  'To support safer environments and dependable daily operations through professional security and manpower service solutions.';

export const COMPANY_VISION =
  'To become a trusted name in security and manpower services by prioritizing reliability, responsible service, and long-term client relationships.';
