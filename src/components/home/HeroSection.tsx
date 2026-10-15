'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, MapPin, Phone, Car, Clock, CheckCircle2, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-28 pb-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/60">
      {/* Subtle light mode decorative background grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#061A32 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Ambient soft glow highlights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bold Light Mode Typography & Action Elements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Verified Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 shadow-sm text-[#92400E] text-xs sm:text-sm font-bold tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4 text-[#B45309]" />
              <span>Licensed Security & Manpower Solutions</span>
            </div>

            {/* Main Punchy Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#061A32] tracking-tight uppercase font-sans leading-[1.1]">
              Your Safety.{' '}
              <span className="text-gold-gradient block sm:inline">Our Priority.</span>
            </h1>

            {/* Gold Horizontal Accent Bar */}
            <div className="w-20 h-1.5 bg-gradient-to-r from-amber-400 via-[#B45309] to-amber-600 rounded-full" />

            {/* Clear, Engaging Business Proposition */}
            <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
              Sambalpur&apos;s premier security and manpower services provider. Equipped with a dedicated 
              rapid patrol fleet, PSARA-compliant trained personnel, armed guards, and vetted operational staff.
            </p>

            {/* Key Trust Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700 font-semibold">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>9+ Dedicated Mahindra Patrol Fleet</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>24/7 Rapid Emergency Response</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Police-Verified Security Personnel</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Serving Sambalpur & Western Odisha</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-amber-500 via-[#B45309] to-amber-700 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-[#061A32] bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm hover:shadow hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-[#B45309]" />
              </Link>

              <a
                href="tel:+919437054100"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-slate-700 hover:text-[#061A32] hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200"
                title="Call 24/7 Dispatch"
              >
                <Phone className="w-4 h-4 text-[#B45309]" />
                <span>+91 94370 54100</span>
              </a>
            </div>

            {/* Location & Quick Trust Banner */}
            <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
              <MapPin className="w-4 h-4 text-[#B45309] flex-shrink-0" />
              <span>Headquartered at D.G. Complex, Budharaja, Sambalpur, Odisha</span>
            </div>
          </motion.div>

          {/* Right Column: 100% Visible, Crisp Real Fleet Photograph Showcase */}
          <motion.div
            initial={{ opacity: 1, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Glow / Frame Card */}
            <div className="relative rounded-3xl p-2 bg-gradient-to-tr from-amber-200/50 via-slate-100 to-amber-100/40 shadow-2xl shadow-slate-900/10 border border-slate-200/80">
              
              {/* Image Container with high contrast and sharp rendering */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900">
                <Image
                  src="/images/hero/hero-patrol-fleet.jpg"
                  alt="S.S. Agency Real Mobile Patrol Fleet - 9 Mahindra Boleros in Formation with Security Officers"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle bottom edge gradient solely for caption badge legibility */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none" />

                {/* Top Badge: Verified Real Company Assets */}
                <div className="absolute top-3 left-3 bg-[#061A32]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/20 shadow-lg flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Real Company Fleet &amp; Personnel</span>
                </div>

                {/* Bottom Overlay Label: Explaining the Image */}
                <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-semibold text-white/95 text-[11px] sm:text-xs">
                      9 Patrol Units Formation &bull; Sambalpur
                    </span>
                  </div>
                  <Link
                    href="/fleet"
                    className="underline text-amber-300 hover:text-white font-medium transition-colors text-[11px]"
                  >
                    View Fleet &rarr;
                  </Link>
                </div>
              </div>

              {/* Floating Mini Stat Badge 1 (Bottom Left) */}
              <div className="absolute -bottom-5 -left-3 sm:-left-5 bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-200/90 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-[#B45309]">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-black text-[#061A32] leading-tight">9+ Units</div>
                  <div className="text-[11px] font-semibold text-slate-500">Mahindra Patrol Fleet</div>
                </div>
              </div>

              {/* Floating Mini Stat Badge 2 (Top Right) */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white rounded-2xl p-2.5 sm:p-3 shadow-xl border border-slate-200/90 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-[#061A32]">24/7 Ready</div>
                  <div className="text-[10px] font-medium text-slate-500">Rapid Deployment</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
