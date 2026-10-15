'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import { buildWhatsAppLink } from '@/lib/utils';

export function WhatsAppButton() {
  const whatsappUrl = buildWhatsAppLink();

  return (
    <div className="fixed bottom-6 right-6 z-40 print:hidden">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with S.S. Agency on WhatsApp"
        className="group relative flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-xl shadow-green-950/40 transition-all duration-300 hover:scale-105 hover:bg-[#20ba59] hover:shadow-2xl hover:shadow-green-900/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#031225]"
      >
        {/* Radar ping effect */}
        <span className="absolute -inset-1 -z-10 rounded-full bg-[#25D366]/40 animate-ping group-hover:animate-none opacity-75" />

        <MessageCircle className="w-5 h-5 fill-current shrink-0" />
        <span className="text-xs sm:text-sm font-semibold tracking-wide hidden sm:inline-block">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
