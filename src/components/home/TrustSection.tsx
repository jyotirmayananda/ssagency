'use client';

import React from 'react';
import { ShieldCheck, UserCheck, Layers } from 'lucide-react';
import { Highlight } from '@/components/chaiui/highlight';
import { StatStrip } from '@/components/chaiui/stat-strip';
import { TRUST_VALUE_CARDS } from '@/data/company';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="size-5 text-brand" />,
  UserCheck: <UserCheck className="size-5 text-brand" />,
  Layers: <Layers className="size-5 text-brand" />,
};

const stats = [
  { value: '9+', label: 'Active patrol vehicles' },
  { value: '150+', label: 'Verified security personnel' },
  { value: '24/7', label: 'Emergency response coverage' },
  { value: '100%', label: 'PSARA and statutory compliant' },
];

export function TrustSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 sm:px-12 sm:py-16">
      {/* ChaiUI Stat Strip */}
      <StatStrip stats={stats} className="mb-16" />

      {/* Section Head */}
      <div className="space-y-2 mb-10 text-center sm:text-left">
        <h2 className="text-2xl font-medium sm:text-[30px] text-foreground tracking-tight">
          Dependable people, professional service
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Security and manpower solutions designed to maintain safe environments with{' '}
          <Highlight>consistent standards</Highlight>.
        </p>
      </div>

      {/* 3 ChaiUI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TRUST_VALUE_CARDS.map((card) => (
          <article
            key={card.title}
            className="card-chai p-6 flex flex-col justify-between transition-opacity sm:opacity-90 sm:hover:opacity-100"
          >
            <div>
              <div className="size-10 rounded-lg border border-card-edge flex items-center justify-center bg-card mb-4">
                {iconMap[card.icon]}
              </div>

              <h3 className="font-montserrat text-base font-semibold text-foreground mb-2">
                {card.title}
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
