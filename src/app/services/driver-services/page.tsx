import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/data/services';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const service = SERVICES.find((s) => s.slug === 'driver-services')!;

export const metadata: Metadata = {
  title: `${service.title} in Sambalpur, Odisha`,
  description: service.metaDescription,
};

export default function DriverServicesPage() {
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
