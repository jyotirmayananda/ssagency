'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import {
  Send,
  Loader2,
  CheckCircle2,
  MessageCircle,
  AlertCircle,
  ArrowUpRight,
} from 'lucide-react';
import { contactFormSchema, ContactFormValues } from '@/lib/validations';
import { buildWhatsAppLink } from '@/lib/utils';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    enquiryId: string;
    values: ContactFormValues;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      service: 'Security Guard Services',
      location: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success('Enquiry submitted', {
          description: result.message,
        });
        setSubmittedData({
          enquiryId: result.enquiryId || 'SSA-SUBMITTED',
          values,
        });
        reset();
      } else {
        toast.error('Submission failed', {
          description: result.message || 'Please check your inputs and try again.',
        });
      }
    } catch {
      toast.error('Network error', {
        description: 'Unable to connect to server. Please call or WhatsApp us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submittedData) {
    const waText = `Hello S.S. Agency, I submitted an enquiry (Ref: ${submittedData.enquiryId}) for ${submittedData.values.service} in ${submittedData.values.location}. Name: ${submittedData.values.fullName}.`;
    const waUrl = buildWhatsAppLink(waText);

    return (
      <div className="card-chai p-8 text-center space-y-4">
        <div className="size-12 mx-auto rounded-full border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="size-6" />
        </div>
        <div>
          <h3 className="font-montserrat text-xl font-semibold text-foreground">
            Enquiry received successfully
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm mt-1.5">
            Reference ID:{' '}
            <span className="font-mono font-medium text-foreground">
              {submittedData.enquiryId}
            </span>
          </p>
          <p className="text-muted-foreground text-xs mt-1">
            Our supervisory team in Sambalpur will review your requirements and reach out shortly.
          </p>
        </div>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-asym inline-flex h-9 items-center justify-center gap-2 bg-neutral-900 px-4 text-xs font-medium text-white transition-colors duration-200 hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            <MessageCircle className="size-3.5" />
            <span>Notify on WhatsApp</span>
            <ArrowUpRight className="-ml-1 size-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setSubmittedData(null)}
            className="inline-flex h-9 items-center justify-center px-4 rounded-md border border-border text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Send another enquiry
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
          <label htmlFor="fullName" className="block font-mono text-xs text-foreground uppercase tracking-wider mb-1.5">
            Full name *
          </label>
          <input
            id="fullName"
            type="text"
            {...register('fullName')}
            placeholder="e.g. Rajesh Kumar"
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

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block font-mono text-xs text-foreground uppercase tracking-wider mb-1.5">
            Phone number *
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            placeholder="+91 98765 43210"
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block font-mono text-xs text-foreground uppercase tracking-wider mb-1.5">
            Email address *
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            placeholder="name@company.com"
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

        {/* Required Service Dropdown */}
        <div>
          <label htmlFor="service" className="block font-mono text-xs text-foreground uppercase tracking-wider mb-1.5">
            Required service *
          </label>
          <select
            id="service"
            {...register('service')}
            className={`w-full h-9 px-3 rounded-md border ${
              errors.service ? 'border-red-500' : 'border-input'
            } bg-card text-foreground text-xs sm:text-sm outline-none focus-visible:ring-[2px] focus-visible:ring-ring transition-colors`}
          >
            <option value="Security Guard Services">Security Guard Services</option>
            <option value="ATM Cash Van & CIT Services">ATM Cash Van & CIT Services</option>
            <option value="Cook Services">Cook Services</option>
            <option value="Cleaning Staff Services">Cleaning Staff Services</option>
            <option value="Four-Wheeler Driver Services">Four-Wheeler Driver Services</option>
            <option value="Multiple Services / Other">Multiple Services / Other</option>
          </select>
        </div>
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block font-mono text-xs text-foreground uppercase tracking-wider mb-1.5">
          Service location / address in Sambalpur *
        </label>
        <input
          id="location"
          type="text"
          {...register('location')}
          placeholder="e.g. Saraswati Vihar, Ainthapali, Sambalpur"
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

      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-mono text-xs text-foreground uppercase tracking-wider mb-1.5">
          Requirement details *
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          placeholder="Please describe your facility type, shift hours, or specific staffing needs..."
          className={`w-full p-3 rounded-md border ${
            errors.message ? 'border-red-500' : 'border-input'
          } bg-card text-foreground text-xs sm:text-sm placeholder:text-muted-foreground outline-none focus-visible:ring-[2px] focus-visible:ring-ring transition-colors resize-y`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="size-3" />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-asym inline-flex h-10 w-full items-center justify-center gap-2 bg-neutral-900 px-6 text-sm font-medium text-white transition-colors duration-200 hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-neutral-200 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              <span>Sending enquiry...</span>
            </>
          ) : (
            <>
              <span>Submit service enquiry</span>
              <Send className="-ml-1 size-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
