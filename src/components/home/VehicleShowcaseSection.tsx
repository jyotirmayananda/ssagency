'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { Highlight } from '@/components/chaiui/highlight';
import { Lightbox } from '@/components/ui/Lightbox';
import { FLEET_VEHICLES } from '@/data/fleet';

export function VehicleShowcaseSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const featured = FLEET_VEHICLES[0];
  const supporting = FLEET_VEHICLES.slice(1, 4);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 sm:px-12 sm:py-16">
      {/* Section Head */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div className="space-y-2">
          <h2 className="text-2xl font-medium sm:text-[30px] text-foreground tracking-tight">
            Our vehicle fleet
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Mobile patrol and supervisory vehicles in active service, providing{' '}
            <Highlight>rapid response coverage</Highlight>.
          </p>
        </div>

        <Link
          href="/fleet"
          className="inline-flex h-9 items-center gap-2 rounded-md bg-[#d4d4d866] px-4 font-montserrat text-xs sm:text-sm text-[#52525b] hover:bg-[#d4d4d8] dark:bg-[#71717a33] dark:text-[#d4d4d8] dark:hover:bg-black/70 transition-colors w-fit"
        >
          <span>Explore complete fleet</span>
          <ArrowUpRight className="-ml-1 size-3.5" />
        </Link>
      </div>

      {/* ChaiUI Masonry Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Large Featured Card */}
        <div className="lg:col-span-7">
          <article
            onClick={() => openLightbox(0)}
            className="card-chai group relative flex flex-col justify-between overflow-hidden cursor-pointer h-full min-h-[380px] sm:opacity-90 sm:hover:opacity-100 transition-opacity"
          >
            <div className="relative aspect-[16/10] sm:aspect-auto sm:h-full w-full overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
              
              <div className="absolute top-3 right-3 size-8 rounded-md bg-black/60 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="size-4" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white space-y-1.5">
                <span className="font-mono text-[10px] tracking-wider text-orange-200 uppercase">
                  Featured Formation
                </span>
                <h3 className="font-montserrat text-lg sm:text-xl font-semibold leading-snug">
                  {featured.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2 max-w-lg">
                  {featured.description}
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Supporting Fleet Cards */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {supporting.map((item, idx) => (
            <article
              key={item.id}
              onClick={() => openLightbox(idx + 1)}
              className="card-chai group relative flex items-center overflow-hidden cursor-pointer h-32 sm:opacity-90 sm:hover:opacity-100 transition-opacity"
            >
              <div className="relative w-36 h-full shrink-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="180px"
                  className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between min-w-0">
                <div>
                  {item.plateNumber && (
                    <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                      {item.plateNumber}
                    </span>
                  )}
                  <h4 className="font-montserrat text-sm font-semibold text-foreground line-clamp-1 mt-0.5">
                    {item.title}
                  </h4>
                </div>

                <p className="text-xs text-muted-foreground line-clamp-1">
                  {item.details.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

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
