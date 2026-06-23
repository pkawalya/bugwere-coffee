import { turso } from "@/lib/turso";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await turso.execute(
      "SELECT * FROM hero_slides WHERE active = 1 ORDER BY sort_order ASC"
    );

    const rows = result.rows.map((row) => ({
      id: row.id,
      title: row.title,
      subtitle: row.subtitle,
      image_url: row.image_url,
      cta_text: row.cta_text,
      cta_link: row.cta_link,
      sort_order: row.sort_order,
      active: row.active,
    }));

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Failed to fetch hero slides:", error);
    return NextResponse.json(
      { error: "Failed to fetch hero slides" },
      { status: 500 }
    );
  }
}
