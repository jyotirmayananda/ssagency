'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '@/lib/utils';

export function WhatsAppButton() {
  const whatsappUrl = buildWhatsAppLink();

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 print:hidden pointer-events-auto">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with S.S. Agency on WhatsApp"
        className="group relative flex items-center gap-2 rounded-full bg-[#25D366] px-3.5 py-2.5 sm:px-4 sm:py-2.5 text-white shadow-lg shadow-[#25D366]/40 transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-[#20ba59] border border-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {/* Glow pulse indicator */}
        <span
          aria-hidden="true"
          className="absolute -inset-0.5 rounded-full bg-[#25D366] opacity-30 blur-sm motion-safe:animate-pulse pointer-events-none"
        />

        <MessageCircle className="relative size-5 fill-current shrink-0 text-white" />
        <span className="relative text-xs font-semibold tracking-tight hidden sm:inline-block text-white">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
