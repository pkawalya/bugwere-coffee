import { turso } from "@/lib/turso";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await turso.execute(
      "SELECT * FROM model_pillars WHERE active = 1 ORDER BY sort_order ASC"
    );

    const rows = result.rows.map((row) => ({
      id: row.id,
      title: row.title,
      description: row.description,
      icon: row.icon,
      sort_order: row.sort_order,
      active: row.active,
    }));

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Failed to fetch model pillars:", error);
    return NextResponse.json(
      { error: "Failed to fetch model pillars" },
      { status: 500 }
    );
  }
}
