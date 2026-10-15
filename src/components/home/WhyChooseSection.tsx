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
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#D4AF37]" />,
  Briefcase: <Briefcase className="w-6 h-6 text-[#D4AF37]" />,
  MapPin: <MapPin className="w-6 h-6 text-[#D4AF37]" />,
  MessageSquare: <MessageSquare className="w-6 h-6 text-[#D4AF37]" />,
  Sliders: <Sliders className="w-6 h-6 text-[#D4AF37]" />,
  Award: <Award className="w-6 h-6 text-[#D4AF37]" />,
};

export function WhyChooseSection() {
  return (
    <section className="py-24 sm:py-28 bg-[#020B17] border-t border-b border-[#0B2B50] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061A32] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-3">
            <span>Our Distinction</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase font-sans">
            Why Choose <span className="text-[#D4AF37]">S.S. Agency?</span>
          </h2>

          <div className="w-20 h-1 bg-[#D4AF37] mx-auto my-4 rounded-full" />

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Straightforward service coordination, verified vehicle support, and dependable
            local presence in Sambalpur.
          </p>
        </FadeIn>

        {/* 6 Benefit Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <StaggerItem key={item.title}>
              <div className="h-full p-7 rounded-2xl bg-[#061A32] border border-[#0B2B50] hover:border-[#D4AF37]/60 shadow-xl hover:shadow-2xl hover:shadow-amber-950/20 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0B2B50] border border-[#D4AF37]/20 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#031225] transition-all">
                      {whyIconMap[item.icon]}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#F4CC55] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-[#0B2B50]/60 flex items-center text-[11px] font-semibold tracking-wider uppercase text-[#D4AF37]">
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
