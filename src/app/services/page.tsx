import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/layout/PageHero';
import { ContactCTASection } from '@/components/home/ContactCTASection';
import { SERVICES } from '@/data/services';
import { ShieldCheck, Truck, ChefHat, Sparkles, CarFront, ArrowUpRight, Check } from 'lucide-react';
import { Highlight } from '@/components/chaiui/highlight';

export const metadata: Metadata = {
  title: 'All services: Security and Manpower Solutions',
  description:
    'Explore our professional security guard services, ATM cash van solutions, cooking staff, cleaning and housekeeping manpower, and four-wheeler drivers in Sambalpur, Odisha.',
};

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="size-5 text-brand" />,
  Truck: <Truck className="size-5 text-brand" />,
  ChefHat: <ChefHat className="size-5 text-brand" />,
  Sparkles: <Sparkles className="size-5 text-brand" />,
  CarFront: <CarFront className="size-5 text-brand" />,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our services"
        eyebrow="Specialized manpower"
        subtitle="Professional security guards, cooking staff, cleaning personnel, and verified four-wheeler drivers in Sambalpur with verified standards."
        highlightPhrase="verified standards"
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section className="max-w-6xl mx-auto px-6 py-12 sm:px-12 sm:py-16 space-y-8">
        {SERVICES.map((service, idx) => (
          <article
            key={service.id}
            id={service.slug}
            className="card-chai p-6 sm:p-7 transition-opacity sm:opacity-90 sm:hover:opacity-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Photo Frame */}
              <div className="lg:col-span-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-card-edge bg-card">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 hover:scale-[1.03]"
                  />
                </div>
              </div>

              {/* Middle Details */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-lg border border-card-edge flex items-center justify-center bg-card shrink-0">
                    {iconMap[service.iconName]}
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider block">
                      0{idx + 1} &bull; {service.category}
                    </span>
                    <h2 className="font-montserrat text-lg sm:text-xl font-semibold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {service.overview}
                </p>

                {/* Features */}
                <div className="pt-2">
                  <span className="font-mono text-xs text-foreground uppercase tracking-wider block mb-2.5">
                    Core service highlights
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.keyFeatures.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="size-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right CTA column */}
              <div className="lg:col-span-3 p-4 sm:p-5 rounded-xl border border-card-edge bg-card-fill space-y-3">
                <div>
                  <h3 className="font-montserrat text-sm font-semibold text-foreground mb-1">
                    Need this service?
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Discuss shift timings, headcount, and site location in Sambalpur with our coordination team.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full inline-flex h-9 items-center justify-center gap-2 rounded-md border border-border bg-transparent px-4 text-xs font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    <span>Read full scope and FAQs</span>
                    <ArrowUpRight className="-ml-1 size-3.5" />
                  </Link>

                  <Link
                    href={`/request-quote?service=${encodeURIComponent(service.title)}`}
                    className="w-full inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <span>Request a quote</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <ContactCTASection />
    </>
  );
}
