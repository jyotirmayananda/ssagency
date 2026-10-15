'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, FileText, Shield } from 'lucide-react';
import { FadeIn } from '@/components/animations/MotionWrapper';
import { COMPANY } from '@/lib/constants';
import { buildWhatsAppLink } from '@/lib/utils';

export function ContactCTASection() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#061A32] via-[#0B2B50]/90 to-[#031225] border-t border-[#0B2B50] relative overflow-hidden">
      {/* Decorative Security Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <Shield className="w-[600px] h-[600px] text-[#D4AF37]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#031225]/80 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4">
            <span>Direct Communication</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase font-sans">
            Need Reliable Security Or <span className="text-gold-gradient block sm:inline">Manpower Services?</span>
          </h2>

          <div className="w-20 h-1 bg-[#D4AF37] mx-auto my-5 rounded-full" />

          <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Tell us what you need. Contact S.S. Agency to discuss your requirements with our
            supervisory team in Sambalpur.
          </p>

          {/* 3 Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${COMPANY.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider text-white bg-[#031225] hover:bg-[#061A32] border border-[#D4AF37]/50 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call {COMPANY.phoneDisplay}</span>
            </a>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>

            <Link
              href="/request-quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider text-[#031225] bg-gradient-to-r from-[#F4CC55] via-[#D4AF37] to-[#B45309] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Request a Quote</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
