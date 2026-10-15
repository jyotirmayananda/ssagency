'use client';

import React from 'react';
import {
  Building2,
  Home,
  Store,
  GraduationCap,
  UtensilsCrossed,
  CalendarCheck,
  Warehouse,
  Users,
} from 'lucide-react';
import { Highlight } from '@/components/chaiui/highlight';
import { INDUSTRIES_SERVED } from '@/data/company';

const indIconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="size-5 text-brand" />,
  Home: <Home className="size-5 text-brand" />,
  Store: <Store className="size-5 text-brand" />,
  GraduationCap: <GraduationCap className="size-5 text-brand" />,
  UtensilsCrossed: <UtensilsCrossed className="size-5 text-brand" />,
  CalendarCheck: <CalendarCheck className="size-5 text-brand" />,
  Warehouse: <Warehouse className="size-5 text-brand" />,
  Users: <Users className="size-5 text-brand" />,
};

export function IndustriesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 sm:px-12 sm:py-16">
      {/* Section Head */}
      <div className="space-y-2 mb-10 text-center sm:text-left">
        <h2 className="text-2xl font-medium sm:text-[30px] text-foreground tracking-tight">
          Sectors we serve
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Accommodating security, housekeeping, and driving requirements across Sambalpur with{' '}
          <Highlight>adaptable deployments</Highlight>.
        </p>
      </div>

      {/* 8 Industry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {INDUSTRIES_SERVED.map((ind) => (
          <article
            key={ind.title}
            className="card-chai p-5 flex flex-col justify-between transition-opacity sm:opacity-90 sm:hover:opacity-100"
          >
            <div>
              <div className="size-10 rounded-lg border border-card-edge flex items-center justify-center bg-card mb-4">
                {indIconMap[ind.icon]}
              </div>
              <h3 className="font-montserrat text-sm font-semibold text-foreground mb-1.5">
                {ind.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {ind.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
