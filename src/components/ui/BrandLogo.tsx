import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface BrandLogoProps {
  variant?: 'compact' | 'full' | 'emblem' | 'footer';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showLink?: boolean;
  priority?: boolean;
}

export function BrandLogo({
  variant = 'compact',
  size = 'md',
  className = '',
  showLink = true,
  priority = false,
}: BrandLogoProps) {
  // Dimensions for emblem
  const emblemSizes = {
    sm: { container: 'w-8 h-8 rounded-lg p-0.5', px: 32 },
    md: { container: 'w-9 h-9 sm:w-10 sm:h-10 rounded-xl p-1', px: 40 },
    lg: { container: 'w-12 h-12 rounded-xl p-1.5', px: 48 },
  };

  const emblemDim = emblemSizes[size] || emblemSizes.md;

  if (variant === 'full') {
    const fullContent = (
      <div className={`inline-flex flex-col items-start ${className}`}>
        <div className="relative overflow-hidden rounded-xl bg-white p-2 border border-border shadow-xs">
          <Image
            src="/images/branding/logo.png"
            alt="Samleswari Security Agency (S.S. Agency)"
            width={240}
            height={165}
            priority={priority}
            className="h-auto w-auto max-h-16 sm:max-h-20 object-contain"
          />
        </div>
      </div>
    );

    if (!showLink) return fullContent;

    return (
      <Link
        href="/"
        className="group inline-flex items-center transition-transform duration-200 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-xl"
        aria-label="Samleswari Security Agency (S.S. Agency) Home"
      >
        {fullContent}
      </Link>
    );
  }

  if (variant === 'emblem') {
    const emblemContent = (
      <div
        className={`relative shrink-0 flex items-center justify-center bg-white shadow-xs border border-border overflow-hidden transition-all duration-200 ${emblemDim.container} ${className}`}
      >
        <Image
          src="/images/branding/ssa-emblem.png"
          alt="SSA Emblem"
          width={emblemDim.px}
          height={emblemDim.px}
          priority={priority}
          className="object-contain w-full h-full"
        />
      </div>
    );

    if (!showLink) return emblemContent;

    return (
      <Link
        href="/"
        className="group inline-flex items-center transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-xl"
        aria-label="Samleswari Security Agency Home"
      >
        {emblemContent}
      </Link>
    );
  }

  // 'compact' or 'footer'
  const isFooter = variant === 'footer';

  const content = (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Official SSA flame emblem */}
      <div
        className={`relative shrink-0 flex items-center justify-center bg-white shadow-xs border border-border overflow-hidden group-hover:border-card-edge-hover transition-colors ${
          isFooter ? 'w-10 h-10 rounded-xl p-1' : emblemDim.container
        }`}
      >
        <Image
          src="/images/branding/ssa-emblem.png"
          alt="Samleswari Security Agency (S.S. Agency) Logo"
          width={isFooter ? 40 : emblemDim.px}
          height={isFooter ? 40 : emblemDim.px}
          priority={priority}
          className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-200"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left leading-none">
        <span
          className={`font-brand font-bold tracking-tight text-foreground flex items-center ${
            size === 'sm'
              ? 'text-base'
              : size === 'lg'
              ? 'text-xl sm:text-2xl'
              : 'text-base sm:text-xl'
          }`}
        >
          S.S. Agency
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-brand ml-1 motion-safe:animate-[chai-bounce_2s_infinite]"
          />
        </span>
        <span
          className={`font-sans font-medium uppercase text-muted-foreground ${
            isFooter
              ? 'text-[11px] tracking-wider mt-1'
              : 'text-[9px] sm:text-[10.5px] tracking-wider mt-0.5'
          }`}
        >
          Samleswari Security
        </span>
      </div>
    </div>
  );

  if (!showLink) return content;

  return (
    <Link
      href="/"
      className="group inline-flex items-center transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-xl"
      aria-label="Samleswari Security Agency (S.S. Agency) Home"
    >
      {content}
    </Link>
  );
}
