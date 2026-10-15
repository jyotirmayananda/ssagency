'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { ContactCTASection } from '@/components/home/ContactCTASection';
import { Lightbox } from '@/components/ui/Lightbox';
import { FLEET_VEHICLES } from '@/data/fleet';
import { Eye, CheckCircle2 } from 'lucide-react';

const categories = [
  { label: 'All Vehicles', value: 'all' },
  { label: 'Formation Lineup', value: 'formation' },
  { label: 'Field Units', value: 'field-unit' },
  { label: 'Patrol Units', value: 'patrol' },
];

export default function FleetPage() {
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
        title="Our Vehicle Gallery"
        eyebrow="Fleet & Operations"
        subtitle="Explore the Mahindra Bolero patrol and operational vehicles supporting S.S. Agency’s security deployments across Sambalpur, Odisha."
        breadcrumbs={[{ label: 'Vehicle Fleet' }]}
        backgroundImage="/images/fleet/fleet-formation-patrol.jpg"
      />

      <section className="py-20 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all ${
                  selectedCategory === cat.value
                    ? 'bg-[#061A32] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-sm'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle, idx) => (
              <div
                key={vehicle.id}
                className="rounded-2xl bg-white border border-slate-200/90 hover:border-[#B45309] shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Lightbox click */}
                  <div
                    onClick={() => openLightbox(idx)}
                    className="relative h-64 sm:h-72 w-full overflow-hidden cursor-pointer bg-slate-900"
                  >
                    <Image
                      src={vehicle.image}
                      alt={vehicle.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />

                    <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-4 h-4" />
                    </div>

                    {vehicle.plateNumber && (
                      <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded bg-black/80 border border-amber-400/50 text-amber-300 text-[11px] font-mono font-bold">
                        {vehicle.plateNumber}
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#B45309]">
                      {vehicle.model}
                    </span>
                    <h3 className="text-xl font-bold text-[#061A32] group-hover:text-[#B45309] transition-colors">
                      {vehicle.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {vehicle.description}
                    </p>

                    {/* Features checklist */}
                    <div className="pt-3 border-t border-slate-100 space-y-1.5">
                      {vehicle.details.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B45309] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => openLightbox(idx)}
                    className="w-full py-2.5 rounded-lg bg-slate-100 text-[#061A32] hover:bg-[#061A32] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#B45309]" />
                    <span>View High-Res Photo</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Operational Integrity Disclaimer */}
          <div className="mt-16 p-6 rounded-xl bg-amber-50/70 border border-amber-200 text-center max-w-3xl mx-auto">
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong className="text-[#061A32]">Notice on Fleet Photography:</strong> All images
              showcased above feature genuine operational vehicles deployed by S.S. Agency in
              Sambalpur, Odisha. We do not use generic stock vehicle renders.
            </p>
          </div>
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
