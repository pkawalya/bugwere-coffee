import { turso } from "@/lib/turso";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await turso.execute(
      "SELECT * FROM impact_stories WHERE active = 1 ORDER BY sort_order ASC"
    );

    const rows = result.rows.map((row) => {
      const parsed = { ...row };

      // Parse JSON fields if they exist and are strings
      if (typeof parsed.journey_steps === "string") {
        try {
          parsed.journey_steps = JSON.parse(parsed.journey_steps);
        } catch {
          parsed.journey_steps = [];
        }
      }

      return parsed;
    });

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Failed to fetch impact stories:", error);
    return NextResponse.json(
      { error: "Failed to fetch impact stories" },
      { status: 500 }
    );
  }
}
