import { turso } from "@/lib/turso";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Insert into contact_submissions
    await turso.execute({
      sql: `INSERT INTO contact_submissions (name, email, phone, subject, message, created_at)
            VALUES (?, ?, ?, ?, ?, datetime('now'))`,
      args: [
        name,
        email,
        phone ?? null,
        subject ?? null,
        message,
      ],
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for contacting us! We will get back to you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
