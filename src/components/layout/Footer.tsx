'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative max-w-6xl mx-auto px-6 font-sans sm:px-12 pt-16 pb-12 text-sm text-muted-foreground before:absolute before:top-0 before:left-1/2 before:h-px before:w-full before:max-w-[1440px] before:-translate-x-1/2 before:bg-amber-600 before:opacity-10 before:[mask-image:linear-gradient(90deg,transparent_0%,black_40%,black_60%,transparent_100%)] dark:before:bg-orange-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Brand Wordmark & Tagline */}
        <div className="space-y-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-md border border-border flex items-center justify-center bg-card text-foreground">
              <Shield className="w-3.5 h-3.5 text-brand" />
            </div>
            <span className="font-brand text-base font-medium tracking-tight text-foreground flex items-center">
              S.S. Agency
              <span
                aria-hidden="true"
                className="size-1 rounded-full bg-brand ml-1"
              />
            </span>
          </Link>

          <p className="text-xs text-muted-foreground leading-relaxed">
            Professional security personnel and essential manpower services for businesses, institutions, and properties across Sambalpur and Western Odisha.
          </p>

          <p className="text-[11px] font-mono text-muted-foreground">
            PSARA Compliant &bull; Police Verified
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-mono text-xs text-foreground uppercase tracking-wider mb-4">
            Navigation
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/" className="hover:text-brand transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-brand transition-colors">
                About us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-brand transition-colors">
                All services
              </Link>
            </li>
            <li>
              <Link href="/fleet" className="hover:text-brand transition-colors">
                Our vehicle fleet
              </Link>
            </li>
            <li>
              <Link href="/request-quote" className="hover:text-brand transition-colors">
                Request a quote
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand transition-colors">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Main Services */}
        <div>
          <h3 className="font-mono text-xs text-foreground uppercase tracking-wider mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/services/security-guards" className="hover:text-brand transition-colors">
                Security guard services
              </Link>
            </li>
            <li>
              <Link href="/services/cook-services" className="hover:text-brand transition-colors">
                Cook services
              </Link>
            </li>
            <li>
              <Link href="/services/cleaning-staff" className="hover:text-brand transition-colors">
                Cleaning staff services
              </Link>
            </li>
            <li>
              <Link href="/services/driver-services" className="hover:text-brand transition-colors">
                Four-wheeler driver services
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Sambalpur Office */}
        <div className="space-y-3 text-xs">
          <h3 className="font-mono text-xs text-foreground uppercase tracking-wider mb-4">
            Sambalpur office
          </h3>

          <div className="flex items-start gap-2 text-muted-foreground">
            <MapPin className="size-3.5 text-brand shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {COMPANY.address.line1}, {COMPANY.address.locality}, {COMPANY.address.city} {COMPANY.address.pin}, Odisha
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="size-3.5 text-brand shrink-0" />
            <a href={`tel:${COMPANY.phone}`} className="text-foreground hover:text-brand transition-colors font-medium">
              {COMPANY.phoneDisplay}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="size-3.5 text-brand shrink-0" />
            <a href={`mailto:${COMPANY.primaryEmail}`} className="hover:text-brand transition-colors">
              {COMPANY.primaryEmail}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p>
          &copy; {currentYear} {COMPANY.legalName}. All rights reserved. Sambalpur, Odisha, India.
        </p>
        <div className="flex items-center gap-5">
          <Link href="/privacy-policy" className="hover:text-brand transition-colors">
            Privacy policy
          </Link>
          <Link href="/contact" className="hover:text-brand transition-colors">
            Contact us
          </Link>
          <Link href="/request-quote" className="hover:text-brand transition-colors">
            Enquire online
          </Link>
        </div>
      </div>
    </footer>
  );
}
