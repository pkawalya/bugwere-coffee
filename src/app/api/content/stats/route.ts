import { turso } from "@/lib/turso";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [
      contactSubmissions,
      subscribers,
      joinSubmissions,
      activePrograms,
      newsArticles,
      teamMembers,
      boardMembers,
      testimonials,
      impactStories,
    ] = await Promise.all([
      turso.execute("SELECT COUNT(*) as count FROM contact_submissions"),
      turso.execute("SELECT COUNT(*) as count FROM subscribers"),
      turso.execute("SELECT COUNT(*) as count FROM join_submissions"),
      turso.execute("SELECT COUNT(*) as count FROM programs WHERE active = 1"),
      turso.execute("SELECT COUNT(*) as count FROM news WHERE active = 1"),
      turso.execute("SELECT COUNT(*) as count FROM team WHERE active = 1"),
      turso.execute("SELECT COUNT(*) as count FROM board WHERE active = 1"),
      turso.execute("SELECT COUNT(*) as count FROM testimonials WHERE active = 1"),
      turso.execute("SELECT COUNT(*) as count FROM impact_stories WHERE active = 1"),
    ]);

    const getCount = (result: { rows: Array<Record<string, unknown>> }) => {
      const row = result.rows[0] as Record<string, unknown> | undefined;
      return Number(row?.count ?? 0);
    };

    return NextResponse.json({
      contact_submissions: getCount(contactSubmissions),
      subscribers: getCount(subscribers),
      join_submissions: getCount(joinSubmissions),
      active_programs: getCount(activePrograms),
      news_articles: getCount(newsArticles),
      team_members: getCount(teamMembers),
      board_members: getCount(boardMembers),
      testimonials: getCount(testimonials),
      impact_stories: getCount(impactStories),
    });
  } catch (error) {
    console.error("Failed to fetch dashboard stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard stats" },
      { status: 500 }
    );
  }
}
