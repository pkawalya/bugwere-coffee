import { NextRequest, NextResponse } from "next/server";
import { turso } from "@/lib/turso";
import { verifyAdmin } from "@/lib/admin-auth";

export async function GET(request: NextRequest) {
  const admin = await verifyAdmin(request);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await turso.execute("SELECT * FROM site_settings ORDER BY key ASC");
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("GET site-settings error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const admin = await verifyAdmin(request);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { key, value } = body;

    if (!key || !value) {
      return NextResponse.json({ error: "Key and value are required" }, { status: 400 });
    }

    const now = new Date().toISOString();
    await turso.execute({
      sql: "INSERT OR REPLACE INTO site_settings (key, value, updated_at) VALUES (?, ?, ?)",
      args: [key, value, now],
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("POST site-settings error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const admin = await verifyAdmin(request);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();

    if (Array.isArray(body)) {
      const now = new Date().toISOString();
      for (const item of body) {
        if (item.key && item.value !== undefined) {
          await turso.execute({
            sql: "INSERT OR REPLACE INTO site_settings (key, value, updated_at) VALUES (?, ?, ?)",
            args: [item.key, item.value, now],
          });
        }
      }
      return NextResponse.json({ success: true });
    }

    const { key, value } = body;
    if (!key) {
      return NextResponse.json({ error: "Key is required" }, { status: 400 });
    }

    const now = new Date().toISOString();
    await turso.execute({
      sql: "INSERT OR REPLACE INTO site_settings (key, value, updated_at) VALUES (?, ?, ?)",
      args: [key, value ?? "", now],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("PUT site-settings error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
