'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  items: {
    image: string;
    title: string;
    caption?: string;
  }[];
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({
  isOpen,
  onClose,
  currentIndex,
  items,
  onPrev,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 text-white hover:bg-[#D4AF37] hover:text-[#031225] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Buttons */}
      {items.length > 1 && (
        <>
          <button
            onClick={onPrev}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-[#D4AF37] hover:text-[#031225] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={onNext}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-[#D4AF37] hover:text-[#031225] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Main Image Container */}
      <div className="relative max-w-5xl w-full h-[80vh] flex flex-col items-center justify-center">
        <div className="relative w-full h-full max-h-[70vh]">
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Captions */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <p className="text-white text-base sm:text-lg font-semibold tracking-wide">
            {currentItem.title}
          </p>
          {currentItem.caption && (
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              {currentItem.caption}
            </p>
          )}
          <span className="text-[11px] text-[#D4AF37] tracking-wider uppercase font-semibold mt-2 inline-block">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      </div>
    </div>
  );
}
