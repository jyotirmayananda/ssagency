'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  Shield,
} from 'lucide-react';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { COMPANY, GOOGLE_MAPS_DIRECTIONS_URL } from '@/lib/constants';
import { buildWhatsAppLink } from '@/lib/utils';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#020B17] border-t border-[#0B2B50] text-slate-300 relative overflow-hidden">
      {/* Decorative top accent gold line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60" />

      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0B2B50]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <BrandLogo variant="footer" theme="dark" />
            <p className="text-slate-400 text-sm leading-relaxed pt-2">
              S.S. Agency provides trusted security personnel and dependable manpower
              solutions designed to maintain safe environments and smooth daily operations
              across Sambalpur and Western Odisha.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold hover:bg-[#25D366] hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Available</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#F4CC55] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#F4CC55] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#F4CC55] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/fleet"
                  className="hover:text-[#F4CC55] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Our Vehicle Fleet
                </Link>
              </li>
              <li>
                <Link
                  href="/request-quote"
                  className="hover:text-[#F4CC55] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#F4CC55] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#F4CC55] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Main Services */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services/security-guards"
                  className="group block p-2.5 rounded-lg bg-[#061A32]/60 border border-[#0B2B50] hover:border-[#D4AF37]/50 hover:bg-[#061A32] transition-colors"
                >
                  <div className="font-semibold text-white group-hover:text-[#F4CC55] flex items-center justify-between">
                    <span>Security Guard Services</span>
                    <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Offices, premises, gates & access supervision
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cook-services"
                  className="group block p-2.5 rounded-lg bg-[#061A32]/60 border border-[#0B2B50] hover:border-[#D4AF37]/50 hover:bg-[#061A32] transition-colors"
                >
                  <div className="font-semibold text-white group-hover:text-[#F4CC55]">
                    Cook Services
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Residential, institutional & mess kitchens
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cleaning-staff"
                  className="group block p-2.5 rounded-lg bg-[#061A32]/60 border border-[#0B2B50] hover:border-[#D4AF37]/50 hover:bg-[#061A32] transition-colors"
                >
                  <div className="font-semibold text-white group-hover:text-[#F4CC55]">
                    Cleaning Staff Services
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Workplaces, facilities & housekeeping
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/driver-services"
                  className="group block p-2.5 rounded-lg bg-[#061A32]/60 border border-[#0B2B50] hover:border-[#D4AF37]/50 hover:bg-[#061A32] transition-colors"
                >
                  <div className="font-semibold text-white group-hover:text-[#F4CC55]">
                    Four-Wheeler Driver Services
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Personal, executive & transit drivers
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              Sambalpur Office
            </h3>

            <div className="flex items-start gap-3 text-sm text-slate-300">
              <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-medium text-white">{COMPANY.address.line1}</p>
                <p>{COMPANY.address.locality}</p>
                <p>
                  {COMPANY.address.city} – {COMPANY.address.pin}, {COMPANY.address.state},{' '}
                  {COMPANY.address.country}
                </p>
                <a
                  href={GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#F4CC55] hover:underline pt-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-[#0B2B50]/60">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-white hover:text-[#F4CC55] font-semibold"
                >
                  {COMPANY.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <div className="space-y-1">
                  <a
                    href={`mailto:${COMPANY.primaryEmail}`}
                    className="block text-slate-300 hover:text-[#F4CC55] text-xs sm:text-sm break-all"
                  >
                    {COMPANY.primaryEmail}
                  </a>
                  <a
                    href={`mailto:${COMPANY.alternateEmail}`}
                    className="block text-slate-400 hover:text-[#F4CC55] text-xs break-all"
                  >
                    {COMPANY.alternateEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="mt-14 pt-8 border-t border-[#0B2B50]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {COMPANY.legalName}. All rights reserved. Sambalpur, Odisha, India.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#F4CC55] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#F4CC55] transition-colors">
              Contact Us
            </Link>
            <Link href="/request-quote" className="hover:text-[#F4CC55] transition-colors">
              Enquire Online
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
