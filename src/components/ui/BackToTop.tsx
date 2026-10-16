'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      type="button"
      aria-label="Back to top"
      className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-40 size-9 rounded-md border border-card-edge bg-card/90 backdrop-blur-md text-foreground transition-all hover:text-brand hover:border-card-edge-hover flex items-center justify-center outline-none focus-visible:ring-[2px] focus-visible:ring-ring print:hidden cursor-pointer shadow-sm"
    >
      <ArrowUp className="size-4" />
    </button>
  );
}
