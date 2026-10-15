import { z } from 'zod';

export const serviceEnum = z.enum([
  'Security Guard Services',
  'Cook Services',
  'Cleaning Staff Services',
  'Four-Wheeler Driver Services',
  'Multiple Services / Other',
]);

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(100, { message: 'Full name is too long.' }),
  phone: z
    .string()
    .min(10, { message: 'Please enter a valid phone number (at least 10 digits).' })
    .regex(/^[0-9+\-\s()]{10,20}$/, { message: 'Invalid phone number format.' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' }),
  service: serviceEnum,
  location: z
    .string()
    .min(3, { message: 'Please specify the service location or address.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters long.' })
    .max(2000, { message: 'Message cannot exceed 2000 characters.' }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const quoteFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters.' }),
  companyName: z.string().optional(),
  phone: z
    .string()
    .min(10, { message: 'Please enter a valid phone number (at least 10 digits).' })
    .regex(/^[0-9+\-\s()]{10,20}$/, { message: 'Invalid phone number format.' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' }),
  service: serviceEnum,
  location: z
    .string()
    .min(3, { message: 'Please provide the service location.' }),
  staffCount: z
    .string()
    .min(1, { message: 'Please specify the estimated staff count needed.' }),
  startDate: z
    .string()
    .min(1, { message: 'Please specify expected start date or timeframe.' }),
  duration: z
    .string()
    .min(1, { message: 'Please select or describe service duration (e.g. Monthly, Long-term, Event-based).' }),
  additionalRequirements: z
    .string()
    .max(2000, { message: 'Notes cannot exceed 2000 characters.' })
    .optional(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;
