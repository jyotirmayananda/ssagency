import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/layout/PageHero';
import { ContactCTASection } from '@/components/home/ContactCTASection';
import { COMPANY_MISSION, COMPANY_VISION, CORE_VALUES } from '@/data/company';
import { SERVICES } from '@/data/services';
import { Target, Eye, ArrowUpRight, Check } from 'lucide-react';
import { Highlight } from '@/components/chaiui/highlight';

export const metadata: Metadata = {
  title: 'About us: S.S. Agency Security Services',
  description:
    'Learn about S.S. Agency, a professional security guard and manpower solutions provider based in Saraswati Vihar, Ainthapali, Sambalpur, Odisha.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About S.S. Agency"
        eyebrow="Company overview"
        subtitle="Dedicated security personnel and practical manpower solutions tailored to safe environments in Sambalpur and Western Odisha."
        highlightPhrase="practical manpower solutions"
        breadcrumbs={[{ label: 'About us' }]}
      />

      {/* Agency Introduction & Photography */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:px-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text description */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl font-medium sm:text-[30px] text-foreground tracking-tight">
              Delivering dependable manpower solutions
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              S.S. Agency is a service agency headquartered in Saraswati Vihar, Ainthapali, Sambalpur. We specialize in providing verified service personnel across four primary operational domains, ensuring{' '}
              <Highlight>responsible supervisory oversight</Highlight>.
            </p>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Our operational strategy emphasizes close communication with facility managers, residential welfare bodies, commercial businesses, and individuals. By understanding exact site parameters before deployment, we ensure duty requirements are fulfilled smoothly without disruption.
            </p>

            <div className="p-4 rounded-xl border border-card-edge bg-card-fill text-xs sm:text-sm text-foreground">
              We focus on understanding client requirements and providing professional, practical service support with responsible supervisory oversight.
            </div>
          </div>

          {/* Photo Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="card-chai group overflow-hidden">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="/images/about/supervisor-vehicle-patrol.jpg"
                  alt="S.S. Agency coordinator with Mahindra Bolero patrol vehicle"
                  fill
                  className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-3 border-t border-card-edge flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-medium text-foreground">Supervisory inspection vehicle</span>
                <span className="font-mono text-[10px]">OD 23 R 6102</span>
              </div>
            </div>

            <div className="card-chai group overflow-hidden">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="/images/about/officer-inspection-vehicle.jpg"
                  alt="S.S. Agency field officer with patrol vehicle"
                  fill
                  className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-3 border-t border-card-edge flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-medium text-foreground">Field coordination unit</span>
                <span className="font-mono text-[10px]">OD 15 X 5308</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-6xl mx-auto px-6 py-10 sm:px-12 sm:py-14 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <article className="card-chai p-6 flex flex-col justify-between">
            <div>
              <div className="size-10 rounded-lg border border-card-edge flex items-center justify-center bg-card mb-4 text-brand">
                <Target className="size-5" />
              </div>
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-1">
                Our mission
              </span>
              <h3 className="font-montserrat text-lg font-semibold text-foreground mb-3">
                Supporting safer environments
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {COMPANY_MISSION}
              </p>
            </div>
          </article>

          {/* Vision */}
          <article className="card-chai p-6 flex flex-col justify-between">
            <div>
              <div className="size-10 rounded-lg border border-card-edge flex items-center justify-center bg-card mb-4 text-brand">
                <Eye className="size-5" />
              </div>
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-1">
                Our vision
              </span>
              <h3 className="font-montserrat text-lg font-semibold text-foreground mb-3">
                Trusted partner for tomorrow
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {COMPANY_VISION}
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto px-6 py-10 sm:px-12 sm:py-14 border-t border-border">
        <div className="space-y-2 mb-8">
          <h2 className="text-2xl font-medium sm:text-[30px] text-foreground tracking-tight">
            Our guiding values
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Principles governing personnel selection, supervisory protocols, and client relationships with{' '}
            <Highlight>accountable standards</Highlight>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CORE_VALUES.map((val) => (
            <article key={val.title} className="card-chai p-5">
              <div className="size-6 rounded-md border border-card-edge flex items-center justify-center shrink-0 mb-3 bg-card text-emerald-600 dark:text-emerald-400">
                <Check className="size-3.5" />
              </div>
              <h3 className="font-montserrat text-base font-semibold text-foreground mb-1.5">
                {val.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {val.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Services Spectrum */}
      <section className="max-w-6xl mx-auto px-6 py-10 sm:px-12 sm:py-14 border-t border-border">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="space-y-1">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
              Service spectrum
            </span>
            <h2 className="text-2xl font-medium text-foreground tracking-tight">
              What we provide
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex h-9 items-center gap-2 rounded-md bg-[#d4d4d866] px-4 font-montserrat text-xs sm:text-sm text-[#52525b] hover:bg-[#d4d4d8] dark:bg-[#71717a33] dark:text-[#d4d4d8] dark:hover:bg-black/70 transition-colors w-fit"
          >
            <span>Explore all services</span>
            <ArrowUpRight className="-ml-1 size-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((srv) => (
            <Link
              key={srv.id}
              href={`/services/${srv.slug}`}
              className="card-chai p-5 flex flex-col justify-between group transition-all sm:opacity-90 sm:hover:opacity-100"
            >
              <div>
                <h3 className="font-montserrat text-sm font-semibold text-foreground group-hover:text-brand transition-colors mb-1.5">
                  {srv.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mb-4">
                  {srv.overview}
                </p>
              </div>

              <span className="font-mono text-[11px] text-brand flex items-center gap-1">
                <span>View details</span>
                <ArrowUpRight className="size-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}
