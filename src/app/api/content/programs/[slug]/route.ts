import { turso } from "@/lib/turso";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const result = await turso.execute({
      sql: "SELECT * FROM programs WHERE slug = ? AND active = 1",
      args: [slug],
    });

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: "Program not found" },
        { status: 404 }
      );
    }

    const row = { ...result.rows[0] };

    // Parse JSON fields if they exist and are strings
    if (typeof row.key_facts === "string") {
      try {
        row.key_facts = JSON.parse(row.key_facts as string);
      } catch {
        row.key_facts = [];
      }
    }
    if (typeof row.highlights === "string") {
      try {
        row.highlights = JSON.parse(row.highlights as string);
      } catch {
        row.highlights = [];
      }
    }

    return NextResponse.json(row);
  } catch (error) {
    console.error("Failed to fetch program:", error);
    return NextResponse.json(
      { error: "Failed to fetch program" },
      { status: 500 }
    );
  }
}
