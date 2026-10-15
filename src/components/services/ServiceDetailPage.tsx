'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/layout/PageHero';
import { ContactCTASection } from '@/components/home/ContactCTASection';
import { ServiceDetail } from '@/types';
import { SERVICES } from '@/data/services';
import {
  ShieldCheck,
  ChefHat,
  Sparkles,
  CarFront,
  ArrowUpRight,
  Check,
  ChevronDown,
  HelpCircle,
  Phone,
} from 'lucide-react';
import { COMPANY } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="size-5 text-brand" />,
  ChefHat: <ChefHat className="size-5 text-brand" />,
  Sparkles: <Sparkles className="size-5 text-brand" />,
  CarFront: <CarFront className="size-5 text-brand" />,
};

export function ServiceDetailPage({ service }: { service: ServiceDetail }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const relatedServices = SERVICES.filter((s) => s.id !== service.id);

  return (
    <>
      <PageHero
        title={service.title}
        eyebrow={service.category}
        subtitle={service.metaDescription}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: service.shortTitle },
        ]}
      />

      <section className="max-w-6xl mx-auto px-6 py-12 sm:px-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Scope, Use Cases, Benefits, FAQs */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <article className="card-chai p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg border border-card-edge flex items-center justify-center bg-card">
                  {iconMap[service.iconName]}
                </div>
                <h2 className="font-montserrat text-lg sm:text-xl font-semibold text-foreground">
                  Service overview
                </h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.overview}
              </p>
            </article>

            {/* Scope of Service Breakdown */}
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Operational coverage
                </span>
                <h3 className="text-xl font-medium text-foreground tracking-tight">
                  Scope of service
                </h3>
              </div>

              <div className="space-y-4">
                {service.scopeOfService.map((item, idx) => (
                  <div key={item.title} className="card-chai p-5 sm:p-6 space-y-2">
                    <span className="font-mono text-xs text-muted-foreground">
                      Phase 0{idx + 1}
                    </span>
                    <h4 className="font-montserrat text-base font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-3">{item.description}</p>
                    <div className="space-y-1.5 pt-1">
                      {item.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Check className="size-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Potential Use Cases */}
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Application scenarios
                </span>
                <h3 className="text-xl font-medium text-foreground tracking-tight">
                  Potential use cases
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.potentialUseCases.map((useCase) => (
                  <div key={useCase.title} className="card-chai p-5">
                    <h4 className="font-montserrat text-sm font-semibold text-foreground mb-1.5">
                      {useCase.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Client advantages
                </span>
                <h3 className="text-xl font-medium text-foreground tracking-tight">
                  Service benefits
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit) => (
                  <div key={benefit.title} className="card-chai p-5">
                    <h4 className="font-montserrat text-sm font-semibold text-foreground mb-1.5">
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="size-4 text-brand" />
                <h3 className="text-xl font-medium text-foreground tracking-tight">
                  Frequently asked questions
                </h3>
              </div>

              <div className="space-y-2.5">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={faq.question} className="card-chai overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-foreground hover:text-brand transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`size-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-brand' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-muted-foreground leading-relaxed border-t border-card-edge">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Quote CTA Box */}
            <div className="card-chai p-6 space-y-4">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider block">
                Direct enquiry
              </span>
              <h3 className="font-montserrat text-base font-semibold text-foreground">
                Deploy {service.shortTitle} in Sambalpur
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Submit a customized quote request to review staff numbers, shift hours, and service arrangements.
              </p>

              <div className="space-y-2.5 pt-2">
                <Link
                  href={`/request-quote?service=${encodeURIComponent(service.title)}`}
                  className="btn-asym inline-flex h-9 w-full items-center justify-center gap-2 bg-neutral-900 text-xs font-medium text-white transition-colors duration-200 hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                >
                  <span>Request a quote</span>
                  <ArrowUpRight className="-ml-1 size-3.5" />
                </Link>

                <a
                  href={`tel:${COMPANY.phone}`}
                  className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-md border border-border text-xs font-medium text-foreground hover:bg-muted transition-colors"
                >
                  <Phone className="size-3 text-brand" />
                  <span>Call {COMPANY.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Related Services */}
            <div className="card-chai p-5 space-y-3">
              <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                Other services
              </h4>
              <div className="space-y-1">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/services/${rel.slug}`}
                    className="block p-2.5 rounded-md hover:bg-muted transition-colors group"
                  >
                    <div className="text-xs font-medium text-foreground group-hover:text-brand flex items-center justify-between">
                      <span>{rel.title}</span>
                      <ArrowUpRight className="size-3 text-muted-foreground group-hover:text-brand" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}
