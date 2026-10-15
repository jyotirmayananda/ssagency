'use client';

import React from 'react';
import { ShieldCheck, UserCheck, Layers } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/MotionWrapper';
import { TRUST_VALUE_CARDS } from '@/data/company';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />,
  UserCheck: <UserCheck className="w-8 h-8 text-[#D4AF37]" />,
  Layers: <Layers className="w-8 h-8 text-[#D4AF37]" />,
};

export function TrustSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#061A32] border-t border-b border-[#0B2B50] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2B50] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-3">
            <span>Our Foundation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase font-sans">
            Dependable People.{' '}
            <span className="text-[#D4AF37]">Professional Service.</span>
          </h2>

          <div className="w-16 h-1 bg-[#D4AF37] mx-auto my-4 rounded-full" />

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            S.S. Agency provides security and manpower solutions designed to support safe
            environments and smooth daily operations. We work with clients to understand their
            staffing requirements and identify suitable service arrangements.
          </p>
        </FadeIn>

        {/* 3 Value Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRUST_VALUE_CARDS.map((card, idx) => (
            <StaggerItem key={card.title}>
              <div className="h-full p-8 rounded-2xl bg-[#031225] border border-[#0B2B50] hover:border-[#D4AF37]/60 shadow-xl hover:shadow-2xl hover:shadow-amber-950/20 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-xl bg-[#0B2B50] border border-[#D4AF37]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#D4AF37] transition-all duration-300">
                    {iconMap[card.icon]}
                  </div>

                  <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">
                    0{idx + 1} // Principle
                  </span>

                  <h3 className="text-xl font-bold text-white tracking-wide mt-1 mb-3 group-hover:text-[#F4CC55] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="w-full h-0.5 bg-[#0B2B50] group-hover:bg-[#D4AF37] transition-colors mt-6" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
