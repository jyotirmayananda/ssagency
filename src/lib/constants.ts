import { CompanyInfo } from '@/types';

export const SITE_DOMAIN = process.env.NEXT_PUBLIC_SITE_URL || 'https://ssagencysecurity.com';

export const COMPANY: CompanyInfo = {
  name: 'S.S. AGENCY',
  legalName: 'S.S. Agency: Security Services',
  category: 'Security Services and Manpower Solutions',
  tagline: 'Your Safety, Our Priority',
  secondaryTagline: 'Your Trusted Security Partner',
  address: {
    line1: 'Ambira Nagar, Khata No. 207/697, Plot No. 872/1355',
    locality: 'Saraswati Vihar, Ainthapali',
    city: 'Sambalpur',
    pin: '768006',
    state: 'Odisha',
    country: 'India',
    full: 'Ambira Nagar, Khata No. 207/697, Plot No. 872/1355, Saraswati Vihar, Ainthapali, Sambalpur - 768006, Odisha, India.',
  },
  phone: '+917853979637',
  phoneDisplay: '+91 7853979637',
  emails: [
    'ssagency.sbpodi@gmail.com',
    'sudam.pandasbp@gmail.com',
  ],
  primaryEmail: 'ssagency.sbpodi@gmail.com',
  alternateEmail: 'sudam.pandasbp@gmail.com',
  whatsappNumber: '917853979637',
  whatsappUrl: 'https://wa.me/917853979637',
  serviceCategories: [
    'Security guard services',
    'ATM cash van & CIT services',
    'Cook services',
    'Cleaning staff services',
    'Four-wheeler driver services',
  ],
  operatingArea: 'Sambalpur, Odisha, India',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'All services', href: '/services' },
      { label: 'Security guard services', href: '/services/security-guards' },
      { label: 'ATM cash van & CIT', href: '/services/atm-cash-van' },
      { label: 'Cook services', href: '/services/cook-services' },
      { label: 'Cleaning staff services', href: '/services/cleaning-staff' },
      { label: 'Four-wheeler driver services', href: '/services/driver-services' },
    ],
  },
  { label: 'Our fleet', href: '/fleet' },
  { label: 'Contact', href: '/contact' },
];

export const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps?q=Saraswati+Vihar,+Ainthapali,+Sambalpur,+Odisha+768006&output=embed';

export const GOOGLE_MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=Saraswati+Vihar,+Ainthapali,+Sambalpur,+Odisha+768006';
