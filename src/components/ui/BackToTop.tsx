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
      className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-[#061A32]/90 border border-[#D4AF37]/40 text-[#D4AF37] shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#031225] hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] print:hidden"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
