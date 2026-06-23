import { createClient } from "@libsql/client";
import * as dotenv from "dotenv";

dotenv.config({ path: "/home/z/my-project/.env" });

const turso = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

async function initDB() {
  console.log("Creating database tables...");

  const tables = [
    `CREATE TABLE IF NOT EXISTS admin_users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      name TEXT NOT NULL,
      role TEXT DEFAULT 'admin',
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS hero_slides (
      id TEXT PRIMARY KEY,
      image TEXT NOT NULL,
      subtitle TEXT NOT NULL,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      cta TEXT NOT NULL,
      cta_href TEXT NOT NULL,
      sort_order INTEGER DEFAULT 0,
      active INTEGER DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS programs (
      id TEXT PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      subtitle TEXT NOT NULL,
      description TEXT NOT NULL,
      hero_image TEXT NOT NULL,
      key_facts TEXT DEFAULT '[]',
      highlights TEXT DEFAULT '[]',
      journey_steps TEXT DEFAULT '[]',
      cta_title TEXT DEFAULT '',
      cta_subtitle TEXT DEFAULT '',
      accent_color TEXT DEFAULT '#c94449',
      sort_order INTEGER DEFAULT 0,
      active INTEGER DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS news_articles (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      excerpt TEXT NOT NULL,
      image TEXT NOT NULL,
      category TEXT NOT NULL,
      date TEXT NOT NULL,
      featured INTEGER DEFAULT 0,
      content TEXT DEFAULT '',
      active INTEGER DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS testimonials (
      id TEXT PRIMARY KEY,
      quote TEXT NOT NULL,
      name TEXT NOT NULL,
      role TEXT NOT NULL,
      image TEXT NOT NULL,
      sort_order INTEGER DEFAULT 0,
      active INTEGER DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS team_members (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      role TEXT NOT NULL,
      bio TEXT NOT NULL,
      color TEXT DEFAULT '#193b2a',
      photo TEXT DEFAULT '',
      linkedin TEXT DEFAULT '',
      email TEXT DEFAULT '',
      sort_order INTEGER DEFAULT 0,
      active INTEGER DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS board_members (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      role TEXT NOT NULL,
      bio TEXT NOT NULL,
      color TEXT DEFAULT '#193b2a',
      photo TEXT DEFAULT '',
      linkedin TEXT DEFAULT '',
      email TEXT DEFAULT '',
      sort_order INTEGER DEFAULT 0,
      active INTEGER DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS impact_stats (
      id TEXT PRIMARY KEY,
      label TEXT NOT NULL,
      value TEXT NOT NULL,
      suffix TEXT DEFAULT '',
      icon TEXT DEFAULT '',
      sort_order INTEGER DEFAULT 0,
      active INTEGER DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS impact_stories (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      excerpt TEXT NOT NULL,
      image TEXT NOT NULL,
      sort_order INTEGER DEFAULT 0,
      active INTEGER DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS site_settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL,
      updated_at TEXT DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS model_pillars (
      id TEXT PRIMARY KEY,
      icon TEXT NOT NULL,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      href TEXT NOT NULL,
      sort_order INTEGER DEFAULT 0,
      active INTEGER DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS contact_submissions (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT DEFAULT '',
      subject TEXT DEFAULT '',
      message TEXT NOT NULL,
      read INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS join_submissions (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT DEFAULT '',
      interest TEXT DEFAULT '',
      created_at TEXT DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS subscribers (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      topics TEXT DEFAULT '[]',
      active INTEGER DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now'))
    )`,
  ];

  for (const sql of tables) {
    await turso.execute(sql);
  }

  console.log("All tables created successfully!");
}

initDB().catch(console.error);
