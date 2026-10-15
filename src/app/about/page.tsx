import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/layout/PageHero';
import { ContactCTASection } from '@/components/home/ContactCTASection';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/MotionWrapper';
import { COMPANY_MISSION, COMPANY_VISION, CORE_VALUES } from '@/data/company';
import { SERVICES } from '@/data/services';
import { COMPANY } from '@/lib/constants';
import { ShieldCheck, Target, Eye, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — S.S. Agency Security Services',
  description:
    'Learn about S.S. Agency, a professional security guard and manpower solutions provider based in Saraswati Vihar, Ainthapali, Sambalpur, Odisha.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About S.S. Agency"
        eyebrow="Company Overview"
        subtitle="Dedicated security personnel and practical manpower solutions tailored to safe environments in Sambalpur and Western Odisha."
        breadcrumbs={[{ label: 'About Us' }]}
        backgroundImage="/images/about/company-team-lineup.jpg"
      />

      {/* Agency Introduction & Photography */}
      <section className="py-20 sm:py-24 bg-[#031225] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text description */}
            <div className="lg:col-span-7 space-y-6">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061A32] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-widest uppercase">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Headquartered in Sambalpur, Odisha</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-sans mt-3">
                  Delivering Dependable <span className="text-[#D4AF37]">Manpower Solutions</span>
                </h2>

                <div className="w-16 h-1 bg-[#D4AF37] rounded-full my-4" />

                <p className="text-slate-300 text-base leading-relaxed">
                  S.S. Agency is a service agency headquartered in Saraswati Vihar, Ainthapali,
                  Sambalpur. We specialize in providing verified service personnel across four
                  primary operational domains: Security Guard Services, Cook Services, Cleaning
                  Staff Services, and Four-Wheeler Driver Services.
                </p>

                <p className="text-slate-300 text-base leading-relaxed">
                  Our operational strategy emphasizes close communication with facility managers,
                  residential welfare bodies, commercial businesses, and individuals. By
                  understanding exact site parameters and post orders before deployment, we ensure
                  that duty requirements are fulfilled smoothly without unnecessary disruption.
                </p>

                <div className="p-4 rounded-xl bg-[#061A32] border-l-4 border-[#D4AF37] text-sm text-slate-300 italic">
                  &ldquo;We focus on understanding client requirements and providing professional,
                  practical service support with responsible supervisory oversight.&rdquo;
                </div>
              </FadeIn>
            </div>

            {/* Photo Collage */}
            <div className="lg:col-span-5 relative">
              <FadeIn direction="left">
                <div className="space-y-4">
                  <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-[#061A32]">
                    <Image
                      src="/images/about/supervisor-vehicle-patrol.jpg"
                      alt="S.S. Agency Coordinator with Mahindra Bolero patrol vehicle"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031225]/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 text-xs font-bold text-[#F4CC55] tracking-wide">
                      Supervisory Inspection Vehicle OD 23 R 6102
                    </span>
                  </div>

                  <div className="relative h-56 rounded-2xl overflow-hidden border border-[#0B2B50] shadow-xl bg-[#061A32]">
                    <Image
                      src="/images/about/officer-inspection-vehicle.jpg"
                      alt="S.S. Agency Field Officer with patrol vehicle"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031225]/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 text-xs font-bold text-slate-200 tracking-wide">
                      Field Coordination Unit OD 15 X 5308
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-[#061A32] border-t border-b border-[#0B2B50]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <FadeIn direction="up" delay={0.1}>
              <div className="h-full p-8 rounded-2xl bg-[#031225] border border-[#0B2B50] hover:border-[#D4AF37]/60 shadow-xl transition-all">
                <div className="w-14 h-14 rounded-xl bg-[#0B2B50] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">
                  Our Mission
                </span>
                <h3 className="text-2xl font-black text-white mt-1 mb-4 uppercase">
                  Supporting Safer Environments
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  &ldquo;{COMPANY_MISSION}&rdquo;
                </p>
              </div>
            </FadeIn>

            {/* Vision */}
            <FadeIn direction="up" delay={0.2}>
              <div className="h-full p-8 rounded-2xl bg-[#031225] border border-[#0B2B50] hover:border-[#D4AF37]/60 shadow-xl transition-all">
                <div className="w-14 h-14 rounded-xl bg-[#0B2B50] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6">
                  <Eye className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">
                  Our Vision
                </span>
                <h3 className="text-2xl font-black text-white mt-1 mb-4 uppercase">
                  Trusted Partner for Tomorrow
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  &ldquo;{COMPANY_VISION}&rdquo;
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-24 bg-[#031225]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Our Guiding <span className="text-[#D4AF37]">Values</span>
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto my-4 rounded-full" />
            <p className="text-slate-300 text-sm sm:text-base">
              Principles that govern our personnel selection, supervisory protocols, and client
              relationships.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_VALUES.map((val) => (
              <StaggerItem key={val.title}>
                <div className="p-8 rounded-2xl bg-[#061A32] border border-[#0B2B50] hover:border-[#D4AF37]/50 shadow-xl transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#0B2B50] text-[#D4AF37] flex items-center justify-center mb-5">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{val.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{val.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Overview Quick Grid */}
      <section className="py-20 bg-[#061A32] border-t border-[#0B2B50]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
                Service Spectrum
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
                What We Provide
              </h2>
            </div>
            <Link
              href="/services"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#D4AF37] hover:text-[#F4CC55]"
            >
              <span>Explore all services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((srv) => (
              <Link
                key={srv.id}
                href={`/services/${srv.slug}`}
                className="p-6 rounded-xl bg-[#031225] border border-[#0B2B50] hover:border-[#D4AF37] transition-all group"
              >
                <h3 className="text-base font-bold text-white group-hover:text-[#F4CC55] transition-colors mb-2">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                  {srv.overview}
                </p>
                <div className="flex items-center gap-1 text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}
