'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
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
        className="group relative flex items-center gap-2 rounded-full bg-[#25D366] px-3.5 py-2.5 text-white transition-colors duration-200 hover:bg-[#20ba59] border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <MessageCircle className="size-4 fill-current shrink-0" />
        <span className="text-xs font-medium tracking-tight hidden sm:inline-block">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
