import { turso } from "@/lib/turso";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await turso.execute(
      "SELECT * FROM programs WHERE active = 1 ORDER BY sort_order ASC"
    );

    const rows = result.rows.map((row) => {
      const parsed = { ...row };

      // Parse JSON fields if they exist and are strings
      if (typeof parsed.key_facts === "string") {
        try {
          parsed.key_facts = JSON.parse(parsed.key_facts);
        } catch {
          parsed.key_facts = [];
        }
      }
      if (typeof parsed.highlights === "string") {
        try {
          parsed.highlights = JSON.parse(parsed.highlights);
        } catch {
          parsed.highlights = [];
        }
      }

      return parsed;
    });

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Failed to fetch programs:", error);
    return NextResponse.json(
      { error: "Failed to fetch programs" },
      { status: 500 }
    );
  }
}
