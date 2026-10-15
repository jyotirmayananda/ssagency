'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ChevronsDown } from 'lucide-react';
import { AnimatedBadge } from '@/components/chaiui/animated-badge';
import { Highlight } from '@/components/chaiui/highlight';

export function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-12 pb-16 sm:px-12 sm:pt-20 sm:pb-24">
      <div className="flex gap-10 lg:gap-12 max-md:flex-col items-center">
        {/* Left Column: Headline, Lead with Highlight, Asymmetric Buttons */}
        <div className="my-auto flex flex-col gap-y-3 sm:gap-y-4 md:w-3/5">
          <AnimatedBadge>
            Licensed security and manpower solutions
          </AnimatedBadge>

          <h1 className="text-[38px] sm:text-[46px] md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.12]">
            Your safety. Our priority.
          </h1>

          <p className="mt-3 text-base text-neutral-700 md:text-lg dark:text-neutral-400 leading-relaxed max-w-xl">
            Reliable security guards, armed protection, and essential facility manpower in Sambalpur, providing{' '}
            <Highlight>dependable protection every day</Highlight>.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <Link
              href="/request-quote"
              className="btn-asym inline-flex h-10 items-center gap-2 bg-neutral-900 px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              <span>Request a quote</span>
              <ArrowUpRight className="-ml-1 size-4" />
            </Link>

            <Link
              href="/services"
              className="btn-asym-mirror inline-flex h-10 items-center gap-2 border border-border bg-transparent px-5 text-sm font-medium transition-colors hover:bg-neutral-100 dark:hover:bg-black/90 text-foreground"
            >
              <span>Explore services</span>
              <ChevronsDown className="-ml-1 size-4" />
            </Link>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Serving Sambalpur and Western Odisha. Police-verified personnel.
          </p>
        </div>

        {/* Right Column: One Central Media Frame - 100% Crisp Real Fleet Photo */}
        <div className="relative md:w-2/5 w-full">
          <div className="group overflow-hidden rounded-2xl border border-card-edge bg-card-fill backdrop-blur-sm transition-colors duration-300 hover:border-card-edge-hover">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/hero/hero-patrol-fleet.jpg"
                alt="S.S. Agency mobile patrol fleet of Mahindra Boleros in Sambalpur"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-3.5 border-t border-card-edge flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-medium text-foreground">
                Mahindra patrol fleet in formation
              </span>
              <span className="text-[11px]">Sambalpur</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
