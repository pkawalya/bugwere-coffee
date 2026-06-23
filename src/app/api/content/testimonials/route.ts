import { turso } from "@/lib/turso";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await turso.execute(
      "SELECT * FROM testimonials WHERE active = 1 ORDER BY sort_order ASC"
    );

    const rows = result.rows.map((row) => ({
      id: row.id,
      name: row.name,
      role: row.role,
      content: row.content,
      image_url: row.image_url,
      sort_order: row.sort_order,
      active: row.active,
    }));

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}
