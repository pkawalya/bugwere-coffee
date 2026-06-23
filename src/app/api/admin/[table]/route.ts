import { NextRequest, NextResponse } from "next/server";
import { turso } from "@/lib/turso";
import { verifyAdmin } from "@/lib/admin-auth";
import { v4 as uuid } from "uuid";

const TABLE_CONFIG: Record<string, { table: string; columns: string[]; jsonFields: string[]; hasSortOrder: boolean; hasUpdatedAt: boolean }> = {
  "hero-slides": {
    table: "hero_slides",
    columns: ["image", "subtitle", "title", "description", "cta", "cta_href", "sort_order", "active"],
    jsonFields: [],
    hasSortOrder: true,
    hasUpdatedAt: true,
  },
  programs: {
    table: "programs",
    columns: ["slug", "title", "subtitle", "description", "hero_image", "key_facts", "highlights", "journey_steps", "cta_title", "cta_subtitle", "accent_color", "sort_order", "active"],
    jsonFields: ["key_facts", "highlights", "journey_steps"],
    hasSortOrder: true,
    hasUpdatedAt: true,
  },
  news: {
    table: "news_articles",
    columns: ["title", "excerpt", "image", "category", "date", "featured", "content", "active"],
    jsonFields: [],
    hasSortOrder: false,
    hasUpdatedAt: true,
  },
  testimonials: {
    table: "testimonials",
    columns: ["quote", "name", "role", "image", "sort_order", "active"],
    jsonFields: [],
    hasSortOrder: true,
    hasUpdatedAt: true,
  },
  team: {
    table: "team_members",
    columns: ["name", "role", "bio", "color", "photo", "linkedin", "email", "sort_order", "active"],
    jsonFields: [],
    hasSortOrder: true,
    hasUpdatedAt: true,
  },
  board: {
    table: "board_members",
    columns: ["name", "role", "bio", "color", "photo", "linkedin", "email", "sort_order", "active"],
    jsonFields: [],
    hasSortOrder: true,
    hasUpdatedAt: true,
  },
  "impact-stats": {
    table: "impact_stats",
    columns: ["label", "value", "suffix", "icon", "sort_order", "active"],
    jsonFields: [],
    hasSortOrder: true,
    hasUpdatedAt: true,
  },
  "impact-stories": {
    table: "impact_stories",
    columns: ["title", "excerpt", "image", "sort_order", "active"],
    jsonFields: [],
    hasSortOrder: true,
    hasUpdatedAt: true,
  },
  "model-pillars": {
    table: "model_pillars",
    columns: ["icon", "title", "description", "href", "sort_order", "active"],
    jsonFields: [],
    hasSortOrder: true,
    hasUpdatedAt: true,
  },
  submissions: {
    table: "contact_submissions",
    columns: ["name", "email", "phone", "subject", "message", "read"],
    jsonFields: [],
    hasSortOrder: false,
    hasUpdatedAt: false,
  },
  subscribers: {
    table: "subscribers",
    columns: ["name", "email", "topics", "active"],
    jsonFields: ["topics"],
    hasSortOrder: false,
    hasUpdatedAt: false,
  },
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ table: string }> }
) {
  const admin = await verifyAdmin(request);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { table } = await params;
  const config = TABLE_CONFIG[table];
  if (!config) {
    return NextResponse.json({ error: "Invalid table" }, { status: 400 });
  }

  try {
    const url = new URL(request.url);
    const search = url.searchParams.get("search");
    const type = url.searchParams.get("type");

    let tableName = config.table;
    // Handle submissions type filter
    if (table === "submissions" && type === "join") {
      tableName = "join_submissions";
    }

    let sql = `SELECT * FROM ${tableName}`;
    const args: (string | number)[] = [];

    if (search) {
      sql += ` WHERE name LIKE ? OR email LIKE ?`;
      if (tableName !== "join_submissions" && tableName !== "subscribers") {
        sql += ` OR title LIKE ?`;
        args.push(`%${search}%`, `%${search}%`, `%${search}%`);
      } else {
        args.push(`%${search}%`, `%${search}%`);
      }
    }

    // Build ORDER BY based on table structure
    const isJoinTable = table === "submissions" && type === "join";
    const tableConfig = isJoinTable ? null : config;
    const hasSortOrder = tableConfig?.hasSortOrder ?? false;
    
    if (hasSortOrder) {
      sql += ` ORDER BY sort_order ASC, created_at DESC`;
    } else {
      sql += ` ORDER BY created_at DESC`;
    }

    const result = await turso.execute({ sql, args });

    const rows = result.rows.map((row) => {
      const obj: Record<string, unknown> = {};
      for (const [key, val] of Object.entries(row)) {
        if (config.jsonFields.includes(key) && typeof val === "string") {
          try { obj[key] = JSON.parse(val); } catch { obj[key] = val; }
        } else {
          obj[key] = val;
        }
      }
      return obj;
    });

    return NextResponse.json(rows);
  } catch (error) {
    console.error(`GET /admin/${table} error:`, error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ table: string }> }
) {
  const admin = await verifyAdmin(request);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { table } = await params;
  const config = TABLE_CONFIG[table];
  if (!config) {
    return NextResponse.json({ error: "Invalid table" }, { status: 400 });
  }

  try {
    const body = await request.json();
    const id = uuid();
    const now = new Date().toISOString();

    const insertCols: string[] = ["id", "created_at"];
    const insertArgs: (string | number)[] = [id, now];

    if (config.hasUpdatedAt) {
      insertCols.push("updated_at");
      insertArgs.push(now);
    }

    for (const col of config.columns) {
      if (col in body) {
        insertCols.push(col);
        let val = body[col];
        if (config.jsonFields.includes(col) && typeof val !== "string") {
          val = JSON.stringify(val);
        }
        insertArgs.push(val ?? "");
      }
    }

    const placeholders = insertCols.map(() => "?").join(", ");
    const sql = `INSERT INTO ${config.table} (${insertCols.join(", ")}) VALUES (${placeholders})`;

    await turso.execute({ sql, args: insertArgs });

    const result = await turso.execute({
      sql: `SELECT * FROM ${config.table} WHERE id = ?`,
      args: [id],
    });

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error(`POST /admin/${table} error:`, error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
