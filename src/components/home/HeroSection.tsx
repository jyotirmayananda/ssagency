'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, MapPin, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 sm:py-28">
      {/* Background Image with Dark Navy Gradient Overlays */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/hero/hero-patrol-fleet.jpg"
            alt="S.S. Agency Security Patrol Vehicles Fleet in Sambalpur, Odisha"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Cinematic Multi-layered Vignette and Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031225]/88 via-[#031225]/65 to-[#031225]/88" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031225] via-transparent to-[#031225]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_#031225_90%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#061A32]/85 border border-[#D4AF37]/40 backdrop-blur-md text-[#D4AF37] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-6"
        >
          <ShieldCheck className="w-4 h-4 text-[#F4CC55]" />
          <span>Professional Security & Manpower Solutions</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight uppercase max-w-5xl mx-auto font-sans leading-[1.08]"
        >
          Your Safety.{' '}
          <span className="text-gold-gradient block sm:inline">Our Priority.</span>
        </motion.h1>

        {/* Gold Horizontal Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
          className="w-24 sm:w-36 h-1 sm:h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#F4CC55] to-[#B45309] rounded-full mx-auto my-6"
        />

        {/* Supporting Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-slate-200 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal"
        >
          Reliable security personnel and essential manpower services for businesses,
          institutions, residential properties, and everyday operational needs.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider text-white bg-[#0B2B50] hover:bg-[#0E3663] border border-[#D4AF37]/40 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </Link>

          <Link
            href="/request-quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider text-[#031225] bg-gradient-to-r from-[#F4CC55] via-[#D4AF37] to-[#B45309] shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Trust-oriented local indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-300 font-medium"
        >
          <MapPin className="w-4 h-4 text-[#D4AF37]" />
          <span>Serving Sambalpur & Western Odisha</span>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 text-xs tracking-widest uppercase">
        <span className="text-[10px] text-[#D4AF37]">Scroll</span>
        <ChevronDown className="w-4 h-4 text-[#D4AF37] animate-bounce" />
      </div>
    </section>
  );
}
