'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, ArrowRight, Shield, Maximize2 } from 'lucide-react';
import { FadeIn } from '@/components/animations/MotionWrapper';
import { Lightbox } from '@/components/ui/Lightbox';
import { FLEET_VEHICLES } from '@/data/fleet';

export function VehicleShowcaseSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const featured = FLEET_VEHICLES[0]; // 9-vehicle formation
  const supporting = FLEET_VEHICLES.slice(1, 4);

  return (
    <section className="py-24 sm:py-28 bg-[#061A32] border-t border-b border-[#0B2B50] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B2B50] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Operational Assets</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase font-sans">
            Our Vehicle <span className="text-[#D4AF37]">Showcase</span>
          </h2>

          <div className="w-20 h-1 bg-[#D4AF37] mx-auto my-4 rounded-full" />

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A closer look at the vehicles featured in our agency’s operations in Sambalpur and
            surrounding districts.
          </p>
        </FadeIn>

        {/* Asymmetrical Masonry Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Large Featured Photograph (7 cols on Desktop) */}
          <div className="lg:col-span-7">
            <div
              onClick={() => openLightbox(0)}
              className="group relative h-80 sm:h-96 lg:h-full min-h-[380px] rounded-2xl overflow-hidden cursor-pointer border border-[#0B2B50] hover:border-[#D4AF37] shadow-2xl transition-all duration-300 bg-[#031225]"
            >
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#031225] via-[#031225]/20 to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />

              {/* View Overlay Icon */}
              <div className="absolute top-4 right-4 p-2.5 rounded-full bg-[#031225]/80 border border-[#D4AF37]/40 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Details Overlay at Bottom */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded bg-[#D4AF37] text-[#031225] text-[10px] font-extrabold uppercase tracking-wider">
                  Featured Formation
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#F4CC55] transition-colors">
                  {featured.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 max-w-xl">
                  {featured.description}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#D4AF37]">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to expand high-resolution photograph</span>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Photographs (5 cols on Desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {supporting.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx + 1)}
                className="group relative h-48 sm:h-52 rounded-2xl overflow-hidden cursor-pointer border border-[#0B2B50] hover:border-[#D4AF37] shadow-lg transition-all duration-300 bg-[#031225]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#031225] via-[#031225]/30 to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />

                <div className="absolute top-3 right-3 p-2 rounded-full bg-[#031225]/80 border border-[#D4AF37]/30 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                  <div className="flex items-center gap-2">
                    {item.plateNumber && (
                      <span className="px-2 py-0.5 rounded bg-[#0B2B50] border border-[#D4AF37]/30 text-[#F4CC55] text-[10px] font-mono font-bold tracking-wider">
                        {item.plateNumber}
                      </span>
                    )}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F4CC55] transition-colors mt-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                    {item.details.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View Full Fleet CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/fleet"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wider text-[#031225] bg-gradient-to-r from-[#F4CC55] via-[#D4AF37] to-[#B45309] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Explore Complete Fleet Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={activeIndex}
        items={FLEET_VEHICLES.map((v) => ({
          image: v.image,
          title: v.title,
          caption: `${v.description} (${v.details.role})`,
        }))}
        onPrev={() =>
          setActiveIndex((prev) => (prev > 0 ? prev - 1 : FLEET_VEHICLES.length - 1))
        }
        onNext={() =>
          setActiveIndex((prev) => (prev < FLEET_VEHICLES.length - 1 ? prev + 1 : 0))
        }
      />
    </section>
  );
}
