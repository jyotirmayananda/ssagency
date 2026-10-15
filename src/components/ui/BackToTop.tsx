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
      aria-label="Back to top of page"
      className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-white/95 border border-slate-300 text-[#061A32] shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-[#061A32] hover:text-white hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B45309] print:hidden"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
