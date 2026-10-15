import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Shield } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  breadcrumbs: { label: string; href?: string }[];
  backgroundImage?: string;
}

export function PageHero({
  title,
  subtitle,
  eyebrow,
  breadcrumbs,
  backgroundImage = '/images/hero/hero-patrol-fleet.jpg',
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 overflow-hidden bg-slate-50 border-b border-slate-200/80">
      {/* Background Image with Luminous Light Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="object-cover object-center opacity-30 filter blur-[1px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/90 to-white/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_#F8FAFC_90%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumbs" className="mb-4 flex items-center gap-2 text-xs sm:text-sm text-slate-500">
          <Link href="/" className="hover:text-[#B45309] transition-colors flex items-center gap-1 font-medium">
            Home
          </Link>
          {breadcrumbs.map((crumb) => (
            <React.Fragment key={crumb.label}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[#B45309] transition-colors font-medium">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#B45309] font-bold" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Eyebrow */}
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[#92400E] text-xs font-bold tracking-widest uppercase mb-3">
            <Shield className="w-3.5 h-3.5 text-[#B45309]" />
            <span>{eyebrow}</span>
          </div>
        )}

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#061A32] tracking-tight uppercase max-w-4xl font-sans">
          {title}
        </h1>

        {/* Gold accent line */}
        <div className="w-20 h-1 bg-gradient-to-r from-amber-500 via-[#B45309] to-amber-600 rounded mt-4 mb-4" />

        {/* Subtitle */}
        {subtitle && (
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
