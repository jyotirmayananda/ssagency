'use client';

import React from 'react';
import { ShieldCheck, UserCheck, Layers } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/MotionWrapper';
import { TRUST_VALUE_CARDS } from '@/data/company';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#B45309]" />,
  UserCheck: <UserCheck className="w-8 h-8 text-[#B45309]" />,
  Layers: <Layers className="w-8 h-8 text-[#B45309]" />,
};

export function TrustSection() {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[#92400E] text-xs font-bold tracking-widest uppercase mb-3">
            <span>Our Foundation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#061A32] tracking-tight uppercase font-sans">
            Dependable People.{' '}
            <span className="text-[#B45309]">Professional Service.</span>
          </h2>

          <div className="w-16 h-1 bg-[#B45309] mx-auto my-4 rounded-full" />

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            S.S. Agency provides security and manpower solutions designed to support safe
            environments and smooth daily operations. We work with clients to understand their
            staffing requirements and identify suitable service arrangements.
          </p>
        </FadeIn>

        {/* 3 Value Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRUST_VALUE_CARDS.map((card, idx) => (
            <StaggerItem key={card.title}>
              <div className="h-full p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#B45309] hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#061A32] group-hover:text-amber-400 transition-all duration-300">
                    {iconMap[card.icon]}
                  </div>

                  <span className="text-xs font-bold tracking-widest text-[#B45309] uppercase">
                    0{idx + 1} // Principle
                  </span>

                  <h3 className="text-xl font-bold text-[#061A32] tracking-wide mt-1 mb-3 group-hover:text-[#B45309] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="w-full h-0.5 bg-slate-200 group-hover:bg-[#B45309] transition-colors mt-6" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
