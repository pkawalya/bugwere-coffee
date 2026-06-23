import { NextRequest, NextResponse } from "next/server";
import { turso } from "@/lib/turso";
import { verifyAdmin } from "@/lib/admin-auth";

export async function GET(request: NextRequest) {
  const admin = await verifyAdmin(request);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const tables = [
      { name: "programs", table: "programs" },
      { name: "news", table: "news_articles" },
      { name: "testimonials", table: "testimonials" },
      { name: "team", table: "team_members" },
      { name: "board", table: "board_members" },
      { name: "heroSlides", table: "hero_slides" },
      { name: "impactStats", table: "impact_stats" },
      { name: "impactStories", table: "impact_stories" },
      { name: "modelPillars", table: "model_pillars" },
      { name: "contactSubmissions", table: "contact_submissions" },
      { name: "joinSubmissions", table: "join_submissions" },
      { name: "subscribers", table: "subscribers" },
    ];

    const counts: Record<string, number> = {};
    for (const t of tables) {
      const result = await turso.execute(`SELECT COUNT(*) as count FROM ${t.table}`);
      counts[t.name] = Number(result.rows[0].count);
    }

    // Recent contact submissions
    const contactResult = await turso.execute(
      "SELECT id, name, email, subject, created_at, read FROM contact_submissions ORDER BY created_at DESC LIMIT 5"
    );

    // Recent join submissions
    const joinResult = await turso.execute(
      "SELECT id, name, email, interest, created_at FROM join_submissions ORDER BY created_at DESC LIMIT 5"
    );

    return NextResponse.json({
      counts,
      recentContacts: contactResult.rows,
      recentJoins: joinResult.rows,
    });
  } catch (error) {
    console.error("Dashboard error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
