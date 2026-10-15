import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildWhatsAppLink(message?: string): string {
  const base = 'https://wa.me/917853979637';
  if (!message) {
    const defaultMsg = encodeURIComponent(
      'Hello S.S. Agency, I would like to enquire about your security and manpower services.'
    );
    return `${base}?text=${defaultMsg}`;
  }
  return `${base}?text=${encodeURIComponent(message)}`;
}
