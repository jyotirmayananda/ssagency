'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { NAV_LINKS, COMPANY } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ThemeSwitcher } from '@/components/chaiui/theme-switcher';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    handleScroll();
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
        'sticky top-0 z-50 transition-[backdrop-filter,background] duration-300 border-b border-transparent',
        isScrolled
          ? 'bg-background/70 backdrop-blur-md border-border'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 sm:px-6 sm:py-4 md:px-12">
        <div className="flex items-center justify-between gap-3 sm:gap-5">
          {/* Official Brand Logo */}
          <BrandLogo variant="compact" size="md" priority />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
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
                        'flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand',
                        isActive
                          ? 'text-foreground font-semibold'
                          : 'text-neutral-700 hover:text-foreground dark:text-neutral-300 dark:hover:text-white'
                      )}
                      aria-expanded={servicesDropdownOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          'w-3.5 h-3.5 transition-transform duration-200',
                          servicesDropdownOpen ? 'rotate-180 text-brand' : ''
                        )}
                      />
                    </button>

                    {/* Services Dropdown in ChaiUI frosted style */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full -left-4 w-60 pt-2 animate-in fade-in zoom-in-95 duration-150">
                        <div className="p-1.5 rounded-xl border border-card-edge bg-background/85 backdrop-blur-lg space-y-0.5">
                          {item.children.map((subItem) => {
                            const isSubActive = pathname === subItem.href;
                            return (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className={cn(
                                  'flex items-center justify-between px-3 py-2 text-xs sm:text-sm rounded-lg transition-colors',
                                  isSubActive
                                    ? 'bg-muted text-foreground font-semibold'
                                    : 'text-neutral-700 hover:text-brand hover:bg-muted/50 dark:text-neutral-300'
                                )}
                              >
                                <span>{subItem.label}</span>
                                {isSubActive && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
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
                    'text-sm font-medium transition-colors hover:text-brand',
                    isActive
                      ? 'text-foreground font-semibold'
                      : 'text-neutral-700 hover:text-foreground dark:text-neutral-300 dark:hover:text-white'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Theme Switcher & ChaiUI Asymmetric Solid Button */}
          <div className="flex items-center gap-3">
            <ThemeSwitcher />

            <Link
              href="/request-quote"
              className="hidden sm:inline-flex btn-asym h-9 items-center gap-2 bg-neutral-900 px-4 text-sm font-medium text-white transition-colors duration-200 hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              <span>Request a quote</span>
              <ArrowUpRight className="-ml-1 size-4" />
            </Link>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex size-9 items-center justify-center rounded-md text-foreground transition-colors hover:text-brand"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sliding Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="px-6 py-5 space-y-4">
            {NAV_LINKS.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label} className="border-b border-border/40 pb-3">
                    <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      {item.label}
                    </span>
                    <div className="pl-2 space-y-1">
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className={cn(
                            'block py-1.5 text-sm transition-colors',
                            pathname === subItem.href
                              ? 'text-foreground font-semibold'
                              : 'text-muted-foreground hover:text-brand'
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
                    'block py-2 text-base transition-colors border-b border-border/40',
                    pathname === item.href
                      ? 'text-foreground font-semibold'
                      : 'text-muted-foreground hover:text-brand'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-2">
              <Link
                href="/request-quote"
                className="btn-asym flex h-10 w-full items-center justify-center gap-2 bg-neutral-900 text-sm font-medium text-white dark:bg-white dark:text-black"
              >
                <span>Request a quote</span>
                <ArrowUpRight className="-ml-1 size-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
