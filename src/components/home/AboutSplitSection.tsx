'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { Highlight } from '@/components/chaiui/highlight';
import { CORE_VALUES } from '@/data/company';

export function AboutSplitSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 sm:px-12 sm:py-16" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left: Clean ChaiUI Media Frame */}
        <div className="lg:col-span-6">
          <div className="group overflow-hidden rounded-2xl border border-card-edge bg-card-fill backdrop-blur-sm transition-colors duration-300 hover:border-card-edge-hover">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/about/company-team-lineup.jpg"
                alt="S.S. Agency security guards and patrol team lineup"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-3.5 border-t border-card-edge flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-medium text-foreground">
                Security personnel and supervisor lineup
              </span>
              <span className="text-[11px]">Sambalpur Headquarters</span>
            </div>
          </div>
        </div>

        {/* Right: Editorial Content */}
        <div className="lg:col-span-6 space-y-5">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium sm:text-[30px] text-foreground tracking-tight">
              A commitment to safety and service
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              S.S. Agency is a Sambalpur-based service provider delivering licensed security guard, cooking, cleaning, and driver manpower solutions with{' '}
              <Highlight>disciplined operational oversight</Highlight>.
            </p>
          </div>

          {/* Three Core Values */}
          <div className="space-y-3 pt-1">
            {CORE_VALUES.map((val) => (
              <div
                key={val.title}
                className="card-chai p-4 flex items-start gap-3 transition-opacity sm:opacity-90 sm:hover:opacity-100"
              >
                <div className="size-6 rounded-md border border-card-edge flex items-center justify-center shrink-0 mt-0.5 bg-card text-emerald-600 dark:text-emerald-400">
                  <Check className="size-3.5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-montserrat text-sm font-semibold text-foreground">
                    {val.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/about"
              className="btn-asym-mirror inline-flex h-9 items-center gap-2 border border-border bg-transparent px-4 text-sm font-medium transition-colors hover:bg-neutral-100 dark:hover:bg-black/90 text-foreground"
            >
              <span>Learn more about us</span>
              <ArrowUpRight className="-ml-1 size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
