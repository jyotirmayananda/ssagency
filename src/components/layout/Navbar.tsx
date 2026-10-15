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
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[#031225]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-[#0B2B50]/60 py-3'
          : 'bg-gradient-to-b from-[#031225]/90 via-[#031225]/50 to-transparent py-4 sm:py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Brand Logo */}
          <div className="flex items-center">
            <BrandLogo variant="compact" />
          </div>

          {/* Center: Desktop Navigation Links */}
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
                        'flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-md transition-colors relative group',
                        isActive
                          ? 'text-[#F4CC55]'
                          : 'text-slate-200 hover:text-white'
                      )}
                      aria-expanded={servicesDropdownOpen}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          servicesDropdownOpen ? 'rotate-180 text-[#D4AF37]' : ''
                        )}
                      />
                      {/* Animated bottom line */}
                      <span
                        className={cn(
                          'absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left',
                          isActive && 'scale-x-100'
                        )}
                      />
                    </button>

                    {/* Services Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-64 pt-2 animate-in fade-in zoom-in-95 duration-150">
                        <div className="p-2 bg-[#061A32] rounded-xl border border-[#D4AF37]/30 shadow-2xl backdrop-blur-xl space-y-1">
                          {item.children.map((subItem) => {
                            const isSubActive = pathname === subItem.href;
                            return (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className={cn(
                                  'flex items-center justify-between px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors',
                                  isSubActive
                                    ? 'bg-[#0B2B50] text-[#F4CC55] font-semibold'
                                    : 'text-slate-300 hover:bg-[#0B2B50]/60 hover:text-white'
                                )}
                              >
                                {subItem.label}
                                {isSubActive && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
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
                    'px-3.5 py-2 text-sm font-semibold rounded-md transition-colors relative group',
                    isActive
                      ? 'text-[#F4CC55]'
                      : 'text-slate-200 hover:text-white'
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      'absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left',
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
              className="flex items-center gap-2 text-slate-200 hover:text-[#F4CC55] transition-colors text-xs sm:text-sm font-semibold group"
              aria-label={`Call S.S. Agency at ${COMPANY.phoneDisplay}`}
            >
              <div className="p-2 rounded-full bg-[#0B2B50] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#031225] transition-colors">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="tracking-wide hidden md:inline">{COMPANY.phoneDisplay}</span>
            </a>

            <Link
              href="/request-quote"
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#031225] bg-gradient-to-r from-[#F4CC55] via-[#D4AF37] to-[#B45309] rounded-lg shadow-md hover:shadow-lg hover:shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/request-quote"
              className="sm:hidden px-3 py-1.5 text-xs font-bold uppercase text-[#031225] bg-[#D4AF37] rounded-md"
            >
              Quote
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#061A32] border border-[#0B2B50] text-slate-200 hover:text-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sliding Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#061A32]/98 backdrop-blur-2xl border-b border-[#0B2B50] shadow-2xl animate-in slide-in-from-top-3 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="px-5 pt-3 pb-8 space-y-3">
            {NAV_LINKS.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label} className="border-b border-[#0B2B50]/60 pb-2">
                    <span className="block px-3 py-2 text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
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
                              ? 'bg-[#0B2B50] text-[#F4CC55] font-semibold'
                              : 'text-slate-300 hover:text-white'
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
                    'block px-3 py-2.5 text-base font-semibold rounded-lg transition-colors border-b border-[#0B2B50]/40',
                    pathname === item.href
                      ? 'bg-[#0B2B50] text-[#F4CC55]'
                      : 'text-slate-200 hover:text-white'
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
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#0B2B50] text-[#F4CC55] font-semibold text-sm border border-[#D4AF37]/30"
              >
                <Phone className="w-4 h-4" />
                Call {COMPANY.phoneDisplay}
              </a>

              <Link
                href="/request-quote"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-[#F4CC55] to-[#D4AF37] text-[#031225] font-bold text-sm shadow-md"
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
