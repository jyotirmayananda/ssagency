import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { ContactForm } from '@/components/forms/ContactForm';
import { COMPANY, GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_DIRECTIONS_URL } from '@/lib/constants';
import { buildWhatsAppLink } from '@/lib/utils';
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight, Clock } from 'lucide-react';
import { Highlight } from '@/components/chaiui/highlight';

export const metadata: Metadata = {
  title: 'Contact us: S.S. Agency Security Services Sambalpur',
  description:
    'Contact S.S. Agency for security guard services, cooking staff, cleaning staff, and driver manpower in Sambalpur, Odisha. Call +91 7853979637.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact S.S. Agency"
        eyebrow="Direct communication"
        subtitle="We welcome enquiries from businesses, institutions, and individuals seeking reliable security and manpower services in Sambalpur with prompt response."
        highlightPhrase="prompt response"
        breadcrumbs={[{ label: 'Contact us' }]}
      />

      <section className="max-w-6xl mx-auto px-6 py-12 sm:px-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-chai p-6 space-y-5">
              <div>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider block">
                  Head office
                </span>
                <h2 className="font-montserrat text-lg font-semibold text-foreground mt-1">
                  Sambalpur office
                </h2>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <MapPin className="size-4 text-brand shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-medium text-foreground">{COMPANY.address.line1}</p>
                  <p className="text-muted-foreground">{COMPANY.address.locality}</p>
                  <p className="text-muted-foreground">
                    {COMPANY.address.city} {COMPANY.address.pin}, {COMPANY.address.state}, {COMPANY.address.country}
                  </p>
                  <a
                    href={GOOGLE_MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-brand hover:underline pt-1"
                  >
                    <span>Get directions on Google Maps</span>
                    <ArrowUpRight className="size-3" />
                  </a>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-3 border-t border-card-edge pt-4 text-xs sm:text-sm">
                <Phone className="size-4 text-brand shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-muted-foreground block">Direct telephone</span>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="font-medium text-foreground hover:text-brand transition-colors"
                  >
                    {COMPANY.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-3 border-t border-card-edge pt-4 text-xs sm:text-sm">
                <Mail className="size-4 text-brand shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[11px] text-muted-foreground block">Official emails</span>
                  <a
                    href={`mailto:${COMPANY.primaryEmail}`}
                    className="block font-medium text-foreground hover:text-brand transition-colors break-all"
                  >
                    {COMPANY.primaryEmail}
                  </a>
                  <a
                    href={`mailto:${COMPANY.alternateEmail}`}
                    className="block text-muted-foreground hover:text-brand transition-colors break-all text-xs"
                  >
                    {COMPANY.alternateEmail}
                  </a>
                </div>
              </div>

              {/* WhatsApp Action */}
              <div className="border-t border-card-edge pt-4">
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors"
                >
                  <MessageCircle className="size-4" />
                  <span>Instant chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Service Hours Notice */}
            <div className="card-chai p-5 flex items-start gap-3 text-xs text-muted-foreground">
              <Clock className="size-4 text-brand shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider">
                  Response hours
                </h3>
                <p>
                  Telephone enquiries and WhatsApp messages are reviewed promptly between 8:00 AM and 8:00 PM, Monday to Sunday.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1 mb-2">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                Send a message
              </span>
              <h2 className="text-xl font-medium text-foreground tracking-tight">
                Enquire online
              </h2>
              <p className="text-xs text-muted-foreground">
                Please fill out the form below. All marked fields are validated for accuracy.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>

        {/* Embedded Google Maps in ChaiUI Card Frame */}
        <div className="mt-16 card-chai overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-card-edge flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider block">
                Office location
              </span>
              <h3 className="font-montserrat text-sm font-semibold text-foreground">
                Saraswati Vihar, Ainthapali, Sambalpur, 768006
              </h3>
            </div>
            <a
              href={GOOGLE_MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border text-xs font-medium text-foreground hover:bg-muted transition-colors w-fit"
            >
              <span>Open directions</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          <div className="relative w-full h-80">
            <iframe
              title="S.S. Agency office location in Sambalpur"
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
