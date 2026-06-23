import { NextRequest, NextResponse } from "next/server";
import { turso } from "@/lib/turso";
import { verifyAdmin } from "@/lib/admin-auth";

const TABLE_CONFIG: Record<string, { table: string; columns: string[]; jsonFields: string[]; hasUpdatedAt: boolean }> = {
  "hero-slides": {
    table: "hero_slides",
    columns: ["image", "subtitle", "title", "description", "cta", "cta_href", "sort_order", "active"],
    jsonFields: [],
    hasUpdatedAt: true,
  },
  programs: {
    table: "programs",
    columns: ["slug", "title", "subtitle", "description", "hero_image", "key_facts", "highlights", "journey_steps", "cta_title", "cta_subtitle", "accent_color", "sort_order", "active"],
    jsonFields: ["key_facts", "highlights", "journey_steps"],
    hasUpdatedAt: true,
  },
  news: {
    table: "news_articles",
    columns: ["title", "excerpt", "image", "category", "date", "featured", "content", "active"],
    jsonFields: [],
    hasUpdatedAt: true,
  },
  testimonials: {
    table: "testimonials",
    columns: ["quote", "name", "role", "image", "sort_order", "active"],
    jsonFields: [],
    hasUpdatedAt: true,
  },
  team: {
    table: "team_members",
    columns: ["name", "role", "bio", "color", "photo", "linkedin", "email", "sort_order", "active"],
    jsonFields: [],
    hasUpdatedAt: true,
  },
  board: {
    table: "board_members",
    columns: ["name", "role", "bio", "color", "photo", "linkedin", "email", "sort_order", "active"],
    jsonFields: [],
    hasUpdatedAt: true,
  },
  "impact-stats": {
    table: "impact_stats",
    columns: ["label", "value", "suffix", "icon", "sort_order", "active"],
    jsonFields: [],
    hasUpdatedAt: true,
  },
  "impact-stories": {
    table: "impact_stories",
    columns: ["title", "excerpt", "image", "sort_order", "active"],
    jsonFields: [],
    hasUpdatedAt: true,
  },
  "model-pillars": {
    table: "model_pillars",
    columns: ["icon", "title", "description", "href", "sort_order", "active"],
    jsonFields: [],
    hasUpdatedAt: true,
  },
  submissions: {
    table: "contact_submissions",
    columns: ["name", "email", "phone", "subject", "message", "read"],
    jsonFields: [],
    hasUpdatedAt: false,
  },
  subscribers: {
    table: "subscribers",
    columns: ["name", "email", "topics", "active"],
    jsonFields: ["topics"],
    hasUpdatedAt: false,
  },
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ table: string; id: string }> }
) {
  const admin = await verifyAdmin(request);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { table, id } = await params;
  const config = TABLE_CONFIG[table];
  if (!config) {
    return NextResponse.json({ error: "Invalid table" }, { status: 400 });
  }

  try {
    const result = await turso.execute({
      sql: `SELECT * FROM ${config.table} WHERE id = ?`,
      args: [id],
    });

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const row = result.rows[0];
    const obj: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(row)) {
      if (config.jsonFields.includes(key) && typeof val === "string") {
        try { obj[key] = JSON.parse(val); } catch { obj[key] = val; }
      } else {
        obj[key] = val;
      }
    }

    return NextResponse.json(obj);
  } catch (error) {
    console.error(`GET /admin/${table}/${id} error:`, error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ table: string; id: string }> }
) {
  const admin = await verifyAdmin(request);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { table, id } = await params;
  const config = TABLE_CONFIG[table];
  if (!config) {
    return NextResponse.json({ error: "Invalid table" }, { status: 400 });
  }

  try {
    const body = await request.json();
    const now = new Date().toISOString();

    const setClauses: string[] = [];
    const args: (string | number)[] = [];

    if (config.hasUpdatedAt) {
      setClauses.push("updated_at = ?");
      args.push(now);
    }

    for (const col of config.columns) {
      if (col in body) {
        setClauses.push(`${col} = ?`);
        let val = body[col];
        if (config.jsonFields.includes(col) && typeof val !== "string") {
          val = JSON.stringify(val);
        }
        args.push(val ?? "");
      }
    }

    args.push(id);

    const sql = `UPDATE ${config.table} SET ${setClauses.join(", ")} WHERE id = ?`;
    await turso.execute({ sql, args });

    const result = await turso.execute({
      sql: `SELECT * FROM ${config.table} WHERE id = ?`,
      args: [id],
    });

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error(`PUT /admin/${table}/${id} error:`, error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ table: string; id: string }> }
) {
  const admin = await verifyAdmin(request);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { table, id } = await params;
  const config = TABLE_CONFIG[table];
  if (!config) {
    return NextResponse.json({ error: "Invalid table" }, { status: 400 });
  }

  try {
    // Check for join_submissions
    const url = new URL(request.url);
    const type = url.searchParams.get("type");
    const tableName = table === "submissions" && type === "join" ? "join_submissions" : config.table;

    await turso.execute({
      sql: `DELETE FROM ${tableName} WHERE id = ?`,
      args: [id],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`DELETE /admin/${table}/${id} error:`, error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
