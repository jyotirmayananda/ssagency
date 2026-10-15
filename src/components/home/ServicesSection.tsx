'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  ChefHat,
  Sparkles,
  CarFront,
  ArrowUpRight,
  Check,
} from 'lucide-react';
import { Highlight } from '@/components/chaiui/highlight';
import { SERVICES } from '@/data/services';

const serviceIconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="size-5 text-brand" />,
  ChefHat: <ChefHat className="size-5 text-brand" />,
  Sparkles: <Sparkles className="size-5 text-brand" />,
  CarFront: <CarFront className="size-5 text-brand" />,
};

export function ServicesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 sm:px-12 sm:py-16" id="services">
      {/* Section Head */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div className="space-y-2">
          <h2 className="text-2xl font-medium sm:text-[30px] text-foreground tracking-tight">
            Our services
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Reliable support for security and daily operational requirements with{' '}
            <Highlight>certified personnel</Highlight>.
          </p>
        </div>

        <Link
          href="/services"
          className="inline-flex h-9 items-center gap-2 rounded-md bg-[#d4d4d866] px-4 font-montserrat text-xs sm:text-sm text-[#52525b] hover:bg-[#d4d4d8] dark:bg-[#71717a33] dark:text-[#d4d4d8] dark:hover:bg-black/70 transition-colors w-fit"
        >
          <span>View all services</span>
          <ArrowUpRight className="-ml-1 size-3.5" />
        </Link>
      </div>

      {/* 4 ChaiUI Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service) => (
          <article
            key={service.id}
            className="card-chai group flex flex-col justify-between p-5 transition-all duration-300 sm:opacity-90 sm:hover:opacity-100"
          >
            <div>
              <div className="size-10 rounded-lg border border-card-edge flex items-center justify-center bg-card mb-4 group-hover:border-card-edge-hover transition-colors">
                {serviceIconMap[service.iconName]}
              </div>

              <h3 className="font-montserrat text-base font-semibold text-foreground mb-2">
                {service.title}
              </h3>

              <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mb-4">
                {service.overview}
              </p>

              <div className="space-y-1.5 border-t border-card-edge pt-3 mb-6">
                {service.keyFeatures.slice(0, 3).map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Check className="size-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="line-clamp-1">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-card-edge flex items-center justify-between">
              <span className="text-[11px] font-mono text-muted-foreground">
                Sambalpur
              </span>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <span>View details</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
