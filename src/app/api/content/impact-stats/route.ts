import { turso } from "@/lib/turso";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await turso.execute(
      "SELECT * FROM impact_stats WHERE active = 1 ORDER BY sort_order ASC"
    );

    const rows = result.rows.map((row) => ({
      id: row.id,
      label: row.label,
      value: row.value,
      icon: row.icon,
      sort_order: row.sort_order,
      active: row.active,
    }));

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Failed to fetch impact stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch impact stats" },
      { status: 500 }
    );
  }
}
