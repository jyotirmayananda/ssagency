'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { FadeIn } from '@/components/animations/MotionWrapper';
import { CORE_VALUES } from '@/data/company';

export function AboutSplitSection() {
  return (
    <section className="py-24 sm:py-28 bg-[#F8FAFC] relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Overlapping Photo Collage */}
          <div className="lg:col-span-6 relative">
            <FadeIn direction="right" duration={0.8}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Main Large Photo */}
                <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-amber-300/80 shadow-2xl bg-slate-900">
                  <Image
                    src="/images/about/company-team-lineup.jpg"
                    alt="S.S. Agency Team Lineup and Vehicles"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Overlapping Small Photo */}
                <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-6 w-44 sm:w-56 h-56 sm:h-64 rounded-xl overflow-hidden border-2 border-[#B45309] shadow-2xl bg-slate-900 hidden sm:block">
                  <Image
                    src="/images/about/supervisor-vehicle-patrol.jpg"
                    alt="Agency Coordinator on Duty"
                    fill
                    sizes="250px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 p-1.5 rounded bg-black/80 text-[10px] text-amber-300 font-bold text-center uppercase tracking-wider">
                    On-Ground Oversight
                  </div>
                </div>

                {/* Decorative Gold Frame corner Accent */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#B45309] pointer-events-none rounded-tl-lg" />
              </div>
            </FadeIn>
          </div>

          {/* Right: Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            <FadeIn direction="left" duration={0.8}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[#92400E] text-xs font-bold tracking-widest uppercase mb-2">
                <Shield className="w-3.5 h-3.5" />
                <span>Who We Are</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#061A32] tracking-tight uppercase font-sans leading-tight">
                A Commitment To <span className="text-[#B45309]">Safety & Service</span>
              </h2>

              <div className="w-16 h-1 bg-[#B45309] rounded-full my-4" />

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
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
                    className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-[#B45309]/60 shadow-sm transition-colors"
                  >
                    <div className="flex items-center gap-2.5 text-[#061A32] font-bold text-sm sm:text-base">
                      <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0" />
                      <span>{val.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 pl-6">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-bold uppercase tracking-wider text-white bg-[#061A32] hover:bg-[#0B2B50] transition-all shadow-md"
                >
                  <span>About Our Agency</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
