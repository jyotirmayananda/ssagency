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
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden bg-[#031225]">
      {/* Background Image with Dark Navy Gradient Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="object-cover object-center opacity-25 filter blur-[1px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031225] via-[#031225]/85 to-[#031225]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#031225_80%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumbs" className="mb-4 flex items-center gap-2 text-xs sm:text-sm text-slate-400">
          <Link href="/" className="hover:text-[#F4CC55] transition-colors flex items-center gap-1">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label}>
              <ChevronRight className="w-3 h-3 text-[#D4AF37]" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[#F4CC55] transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#F4CC55] font-medium" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Eyebrow */}
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2B50]/80 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>{eyebrow}</span>
          </div>
        )}

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase max-w-4xl font-sans">
          {title}
        </h1>

        {/* Gold accent line */}
        <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent rounded mt-4 mb-4" />

        {/* Subtitle */}
        {subtitle && (
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
