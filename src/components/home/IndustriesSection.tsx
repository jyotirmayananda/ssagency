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
  Building2: <Building2 className="w-6 h-6 text-[#B45309]" />,
  Home: <Home className="w-6 h-6 text-[#B45309]" />,
  Store: <Store className="w-6 h-6 text-[#B45309]" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-[#B45309]" />,
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-[#B45309]" />,
  CalendarCheck: <CalendarCheck className="w-6 h-6 text-[#B45309]" />,
  Warehouse: <Warehouse className="w-6 h-6 text-[#B45309]" />,
  Users: <Users className="w-6 h-6 text-[#B45309]" />,
};

export function IndustriesSection() {
  return (
    <section className="py-24 sm:py-28 bg-white border-t border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[#92400E] text-xs font-bold tracking-widest uppercase mb-3">
            <span>Client Deployment Scope</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#061A32] tracking-tight uppercase font-sans">
            Supporting Different <span className="text-[#B45309]">Service Needs</span>
          </h2>

          <div className="w-20 h-1 bg-[#B45309] mx-auto my-4 rounded-full" />

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We accommodate diverse security, housekeeping, culinary, and driving requirements
            across various commercial and residential settings in Sambalpur.
          </p>
        </FadeIn>

        {/* 8 Industry Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_SERVED.map((ind) => (
            <StaggerItem key={ind.title}>
              <div className="h-full p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-[#B45309] shadow-sm hover:shadow-xl group hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center mb-4 group-hover:bg-[#061A32] group-hover:text-amber-400 transition-all">
                  {indIconMap[ind.icon]}
                </div>
                <h3 className="text-base font-bold text-[#061A32] group-hover:text-[#B45309] transition-colors mb-2">
                  {ind.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
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
