import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'emblem' | 'footer';
  className?: string;
  showLink?: boolean;
}

export function ShieldEmblem({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Outer Gold Gradient */}
        <linearGradient id="goldOuter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="25%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="75%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>

        {/* Shield Bevel Gradient */}
        <linearGradient id="goldBevel" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="40%" stopColor="#D4AF37" />
          <stop offset="70%" stopColor="#92400E" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>

        {/* Star 3D Gradient Light */}
        <linearGradient id="starLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="60%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>

        {/* Star 3D Gradient Shadow */}
        <linearGradient id="starShadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>

        {/* Inner Shield Navy Gradient */}
        <linearGradient id="innerNavy" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0B2B50" />
          <stop offset="60%" stopColor="#061A32" />
          <stop offset="100%" stopColor="#031225" />
        </linearGradient>

        {/* Subtle Glow Filter */}
        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#D4AF37" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* Outer Golden Shield Rim */}
      <path
        d="M50 4 L88 20 C88 56 74 94 50 114 C26 94 12 56 12 20 Z"
        fill="url(#goldOuter)"
        filter="url(#goldGlow)"
      />

      {/* Inner Bevel Border */}
      <path
        d="M50 10 L82 23 C82 54 70 88 50 106 C30 88 18 54 18 23 Z"
        fill="url(#goldBevel)"
      />

      {/* Deep Navy Shield Core */}
      <path
        d="M50 15 L78 26 C78 52 67 83 50 99 C33 83 22 52 22 26 Z"
        fill="url(#innerNavy)"
        stroke="#D4AF37"
        strokeWidth="1.5"
      />

      {/* Central Dimensional 5-Point Star */}
      <g transform="translate(50, 52) scale(0.85)">
        {/* Top arm light/shadow */}
        <polygon points="0,0 0,-34 10,-10" fill="url(#starLight)" />
        <polygon points="0,0 0,-34 -10,-10" fill="url(#starShadow)" />

        {/* Right top arm */}
        <polygon points="0,0 32,-10 12,5" fill="url(#starLight)" />
        <polygon points="0,0 32,-10 10,-10" fill="url(#starShadow)" />

        {/* Right bottom arm */}
        <polygon points="0,0 20,28 0,14" fill="url(#starLight)" />
        <polygon points="0,0 20,28 12,5" fill="url(#starShadow)" />

        {/* Left bottom arm */}
        <polygon points="0,0 -20,28 -12,5" fill="url(#starLight)" />
        <polygon points="0,0 -20,28 0,14" fill="url(#starShadow)" />

        {/* Left top arm */}
        <polygon points="0,0 -32,-10 -10,-10" fill="url(#starLight)" />
        <polygon points="0,0 -32,-10 -12,5" fill="url(#starShadow)" />

        {/* Central golden highlight */}
        <circle cx="0" cy="0" r="2.5" fill="#FFFBEB" />
      </g>
    </svg>
  );
}

export function BrandLogo({
  variant = 'compact',
  className = '',
  showLink = true,
}: BrandLogoProps) {
  const content = (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className="relative shrink-0 flex items-center justify-center">
        <ShieldEmblem
          className={
            variant === 'emblem'
              ? 'w-10 h-12'
              : variant === 'footer'
              ? 'w-12 h-14'
              : 'w-10 h-12'
          }
        />
      </div>

      {variant !== 'emblem' && (
        <div className="flex flex-col text-left leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold tracking-wider text-xl sm:text-2xl text-white drop-shadow-sm font-sans">
              S.S. <span className="text-[#D4AF37]">AGENCY</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase text-[#D4AF37]">
              SECURITY SERVICES
            </span>
          </div>

          {variant === 'footer' && (
            <span className="text-[11px] text-slate-400 italic tracking-wide mt-0.5 font-medium">
              Your Safety, Our Priority
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (!showLink) {
    return content;
  }

  return (
    <Link
      href="/"
      className="group inline-flex items-center transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-md"
      aria-label="S.S. Agency Security Services Home"
    >
      {content}
    </Link>
  );
}
