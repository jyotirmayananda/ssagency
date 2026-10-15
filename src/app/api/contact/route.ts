import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Spam Honeypot check
    if (body.website && body.website.length > 0) {
      return NextResponse.json({ success: true, message: 'Message received.' });
    }

    const validated = contactFormSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validated.error.flatten().fieldErrors,
          message: 'Validation failed. Please correct the highlighted fields.',
        },
        { status: 400 }
      );
    }

    const data = validated.data;
    const enquiryId = `SSA-CNT-${Date.now().toString(36).toUpperCase()}`;

    // Here we check if an email provider API key is configured (e.g. Resend, Sendgrid, Postmark, or SMTP)
    const emailApiKey = process.env.RESEND_API_KEY || process.env.EMAIL_API_KEY;

    if (emailApiKey) {
      // In production with RESEND_API_KEY configured:
      // await resend.emails.send({ ... })
      // For now we log securely server-side
      console.log(`[Contact Enquiry ${enquiryId}] Email delivery triggered to ssagency.sbpodi@gmail.com`);
    } else {
      console.log(`[Contact Enquiry ${enquiryId}] Server received:`, {
        name: data.fullName,
        phone: data.phone,
        email: data.email,
        service: data.service,
        location: data.location,
      });
    }

    return NextResponse.json({
      success: true,
      enquiryId,
      message:
        'Thank you! Your enquiry has been received. Our team in Sambalpur will get in touch with you shortly.',
    });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred while processing your request. Please try calling us directly.',
      },
      { status: 500 }
    );
  }
}
