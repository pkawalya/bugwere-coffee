import { turso } from "@/lib/turso";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, topics } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and email are required." },
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

    // Serialize topics as JSON if it's an array
    const topicsValue = Array.isArray(topics)
      ? JSON.stringify(topics)
      : topics ?? null;

    // Insert into subscribers
    await turso.execute({
      sql: `INSERT INTO subscribers (name, email, topics, created_at)
            VALUES (?, ?, ?, datetime('now'))`,
      args: [name, email, topicsValue],
    });

    return NextResponse.json({
      success: true,
      message: "Welcome to the Bugwere community! You are now subscribed to our newsletter.",
    });
  } catch (error) {
    console.error("Subscribe form error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
