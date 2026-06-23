import { turso } from "@/lib/turso";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await turso.execute("SELECT * FROM site_settings");

    // Convert rows to a key-value object for easy access
    const settings: Record<string, string> = {};
    for (const row of result.rows) {
      const key = row.key as string;
      const value = row.value as string;
      if (key) {
        settings[key] = value ?? "";
      }
    }

    return NextResponse.json(settings);
  } catch (error) {
    console.error("Failed to fetch site settings:", error);
    return NextResponse.json(
      { error: "Failed to fetch site settings" },
      { status: 500 }
    );
  }
}
