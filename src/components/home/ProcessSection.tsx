'use client';

import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/MotionWrapper';
import { WORKING_PROCESS } from '@/data/company';

export function ProcessSection() {
  return (
    <section className="py-24 sm:py-28 bg-[#031225] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#061A32] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-3">
            <span>Step-by-Step Procedure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase font-sans">
            Our Working <span className="text-[#D4AF37]">Process</span>
          </h2>

          <div className="w-20 h-1 bg-[#D4AF37] mx-auto my-4 rounded-full" />

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From initial consultation to on-ground placement, we keep every step clear,
            prompt, and transparent.
          </p>
        </FadeIn>

        {/* Process Timeline */}
        <div className="relative">
          {/* Horizontal Golden Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-[#0B2B50] via-[#D4AF37] to-[#0B2B50] -translate-y-8 z-0 opacity-40" />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {WORKING_PROCESS.map((item, idx) => (
              <StaggerItem key={item.step}>
                <div className="h-full flex flex-col items-center text-center p-6 rounded-2xl bg-[#061A32] border border-[#0B2B50] hover:border-[#D4AF37]/60 shadow-xl group transition-all duration-300">
                  {/* Step Number Badge */}
                  <div className="w-14 h-14 rounded-full bg-[#0B2B50] border-2 border-[#D4AF37] flex items-center justify-center text-[#F4CC55] font-black text-lg shadow-lg group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#031225] transition-all mb-4">
                    {item.step}
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#F4CC55] transition-colors mb-2 min-h-[44px] flex items-center justify-center">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
