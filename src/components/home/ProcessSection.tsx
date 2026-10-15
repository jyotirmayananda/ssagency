'use client';

import React from 'react';
import { Highlight } from '@/components/chaiui/highlight';
import { WORKING_PROCESS } from '@/data/company';

export function ProcessSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 sm:px-12 sm:py-16">
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

      {/* 5 Step Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {WORKING_PROCESS.map((item) => (
          <article
            key={item.step}
            className="card-chai p-5 flex flex-col justify-between transition-opacity sm:opacity-90 sm:hover:opacity-100"
          >
            <div>
              <div className="size-8 rounded-md border border-card-edge flex items-center justify-center font-mono text-xs font-semibold text-foreground bg-card mb-4">
                0{item.step}
              </div>

              <h3 className="font-montserrat text-sm font-semibold text-foreground mb-2">
                {item.title}
              </h3>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
