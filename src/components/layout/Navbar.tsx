'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { NAV_LINKS, COMPANY } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/50 py-4 sm:py-4.5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo in Light Theme */}
          <div className="flex items-center">
            <BrandLogo variant="compact" theme="light" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {NAV_LINKS.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      className={cn(
                        'flex items-center gap-1.5 px-3.5 py-2 text-sm font-bold rounded-md transition-colors relative group',
                        isActive
                          ? 'text-[#B45309]'
                          : 'text-slate-700 hover:text-[#061A32]'
                      )}
                      aria-expanded={servicesDropdownOpen}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          servicesDropdownOpen ? 'rotate-180 text-[#B45309]' : ''
                        )}
                      />
                      <span
                        className={cn(
                          'absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#B45309] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left',
                          isActive && 'scale-x-100'
                        )}
                      />
                    </button>

                    {/* Services Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-64 pt-2 animate-in fade-in zoom-in-95 duration-150">
                        <div className="p-2 bg-white rounded-xl border border-slate-200 shadow-2xl space-y-1">
                          {item.children.map((subItem) => {
                            const isSubActive = pathname === subItem.href;
                            return (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className={cn(
                                  'flex items-center justify-between px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors',
                                  isSubActive
                                    ? 'bg-amber-50 text-[#B45309] font-bold'
                                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                                )}
                              >
                                {subItem.label}
                                {isSubActive && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#B45309]" />
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'px-3.5 py-2 text-sm font-bold rounded-md transition-colors relative group',
                    isActive
                      ? 'text-[#B45309]'
                      : 'text-slate-700 hover:text-[#061A32]'
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      'absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#B45309] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left',
                      isActive && 'scale-x-100'
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right: Phone & Request Quote CTA */}
          <div className="hidden sm:flex items-center gap-4 xl:gap-6">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 text-slate-800 hover:text-[#B45309] transition-colors text-xs sm:text-sm font-bold group"
              aria-label={`Call S.S. Agency at ${COMPANY.phoneDisplay}`}
            >
              <div className="p-2 rounded-full bg-amber-100 text-[#B45309] group-hover:bg-[#B45309] group-hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="tracking-wide hidden md:inline">{COMPANY.phoneDisplay}</span>
            </a>

            <Link
              href="/request-quote"
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-amber-600 via-[#B45309] to-amber-700 rounded-lg shadow-md hover:shadow-lg hover:shadow-amber-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/request-quote"
              className="sm:hidden px-3 py-1.5 text-xs font-bold uppercase text-white bg-[#B45309] rounded-md shadow-sm"
            >
              Quote
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 hover:text-[#B45309] focus:outline-none focus:ring-2 focus:ring-[#B45309]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sliding Menu Drawer in Light Theme */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white/98 backdrop-blur-2xl border-b border-slate-200 shadow-2xl animate-in slide-in-from-top-3 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="px-5 pt-3 pb-8 space-y-3">
            {NAV_LINKS.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label} className="border-b border-slate-100 pb-2">
                    <span className="block px-3 py-2 text-xs font-bold tracking-widest uppercase text-[#B45309]">
                      {item.label}
                    </span>
                    <div className="pl-3 space-y-1 mt-1">
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className={cn(
                            'block px-3 py-2 text-sm rounded-lg transition-colors',
                            pathname === subItem.href
                              ? 'bg-amber-50 text-[#B45309] font-bold'
                              : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                          )}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2.5 text-base font-bold rounded-lg transition-colors border-b border-slate-100',
                    pathname === item.href
                      ? 'bg-amber-50 text-[#B45309]'
                      : 'text-slate-800 hover:bg-slate-50'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Direct Contact Links in Mobile Menu */}
            <div className="pt-4 space-y-3">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-slate-100 text-[#061A32] font-bold text-sm border border-slate-200"
              >
                <Phone className="w-4 h-4 text-[#B45309]" />
                Call {COMPANY.phoneDisplay}
              </a>

              <Link
                href="/request-quote"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-amber-600 to-[#B45309] text-white font-bold text-sm shadow-md"
              >
                Request a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
