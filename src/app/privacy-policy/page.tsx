import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy: S.S. Agency Security Services',
  description:
    'Privacy Policy and data confidentiality guidelines for S.S. Agency Security Services in Sambalpur, Odisha.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        eyebrow="Legal & compliance"
        subtitle="Our commitment to safeguarding client information and service enquiry data."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-foreground text-sm sm:text-base leading-relaxed">
          <div className="card-chai p-6 sm:p-8 space-y-3">
            <h2 className="text-xl sm:text-2xl font-medium text-foreground tracking-tight">
              1. Information collection
            </h2>
            <p className="text-muted-foreground">
              When you submit a contact request or quote inquiry on the {COMPANY.name} website,
              we collect your name, phone number, email address, service location, and details
              regarding your requested staffing arrangement.
            </p>
          </div>

          <div className="card-chai p-6 sm:p-8 space-y-3">
            <h2 className="text-xl sm:text-2xl font-medium text-foreground tracking-tight">
              2. Use of information
            </h2>
            <p className="text-muted-foreground">
              The information you provide is utilized solely for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
              <li>Responding to your specific security or manpower service enquiries.</li>
              <li>Preparing accurate staffing proposals and duty deployment schedules.</li>
              <li>
                Communicating with you via telephone, WhatsApp, or email regarding service
                coordination.
              </li>
            </ul>
          </div>

          <div className="card-chai p-6 sm:p-8 space-y-3">
            <h2 className="text-xl sm:text-2xl font-medium text-foreground tracking-tight">
              3. Confidentiality and security
            </h2>
            <p className="text-muted-foreground">
              We treat client site layouts, gate protocols, and operational security requirements
              with strict confidentiality. We do not sell, rent, or trade your personal or
              business information to third-party marketing entities.
            </p>
          </div>

          <div className="card-chai p-6 sm:p-8 space-y-3">
            <h2 className="text-xl sm:text-2xl font-medium text-foreground tracking-tight">
              4. Contact for privacy matters
            </h2>
            <p className="text-muted-foreground">
              If you have any questions or wish to update your contact details on file, please
              contact our office:
            </p>
            <div className="text-xs sm:text-sm text-muted-foreground space-y-1 pt-2">
              <p className="font-semibold text-foreground">{COMPANY.legalName}</p>
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
