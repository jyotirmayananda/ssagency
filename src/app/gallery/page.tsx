'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { ContactCTASection } from '@/components/home/ContactCTASection';
import { Lightbox } from '@/components/ui/Lightbox';
import { GALLERY_PHOTOS } from '@/data/gallery';
import { Eye, Camera } from 'lucide-react';

const categories = [
  { label: 'All Photos', value: 'all' },
  { label: 'Fleet Formation', value: 'fleet' },
  { label: 'Operations & Patrol', value: 'operations' },
  { label: 'Team & Presentation', value: 'team' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredPhotos =
    activeCategory === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <PageHero
        title="Agency Photo Gallery"
        eyebrow="Visual Portfolio"
        subtitle="Original photographic records documenting S.S. Agency’s patrol vehicles, field coordinators, and operational lineup in Sambalpur, Odisha."
        breadcrumbs={[{ label: 'Photo Gallery' }]}
        backgroundImage="/images/about/company-team-lineup.jpg"
      />

      <section className="py-20 sm:py-24 bg-[#031225]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all ${
                  activeCategory === cat.value
                    ? 'bg-[#D4AF37] text-[#031225] shadow-lg shadow-amber-500/20'
                    : 'bg-[#061A32] text-slate-300 hover:text-white border border-[#0B2B50]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(idx)}
                className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden cursor-pointer border border-[#0B2B50] hover:border-[#D4AF37] shadow-xl bg-[#061A32] transition-all duration-300"
              >
                <Image
                  src={photo.image}
                  alt={photo.altText}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#031225] via-[#031225]/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

                <div className="absolute top-3 right-3 p-2.5 rounded-full bg-[#031225]/80 text-[#D4AF37] border border-[#D4AF37]/30 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <Eye className="w-4 h-4" />
                </div>

                <div className="absolute bottom-0 inset-x-0 p-6 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                    {photo.category}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#F4CC55] transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={currentIndex}
        items={filteredPhotos.map((p) => ({
          image: p.image,
          title: p.title,
          caption: p.caption,
        }))}
        onPrev={() =>
          setCurrentIndex((prev) =>
            prev > 0 ? prev - 1 : filteredPhotos.length - 1
          )
        }
        onNext={() =>
          setCurrentIndex((prev) =>
            prev < filteredPhotos.length - 1 ? prev + 1 : 0
          )
        }
      />

      <ContactCTASection />
    </>
  );
}
