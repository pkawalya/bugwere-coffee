import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, interest } = body;

    // Validate required fields
    if (!name || !email || !interest) {
      return NextResponse.json(
        { success: false, error: "Name, email, and interest are required." },
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

    // In production, you would save to a database or send to an email service
    // For now, we log and return success
    console.log("New join submission:", { name, email, phone, interest, timestamp: new Date().toISOString() });

    return NextResponse.json({
      success: true,
      message: "Thank you for joining the Bugwere Coffee Company movement! We will be in touch soon.",
    });
  } catch (error) {
    console.error("Join form error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
