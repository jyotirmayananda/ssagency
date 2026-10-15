import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { Phone, Check } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Request a quote: S.S. Agency Security Services',
  description:
    'Submit a staffing requirement for security guards, cook services, cleaning staff, or four-wheeler drivers in Sambalpur, Odisha.',
};

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        title="Request a service quote"
        eyebrow="Custom deployment"
        subtitle="Share staffing requirements for commercial, institutional, or residential properties in Sambalpur with tailored proposals."
        highlightPhrase="tailored proposals"
        breadcrumbs={[{ label: 'Request a quote' }]}
      />

      <section className="max-w-6xl mx-auto px-6 py-12 sm:px-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Guidance & Direct Assistance */}
          <div className="lg:col-span-4 space-y-6">
            <div className="card-chai p-6 space-y-4">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider block">
                Proposal process
              </span>
              <h2 className="font-montserrat text-lg font-semibold text-foreground">
                Transparent deployment planning
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Every site possesses specific access layouts, shift rotations, and post specifications. By gathering your exact requirements, our supervisory team in Sambalpur recommends appropriate manpower options.
              </p>

              <div className="space-y-2 pt-3 border-t border-card-edge">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="size-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>No hidden overheads or unverified claims</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="size-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Instant WhatsApp quote summaries</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="size-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Custom shift rotations (8h / 12h)</span>
                </div>
              </div>
            </div>

            {/* Direct Telephone */}
            <div className="card-chai p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-lg border border-card-edge flex items-center justify-center bg-card text-brand">
                  <Phone className="size-4" />
                </div>
                <div>
                  <h3 className="font-montserrat text-sm font-semibold text-foreground">
                    Prefer to talk directly?
                  </h3>
                  <p className="text-xs text-muted-foreground">Sambalpur office desk</p>
                </div>
              </div>
              <a
                href={`tel:${COMPANY.phone}`}
                className="btn-asym inline-flex h-9 w-full items-center justify-center bg-neutral-900 text-xs font-medium text-white transition-colors duration-200 hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
              >
                {COMPANY.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className="lg:col-span-8">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
