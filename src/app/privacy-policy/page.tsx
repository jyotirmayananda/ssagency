import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy — S.S. Agency Security Services',
  description:
    'Privacy Policy and data confidentiality guidelines for S.S. Agency Security Services in Sambalpur, Odisha.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        eyebrow="Legal & Compliance"
        subtitle="Our commitment to safeguarding client information and service enquiry data."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
        backgroundImage="/images/hero/hero-patrol-fleet.jpg"
      />

      <section className="py-20 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061A32] uppercase tracking-tight">
              1. Information Collection
            </h2>
            <p>
              When you submit a contact request or quote inquiry on the {COMPANY.name} website,
              we collect your name, phone number, email address, service location, and details
              regarding your requested staffing arrangement.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061A32] uppercase tracking-tight">
              2. Use of Information
            </h2>
            <p>
              The information you provide is utilized solely for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Responding to your specific security or manpower service enquiries.</li>
              <li>Preparing accurate staffing proposals and duty deployment schedules.</li>
              <li>
                Communicating with you via telephone, WhatsApp, or email regarding service
                coordination.
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061A32] uppercase tracking-tight">
              3. Confidentiality & Security
            </h2>
            <p>
              We treat client site layouts, gate protocols, and operational security requirements
              with strict confidentiality. We do not sell, rent, or trade your personal or
              business information to third-party marketing entities.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061A32] uppercase tracking-tight">
              4. Contact for Privacy Matters
            </h2>
            <p>
              If you have any questions or wish to update your contact details on file, please
              contact our office:
            </p>
            <div className="text-xs sm:text-sm text-slate-600 space-y-1 pt-2">
              <p className="font-bold text-[#061A32]">{COMPANY.legalName}</p>
              <p>{COMPANY.address.full}</p>
              <p>Phone: {COMPANY.phoneDisplay}</p>
              <p>Email: {COMPANY.primaryEmail}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
