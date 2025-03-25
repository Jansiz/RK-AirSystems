import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, honeypot } = body;

    // Check honeypot
    if (honeypot) {
      return NextResponse.json({ success: true }); // Silently accept honeypot submissions
    }

    // Send email using your preferred method (e.g., SendGrid, Nodemailer, etc.)
    // For now, we'll just log the data
    console.log('Form submission:', { name, email, phone, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 