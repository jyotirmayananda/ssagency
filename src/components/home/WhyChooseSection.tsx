'use client';

import React from 'react';
import {
  HeartHandshake,
  Briefcase,
  MapPin,
  MessageSquare,
  Sliders,
  Award,
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/MotionWrapper';
import { WHY_CHOOSE_US } from '@/data/company';

const whyIconMap: Record<string, React.ReactNode> = {
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#B45309]" />,
  Briefcase: <Briefcase className="w-6 h-6 text-[#B45309]" />,
  MapPin: <MapPin className="w-6 h-6 text-[#B45309]" />,
  MessageSquare: <MessageSquare className="w-6 h-6 text-[#B45309]" />,
  Sliders: <Sliders className="w-6 h-6 text-[#B45309]" />,
  Award: <Award className="w-6 h-6 text-[#B45309]" />,
};

export function WhyChooseSection() {
  return (
    <section className="py-24 sm:py-28 bg-white border-t border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[#92400E] text-xs font-bold tracking-widest uppercase mb-3">
            <span>Our Distinction</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#061A32] tracking-tight uppercase font-sans">
            Why Choose <span className="text-[#B45309]">S.S. Agency?</span>
          </h2>

          <div className="w-20 h-1 bg-[#B45309] mx-auto my-4 rounded-full" />

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Straightforward service coordination, verified vehicle support, and dependable
            local presence in Sambalpur.
          </p>
        </FadeIn>

        {/* 6 Benefit Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <StaggerItem key={item.title}>
              <div className="h-full p-7 rounded-2xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-[#B45309] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center group-hover:bg-[#061A32] group-hover:text-amber-400 transition-all">
                      {whyIconMap[item.icon]}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#061A32] group-hover:text-[#B45309] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-200/60 flex items-center text-[11px] font-bold tracking-wider uppercase text-[#B45309]">
                  <span>Dedicated Sambalpur Service</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
