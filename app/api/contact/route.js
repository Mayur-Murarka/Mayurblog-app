import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, inquiryType } = body;

    // Validate fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const messagesFile = path.join(dataDir, 'messages.json');
    let messages = [];

    if (fs.existsSync(messagesFile)) {
      try {
        const fileData = fs.readFileSync(messagesFile, 'utf-8');
        messages = JSON.parse(fileData);
        if (!Array.isArray(messages)) messages = [];
      } catch {
        messages = [];
      }
    }

    const newMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject ? subject.trim() : 'General Inquiry',
      inquiryType: inquiryType || 'General Inquiry',
      message: message.trim(),
      createdAt: new Date().toISOString(),
      formattedDate: new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
      read: false,
    };

    // 1. Safe local persistence (with graceful catch for serverless read-only filesystems)
    try {
      messages.unshift(newMessage);
      fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2), 'utf-8');
    } catch (fsErr) {
      console.warn('Could not write message to local file system (expected on serverless):', fsErr.message);
    }

    // 2. Direct email delivery to Mayur's inbox via FormSubmit API
    try {
      await fetch('https://formsubmit.co/ajax/mayurmuarka1@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Referer': 'https://mayurblog.vercel.app',
        },
        body: JSON.stringify({
          _subject: `[MayurBlog Inquiry] ${newMessage.subject} - from ${newMessage.name}`,
          name: newMessage.name,
          email: newMessage.email,
          inquiryType: newMessage.inquiryType,
          message: newMessage.message,
          receivedAt: newMessage.formattedDate,
        }),
      });
    } catch (emailErr) {
      console.warn('Email forward attempt to FormSubmit encountered an issue:', emailErr.message);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received and forwarded to Mayur!',
        id: newMessage.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email directly.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Return message count & public health check without exposing private data
  try {
    const messagesFile = path.join(process.cwd(), 'data', 'messages.json');
    let count = 0;
    if (fs.existsSync(messagesFile)) {
      const data = JSON.parse(fs.readFileSync(messagesFile, 'utf-8'));
      if (Array.isArray(data)) count = data.length;
    }
    return NextResponse.json({ status: 'active', messageCount: count }, { status: 200 });
  } catch {
    return NextResponse.json({ status: 'active', messageCount: 0 }, { status: 200 });
  }
}
