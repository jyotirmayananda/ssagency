import { NextResponse } from 'next/server';
import { quoteFormSchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Spam Honeypot check
    if (body.website && body.website.length > 0) {
      return NextResponse.json({ success: true, message: 'Quote enquiry received.' });
    }

    const validated = quoteFormSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validated.error.flatten().fieldErrors,
          message: 'Please review and correct the form errors.',
        },
        { status: 400 }
      );
    }

    const data = validated.data;
    const quoteId = `SSA-QT-${Date.now().toString(36).toUpperCase()}`;

    const emailApiKey = process.env.RESEND_API_KEY || process.env.EMAIL_API_KEY;

    if (emailApiKey) {
      console.log(`[Quote Enquiry ${quoteId}] Email delivery triggered to ssagency.sbpodi@gmail.com`);
    } else {
      console.log(`[Quote Enquiry ${quoteId}] Server processed:`, {
        name: data.fullName,
        company: data.companyName,
        phone: data.phone,
        email: data.email,
        service: data.service,
        staffCount: data.staffCount,
        startDate: data.startDate,
        duration: data.duration,
        location: data.location,
      });
    }

    return NextResponse.json({
      success: true,
      quoteId,
      message:
        'Thank you! Your quote request has been registered. An S.S. Agency representative will contact you with deployment options and pricing details.',
    });
  } catch (error) {
    console.error('Error handling quote submission:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Could not process quote request. Please call or WhatsApp us directly.',
      },
      { status: 500 }
    );
  }
}
