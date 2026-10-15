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
  ArrowUpRight,
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

    const message = `*Quote Request: S.S. Agency*
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
        toast.success('Quote request registered', {
          description: result.message,
        });
        setSubmittedData({
          quoteId: result.quoteId || 'SSA-QUOTE-REF',
          values,
        });
        reset();
      } else {
        toast.error('Submission issue', {
          description: result.message || 'Please check your inputs and try again.',
        });
      }
    } catch {
      toast.error('Network error', {
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
      <div className="card-chai p-8 sm:p-10 text-center space-y-4">
        <div className="size-12 mx-auto rounded-full border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="size-6" />
        </div>
        <div>
          <h3 className="font-montserrat text-xl font-semibold text-foreground">
            Quote request received
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm mt-1.5">
            Reference number:{' '}
            <span className="font-mono font-medium text-foreground">
              {submittedData.quoteId}
            </span>
          </p>
          <p className="text-muted-foreground text-xs mt-1 max-w-lg mx-auto">
            We will review your staffing requirements for {submittedData.values.service} in{' '}
            {submittedData.values.location} and contact you with a customized service plan.
          </p>
        </div>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-asym inline-flex h-9 items-center justify-center gap-2 bg-neutral-900 px-5 text-xs font-medium text-white transition-colors duration-200 hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            <MessageCircle className="size-3.5" />
            <span>Forward quote to WhatsApp</span>
            <ArrowUpRight className="-ml-1 size-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setSubmittedData(null)}
            className="inline-flex h-9 items-center justify-center px-4 rounded-md border border-border text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Submit another quote
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="card-chai p-6 sm:p-8 space-y-4"
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label htmlFor="quote-name" className="block font-mono text-xs text-foreground uppercase tracking-wider mb-1.5">
            Full name *
          </label>
          <input
            id="quote-name"
            type="text"
            {...register('fullName')}
            placeholder="e.g. Ramesh Chandra Patel"
            className={`w-full h-9 px-3 rounded-md border ${
              errors.fullName ? 'border-red-500' : 'border-input'
            } bg-card text-foreground text-xs sm:text-sm placeholder:text-muted-foreground outline-none focus-visible:ring-[2px] focus-visible:ring-ring transition-colors`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="size-3" />
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="quote-company" className="block font-mono text-xs text-foreground uppercase tracking-wider mb-1.5">
            Company / organization (optional)
          </label>
          <input
            id="quote-company"
            type="text"
            {...register('companyName')}
            placeholder="e.g. Patel Industries / Private Residence"
            className="w-full h-9 px-3 rounded-md border border-input bg-card text-foreground text-xs sm:text-sm placeholder:text-muted-foreground outline-none focus-visible:ring-[2px] focus-visible:ring-ring transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div>
          <label htmlFor="quote-phone" className="block font-mono text-xs text-foreground uppercase tracking-wider mb-1.5">
            Phone number *
          </label>
          <input
            id="quote-phone"
            type="tel"
            {...register('phone')}
            placeholder="+91 78539 79637"
            className={`w-full h-9 px-3 rounded-md border ${
              errors.phone ? 'border-red-500' : 'border-input'
            } bg-card text-foreground text-xs sm:text-sm placeholder:text-muted-foreground outline-none focus-visible:ring-[2px] focus-visible:ring-ring transition-colors`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="size-3" />
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="quote-email" className="block font-mono text-xs text-foreground uppercase tracking-wider mb-1.5">
            Email address *
          </label>
          <input
            id="quote-email"
            type="email"
            {...register('email')}
            placeholder="client@example.com"
            className={`w-full h-9 px-3 rounded-md border ${
              errors.email ? 'border-red-500' : 'border-input'
            } bg-card text-foreground text-xs sm:text-sm placeholder:text-muted-foreground outline-none focus-visible:ring-[2px] focus-visible:ring-ring transition-colors`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="size-3" />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Service Required */}
        <div>
          <label htmlFor="quote-service" className="block font-mono text-xs text-foreground uppercase tracking-wider mb-1.5">
            Service required *
          </label>
          <select
            id="quote-service"
            {...register('service')}
            className="w-full h-9 px-3 rounded-md border border-input bg-card text-foreground text-xs sm:text-sm outline-none focus-visible:ring-[2px] focus-visible:ring-ring transition-colors"
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
          <label htmlFor="quote-loc" className="block font-mono text-xs text-foreground uppercase tracking-wider mb-1.5">
            Service location in Sambalpur *
          </label>
          <input
            id="quote-loc"
            type="text"
            {...register('location')}
            placeholder="e.g. Ainthapali, Sambalpur"
            className={`w-full h-9 px-3 rounded-md border ${
              errors.location ? 'border-red-500' : 'border-input'
            } bg-card text-foreground text-xs sm:text-sm placeholder:text-muted-foreground outline-none focus-visible:ring-[2px] focus-visible:ring-ring transition-colors`}
          />
          {errors.location && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="size-3" />
              {errors.location.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Staff Needed */}
        <div>
          <label htmlFor="quote-staff" className="block font-mono text-xs text-foreground uppercase tracking-wider mb-1.5">
            Staff needed *
          </label>
          <select
            id="quote-staff"
            {...register('staffCount')}
            className="w-full h-9 px-3 rounded-md border border-input bg-card text-foreground text-xs sm:text-sm outline-none focus-visible:ring-[2px] focus-visible:ring-ring transition-colors"
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
          <label htmlFor="quote-start" className="block font-mono text-xs text-foreground uppercase tracking-wider mb-1.5">
            Expected start *
          </label>
          <select
            id="quote-start"
            {...register('startDate')}
            className="w-full h-9 px-3 rounded-md border border-input bg-card text-foreground text-xs sm:text-sm outline-none focus-visible:ring-[2px] focus-visible:ring-ring transition-colors"
          >
            <option value="Immediately / Within 48 hours">Immediately / Within 48 hours</option>
            <option value="Within 1 - 2 Weeks">Within 1 - 2 Weeks</option>
            <option value="Next Month">Next Month</option>
            <option value="Specific Future Date">Specific Future Date</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label htmlFor="quote-duration" className="block font-mono text-xs text-foreground uppercase tracking-wider mb-1.5">
            Service duration *
          </label>
          <select
            id="quote-duration"
            {...register('duration')}
            className="w-full h-9 px-3 rounded-md border border-input bg-card text-foreground text-xs sm:text-sm outline-none focus-visible:ring-[2px] focus-visible:ring-ring transition-colors"
          >
            <option value="Long Term / Monthly Contract">Monthly Contract</option>
            <option value="Short Term (1 - 3 Months)">Short Term (1 - 3 Months)</option>
            <option value="Event / Temporary (Few Days)">Event / Temporary</option>
            <option value="Trial Basis (1 Month)">Trial Basis (1 Month)</option>
          </select>
        </div>
      </div>

      {/* Additional Requirements */}
      <div>
        <label htmlFor="quote-notes" className="block font-mono text-xs text-foreground uppercase tracking-wider mb-1.5">
          Additional requirements / shift instructions
        </label>
        <textarea
          id="quote-notes"
          rows={3}
          {...register('additionalRequirements')}
          placeholder="e.g. Day and night shift requirements, uniform needs, premises specifications..."
          className="w-full p-3 rounded-md border border-input bg-card text-foreground text-xs sm:text-sm placeholder:text-muted-foreground outline-none focus-visible:ring-[2px] focus-visible:ring-ring transition-colors resize-y"
        />
      </div>

      {/* Action Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-asym inline-flex h-10 w-full sm:flex-1 items-center justify-center gap-2 bg-neutral-900 px-6 text-sm font-medium text-white transition-colors duration-200 hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-neutral-200 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              <span>Generating quote request...</span>
            </>
          ) : (
            <>
              <span>Submit quote request</span>
              <FileText className="-ml-1 size-4" />
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleInstantWhatsApp}
          className="btn-asym-mirror inline-flex h-10 w-full sm:w-auto items-center justify-center gap-2 border border-border bg-transparent px-5 text-xs sm:text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          <MessageCircle className="size-4 text-emerald-600 dark:text-emerald-400" />
          <span>Prefill via WhatsApp</span>
        </button>
      </div>
    </form>
  );
}
