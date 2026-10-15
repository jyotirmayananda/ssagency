import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Highlight } from '@/components/chaiui/highlight';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  breadcrumbs: { label: string; href?: string }[];
  highlightPhrase?: string;
}

export function PageHero({
  title,
  subtitle,
  eyebrow,
  breadcrumbs,
  highlightPhrase,
}: PageHeroProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-12 pb-8 sm:px-12 sm:pt-16 sm:pb-10 border-b border-border">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-brand transition-colors">
          Home
        </Link>
        {breadcrumbs.map((crumb) => (
          <React.Fragment key={crumb.label}>
            <ChevronRight className="size-3 text-muted-foreground/60" />
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-brand transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium" aria-current="page">
                {crumb.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>

      {/* Eyebrow in sentence case */}
      {eyebrow && (
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2">
          {eyebrow}
        </span>
      )}

      {/* Main Heading in sentence case */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-foreground">
        {title}
      </h1>

      {/* Subtitle with optional Highlight */}
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
          {highlightPhrase ? (
            <>
              {subtitle.replace(highlightPhrase, '')}{' '}
              <Highlight>{highlightPhrase}</Highlight>
            </>
          ) : (
            subtitle
          )}
        </p>
      )}
    </section>
  );
}
