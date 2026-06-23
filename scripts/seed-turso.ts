import { createClient } from "@libsql/client";
import * as dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";

dotenv.config({ path: "/home/z/my-project/.env" });

const turso = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

async function seed() {
  console.log("🌱 Seeding Turso database...\n");

  // ─── 1. admin_users ────────────────────────────────────────────────
  console.log("1/11 Seeding admin_users...");
  await turso.execute("DELETE FROM admin_users");
  const passwordHash = await bcrypt.hash("admin2025", 10);
  await turso.execute({
    sql: "INSERT INTO admin_users (id, email, password_hash, name, role) VALUES (?, ?, ?, ?, ?)",
    args: [uuid(), "admin@bugwerecoffee.com", passwordHash, "Admin", "admin"],
  });
  console.log("   ✓ 1 admin user inserted\n");

  // ─── 2. hero_slides ────────────────────────────────────────────────
  console.log("2/11 Seeding hero_slides...");
  await turso.execute("DELETE FROM hero_slides");
  const heroSlides = [
    {
      image: "/images/hero-1.png",
      subtitle: "Bugwere Coffee Company",
      title: "Empowering Communities Through Sustainable Agriculture",
      description:
        "Transforming rural livelihoods in Eastern Uganda through coffee, cocoa, and diversified farming programs.",
      cta: "Join The Campaign",
      cta_href: "#join",
      sort_order: 0,
    },
    {
      image: "/images/hero-2.png",
      subtitle: "Seedling Program",
      title: "Over 5,000 Homes Supplied With Coffee Seedlings",
      description:
        "Helping families establish long-term, high-value coffee farms that provide steady and sustainable household income.",
      cta: "Our Programs",
      cta_href: "/programs/coffee",
      sort_order: 1,
    },
    {
      image: "/images/hero-3.png",
      subtitle: "Cocoa Expansion",
      title: "Diversifying Income Through Cocoa Farming",
      description:
        "Supporting communities to diversify earnings with cocoa, a resilient crop that strengthens economic stability.",
      cta: "Learn More",
      cta_href: "/programs/cocoa",
      sort_order: 2,
    },
    {
      image: "/images/hero-4.png",
      subtitle: "Agricultural Support",
      title: "7,000+ Homes Supplied With Fertilizers",
      description:
        "Improving soil health and boosting crop productivity, enabling farmers to achieve higher yields and better quality harvests.",
      cta: "See Our Impact",
      cta_href: "/impact",
      sort_order: 3,
    },
  ];
  for (const s of heroSlides) {
    await turso.execute({
      sql: "INSERT INTO hero_slides (id, image, subtitle, title, description, cta, cta_href, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      args: [
        uuid(),
        s.image,
        s.subtitle,
        s.title,
        s.description,
        s.cta,
        s.cta_href,
        s.sort_order,
      ],
    });
  }
  console.log("   ✓ 4 hero slides inserted\n");

  // ─── 3. programs ──────────────────────────────────────────────────
  console.log("3/11 Seeding programs...");
  await turso.execute("DELETE FROM programs");
  const programs = [
    {
      slug: "coffee",
      title: "Sustainable Coffee Production",
      subtitle:
        "Empowering households through high-value coffee farming with guaranteed support from seedling to market.",
      description:
        "Empowering households through high-value coffee farming with guaranteed support from seedling to market.",
      hero_image: "/images/coffee-farmer-hd.jpeg",
      accent_color: "#c94449",
      key_facts: JSON.stringify([
        { label: "Homes Reached", value: "5,000+", icon: "HeartHandshake" },
        { label: "Seedling Varieties", value: "3 Premium", icon: "Sprout" },
        { label: "Field Officers", value: "45+", icon: "BookOpen" },
        { label: "Yield Increase", value: "+35%", icon: "Sun" },
      ]),
      highlights: JSON.stringify([
        "Over 5,000 homes supplied with premium coffee seedlings",
        "Guaranteed market access through our buying program",
        "Expert agronomic training and ongoing field support",
        "Processing and quality assurance at collection centers",
        "Financial inclusion through community SACCO savings groups",
        "Rural farmer insurance protecting against crop failure",
      ]),
      sort_order: 0,
    },
    {
      slug: "cocoa",
      title: "Cocoa Farming",
      subtitle:
        "Diversifying farmer income with resilient cocoa crops and comprehensive support.",
      description:
        "Diversifying farmer income with resilient cocoa crops and comprehensive support.",
      hero_image: "/images/cocoa-plantation-hd.jpeg",
      accent_color: "#6B3A2A",
      key_facts: JSON.stringify([
        { label: "Homes Reached", value: "3,700+", icon: "HeartHandshake" },
        { label: "Growth Rate", value: "+65%", icon: "TrendingUp" },
        { label: "Climate Suitability", value: "Excellent", icon: "Sprout" },
        { label: "Market Outlook", value: "Strong Demand", icon: "ShieldCheck" },
      ]),
      highlights: JSON.stringify([
        "Over 3,700 homes supplied with cocoa seedlings",
        "Cocoa thrives in Bugwere's tropical climate",
        "Diversifies income beyond coffee production",
        "High global demand ensures market stability",
        "Expert training on cocoa cultivation and processing",
        "Guaranteed market access through BCC buying program",
      ]),
      sort_order: 1,
    },
    {
      slug: "livestock",
      title: "Livestock Support",
      subtitle:
        "Piggery and poultry projects providing steady, diversified income for rural households.",
      description:
        "Piggery and poultry projects providing steady, diversified income for rural households.",
      hero_image: "/images/impact-fertilizer.png",
      accent_color: "#c94449",
      key_facts: JSON.stringify([
        { label: "Income Timeline", value: "6-8 Months", icon: "Clock" },
        { label: "Programs", value: "Piggery & Poultry", icon: "Bird" },
        { label: "Revenue Type", value: "Short-term", icon: "Coins" },
        { label: "Complements", value: "Coffee & Cocoa", icon: "Shield" },
      ]),
      highlights: JSON.stringify([
        "Piggery projects providing income within 6-8 months",
        "Poultry farming for daily and weekly revenue",
        "Complementary to long-term coffee and cocoa income",
        "Training on modern livestock management practices",
        "Veterinary support and disease prevention",
        "Market linkages for livestock products",
      ]),
      sort_order: 2,
    },
    {
      slug: "agronomy",
      title: "Agronomy & Farmer Support",
      subtitle:
        "Expert training, extension services, and ongoing field support for every farmer.",
      description:
        "Expert training, extension services, and ongoing field support for every farmer.",
      hero_image: "/images/hero-3.png",
      accent_color: "#193b2a",
      key_facts: JSON.stringify([
        { label: "Field Officers", value: "45+", icon: "BookOpen" },
        { label: "Training Topics", value: "20+", icon: "Microscope" },
        { label: "Farm Visits/Month", value: "500+", icon: "CalendarDays" },
        { label: "Yield Improvement", value: "+35%", icon: "TrendingUp" },
      ]),
      highlights: JSON.stringify([
        "On-farm training and demonstration plots",
        "Soil testing and fertilizer recommendations",
        "Pest and disease identification and management",
        "Pruning and crop management techniques",
        "Post-harvest handling and storage best practices",
        "Climate adaptation and resilient farming methods",
      ]),
      sort_order: 3,
    },
    {
      slug: "community",
      title: "Community Development",
      subtitle:
        "Building resilient, self-sustaining communities through inclusive development initiatives.",
      description:
        "Building resilient, self-sustaining communities through inclusive development initiatives.",
      hero_image: "/images/community-1.jpeg",
      accent_color: "#c94449",
      key_facts: JSON.stringify([]),
      highlights: JSON.stringify([]),
      sort_order: 4,
    },
  ];
  for (const p of programs) {
    await turso.execute({
      sql: "INSERT INTO programs (id, slug, title, subtitle, description, hero_image, key_facts, highlights, accent_color, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      args: [
        uuid(),
        p.slug,
        p.title,
        p.subtitle,
        p.description,
        p.hero_image,
        p.key_facts,
        p.highlights,
        p.accent_color,
        p.sort_order,
      ],
    });
  }
  console.log("   ✓ 5 programs inserted\n");

  // ─── 4. news_articles ─────────────────────────────────────────────
  console.log("4/11 Seeding news_articles...");
  await turso.execute("DELETE FROM news_articles");
  const newsArticles = [
    {
      title: "Fertilizer Distribution Boosts Productivity for 7,000 Households",
      excerpt:
        "Our latest fertilizer distribution campaign has reached over 7,000 homes across the Bugwere region, with farmers reporting significant improvements in crop health and expected yields.",
      image: "/images/news-1.png",
      category: "Program Update",
      date: "November 29, 2025",
      featured: 1,
    },
    {
      title: "Cocoa Expansion Program Impacts 3,700 Homes",
      excerpt:
        "The cocoa expansion program continues to transform livelihoods, with 3,700 homes now equipped with cocoa seedlings and the training needed to cultivate this resilient, high-value crop.",
      image: "/images/news-2.png",
      category: "Expansion",
      date: "November 29, 2025",
      featured: 0,
    },
    {
      title: "Bugwere Coffee Company Reaches Over 5,000 Homes With Coffee Seedlings",
      excerpt:
        "A landmark milestone for BCC as our coffee seedling distribution program surpasses 5,000 households.",
      image: "/images/news-3.png",
      category: "Milestone",
      date: "November 29, 2025",
      featured: 0,
    },
    {
      title: "SACCO Membership Surpasses 3,500 Active Members",
      excerpt:
        "Our community savings and credit cooperative continues to grow, providing financial services to thousands of rural families.",
      image: "/images/news-1.png",
      category: "Community",
      date: "October 15, 2025",
      featured: 0,
    },
    {
      title: "New Disease-Resistant Coffee Varieties Introduced",
      excerpt:
        "BCC partners with research institutions to bring next-generation coffee varieties to Bugwere farmers.",
      image: "/images/news-2.png",
      category: "Agriculture",
      date: "September 28, 2025",
      featured: 0,
    },
    {
      title: "Partnership With District Government Expands Training Programs",
      excerpt:
        "A new memorandum of understanding with local government will double our training capacity across the Bugwere region.",
      image: "/images/news-3.png",
      category: "Partnership",
      date: "August 10, 2025",
      featured: 0,
    },
  ];
  for (const n of newsArticles) {
    await turso.execute({
      sql: "INSERT INTO news_articles (id, title, excerpt, image, category, date, featured) VALUES (?, ?, ?, ?, ?, ?, ?)",
      args: [
        uuid(),
        n.title,
        n.excerpt,
        n.image,
        n.category,
        n.date,
        n.featured,
      ],
    });
  }
  console.log("   ✓ 6 news articles inserted\n");

  // ─── 5. testimonials ──────────────────────────────────────────────
  console.log("5/11 Seeding testimonials...");
  await turso.execute("DELETE FROM testimonials");
  const testimonials = [
    {
      quote:
        "Before BCC brought coffee seedlings to our village, I struggled to feed my family. Now I have a thriving farm and my children are in school.",
      name: "Mama Grace",
      role: "Coffee Farmer, Bugwere",
      image: "/images/coffee-couple-hd.jpeg",
      sort_order: 0,
    },
    {
      quote:
        "The training programs changed everything. I learned how to care for my cocoa plants properly, and my yields have doubled since joining.",
      name: "James Wanyama",
      role: "Cocoa Farmer, Pallisa",
      image: "/images/cocoa-plantation-hd.jpeg",
      sort_order: 1,
    },
    {
      quote:
        "The guaranteed market means I never worry about selling my harvest. BCC buys at fair prices, and I can plan for my family's future.",
      name: "Sarah Namwanje",
      role: "Coffee & Cocoa Farmer",
      image: "/images/coffee-harvest-hd.jpeg",
      sort_order: 2,
    },
  ];
  for (const t of testimonials) {
    await turso.execute({
      sql: "INSERT INTO testimonials (id, quote, name, role, image, sort_order) VALUES (?, ?, ?, ?, ?, ?)",
      args: [uuid(), t.quote, t.name, t.role, t.image, t.sort_order],
    });
  }
  console.log("   ✓ 3 testimonials inserted\n");

  // ─── 6. team_members ──────────────────────────────────────────────
  console.log("6/11 Seeding team_members...");
  await turso.execute("DELETE FROM team_members");
  const teamMembers = [
    {
      name: "Executive Director",
      role: "Strategic Leadership & Vision",
      bio: "Leading BCC's mission to transform rural livelihoods through sustainable agriculture and community empowerment across the Bugwere region. Two decades of experience in development and organizational leadership.",
      color: "#193b2a",
      sort_order: 0,
    },
    {
      name: "Head of Programs",
      role: "Agricultural Programs & Implementation",
      bio: "Overseeing all agricultural programs including coffee, cocoa, livestock, and agronomic extension services. Brings deep expertise in smallholder farming systems and program design.",
      color: "#c94449",
      sort_order: 1,
    },
    {
      name: "Finance & Administration",
      role: "Financial Management & SACCO",
      bio: "Managing BCC's financial operations, community SACCO, and ensuring transparent resource allocation. Certified accountant with a passion for financial inclusion in rural communities.",
      color: "#193b2a",
      sort_order: 2,
    },
    {
      name: "Field Operations Lead",
      role: "Farmer Training & Extension",
      bio: "Coordinating field teams that deliver training, seedlings, and ongoing support to thousands of farming households. A hands-on leader who spends as much time in villages as in the office.",
      color: "#c94449",
      sort_order: 3,
    },
    {
      name: "Partnerships Coordinator",
      role: "Strategic Partnerships & Growth",
      bio: "Building and maintaining partnerships with government, development agencies, and research organizations. Skilled at bridging diverse sectors toward shared goals.",
      color: "#193b2a",
      sort_order: 4,
    },
    {
      name: "Community Engagement",
      role: "Community Development & Outreach",
      bio: "Ensuring community voices are heard and development initiatives align with local needs and priorities. A trusted advocate who has worked in Bugwere communities for over a decade.",
      color: "#c94449",
      sort_order: 5,
    },
  ];
  for (const m of teamMembers) {
    await turso.execute({
      sql: "INSERT INTO team_members (id, name, role, bio, color, sort_order) VALUES (?, ?, ?, ?, ?, ?)",
      args: [uuid(), m.name, m.role, m.bio, m.color, m.sort_order],
    });
  }
  console.log("   ✓ 6 team members inserted\n");

  // ─── 7. board_members ─────────────────────────────────────────────
  console.log("7/11 Seeding board_members...");
  await turso.execute("DELETE FROM board_members");
  const boardMembers = [
    {
      name: "Primrose Kobusingye",
      role: "Board Member",
      bio: "Primrose Kobusingye is a seasoned marketing, communications, and growth leader with over 15 years of senior leadership experience across banking, microfinance, advertising/media, and development sectors.",
      color: "#c94449",
      photo: "/images/primrose-kobusingye.jpg",
      sort_order: 0,
    },
    {
      name: "Moses Rudende",
      role: "Board Member",
      bio: "Moses Rudende is a seasoned media and strategic communications professional with over 16 years of leadership experience across Uganda's broadcast and corporate communications landscape.",
      color: "#193b2a",
      photo: "/images/moses-rudende.jpg",
      sort_order: 1,
    },
    {
      name: "Abraham Hadoto",
      role: "Board Member",
      bio: "Abraham Hadoto is a senior development professional with decades of experience in humanitarian response, livelihoods recovery, and inclusive agricultural value chain development across Africa and fragile contexts.",
      color: "#193b2a",
      photo: "/images/abraham-hadoto.jpg",
      sort_order: 2,
    },
    {
      name: "David Tusubira",
      role: "Board Member",
      bio: "David Tusubira is a serial technology entrepreneur with a decade of experience in technology venture bootstrapping. He holds a bachelor's degree in Electrical Engineering from Makerere University.",
      color: "#c94449",
      photo: "/images/david-tusubira.jpg",
      sort_order: 3,
    },
  ];
  for (const b of boardMembers) {
    await turso.execute({
      sql: "INSERT INTO board_members (id, name, role, bio, color, photo, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?)",
      args: [uuid(), b.name, b.role, b.bio, b.color, b.photo, b.sort_order],
    });
  }
  console.log("   ✓ 4 board members inserted\n");

  // ─── 8. impact_stats ──────────────────────────────────────────────
  console.log("8/11 Seeding impact_stats...");
  await turso.execute("DELETE FROM impact_stats");
  const impactStats = [
    { label: "Coffee Homes", value: "5000", suffix: "+", icon: "Coffee", sort_order: 0 },
    { label: "Cocoa Homes", value: "3700", suffix: "+", icon: "Sprout", sort_order: 1 },
    { label: "Fertilizer Homes", value: "7000", suffix: "+", icon: "Wheat", sort_order: 2 },
    { label: "Lives Impacted", value: "15000", suffix: "+", icon: "Heart", sort_order: 3 },
  ];
  for (const s of impactStats) {
    await turso.execute({
      sql: "INSERT INTO impact_stats (id, label, value, suffix, icon, sort_order) VALUES (?, ?, ?, ?, ?, ?)",
      args: [uuid(), s.label, s.value, s.suffix, s.icon, s.sort_order],
    });
  }
  console.log("   ✓ 4 impact stats inserted\n");

  // ─── 9. impact_stories ────────────────────────────────────────────
  console.log("9/11 Seeding impact_stories...");
  await turso.execute("DELETE FROM impact_stories");
  const impactStories = [
    {
      title: "From Subsistence to Sustainability",
      excerpt:
        "How one family transformed their small plot into a thriving coffee farm with BCC's support, generating income they never thought possible.",
      image: "/images/impact-coffee.png",
      sort_order: 0,
    },
    {
      title: "A Cocoa Revolution in Bugwere",
      excerpt:
        "When cocoa seedlings arrived in her village, Mama Grace saw an opportunity to diversify her income and secure her children's future.",
      image: "/images/impact-cocoa.png",
      sort_order: 1,
    },
    {
      title: "7,000 Homes and Counting",
      excerpt:
        "The fertilizer distribution program has fundamentally changed crop yields across the region, enabling families to harvest more and earn more.",
      image: "/images/impact-fertilizer.png",
      sort_order: 2,
    },
  ];
  for (const s of impactStories) {
    await turso.execute({
      sql: "INSERT INTO impact_stories (id, title, excerpt, image, sort_order) VALUES (?, ?, ?, ?, ?)",
      args: [uuid(), s.title, s.excerpt, s.image, s.sort_order],
    });
  }
  console.log("   ✓ 3 impact stories inserted\n");

  // ─── 10. model_pillars ────────────────────────────────────────────
  console.log("10/11 Seeding model_pillars...");
  await turso.execute("DELETE FROM model_pillars");
  const modelPillars = [
    {
      icon: "Sprout",
      title: "Seedling Distribution",
      description:
        "Quality seedlings delivered to every farmer, ensuring the best start for their coffee and cocoa farms.",
      href: "/model/seedlings",
      sort_order: 0,
    },
    {
      icon: "Microscope",
      title: "Extension System",
      description:
        "Agronomic training and field support from dedicated extension officers who visit farmers regularly.",
      href: "/model/extension",
      sort_order: 1,
    },
    {
      icon: "ShoppingBag",
      title: "Market Access",
      description:
        "Guaranteed buying programs that ensure farmers can sell their harvest at fair, transparent prices.",
      href: "/model/market",
      sort_order: 2,
    },
    {
      icon: "CheckCircle2",
      title: "Quality Assurance",
      description:
        "Processing and quality standards that ensure Bugwere coffee and cocoa meet international benchmarks.",
      href: "/model/quality",
      sort_order: 3,
    },
    {
      icon: "PiggyBank",
      title: "Financial Inclusion",
      description:
        "Community SACCO savings groups that provide access to credit and financial safety nets.",
      href: "/model/financial",
      sort_order: 4,
    },
    {
      icon: "Shield",
      title: "Farmer Insurance",
      description:
        "Rural risk protection that safeguards farmers against crop failure, disease, and climate shocks.",
      href: "/model/insurance",
      sort_order: 5,
    },
  ];
  for (const p of modelPillars) {
    await turso.execute({
      sql: "INSERT INTO model_pillars (id, icon, title, description, href, sort_order) VALUES (?, ?, ?, ?, ?, ?)",
      args: [uuid(), p.icon, p.title, p.description, p.href, p.sort_order],
    });
  }
  console.log("   ✓ 6 model pillars inserted\n");

  // ─── 11. site_settings ────────────────────────────────────────────
  console.log("11/11 Seeding site_settings...");
  await turso.execute("DELETE FROM site_settings");
  const siteSettings = [
    { key: "site_name", value: "Bugwere Coffee Company" },
    { key: "site_tagline", value: "Empowering Communities Through Sustainable Agriculture" },
    { key: "contact_email", value: "info@bugwerecoffee.com" },
    { key: "contact_phone", value: "+256 (0) XXX XXX XXX" },
    { key: "contact_location", value: "Bugwere Region, Eastern Uganda" },
  ];
  for (const s of siteSettings) {
    await turso.execute({
      sql: "INSERT INTO site_settings (key, value) VALUES (?, ?)",
      args: [s.key, s.value],
    });
  }
  console.log("   ✓ 5 site settings inserted\n");

  // ─── Summary ──────────────────────────────────────────────────────
  console.log("✅ Seeding complete!");
  console.log("   • admin_users:     1");
  console.log("   • hero_slides:     4");
  console.log("   • programs:        5");
  console.log("   • news_articles:   6");
  console.log("   • testimonials:    3");
  console.log("   • team_members:    6");
  console.log("   • board_members:   4");
  console.log("   • impact_stats:    4");
  console.log("   • impact_stories:  3");
  console.log("   • model_pillars:   6");
  console.log("   • site_settings:   5");
  console.log("   ─────────────────────");
  console.log("   Total:            47 records");

  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
