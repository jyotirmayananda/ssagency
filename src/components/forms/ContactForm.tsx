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
        toast.success('Enquiry Submitted!', {
          description: result.message,
        });
        setSubmittedData({
          enquiryId: result.enquiryId || 'SSA-SUBMITTED',
          values,
        });
        reset();
      } else {
        toast.error('Submission Failed', {
          description: result.message || 'Please check your inputs and try again.',
        });
      }
    } catch {
      toast.error('Network Error', {
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
      <div className="p-8 rounded-2xl bg-white border border-amber-300 shadow-xl text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#061A32]">Enquiry Received Successfully</h3>
          <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
            Reference ID:{' '}
            <span className="font-mono text-[#B45309] font-bold">
              {submittedData.enquiryId}
            </span>
          </p>
          <p className="text-slate-500 text-xs mt-1">
            Our supervisory team in Sambalpur will review your requirements and reach out
            via phone or email shortly.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20ba59] transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Notify us via WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setSubmittedData(null)}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-slate-100 text-slate-700 text-sm font-semibold hover:bg-slate-200 transition-colors"
          >
            Send Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl space-y-5"
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
          <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Full Name <span className="text-[#B45309]">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            {...register('fullName')}
            placeholder="e.g. Rajesh Kumar"
            className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 border ${
              errors.fullName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300 focus:border-[#B45309] focus:bg-white'
            } text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none transition-colors`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3" />
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Phone Number <span className="text-[#B45309]">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            placeholder="+91 98765 43210"
            className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 border ${
              errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300 focus:border-[#B45309] focus:bg-white'
            } text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none transition-colors`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3" />
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Email Address <span className="text-[#B45309]">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            placeholder="name@company.com"
            className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 border ${
              errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300 focus:border-[#B45309] focus:bg-white'
            } text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none transition-colors`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3" />
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Required Service Dropdown */}
        <div>
          <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Required Service <span className="text-[#B45309]">*</span>
          </label>
          <select
            id="service"
            {...register('service')}
            className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 border ${
              errors.service ? 'border-rose-500' : 'border-slate-300 focus:border-[#B45309] focus:bg-white'
            } text-slate-900 text-sm focus:outline-none transition-colors`}
          >
            <option value="Security Guard Services">Security Guard Services</option>
            <option value="Cook Services">Cook Services</option>
            <option value="Cleaning Staff Services">Cleaning Staff Services</option>
            <option value="Four-Wheeler Driver Services">Four-Wheeler Driver Services</option>
            <option value="Multiple Services / Other">Multiple Services / Other</option>
          </select>
        </div>
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
          Service Location / Address in Sambalpur / Odisha <span className="text-[#B45309]">*</span>
        </label>
        <input
          id="location"
          type="text"
          {...register('location')}
          placeholder="e.g. Saraswati Vihar, Ainthapali, Sambalpur"
          className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 border ${
            errors.location ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300 focus:border-[#B45309] focus:bg-white'
          } text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none transition-colors`}
        />
        {errors.location && (
          <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
            <AlertCircle className="w-3 h-3" />
            {errors.location.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
          Requirement Details / Message <span className="text-[#B45309]">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          placeholder="Please describe your facility type, shift hours, or specific staffing needs..."
          className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 border ${
            errors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300 focus:border-[#B45309] focus:bg-white'
          } text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none transition-colors resize-y`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
            <AlertCircle className="w-3 h-3" />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-sm font-bold tracking-wider uppercase text-white bg-[#061A32] hover:bg-[#0B2B50] shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Enquiry...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 text-amber-400" />
            <span>Submit Service Enquiry</span>
          </>
        )}
      </button>
    </form>
  );
}
