

import nodemailer from 'nodemailer';

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const { name, email, message } = data;

    if (!name || !email || !message) {
      return new NextResponse('Missing fields', { status: 400 });
    }

    
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT), 
      secure:true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return new NextResponse('Email sent successfully', { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse('Error sending email', { status: 500 });
  }
}
