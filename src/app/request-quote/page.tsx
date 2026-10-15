import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { Phone, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Request a Quote — S.S. Agency Security Services',
  description:
    'Submit a staffing requirement for security guards, cook services, cleaning staff, or four-wheeler drivers in Sambalpur, Odisha.',
};

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        title="Request a Service Quote"
        eyebrow="Custom Deployment"
        subtitle="Share your staffing requirements for commercial, institutional, or residential properties in Sambalpur. We provide tailored proposals."
        breadcrumbs={[{ label: 'Request a Quote' }]}
        backgroundImage="/images/hero/hero-patrol-fleet.jpg"
      />

      <section className="py-20 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 4 cols: Guidance & Direct Assistance */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-8 rounded-2xl bg-white border border-slate-200 space-y-5 shadow-md">
                <span className="text-xs font-bold tracking-widest uppercase text-[#B45309]">
                  Proposal Process
                </span>
                <h2 className="text-2xl font-black text-[#061A32] uppercase tracking-tight">
                  Transparent Deployment Planning
                </h2>
                <div className="w-12 h-1 bg-[#B45309] rounded-full my-2" />
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Every site possesses specific access layouts, shift rotations, and post
                  specifications. By gathering your exact requirements, our supervisory team in
                  Sambalpur can recommend appropriate manpower options.
                </p>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                    <span>No hidden overheads or unverified claims</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                    <span>Option to receive instant WhatsApp quote summaries</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                    <span>Custom shift durations (8h / 12h / rotational)</span>
                  </div>
                </div>
              </div>

              {/* Direct Help Callout */}
              <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-amber-100 text-[#B45309]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#061A32]">Prefer to talk directly?</h3>
                    <p className="text-xs text-slate-600">Call our Sambalpur office desk</p>
                  </div>
                </div>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="block text-center w-full py-2.5 rounded-lg bg-[#061A32] hover:bg-[#0B2B50] text-xs font-bold text-white tracking-wider transition-colors shadow-sm"
                >
                  {COMPANY.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Right 8 cols: Quote Form */}
            <div className="lg:col-span-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
