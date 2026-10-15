'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import {
  FileText,
  Loader2,
  CheckCircle2,
  MessageCircle,
  AlertCircle,
} from 'lucide-react';
import { quoteFormSchema, QuoteFormValues } from '@/lib/validations';
import { buildWhatsAppLink } from '@/lib/utils';

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    quoteId: string;
    values: QuoteFormValues;
  } | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: '',
      companyName: '',
      phone: '',
      email: '',
      service: 'Security Guard Services',
      location: '',
      staffCount: '1 - 2 Guards / Staff',
      startDate: 'Immediately / Within 1 week',
      duration: 'Ongoing / Monthly Contract',
      additionalRequirements: '',
    },
  });

  const formValues = watch();

  const handleInstantWhatsApp = () => {
    if (!formValues.fullName || !formValues.phone || !formValues.location) {
      toast.info('Please fill in Name, Phone, and Location before generating WhatsApp message.');
      return;
    }

    const message = `*Quote Request — S.S. Agency*
*Name:* ${formValues.fullName}
*Company:* ${formValues.companyName || 'Individual'}
*Phone:* ${formValues.phone}
*Email:* ${formValues.email || 'N/A'}
*Service:* ${formValues.service}
*Location:* ${formValues.location}
*Staff Count:* ${formValues.staffCount}
*Expected Start:* ${formValues.startDate}
*Duration:* ${formValues.duration}
*Notes:* ${formValues.additionalRequirements || 'Standard arrangement'}`;

    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  };

  const onSubmit = async (values: QuoteFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success('Quote Request Registered!', {
          description: result.message,
        });
        setSubmittedData({
          quoteId: result.quoteId || 'SSA-QUOTE-REF',
          values,
        });
        reset();
      } else {
        toast.error('Submission Issue', {
          description: result.message || 'Please check your inputs and try again.',
        });
      }
    } catch {
      toast.error('Network Error', {
        description: 'Unable to connect to server. You can also send the quote directly via WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submittedData) {
    const waText = `*Quote Request Ref:* ${submittedData.quoteId}
*Client:* ${submittedData.values.fullName} (${submittedData.values.companyName || 'Individual'})
*Service:* ${submittedData.values.service}
*Location:* ${submittedData.values.location}
*Staff Required:* ${submittedData.values.staffCount}
*Start Date:* ${submittedData.values.startDate}
*Duration:* ${submittedData.values.duration}`;
    const waUrl = buildWhatsAppLink(waText);

    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-[#061A32] border border-[#D4AF37]/50 shadow-2xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 mx-auto rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Quote Request Received</h3>
          <p className="text-slate-300 text-sm mt-2">
            Reference Number:{' '}
            <span className="font-mono text-[#D4AF37] font-bold text-base">
              {submittedData.quoteId}
            </span>
          </p>
          <p className="text-slate-400 text-xs mt-2 max-w-lg mx-auto leading-relaxed">
            We will review your staffing requirements for {submittedData.values.service} in{' '}
            {submittedData.values.location} and contact you with a customized service plan.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white text-sm font-bold shadow-md hover:bg-[#20ba59] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Forward Quote to WhatsApp (+91 7853979637)</span>
          </a>
          <button
            type="button"
            onClick={() => setSubmittedData(null)}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#0B2B50] text-slate-200 text-sm font-semibold hover:bg-[#0E3663] transition-colors"
          >
            Submit Another Quote
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="p-6 sm:p-10 rounded-2xl bg-[#061A32] border border-[#0B2B50] shadow-2xl space-y-6"
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="quote-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Full Name <span className="text-[#D4AF37]">*</span>
          </label>
          <input
            id="quote-name"
            type="text"
            {...register('fullName')}
            placeholder="e.g. Ramesh Chandra Patel"
            className={`w-full px-4 py-2.5 rounded-lg bg-[#031225] border ${
              errors.fullName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#0B2B50] focus:border-[#D4AF37]'
            } text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Company / Organization Name */}
        <div>
          <label htmlFor="quote-company" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Company / Organization Name <span className="text-slate-500 font-normal lowercase">(optional)</span>
          </label>
          <input
            id="quote-company"
            type="text"
            {...register('companyName')}
            placeholder="e.g. Patel Industries / Private Residence"
            className="w-full px-4 py-2.5 rounded-lg bg-[#031225] border border-[#0B2B50] focus:border-[#D4AF37] text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Phone */}
        <div>
          <label htmlFor="quote-phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Phone Number <span className="text-[#D4AF37]">*</span>
          </label>
          <input
            id="quote-phone"
            type="tel"
            {...register('phone')}
            placeholder="+91 78539 79637"
            className={`w-full px-4 py-2.5 rounded-lg bg-[#031225] border ${
              errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#0B2B50] focus:border-[#D4AF37]'
            } text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="quote-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Email Address <span className="text-[#D4AF37]">*</span>
          </label>
          <input
            id="quote-email"
            type="email"
            {...register('email')}
            placeholder="client@example.com"
            className={`w-full px-4 py-2.5 rounded-lg bg-[#031225] border ${
              errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#0B2B50] focus:border-[#D4AF37]'
            } text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Service Required */}
        <div>
          <label htmlFor="quote-service" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Service Required <span className="text-[#D4AF37]">*</span>
          </label>
          <select
            id="quote-service"
            {...register('service')}
            className="w-full px-4 py-2.5 rounded-lg bg-[#031225] border border-[#0B2B50] focus:border-[#D4AF37] text-white text-sm focus:outline-none transition-colors"
          >
            <option value="Security Guard Services">Security Guard Services</option>
            <option value="Cook Services">Cook Services</option>
            <option value="Cleaning Staff Services">Cleaning Staff Services</option>
            <option value="Four-Wheeler Driver Services">Four-Wheeler Driver Services</option>
            <option value="Multiple Services / Other">Multiple Services / Other</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label htmlFor="quote-loc" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Service Location <span className="text-[#D4AF37]">*</span>
          </label>
          <input
            id="quote-loc"
            type="text"
            {...register('location')}
            placeholder="e.g. Ainthapali, Sambalpur"
            className={`w-full px-4 py-2.5 rounded-lg bg-[#031225] border ${
              errors.location ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#0B2B50] focus:border-[#D4AF37]'
            } text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors`}
          />
          {errors.location && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.location.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {/* Number of Staff */}
        <div>
          <label htmlFor="quote-staff" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Staff Needed <span className="text-[#D4AF37]">*</span>
          </label>
          <select
            id="quote-staff"
            {...register('staffCount')}
            className="w-full px-4 py-2.5 rounded-lg bg-[#031225] border border-[#0B2B50] focus:border-[#D4AF37] text-white text-sm focus:outline-none transition-colors"
          >
            <option value="1 Person">1 Person</option>
            <option value="2 - 3 Personnel">2 - 3 Personnel</option>
            <option value="4 - 6 Personnel">4 - 6 Personnel</option>
            <option value="7 - 10 Personnel">7 - 10 Personnel</option>
            <option value="10+ Personnel (Custom Deployment)">10+ Personnel (Custom)</option>
          </select>
        </div>

        {/* Expected Start Date */}
        <div>
          <label htmlFor="quote-start" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Expected Start Date <span className="text-[#D4AF37]">*</span>
          </label>
          <select
            id="quote-start"
            {...register('startDate')}
            className="w-full px-4 py-2.5 rounded-lg bg-[#031225] border border-[#0B2B50] focus:border-[#D4AF37] text-white text-sm focus:outline-none transition-colors"
          >
            <option value="Immediately / Within 48 hours">Immediately / Within 48 hours</option>
            <option value="Within 1 - 2 Weeks">Within 1 - 2 Weeks</option>
            <option value="Next Month">Next Month</option>
            <option value="Specific Future Date">Specific Future Date</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label htmlFor="quote-duration" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Service Duration <span className="text-[#D4AF37]">*</span>
          </label>
          <select
            id="quote-duration"
            {...register('duration')}
            className="w-full px-4 py-2.5 rounded-lg bg-[#031225] border border-[#0B2B50] focus:border-[#D4AF37] text-white text-sm focus:outline-none transition-colors"
          >
            <option value="Long Term / Monthly Contract">Long Term / Monthly Contract</option>
            <option value="Short Term (1 - 3 Months)">Short Term (1 - 3 Months)</option>
            <option value="Event / Temporary (Few Days)">Event / Temporary (Few Days)</option>
            <option value="Trial Basis (1 Month)">Trial Basis (1 Month)</option>
          </select>
        </div>
      </div>

      {/* Additional Requirements */}
      <div>
        <label htmlFor="quote-notes" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
          Additional Requirements / Specific Shift Instructions
        </label>
        <textarea
          id="quote-notes"
          rows={3}
          {...register('additionalRequirements')}
          placeholder="e.g. Day and night shift guard requirements, parking management, special uniform requests..."
          className="w-full px-4 py-2.5 rounded-lg bg-[#031225] border border-[#0B2B50] focus:border-[#D4AF37] text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors resize-y"
        />
      </div>

      {/* Action Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-sm font-bold tracking-wider uppercase text-[#031225] bg-gradient-to-r from-[#F4CC55] via-[#D4AF37] to-[#B45309] shadow-lg shadow-amber-900/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Generating Quote Request...</span>
            </>
          ) : (
            <>
              <FileText className="w-4 h-4" />
              <span>Submit Quote Request</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleInstantWhatsApp}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Prefill via WhatsApp</span>
        </button>
      </div>
    </form>
  );
}
