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
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  FileText,
  Phone,
} from 'lucide-react';
import { COMPANY } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />,
  ChefHat: <ChefHat className="w-8 h-8 text-[#D4AF37]" />,
  Sparkles: <Sparkles className="w-8 h-8 text-[#D4AF37]" />,
  CarFront: <CarFront className="w-8 h-8 text-[#D4AF37]" />,
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
        backgroundImage={service.heroImage}
      />

      {/* Main Content & Scope */}
      <section className="py-20 sm:py-24 bg-[#031225]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 8 cols: Scope, Use Cases, Benefits, FAQs */}
            <div className="lg:col-span-8 space-y-16">
              {/* Overview */}
              <div className="p-8 rounded-2xl bg-[#061A32] border border-[#0B2B50] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0B2B50] flex items-center justify-center">
                    {iconMap[service.iconName]}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white uppercase">
                    Service Overview
                  </h2>
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {service.overview}
                </p>
              </div>

              {/* Scope of Service Breakdown */}
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
                    Operational Coverage
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-1">
                    Scope of Service
                  </h3>
                  <div className="w-16 h-1 bg-[#D4AF37] rounded-full my-3" />
                </div>

                <div className="space-y-6">
                  {service.scopeOfService.map((item, idx) => (
                    <div
                      key={item.title}
                      className="p-7 rounded-2xl bg-[#061A32] border border-[#0B2B50] hover:border-[#D4AF37]/40 transition-colors"
                    >
                      <span className="text-xs font-mono font-bold text-[#D4AF37]">
                        Phase 0{idx + 1}
                      </span>
                      <h4 className="text-lg font-bold text-white mt-1 mb-2">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-400 mb-4">{item.description}</p>
                      <div className="space-y-2">
                        {item.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Potential Use Cases */}
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
                    Application Scenarios
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-1">
                    Potential Use Cases
                  </h3>
                  <div className="w-16 h-1 bg-[#D4AF37] rounded-full my-3" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.potentialUseCases.map((useCase) => (
                    <div
                      key={useCase.title}
                      className="p-6 rounded-xl bg-[#061A32] border border-[#0B2B50] hover:border-[#D4AF37]/40 transition-colors"
                    >
                      <h4 className="text-base font-bold text-white mb-2">{useCase.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
                    Client Advantages
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-1">
                    Service Benefits
                  </h3>
                  <div className="w-16 h-1 bg-[#D4AF37] rounded-full my-3" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.benefits.map((benefit) => (
                    <div
                      key={benefit.title}
                      className="p-6 rounded-xl bg-[#061A32] border border-[#0B2B50]"
                    >
                      <h4 className="text-base font-bold text-[#F4CC55] mb-2">{benefit.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How to Enquire Steps */}
              <div className="p-8 rounded-2xl bg-[#061A32] border border-[#0B2B50] space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
                    Simple Steps
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">How to Enquire</h3>
                </div>
                <div className="space-y-3">
                  {service.enquiryProcess.map((step, idx) => (
                    <div key={step} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="w-6 h-6 rounded-full bg-[#0B2B50] text-[#D4AF37] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs Accordion */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle className="w-5 h-5 text-[#D4AF37]" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white uppercase">
                    Frequently Asked Questions
                  </h3>
                </div>

                <div className="space-y-3">
                  {service.faqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div
                        key={faq.question}
                        className="rounded-xl bg-[#061A32] border border-[#0B2B50] overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-semibold text-white hover:text-[#F4CC55] transition-colors"
                          aria-expanded={isOpen}
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-200 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#0B2B50]/60">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right 4 cols: Sticky Sidebar with Quote CTA & Direct Call */}
            <div className="lg:col-span-4 space-y-6 sticky top-28">
              {/* Quote CTA Box */}
              <div className="p-7 rounded-2xl bg-[#061A32] border-2 border-[#D4AF37]/50 shadow-2xl space-y-5">
                <span className="inline-block px-3 py-1 rounded bg-[#D4AF37] text-[#031225] text-xs font-bold uppercase tracking-wider">
                  Direct Enquiry
                </span>
                <h3 className="text-xl font-bold text-white">
                  Book {service.shortTitle} in Sambalpur
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Submit a customized quote request to review staff numbers, shift hours, and
                  service arrangements.
                </p>

                <div className="space-y-3 pt-2">
                  <Link
                    href={`/request-quote?service=${encodeURIComponent(service.title)}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider text-[#031225] bg-gradient-to-r from-[#F4CC55] via-[#D4AF37] to-[#B45309] shadow-md hover:scale-[1.01] transition-transform"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Request Custom Quote</span>
                  </Link>

                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#0B2B50] hover:bg-[#0E3663] border border-[#D4AF37]/30 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <span>Call {COMPANY.phoneDisplay}</span>
                  </a>
                </div>
              </div>

              {/* Related Services */}
              <div className="p-6 rounded-2xl bg-[#061A32] border border-[#0B2B50] space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  Other Services
                </h4>
                <div className="space-y-2">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/services/${rel.slug}`}
                      className="block p-3 rounded-lg bg-[#031225] hover:bg-[#0B2B50] border border-[#0B2B50] hover:border-[#D4AF37]/40 transition-colors group"
                    >
                      <div className="text-xs font-bold text-white group-hover:text-[#F4CC55] flex items-center justify-between">
                        <span>{rel.title}</span>
                        <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}
