# Task: Update Pages to Fetch Content Dynamically from Turso Database

## Summary
All public-facing pages have been updated to fetch content dynamically from the Turso database instead of using hardcoded data arrays. Each page now uses a server component that queries the database directly and passes data as props to a client component.

## Files Created

### Data Access Layer
- `src/lib/data.ts` — Centralized data access functions that query Turso directly. Includes TypeScript interfaces for all data types, JSON parsing for complex fields, and proper serialization (JSON round-trip) to ensure plain objects are passed to client components.
- `src/lib/icon-map.tsx` — Utility to map icon name strings from the database to Lucide React icon components.

### Client Components (extracted from pages)
- `src/components/HomeClient.tsx` — Homepage client component with all interactive features (forms, animations)
- `src/components/ImpactClient.tsx` — Impact page client component
- `src/components/ModelClient.tsx` — Model page client component
- `src/components/TeamClient.tsx` — Team page client component
- `src/components/BoardClient.tsx` — Board page client component
- `src/components/NewsClient.tsx` — News page client component
- `src/components/ContactClient.tsx` — Contact page client component (with form submission to /api/content/contact)
- `src/components/ProgramClient.tsx` — Unified program page client component

### Dynamic Route
- `src/app/programs/[slug]/page.tsx` — Dynamic route that fetches programs by slug

## Files Modified

### Page Files (converted to server components)
- `src/app/page.tsx` — Now a server component that fetches hero_slides, programs, testimonials, news, impact_stats, model_pillars
- `src/app/impact/page.tsx` — Fetches impact_stories and impact_stats
- `src/app/model/page.tsx` — Fetches model_pillars
- `src/app/about/team/page.tsx` — Fetches team_members
- `src/app/about/board/page.tsx` — Fetches board_members
- `src/app/connect/news/page.tsx` — Fetches news_articles
- `src/app/contact/page.tsx` — Fetches site_settings + uses /api/content/contact for form submission
- `src/app/programs/coffee/page.tsx` — Fetches program by slug "coffee"
- `src/app/programs/cocoa/page.tsx` — Fetches program by slug "cocoa"
- `src/app/programs/livestock/page.tsx` — Fetches program by slug "livestock"
- `src/app/programs/agronomy/page.tsx` — Fetches program by slug "agronomy"
- `src/app/programs/community/page.tsx` — Fetches program by slug "community"

### API Routes Fixed
- `src/app/api/content/news/route.ts` — Fixed to query `news_articles` table instead of non-existent `news` table

## Key Design Decisions

1. **Server/Client Component Split**: Each page is a server component that fetches data from Turso directly (no HTTP round-trips to API routes) and passes it as props to a client component that handles interactivity.

2. **Fallback Data**: Every client component includes fallback hardcoded data so pages don't break if the database query fails or returns empty.

3. **Icon Mapping**: Database stores icon names as strings (e.g., "Coffee", "Sprout"). The `icon-map.tsx` utility converts these to Lucide React components.

4. **Revalidation**: All pages use `export const revalidate = 60` for ISR (Incremental Static Regeneration).

5. **JSON Serialization**: Turso row objects have special prototypes that can't be passed to client components. We use `JSON.parse(JSON.stringify())` to create plain objects.

6. **Contact Form**: Now submits to `/api/content/contact` which inserts into `contact_submissions` table.

7. **About Page**: Kept as-is since VALUES and TIMELINE are not in the database (they're design/layout content, not CMS-managed content).

## All Pages Return 200
✅ Homepage, Impact, Model, About, About/Team, About/Board, Connect/News, Contact, Programs/Coffee, Programs/Cocoa, Programs/Livestock, Programs/Agronomy, Programs/Community
✅ Dynamic route `/programs/[slug]` works (returns 404 for non-existent slugs)
✅ No lint errors in source files
