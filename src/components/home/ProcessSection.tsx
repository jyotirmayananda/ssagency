'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  PhoneCall,
  Users,
  FileSpreadsheet,
  ShieldCheck,
  Radio,
  Check,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { Highlight } from '@/components/chaiui/highlight';
import { WORKING_PROCESS } from '@/data/company';
import { cn } from '@/lib/utils';

const stepIconMap: Record<string, React.ReactNode> = {
  PhoneCall: <PhoneCall className="size-4" />,
  Users: <Users className="size-4" />,
  FileSpreadsheet: <FileSpreadsheet className="size-4" />,
  ShieldCheck: <ShieldCheck className="size-4" />,
  Radio: <Radio className="size-4" />,
};

export function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = WORKING_PROCESS[activeStepIndex];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 sm:px-12 sm:py-16" id="process">
      {/* Section Head */}
      <div className="space-y-2 mb-10 text-center sm:text-left">
        <h2 className="text-2xl font-medium sm:text-[30px] text-foreground tracking-tight">
          Our working process
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          From initial consultation to on-ground placement, we keep every step{' '}
          <Highlight>clear and prompt</Highlight>.
        </p>
      </div>

      {/* Mobile Process Flow (lg:hidden): Image on top, then clean touch-friendly accordion cards */}
      <div className="flex flex-col gap-4 lg:hidden">
        {/* Operations Media Frame */}
        <div className="group relative overflow-hidden rounded-2xl border border-card-edge bg-card-fill">
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src="/images/process/operations-coordination.jpg"
              alt="S.S. Agency operations coordination and security deployment control room"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-orange-200 border border-white/10">
              <Sparkles className="size-3 text-brand" />
              <span>Operational oversight in Sambalpur</span>
            </div>
          </div>
          <div className="p-3 border-t border-card-edge flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium text-foreground">
              Central operations & deployment desk
            </span>
            <span className="text-[11px] font-mono">24/7 support</span>
          </div>
        </div>

        {/* Accordion Steps on Mobile */}
        <div className="flex flex-col gap-2.5">
          {WORKING_PROCESS.map((item, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <div
                key={item.step}
                className={cn(
                  'rounded-xl border transition-all duration-200 overflow-hidden',
                  isActive
                    ? 'border-brand/40 bg-card ring-1 ring-brand/20'
                    : 'border-card-edge bg-card-fill'
                )}
              >
                <button
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className="w-full text-left p-3.5 flex items-center justify-between gap-3 cursor-pointer"
                  aria-expanded={isActive}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={cn(
                        'size-8 rounded-lg border flex items-center justify-center shrink-0 text-xs font-mono font-medium',
                        isActive
                          ? 'border-brand text-brand bg-brand/10'
                          : 'border-card-edge text-muted-foreground bg-card'
                      )}
                    >
                      {item.step}
                    </div>
                    <span
                      className={cn(
                        'font-montserrat text-sm font-semibold truncate',
                        isActive ? 'text-foreground' : 'text-foreground/90'
                      )}
                    >
                      {item.title}
                    </span>
                  </div>
                  {isActive && (
                    <span className="text-[10px] font-mono text-brand shrink-0 uppercase tracking-wider font-semibold">
                      Active
                    </span>
                  )}
                </button>

                {isActive && (
                  <div className="px-4 pb-4 pt-1 border-t border-card-edge/60 space-y-3 animate-in fade-in-50 duration-200">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    {item.highlights && item.highlights.length > 0 && (
                      <div className="space-y-1.5 pt-2">
                        {item.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center gap-2 text-xs text-foreground">
                            <div className="size-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400">
                              <Check className="size-2" />
                            </div>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[11px] text-muted-foreground">
                        Ready to deploy?
                      </span>
                      <Link
                        href="/request-quote"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline"
                      >
                        <span>Request a quote</span>
                        <ArrowUpRight className="size-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop Split Process Layout (hidden lg:grid) */}
      <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
        {/* Left: Operations Media Frame + Active Stage Detail Card */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          <div className="group relative overflow-hidden rounded-2xl border border-card-edge bg-card-fill backdrop-blur-sm transition-colors duration-300 hover:border-card-edge-hover">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/images/process/operations-coordination.jpg"
                alt="S.S. Agency operations coordination and security deployment control room"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-orange-200 border border-white/10">
                <Sparkles className="size-3 text-brand" />
                <span>Operational oversight in Sambalpur</span>
              </div>
            </div>

            <div className="p-3.5 border-t border-card-edge flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-medium text-foreground">
                Central operations & deployment desk
              </span>
              <span className="text-[11px] font-mono">24/7 support</span>
            </div>
          </div>

          {/* Active Stage Detailed Breakdown Panel */}
          <div className="card-chai p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-brand font-semibold uppercase tracking-wider">
                  Stage {currentStep.step} of 05
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  S.S. Agency Protocol
                </span>
              </div>

              <h3 className="font-montserrat text-lg font-semibold text-foreground mb-2">
                {currentStep.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {currentStep.description}
              </p>

              {/* Checklist Deliverables */}
              {currentStep.highlights && currentStep.highlights.length > 0 && (
                <div className="space-y-2 border-t border-card-edge pt-4 mb-5">
                  <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider block">
                    Key stage deliverables:
                  </span>
                  <div className="space-y-1.5">
                    {currentStep.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-xs text-foreground">
                        <div className="size-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400">
                          <Check className="size-2.5" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-card-edge flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                Need immediate deployment?
              </span>
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
              >
                <span>Request a quote</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Interactive 5-Step Progression Selector */}
        <div className="lg:col-span-6 flex flex-col gap-3">
          {WORKING_PROCESS.map((item, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                type="button"
                key={item.step}
                onClick={() => setActiveStepIndex(idx)}
                className={cn(
                  'w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-4',
                  isActive
                    ? 'border-brand/40 bg-card shadow-none ring-1 ring-brand/20'
                    : 'border-card-edge bg-card-fill backdrop-blur-sm hover:border-card-edge-hover hover:bg-card'
                )}
                aria-pressed={isActive}
              >
                {/* Step Icon Badge */}
                <div
                  className={cn(
                    'size-10 rounded-lg border flex items-center justify-center shrink-0 transition-colors',
                    isActive
                      ? 'border-brand text-brand bg-brand/10'
                      : 'border-card-edge text-muted-foreground bg-card'
                  )}
                >
                  {item.icon ? stepIconMap[item.icon] : item.step}
                </div>

                {/* Step Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[11px] text-muted-foreground tracking-wider uppercase">
                      Step {item.step}
                    </span>
                    {isActive && (
                      <span className="text-[11px] font-mono text-brand font-medium">
                        Active stage
                      </span>
                    )}
                  </div>

                  <h4
                    className={cn(
                      'font-montserrat text-sm font-semibold transition-colors mb-1',
                      isActive ? 'text-foreground' : 'text-foreground/90'
                    )}
                  >
                    {item.title}
                  </h4>

                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
