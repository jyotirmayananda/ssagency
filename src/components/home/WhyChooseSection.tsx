'use client';

import React from 'react';
import {
  HeartHandshake,
  Briefcase,
  MapPin,
  MessageSquare,
  Sliders,
  Award,
} from 'lucide-react';
import { Highlight } from '@/components/chaiui/highlight';
import { WHY_CHOOSE_US } from '@/data/company';

const whyIconMap: Record<string, React.ReactNode> = {
  HeartHandshake: <HeartHandshake className="size-5 text-brand" />,
  Briefcase: <Briefcase className="size-5 text-brand" />,
  MapPin: <MapPin className="size-5 text-brand" />,
  MessageSquare: <MessageSquare className="size-5 text-brand" />,
  Sliders: <Sliders className="size-5 text-brand" />,
  Award: <Award className="size-5 text-brand" />,
};

export function WhyChooseSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 sm:px-12 sm:py-16">
      {/* Section Head */}
      <div className="space-y-2 mb-10 text-center sm:text-left">
        <h2 className="text-2xl font-medium sm:text-[30px] text-foreground tracking-tight">
          Why choose S.S. Agency
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Straightforward service coordination and dependable local presence with{' '}
          <Highlight>verified vehicle support</Highlight>.
        </p>
      </div>

      {/* 6 ChaiUI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WHY_CHOOSE_US.map((item, idx) => (
          <article
            key={item.title}
            className="card-chai p-6 flex flex-col justify-between transition-opacity sm:opacity-90 sm:hover:opacity-100"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="size-10 rounded-lg border border-card-edge flex items-center justify-center bg-card">
                  {whyIconMap[item.icon]}
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="font-montserrat text-base font-semibold text-foreground mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-card-edge">
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                Sambalpur Division
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
