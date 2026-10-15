'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { ContactCTASection } from '@/components/home/ContactCTASection';
import { Lightbox } from '@/components/ui/Lightbox';
import { FLEET_VEHICLES } from '@/data/fleet';
import { Eye, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { label: 'All vehicles', value: 'all' },
  { label: 'Formation lineup', value: 'formation' },
  { label: 'Field units', value: 'field-unit' },
  { label: 'Patrol units', value: 'patrol' },
];

export function FleetPageContent() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredVehicles =
    selectedCategory === 'all'
      ? FLEET_VEHICLES
      : FLEET_VEHICLES.filter((v) => v.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <PageHero
        title="Our vehicle fleet"
        eyebrow="Fleet and operations"
        subtitle="Mahindra Bolero patrol and supervisory vehicles supporting active security deployments across Sambalpur, Odisha."
        highlightPhrase="active security deployments"
        breadcrumbs={[{ label: 'Vehicle fleet' }]}
      />

      <section className="max-w-6xl mx-auto px-6 py-10 sm:px-12 sm:py-14">
        {/* ChaiUI Listing Toolbar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="flex items-center gap-3">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredVehicles.length}</span> vehicles
            </p>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span className="text-xs sm:text-sm text-muted-foreground">Sambalpur mobile patrol</span>
          </div>

          {/* ChaiUI Segmented filter */}
          <div className="flex flex-wrap overflow-hidden rounded-md border border-border bg-card p-1 gap-1">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={cn(
                  'px-3 py-1.5 rounded text-xs font-medium transition-colors',
                  selectedCategory === cat.value
                    ? 'bg-amber-100 text-amber-900 dark:bg-orange-900/40 dark:text-orange-100 font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Grid with ChaiUI card-chai */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle, idx) => (
            <article
              key={vehicle.id}
              className="card-chai group flex flex-col justify-between overflow-hidden transition-all duration-300 sm:opacity-90 sm:hover:opacity-100"
            >
              <div>
                <div
                  onClick={() => openLightbox(idx)}
                  className="relative aspect-video w-full overflow-hidden cursor-pointer bg-muted"
                >
                  <Image
                    src={vehicle.image}
                    alt={vehicle.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-2.5 right-2.5 size-7 rounded-md bg-black/60 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="size-3.5" />
                  </div>
                  {vehicle.plateNumber && (
                    <span className="absolute bottom-2.5 left-3 font-mono text-[10px] px-2 py-0.5 rounded bg-black/80 text-orange-200 border border-white/10 uppercase">
                      {vehicle.plateNumber}
                    </span>
                  )}
                </div>

                <div className="p-4 space-y-2">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider block">
                    {vehicle.model}
                  </span>
                  <h3 className="font-montserrat text-base font-semibold text-foreground">
                    {vehicle.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {vehicle.description}
                  </p>

                  <div className="pt-2 border-t border-card-edge space-y-1">
                    {vehicle.details.features.slice(0, 2).map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="size-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  type="button"
                  onClick={() => openLightbox(idx)}
                  className="w-full inline-flex h-8 items-center justify-center rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <span>View photograph</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Operational Notice */}
        <div className="mt-12 p-4 rounded-xl border border-card-edge bg-card-fill text-center max-w-2xl mx-auto">
          <p className="text-xs text-muted-foreground leading-relaxed">
            All images feature genuine operational vehicles deployed by S.S. Agency in Sambalpur, Odisha.
          </p>
        </div>
      </section>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={lightboxIndex}
        items={filteredVehicles.map((v) => ({
          image: v.image,
          title: v.title,
          caption: `${v.description} (${v.details.role})`,
        }))}
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev > 0 ? prev - 1 : filteredVehicles.length - 1
          )
        }
        onNext={() =>
          setLightboxIndex((prev) =>
            prev < filteredVehicles.length - 1 ? prev + 1 : 0
          )
        }
      />

      <ContactCTASection />
    </>
  );
}

export default function FleetPage() {
  return <FleetPageContent />;
}
