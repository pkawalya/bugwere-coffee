import { NextRequest, NextResponse } from "next/server";
import { verifyAdmin } from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  const admin = await verifyAdmin(request);
  // Allow logout even if not authenticated

  const response = NextResponse.json({ success: true });
  response.cookies.set("bcc_admin_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
    path: "/",
  });

  return response;
}
