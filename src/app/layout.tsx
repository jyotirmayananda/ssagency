import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { BackToTop } from '@/components/ui/BackToTop';
import { Toaster } from 'sonner';
import { COMPANY, SITE_DOMAIN } from '@/lib/constants';
import { ThemeProvider, ThemeScript } from '@/components/chaiui/theme-provider';
import { Backdrop } from '@/components/chaiui/backdrop';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_DOMAIN),
  title: {
    default: `${COMPANY.name}: Security Services and Manpower Solutions Sambalpur`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    'S.S. Agency provides trusted security guard services, cooking staff, cleaning and housekeeping manpower, and four-wheeler drivers in Sambalpur, Odisha.',
  keywords: [
    'Security Agency in Sambalpur',
    'Security Guard Services in Sambalpur',
    'Security Services Odisha',
    'Manpower Agency Sambalpur',
    'Cleaning Staff Services Sambalpur',
    'Cook Services Sambalpur',
    'Driver Services Sambalpur',
    'S.S. Agency Sambalpur',
  ],
  authors: [{ name: 'S.S. Agency' }],
  creator: 'S.S. Agency',
  publisher: 'S.S. Agency',
  formatDetection: {
    email: true,
    telephone: true,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: `${COMPANY.name}: Security Services and Manpower Solutions`,
    description:
      'Dependable security personnel, cooking staff, cleaning staff, and four-wheeler driver services in Sambalpur, Odisha.',
    url: SITE_DOMAIN,
    siteName: COMPANY.name,
    images: [
      {
        url: '/images/hero/hero-patrol-fleet.jpg',
        width: 1200,
        height: 630,
        alt: 'S.S. Agency Security Patrol Vehicles Fleet Formation',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name}: Security Services`,
    description:
      'Professional security guard services and manpower solutions in Sambalpur, Odisha.',
    images: ['/images/hero/hero-patrol-fleet.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SecurityService',
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    description:
      'Professional security guard services, housekeeping cleaning staff, cook services, and four-wheeler driver solutions based in Sambalpur, Odisha, India.',
    url: SITE_DOMAIN,
    telephone: COMPANY.phone,
    email: COMPANY.primaryEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.locality}`,
      addressLocality: COMPANY.address.city,
      postalCode: COMPANY.address.pin,
      addressRegion: COMPANY.address.state,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '21.4880',
      longitude: '83.9856',
    },
    areaServed: {
      '@type': 'State',
      name: 'Odisha',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript defaultTheme="light" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-background text-foreground relative isolate overflow-x-clip">
        <ThemeProvider defaultTheme="light">
          <Backdrop />
          <Toaster position="top-right" />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
