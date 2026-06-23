# Admin Dashboard Implementation - Bugwere Coffee Company

## Task Summary
Built a complete admin dashboard for the Bugwere Coffee Company website at `/admin` route.

## Files Created

### Auth & Middleware
- `/src/lib/admin-auth.ts` - Token-based auth with HMAC verification, password hashing (bcryptjs)

### API Routes
- `/src/app/api/admin/auth/login/route.ts` - POST: email+password login, sets cookie
- `/src/app/api/admin/auth/logout/route.ts` - POST: clears cookie
- `/src/app/api/admin/dashboard/route.ts` - GET: summary stats + recent submissions
- `/src/app/api/admin/[table]/route.ts` - GET (list), POST (create) for all tables
- `/src/app/api/admin/[table]/[id]/route.ts` - GET, PUT, DELETE for all tables
- `/src/app/api/admin/site-settings/route.ts` - GET, POST, PUT for key-value settings
- `/src/app/api/admin/site-settings/[key]/route.ts` - DELETE for settings

### Admin Pages
- `/src/app/admin/layout.tsx` - Sidebar nav, header, auth protection, Toaster
- `/src/app/admin/login/page.tsx` - Login form
- `/src/app/admin/page.tsx` - Dashboard with stat cards + recent submissions
- `/src/app/admin/hero-slides/page.tsx` - CRUD for hero slides
- `/src/app/admin/programs/page.tsx` - CRUD for programs (with JSON editors)
- `/src/app/admin/news/page.tsx` - CRUD for news articles
- `/src/app/admin/testimonials/page.tsx` - CRUD for testimonials
- `/src/app/admin/team/page.tsx` - CRUD for team members
- `/src/app/admin/board/page.tsx` - CRUD for board members
- `/src/app/admin/impact-stats/page.tsx` - CRUD for impact stats
- `/src/app/admin/impact-stories/page.tsx` - CRUD for impact stories
- `/src/app/admin/model-pillars/page.tsx` - CRUD for model pillars
- `/src/app/admin/submissions/page.tsx` - Tabbed view (contact/join), mark as read, delete
- `/src/app/admin/subscribers/page.tsx` - View/delete subscribers
- `/src/app/admin/settings/page.tsx` - Key-value editor for site settings

## Key Design Decisions
- Token stored in `bcc_admin_token` cookie with HMAC verification
- Tables without sort_order (submissions, subscribers) use `created_at DESC` ordering
- Tables without updated_at (submissions, subscribers) skip that column on INSERT/UPDATE
- JSON fields (key_facts, highlights, journey_steps, topics) stored as TEXT, parsed on read
- All admin API routes verify auth via `verifyAdmin(request)`
- Used `startTransition` for state updates in effects to satisfy React compiler lint rules

## Credentials
- Email: admin@bugwerecoffee.com
- Password: admin2025
