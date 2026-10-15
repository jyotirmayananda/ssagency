'use client';

import React from 'react';
import {
  Building2,
  Home,
  Store,
  GraduationCap,
  UtensilsCrossed,
  CalendarCheck,
  Warehouse,
  Users,
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/MotionWrapper';
import { INDUSTRIES_SERVED } from '@/data/company';

const indIconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-6 h-6 text-[#D4AF37]" />,
  Home: <Home className="w-6 h-6 text-[#D4AF37]" />,
  Store: <Store className="w-6 h-6 text-[#D4AF37]" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-[#D4AF37]" />,
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-[#D4AF37]" />,
  CalendarCheck: <CalendarCheck className="w-6 h-6 text-[#D4AF37]" />,
  Warehouse: <Warehouse className="w-6 h-6 text-[#D4AF37]" />,
  Users: <Users className="w-6 h-6 text-[#D4AF37]" />,
};

export function IndustriesSection() {
  return (
    <section className="py-24 sm:py-28 bg-[#061A32] border-t border-b border-[#0B2B50] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B2B50] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-3">
            <span>Client Deployment Scope</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase font-sans">
            Supporting Different <span className="text-[#D4AF37]">Service Needs</span>
          </h2>

          <div className="w-20 h-1 bg-[#D4AF37] mx-auto my-4 rounded-full" />

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We accommodate diverse security, housekeeping, culinary, and driving requirements
            across various commercial and residential settings in Sambalpur.
          </p>
        </FadeIn>

        {/* 8 Industry Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_SERVED.map((ind) => (
            <StaggerItem key={ind.title}>
              <div className="h-full p-6 rounded-2xl bg-[#031225] border border-[#0B2B50] hover:border-[#D4AF37]/60 shadow-lg group hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#0B2B50] border border-[#D4AF37]/20 flex items-center justify-center mb-4 group-hover:bg-[#D4AF37] group-hover:text-[#031225] transition-all">
                  {indIconMap[ind.icon]}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[#F4CC55] transition-colors mb-2">
                  {ind.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {ind.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
