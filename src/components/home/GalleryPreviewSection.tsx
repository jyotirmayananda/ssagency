'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, ArrowRight, Camera } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/MotionWrapper';
import { Lightbox } from '@/components/ui/Lightbox';
import { GALLERY_PHOTOS } from '@/data/gallery';

export function GalleryPreviewSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const previewPhotos = GALLERY_PHOTOS.slice(0, 4);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-24 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[#92400E] text-xs font-bold tracking-widest uppercase mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Evidence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#061A32] tracking-tight uppercase font-sans">
            Photographic <span className="text-[#B45309]">Showcase</span>
          </h2>

          <div className="w-20 h-1 bg-[#B45309] mx-auto my-4 rounded-full" />

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Real moments from our vehicle fleet, supervisory personnel, and operational lineup
            in Sambalpur, Odisha.
          </p>
        </FadeIn>

        {/* 4 Photo Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewPhotos.map((photo, idx) => (
            <StaggerItem key={photo.id}>
              <div
                onClick={() => openLightbox(idx)}
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer border border-slate-200 hover:border-[#B45309] shadow-md hover:shadow-xl bg-slate-900 transition-all duration-300"
              >
                <Image
                  src={photo.image}
                  alt={photo.altText}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />

                {/* Hover overlay icon */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300">
                    {photo.category}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors mt-0.5 line-clamp-1">
                    {photo.title}
                  </h4>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View Full Gallery CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider text-white bg-[#061A32] hover:bg-[#0B2B50] shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={currentIndex}
        items={previewPhotos.map((p) => ({
          image: p.image,
          title: p.title,
          caption: p.caption,
        }))}
        onPrev={() =>
          setCurrentIndex((prev) => (prev > 0 ? prev - 1 : previewPhotos.length - 1))
        }
        onNext={() =>
          setCurrentIndex((prev) => (prev < previewPhotos.length - 1 ? prev + 1 : 0))
        }
      />
    </section>
  );
}
