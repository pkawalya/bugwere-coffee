import { turso } from "@/lib/turso";

// ─── Types ──────────────────────────────────────────────────────────────────

export interface HeroSlide {
  id: string;
  image: string;
  subtitle: string;
  title: string;
  description: string;
  cta: string;
  cta_href: string;
  sort_order: number;
  active: number;
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  hero_image: string;
  key_facts: { label: string; value: string; icon: string }[];
  highlights: string[];
  journey_steps: { title: string; description: string; icon: string }[];
  cta_title: string;
  cta_subtitle: string;
  accent_color: string;
  sort_order: number;
  active: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
  sort_order: number;
  active: number;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  featured: number;
  content: string;
  active: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  color: string;
  photo: string;
  linkedin: string;
  email: string;
  sort_order: number;
  active: number;
}

export interface BoardMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  color: string;
  photo: string;
  linkedin: string;
  email: string;
  sort_order: number;
  active: number;
}

export interface ImpactStat {
  id: string;
  label: string;
  value: string;
  suffix: string;
  icon: string;
  sort_order: number;
  active: number;
}

export interface ImpactStory {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  sort_order: number;
  active: number;
}

export interface ModelPillar {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
  sort_order: number;
  active: number;
}

export type SiteSettings = Record<string, string>;

// ─── Helper: Convert Turso row to plain object ──────────────────────────────
// Turso rows have a special prototype that can't be serialized to client components.
// We need to convert them to plain JavaScript objects via JSON round-trip.

function toPlainObject<T>(row: Record<string, unknown>): T {
  // Extract all own enumerable string-keyed properties to ensure a truly plain object
  const obj: Record<string, unknown> = {};
  for (const key of Object.keys(row)) {
    obj[key] = row[key];
  }
  return JSON.parse(JSON.stringify(obj)) as T;
}

function toPlainObjects<T>(rows: Record<string, unknown>[]): T[] {
  return rows.map((row) => toPlainObject<T>(row));
}

// ─── Helper: Parse JSON fields safely ───────────────────────────────────────

function parseJSON<T>(value: unknown, fallback: T): T {
  if (typeof value === "string") {
    try {
      return JSON.parse(value) as T;
    } catch {
      return fallback;
    }
  }
  if (Array.isArray(value)) return value as T;
  return fallback;
}

// ─── Data Fetchers ──────────────────────────────────────────────────────────

export async function getHeroSlides(): Promise<HeroSlide[]> {
  try {
    const result = await turso.execute(
      "SELECT * FROM hero_slides WHERE active = 1 ORDER BY sort_order ASC"
    );
    return toPlainObjects<HeroSlide>(result.rows as unknown as Record<string, unknown>[]);
  } catch (error) {
    console.error("Failed to fetch hero slides:", error);
    return [];
  }
}

export async function getPrograms(): Promise<Program[]> {
  try {
    const result = await turso.execute(
      "SELECT * FROM programs WHERE active = 1 ORDER BY sort_order ASC"
    );
    return result.rows.map((row) => {
      const plain = toPlainObject<Record<string, unknown>>(row as unknown as Record<string, unknown>);
      return {
        ...plain,
        key_facts: parseJSON(plain.key_facts, []),
        highlights: parseJSON(plain.highlights, []),
        journey_steps: parseJSON(plain.journey_steps, []),
      } as unknown as Program;
    });
  } catch (error) {
    console.error("Failed to fetch programs:", error);
    return [];
  }
}

export async function getProgramBySlug(slug: string): Promise<Program | null> {
  try {
    const result = await turso.execute({
      sql: "SELECT * FROM programs WHERE slug = ? AND active = 1",
      args: [slug],
    });
    if (result.rows.length === 0) return null;
    const plain = toPlainObject<Record<string, unknown>>(result.rows[0] as unknown as Record<string, unknown>);
    return {
      ...plain,
      key_facts: parseJSON(plain.key_facts, []),
      highlights: parseJSON(plain.highlights, []),
      journey_steps: parseJSON(plain.journey_steps, []),
    } as unknown as Program;
  } catch (error) {
    console.error("Failed to fetch program:", error);
    return null;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const result = await turso.execute(
      "SELECT * FROM testimonials WHERE active = 1 ORDER BY sort_order ASC"
    );
    return toPlainObjects<Testimonial>(result.rows as unknown as Record<string, unknown>[]);
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    return [];
  }
}

export async function getNewsArticles(): Promise<NewsArticle[]> {
  try {
    const result = await turso.execute(
      "SELECT * FROM news_articles WHERE active = 1 ORDER BY featured DESC, date DESC"
    );
    return toPlainObjects<NewsArticle>(result.rows as unknown as Record<string, unknown>[]);
  } catch (error) {
    console.error("Failed to fetch news articles:", error);
    return [];
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const result = await turso.execute(
      "SELECT * FROM team_members WHERE active = 1 ORDER BY sort_order ASC"
    );
    return toPlainObjects<TeamMember>(result.rows as unknown as Record<string, unknown>[]);
  } catch (error) {
    console.error("Failed to fetch team members:", error);
    return [];
  }
}

export async function getBoardMembers(): Promise<BoardMember[]> {
  try {
    const result = await turso.execute(
      "SELECT * FROM board_members WHERE active = 1 ORDER BY sort_order ASC"
    );
    return toPlainObjects<BoardMember>(result.rows as unknown as Record<string, unknown>[]);
  } catch (error) {
    console.error("Failed to fetch board members:", error);
    return [];
  }
}

export async function getImpactStats(): Promise<ImpactStat[]> {
  try {
    const result = await turso.execute(
      "SELECT * FROM impact_stats WHERE active = 1 ORDER BY sort_order ASC"
    );
    return toPlainObjects<ImpactStat>(result.rows as unknown as Record<string, unknown>[]);
  } catch (error) {
    console.error("Failed to fetch impact stats:", error);
    return [];
  }
}

export async function getImpactStories(): Promise<ImpactStory[]> {
  try {
    const result = await turso.execute(
      "SELECT * FROM impact_stories WHERE active = 1 ORDER BY sort_order ASC"
    );
    return toPlainObjects<ImpactStory>(result.rows as unknown as Record<string, unknown>[]);
  } catch (error) {
    console.error("Failed to fetch impact stories:", error);
    return [];
  }
}

export async function getModelPillars(): Promise<ModelPillar[]> {
  try {
    const result = await turso.execute(
      "SELECT * FROM model_pillars WHERE active = 1 ORDER BY sort_order ASC"
    );
    return toPlainObjects<ModelPillar>(result.rows as unknown as Record<string, unknown>[]);
  } catch (error) {
    console.error("Failed to fetch model pillars:", error);
    return [];
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const result = await turso.execute("SELECT * FROM site_settings");
    const settings: SiteSettings = {};
    for (const row of result.rows) {
      const plain = toPlainObject<Record<string, string>>(row as unknown as Record<string, unknown>);
      const key = plain.key as string;
      const value = plain.value as string;
      if (key) {
        settings[key] = value ?? "";
      }
    }
    return settings;
  } catch (error) {
    console.error("Failed to fetch site settings:", error);
    return {};
  }
}
