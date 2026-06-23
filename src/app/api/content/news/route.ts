import { turso } from "@/lib/turso";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await turso.execute(
      "SELECT * FROM news_articles WHERE active = 1 ORDER BY featured DESC, date DESC"
    );

    const rows = result.rows.map((row) => ({
      id: row.id,
      title: row.title,
      excerpt: row.excerpt,
      image: row.image,
      category: row.category,
      date: row.date,
      featured: row.featured,
      content: row.content,
      active: row.active,
    }));

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
