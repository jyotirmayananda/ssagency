'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { FadeIn } from '@/components/animations/MotionWrapper';
import { CORE_VALUES } from '@/data/company';

export function AboutSplitSection() {
  return (
    <section className="py-24 sm:py-28 bg-[#031225] relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Overlapping Photo Collage with Gold Borders */}
          <div className="lg:col-span-6 relative">
            <FadeIn direction="right" duration={0.8}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Main Large Photo: Official Team Lineup */}
                <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-2xl bg-[#061A32]">
                  <Image
                    src="/images/about/company-team-lineup.jpg"
                    alt="S.S. Agency Team Lineup and Vehicles"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031225]/80 via-transparent to-transparent" />
                </div>

                {/* Overlapping Small Photo: Supervisor Beside Vehicle */}
                <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-6 w-44 sm:w-56 h-56 sm:h-64 rounded-xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl bg-[#061A32] hidden sm:block">
                  <Image
                    src="/images/about/supervisor-vehicle-patrol.jpg"
                    alt="Agency Coordinator on Duty"
                    fill
                    sizes="250px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031225]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 p-1.5 rounded bg-[#031225]/90 text-[10px] text-[#D4AF37] font-semibold text-center uppercase tracking-wider">
                    On-Ground Oversight
                  </div>
                </div>

                {/* Decorative Gold Frame corner Accent */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none rounded-tl-lg" />
              </div>
            </FadeIn>
          </div>

          {/* Right: Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            <FadeIn direction="left" duration={0.8}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061A32] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-2">
                <Shield className="w-3.5 h-3.5" />
                <span>Who We Are</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase font-sans leading-tight">
                A Commitment To <span className="text-[#D4AF37]">Safety & Service</span>
              </h2>

              <div className="w-16 h-1 bg-[#D4AF37] rounded-full my-4" />

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                S.S. Agency is a Sambalpur-based service provider offering security guard,
                cooking, cleaning, and driver manpower solutions. Our focus is on
                understanding client requirements and providing professional, practical
                service support.
              </p>

              {/* Three Core Values */}
              <div className="space-y-4 pt-2">
                {CORE_VALUES.map((val) => (
                  <div
                    key={val.title}
                    className="p-4 rounded-xl bg-[#061A32] border border-[#0B2B50] hover:border-[#D4AF37]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 text-white font-bold text-sm sm:text-base">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{val.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 pl-6">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-bold uppercase tracking-wider text-white bg-[#0B2B50] hover:bg-[#0E3663] border border-[#D4AF37]/40 transition-all shadow-md"
                >
                  <span>About Our Agency</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
