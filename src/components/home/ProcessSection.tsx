'use client';

import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/MotionWrapper';
import { WORKING_PROCESS } from '@/data/company';

export function ProcessSection() {
  return (
    <section className="py-24 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[#92400E] text-xs font-bold tracking-widest uppercase mb-3">
            <span>Step-by-Step Procedure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#061A32] tracking-tight uppercase font-sans">
            Our Working <span className="text-[#B45309]">Process</span>
          </h2>

          <div className="w-20 h-1 bg-[#B45309] mx-auto my-4 rounded-full" />

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From initial consultation to on-ground placement, we keep every step clear,
            prompt, and transparent.
          </p>
        </FadeIn>

        {/* Process Timeline */}
        <div className="relative">
          {/* Horizontal Golden Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-slate-200 via-amber-300 to-slate-200 -translate-y-8 z-0 opacity-80" />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {WORKING_PROCESS.map((item) => (
              <StaggerItem key={item.step}>
                <div className="h-full flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#B45309] shadow-sm hover:shadow-xl group transition-all duration-300">
                  {/* Step Number Badge */}
                  <div className="w-14 h-14 rounded-full bg-amber-50 border-2 border-[#B45309] flex items-center justify-center text-[#92400E] font-black text-lg shadow-md group-hover:scale-110 group-hover:bg-[#061A32] group-hover:text-amber-300 transition-all mb-4">
                    {item.step}
                  </div>

                  <h3 className="text-base font-bold text-[#061A32] group-hover:text-[#B45309] transition-colors mb-2 min-h-[44px] flex items-center justify-center">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
