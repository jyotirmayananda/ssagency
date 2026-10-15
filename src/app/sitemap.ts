import { MetadataRoute } from 'next';
import { SITE_DOMAIN } from '@/lib/constants';
import { SERVICES } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date('2026-10-15T00:00:00.000Z');

  const routes = [
    '',
    '/about',
    '/services',
    '/fleet',
    '/contact',
    '/request-quote',
    '/privacy-policy',
  ].map((route) => ({
    url: `${SITE_DOMAIN}${route}`,
    lastModified: buildDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.8 : 0.7,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${SITE_DOMAIN}/services/${service.slug}`,
    lastModified: buildDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...serviceRoutes];
}
