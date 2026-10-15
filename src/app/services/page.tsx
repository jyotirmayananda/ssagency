import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/layout/PageHero';
import { ContactCTASection } from '@/components/home/ContactCTASection';
import { SERVICES } from '@/data/services';
import { ShieldCheck, ChefHat, Sparkles, CarFront, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Services — Security & Manpower Solutions',
  description:
    'Explore our professional security guard services, cooking staff, cleaning and housekeeping manpower, and four-wheeler drivers in Sambalpur, Odisha.',
};

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />,
  ChefHat: <ChefHat className="w-8 h-8 text-[#D4AF37]" />,
  Sparkles: <Sparkles className="w-8 h-8 text-[#D4AF37]" />,
  CarFront: <CarFront className="w-8 h-8 text-[#D4AF37]" />,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        eyebrow="Specialized Manpower"
        subtitle="Professional security guards, cooking staff, cleaning and housekeeping personnel, and verified four-wheeler drivers in Sambalpur."
        breadcrumbs={[{ label: 'Services' }]}
        backgroundImage="/images/fleet/fleet-formation-patrol.jpg"
      />

      <section className="py-20 sm:py-24 bg-[#031225]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              id={service.slug}
              className="p-8 sm:p-10 rounded-2xl bg-[#061A32] border border-[#0B2B50] hover:border-[#D4AF37]/50 shadow-2xl transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left info */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#0B2B50] border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                      {iconMap[service.iconName]}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
                        0{idx + 1} // {service.category}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
                    {service.overview}
                  </p>

                  {/* Key Features */}
                  <div className="pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3">
                      Core Service Highlights:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.keyFeatures.map((feat) => (
                        <div key={feat} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right CTA box */}
                <div className="lg:col-span-4 p-6 rounded-xl bg-[#031225] border border-[#0B2B50] space-y-4 flex flex-col justify-between h-full">
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                      Need This Service?
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      Discuss your shift timings, headcount, and site location in Sambalpur with our
                      coordination team.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <Link
                      href={`/services/${service.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#0B2B50] hover:bg-[#0E3663] border border-[#D4AF37]/40 transition-colors"
                    >
                      <span>Read Full Scope & FAQs</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </Link>

                    <Link
                      href={`/request-quote?service=${encodeURIComponent(service.title)}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#031225] bg-gradient-to-r from-[#F4CC55] to-[#D4AF37] shadow-md hover:scale-[1.01] transition-transform"
                    >
                      <span>Request a Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}
