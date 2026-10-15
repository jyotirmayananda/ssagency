'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  ChefHat,
  Sparkles,
  CarFront,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/MotionWrapper';
import { SERVICES } from '@/data/services';

const serviceIconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />,
  ChefHat: <ChefHat className="w-8 h-8 text-[#D4AF37]" />,
  Sparkles: <Sparkles className="w-8 h-8 text-[#D4AF37]" />,
  CarFront: <CarFront className="w-8 h-8 text-[#D4AF37]" />,
};

export function ServicesSection() {
  return (
    <section className="py-24 sm:py-28 bg-[#031225] relative overflow-hidden" id="services">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#0B2B50]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#061A32] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-3">
            <span>Specialized Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase font-sans">
            Our Professional <span className="text-[#D4AF37]">Services</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-4" />

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Reliable support for your security and daily operational requirements across
            Sambalpur, Odisha.
          </p>
        </FadeIn>

        {/* 4 Premium Service Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {SERVICES.map((service, idx) => (
            <StaggerItem key={service.id}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex flex-col justify-between h-full p-7 rounded-2xl bg-[#061A32] border border-[#0B2B50] hover:border-[#D4AF37] shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                {/* Gold Top Accent Line revealed on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F4CC55] to-[#B45309] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  {/* Top Bar: Icon + Service Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#0B2B50] border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#031225] transition-all duration-300">
                      {serviceIconMap[service.iconName]}
                    </div>
                    <span className="text-2xl font-black font-sans text-slate-600 group-hover:text-[#D4AF37] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-[#F4CC55] transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.overview.slice(0, 140)}...
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 border-t border-[#0B2B50]/60 pt-4 mb-6">
                    {service.keyFeatures.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-2 flex items-center justify-between border-t border-[#0B2B50]/60 text-xs font-bold tracking-wider uppercase text-[#D4AF37] group-hover:text-white transition-colors">
                  <span>Learn More</span>
                  <div className="p-1.5 rounded-full bg-[#0B2B50] group-hover:bg-[#D4AF37] group-hover:text-[#031225] group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom Banner note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400">
            Need customized service combinations or multiple personnel?{' '}
            <Link
              href="/request-quote"
              className="text-[#F4CC55] font-semibold underline underline-offset-4 hover:text-[#D4AF37]"
            >
              Request a comprehensive proposal
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
