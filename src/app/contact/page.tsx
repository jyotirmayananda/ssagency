import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { ContactForm } from '@/components/forms/ContactForm';
import { COMPANY, GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_DIRECTIONS_URL } from '@/lib/constants';
import { buildWhatsAppLink } from '@/lib/utils';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us — S.S. Agency Security Services Sambalpur',
  description:
    'Contact S.S. Agency for security guard services, cooking staff, cleaning staff, and driver manpower in Sambalpur, Odisha. Call +91 7853979637.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact S.S. Agency"
        eyebrow="Direct Communication"
        subtitle="We welcome enquiries from businesses, institutions, and individuals seeking reliable security and manpower services in Sambalpur."
        breadcrumbs={[{ label: 'Contact Us' }]}
        backgroundImage="/images/hero/hero-patrol-fleet.jpg"
      />

      <section className="py-20 sm:py-24 bg-[#031225]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 5 cols: Official Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-2xl bg-[#061A32] border border-[#0B2B50] space-y-6 shadow-xl">
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
                    Head Office
                  </span>
                  <h2 className="text-2xl font-black text-white uppercase tracking-tight mt-1">
                    Sambalpur Office
                  </h2>
                  <div className="w-12 h-1 bg-[#D4AF37] rounded-full my-3" />
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0B2B50] text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-sm space-y-1">
                    <p className="font-semibold text-white">{COMPANY.address.line1}</p>
                    <p className="text-slate-300">{COMPANY.address.locality}</p>
                    <p className="text-slate-300">
                      {COMPANY.address.city} – {COMPANY.address.pin}, {COMPANY.address.state},{' '}
                      {COMPANY.address.country}
                    </p>
                    <a
                      href={GOOGLE_MAPS_DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F4CC55] hover:underline pt-1"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4 border-t border-[#0B2B50]/60 pt-5">
                  <div className="w-10 h-10 rounded-xl bg-[#0B2B50] text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Direct Telephone</span>
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="text-base font-bold text-white hover:text-[#F4CC55] transition-colors"
                    >
                      {COMPANY.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Emails */}
                <div className="flex items-start gap-4 border-t border-[#0B2B50]/60 pt-5">
                  <div className="w-10 h-10 rounded-xl bg-[#0B2B50] text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-sm">
                    <span className="text-xs text-slate-400 block">Official Emails</span>
                    <a
                      href={`mailto:${COMPANY.primaryEmail}`}
                      className="block text-slate-200 hover:text-[#F4CC55] transition-colors break-all"
                    >
                      {COMPANY.primaryEmail}
                    </a>
                    <a
                      href={`mailto:${COMPANY.alternateEmail}`}
                      className="block text-slate-400 hover:text-[#F4CC55] transition-colors break-all text-xs"
                    >
                      {COMPANY.alternateEmail}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Action */}
                <div className="border-t border-[#0B2B50]/60 pt-5">
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Instant Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Service Hours Notice */}
              <div className="p-6 rounded-2xl bg-[#061A32] border border-[#0B2B50] flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-300 space-y-1">
                  <h4 className="font-bold text-white uppercase text-xs tracking-wider">
                    Enquiry Response Hours
                  </h4>
                  <p>
                    Telephone enquiries and WhatsApp messages are reviewed promptly between 8:00 AM
                    and 8:00 PM, Monday to Sunday.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 7 cols: Validated Contact Form */}
            <div className="lg:col-span-7 space-y-6">
              <div className="mb-2">
                <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
                  Send a Message
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-1">
                  Enquire Online
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  Please fill out the form below. All marked fields are validated for accuracy.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>

          {/* Embedded Google Maps Section */}
          <div className="mt-20 rounded-2xl overflow-hidden border border-[#0B2B50] shadow-2xl bg-[#061A32]">
            <div className="p-6 border-b border-[#0B2B50] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                  Location Map
                </span>
                <h3 className="text-lg font-bold text-white">
                  Saraswati Vihar, Ainthapali, Sambalpur – 768006
                </h3>
              </div>
              <a
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0B2B50] text-[#D4AF37] text-xs font-bold hover:bg-[#D4AF37] hover:text-[#031225] transition-colors"
              >
                <span>Open Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="relative w-full h-80 sm:h-96">
              <iframe
                title="S.S. Agency Office Location in Sambalpur"
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] contrast-[110%]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
