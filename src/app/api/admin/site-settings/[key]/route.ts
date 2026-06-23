import { NextRequest, NextResponse } from "next/server";
import { turso } from "@/lib/turso";
import { verifyAdmin } from "@/lib/admin-auth";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ key: string }> }
) {
  const admin = await verifyAdmin(request);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { key } = await params;

  try {
    await turso.execute({
      sql: "DELETE FROM site_settings WHERE key = ?",
      args: [key],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE site-settings error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
