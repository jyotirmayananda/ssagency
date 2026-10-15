'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';
import { CtaPanel } from '@/components/chaiui/cta-panel';
import { COMPANY } from '@/lib/constants';
import { buildWhatsAppLink } from '@/lib/utils';

export function ContactCTASection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 sm:px-12 sm:py-16">
      <CtaPanel
        heading="Need reliable security or manpower services?"
        tagline="Tell us what you need. Contact our supervisory team in Sambalpur to discuss your requirements and receive a clear proposal."
        action={{
          label: 'Request a proposal',
          href: '/request-quote',
        }}
      />

      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
        <span>Direct phone:</span>
        <a
          href={`tel:${COMPANY.phone}`}
          className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-brand transition-colors"
        >
          <Phone className="size-3.5 text-brand" />
          <span>{COMPANY.phoneDisplay}</span>
        </a>

        <span className="text-border">|</span>

        <span>Quick enquiry:</span>
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-brand transition-colors"
        >
          <MessageCircle className="size-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>WhatsApp dispatch</span>
        </a>
      </div>
    </section>
  );
}
