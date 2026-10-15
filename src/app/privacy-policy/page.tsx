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

      <section className="py-20 sm:py-24 bg-[#031225]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          <div className="p-8 rounded-2xl bg-[#061A32] border border-[#0B2B50] space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
              1. Information Collection
            </h2>
            <p>
              When you submit a contact request or quote inquiry on the {COMPANY.name} website,
              we collect your name, phone number, email address, service location, and details
              regarding your requested staffing arrangement.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#061A32] border border-[#0B2B50] space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
              2. Use of Information
            </h2>
            <p>
              The information you provide is utilized solely for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li>Responding to your specific security or manpower service enquiries.</li>
              <li>Preparing accurate staffing proposals and duty deployment schedules.</li>
              <li>
                Communicating with you via telephone, WhatsApp, or email regarding service
                coordination.
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-[#061A32] border border-[#0B2B50] space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
              3. Confidentiality & Security
            </h2>
            <p>
              We treat client site layouts, gate protocols, and operational security requirements
              with strict confidentiality. We do not sell, rent, or trade your personal or
              business information to third-party marketing entities.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#061A32] border border-[#0B2B50] space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
              4. Contact for Privacy Matters
            </h2>
            <p>
              If you have any questions or wish to update your contact details on file, please
              contact our office:
            </p>
            <div className="text-xs sm:text-sm text-slate-400 space-y-1 pt-2">
              <p className="font-semibold text-white">{COMPANY.legalName}</p>
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
