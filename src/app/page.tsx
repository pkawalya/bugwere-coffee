"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Users,
  Sprout,
  Leaf,
  Mail,
} from "lucide-react";

/* ─── colour constants ─── */
const PRIMARY = "#c94449";
const SECONDARY = "#193b2a";
const LIGHT_BG = "#F4F7FA";

/* ─── navigation data ─── */
const NAV_ITEMS = [
  {
    label: "About",
    href: "#about",
    children: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#leadership" },
    ],
  },
  {
    label: "What We Do",
    href: "#what-we-do",
    children: [
      { label: "Sustainable Coffee Production", href: "#impact" },
      { label: "Cocoa Farming", href: "#impact" },
      { label: "Intermediary Crops Program", href: "#model" },
      { label: "Livestock Support (Piggery & Poultry)", href: "#model" },
      { label: "Agronomy & Farmer Support Services", href: "#model" },
      { label: "Community Development Initiatives", href: "#model" },
    ],
  },
  {
    label: "Impact & Growth",
    href: "#impact",
    children: [
      { label: "Impact Stories", href: "#impact" },
      { label: "Farmer Statistics", href: "#impact" },
      { label: "Regional Expansion", href: "#partnerships" },
      { label: "Projections and Future Plans", href: "#model" },
    ],
  },
  {
    label: "Our Model",
    href: "#model",
    children: [
      { label: "Seedling Production & Distribution", href: "#model" },
      { label: "Agronomic Extension System", href: "#model" },
      { label: "Market Access & Guaranteed Buying", href: "#model" },
      { label: "Processing & Quality Assurance", href: "#model" },
      { label: "Financial Inclusion (SACCO)", href: "#model" },
      { label: "Rural Farmer Insurance Program", href: "#model" },
    ],
  },
  { label: "Partners & Collaborators", href: "#partnerships" },
  { label: "News & Updates", href: "#news" },
  { label: "Contact Us", href: "#contact" },
];

/* ─── hero slideshow images ─── */
const HERO_IMAGES = [
  "/images/hero-1.png",
  "/images/hero-2.png",
  "/images/hero-3.png",
  "/images/hero-4.png",
];

/* ─── impact cards ─── */
const IMPACT_CARDS = [
  {
    image: "/images/impact-coffee.png",
    stat: "Over 5,000",
    title: "homes supplied with coffee seedlings",
    description:
      "Helping families establish long-term, high-value coffee farms that provide steady and sustainable household income.",
  },
  {
    image: "/images/impact-cocoa.png",
    stat: "Over 3,700",
    title: "homes supplied with cocoa seedlings",
    description:
      "Supporting communities to diversify earnings with cocoa, a resilient crop that strengthens economic stability.",
  },
  {
    image: "/images/impact-fertilizer.png",
    stat: "Over 7,000",
    title: "homes supplied with fertilizers",
    description:
      "Improving soil health and boosting crop productivity, enabling farmers to achieve higher yields and better quality harvests.",
  },
];

/* ─── news articles ─── */
const NEWS_ARTICLES = [
  {
    image: "/images/news-1.png",
    date: "November 29, 2025",
    title: "Fertilizer Distribution Boosts Productivity for 7,000 Households",
  },
  {
    image: "/images/news-2.png",
    date: "November 29, 2025",
    title: "Cocoa Expansion Program Impacts 3,700 Homes",
  },
  {
    image: "/images/news-3.png",
    date: "November 29, 2025",
    title: "Bugwere Coffee Company Reaches Over 5,000 Homes With Coffee Seedlings",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   MAIN PAGE COMPONENT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  /* scroll listener */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* auto-advance slideshow */
  useEffect(() => {
    const interval = setInterval(
      () => setActiveSlide((p) => (p + 1) % HERO_IMAGES.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-open-sans)" }}>
      {/* ─── HEADER ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Bugwere Coffee Company"
                width={50}
                height={50}
                className="rounded"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() =>
                    item.children && setOpenDropdown(item.label)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-800 hover:text-[--color-brand] transition-colors"
                    style={{ fontFamily: "var(--font-open-sans)" }}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                    )}
                  </a>
                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 bg-white shadow-xl rounded-md border border-gray-100 min-w-[260px] py-2 animate-fade-in z-50">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-[--color-light-bg] hover:text-[--color-brand] transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Support CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center px-6 py-2.5 text-white font-semibold text-sm transition-colors"
                style={{ backgroundColor: SECONDARY }}
              >
                Support
              </a>
              <button
                className="lg:hidden p-2 text-gray-800"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto custom-scrollbar">
            <div className="px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <MobileNavItem
                  key={item.label}
                  item={item}
                  onClose={() => setMobileMenuOpen(false)}
                />
              ))}
              <a
                href="#contact"
                className="block mt-4 text-center px-6 py-3 text-white font-semibold text-sm"
                style={{ backgroundColor: SECONDARY }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Support
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="w-full flex flex-col lg:flex-row">
          {/* Left content */}
          <div
            className="w-full lg:w-1/2 relative z-10 flex items-center"
            style={{ backgroundColor: SECONDARY }}
          >
            <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
              <h6
                className="text-sm font-semibold uppercase tracking-wider mb-4"
                style={{ color: PRIMARY, fontFamily: "var(--font-open-sans)" }}
              >
                Bugwere Coffee Company
              </h6>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Empowering Bugwere Through Sustainable Agriculture
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
                <strong className="text-white">Bugwere Coffee Company</strong>{" "}
                is an agribusiness initiative based in the Bugwere region of
                Eastern Uganda. We are dedicated to transforming rural livelihoods
                through sustainable agriculture.
              </p>
              <a
                href="#about"
                className="inline-flex items-center px-8 py-3.5 bg-white font-semibold text-sm transition-all hover:shadow-lg"
                style={{ color: SECONDARY }}
              >
                Join The Campaign
              </a>

              {/* Vision quote */}
              <div className="mt-14 border-l-4 pl-6" style={{ borderColor: PRIMARY }}>
                <p className="text-white/90 text-lg italic leading-relaxed mb-3">
                  &ldquo;To transform Uganda&apos;s rural farming communities into
                  empowered, sustainable producers and exporters of high-quality
                  coffee.&rdquo;
                </p>
                <h5
                  className="text-white font-semibold text-base"
                  style={{ fontFamily: "var(--font-open-sans)" }}
                >
                  Our Vision
                </h5>
              </div>
            </div>
          </div>

          {/* Right slideshow */}
          <div className="w-full lg:w-1/2 relative h-[400px] lg:h-screen lg:min-h-[700px]">
            {HERO_IMAGES.map((src, i) => (
              <div
                key={src}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: activeSlide === i ? 1 : 0 }}
              >
                <Image
                  src={src}
                  alt={`Bugwere Coffee farming ${i + 1}`}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ))}
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/10" />
            {/* Slideshow pagination */}
            <div className="absolute bottom-8 right-8 flex gap-3 z-10">
              {HERO_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`w-10 h-10 flex items-center justify-center text-sm font-semibold transition-all ${
                    activeSlide === i
                      ? "bg-white text-gray-900"
                      : "bg-white/30 text-white hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT / OUR STORY ─── */}
      <section id="about" className="py-20 lg:py-28" style={{ backgroundColor: LIGHT_BG }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: story */}
            <div>
              <h6
                className="text-sm font-semibold uppercase tracking-wider mb-4"
                style={{ color: PRIMARY, fontFamily: "var(--font-open-sans)" }}
              >
                About Bugwere Coffee Company
              </h6>
              <h2
                className="text-4xl sm:text-5xl font-medium text-gray-900 leading-tight mb-6"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Our Story
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Founded in 2023, Bugwere Coffee Company (BCC) was established to
                respond to a critical challenge: How can rural households with
                limited land still generate sustainable income? Our answer lies in a
                holistic, community-driven approach that combines high-value coffee
                and cocoa production with diversified income streams, expert
                agronomic support, and guaranteed market access. We believe that
                every household, regardless of land size, deserves the opportunity
                to build a prosperous and sustainable future.
              </p>
            </div>

            {/* Right: photo */}
            <div className="relative">
              <div className="rounded overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-photo.png"
                  alt="Bugwere Coffee Company community"
                  width={864}
                  height={1152}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section id="what-we-do" className="py-20 lg:py-28" style={{ backgroundColor: SECONDARY }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="max-w-3xl">
            <h6
              className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              What We Do
            </h6>
            <h3
              className="text-3xl sm:text-4xl font-medium text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              Bugwere Coffee Company
            </h3>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Empowers rural households through sustainable coffee and cocoa
              farming, micro-commercial farm development, livestock projects,
              intermediary crops, and expert agronomic support to ensure steady,
              diversified income.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 bg-white font-semibold text-sm transition-all hover:shadow-lg"
              style={{ color: PRIMARY }}
            >
              Donate Now
            </a>
          </div>
        </div>
      </section>

      {/* ─── IMPACT IN NUMBERS ─── */}
      <section id="impact" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="text-center mb-16">
            <h6
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: PRIMARY, fontFamily: "var(--font-open-sans)" }}
            >
              Bugwere Impact
            </h6>
            <h2
              className="text-4xl sm:text-5xl font-medium text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              Our Impact in Numbers
            </h2>
            <h4
              className="text-xl sm:text-2xl font-medium text-gray-800 max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              Strengthening Communities Through Scalable, High-Impact Agricultural
              Support.
            </h4>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {IMPACT_CARDS.map((card, i) => (
              <div
                key={i}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h4
                    className="text-xl font-medium text-gray-900 mb-2"
                    style={{ fontFamily: "var(--font-raleway)" }}
                  >
                    <span className="font-bold" style={{ color: PRIMARY }}>
                      {card.stat}
                    </span>{" "}
                    {card.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTNERSHIPS ─── */}
      <section id="partnerships" className="py-20 lg:py-28" style={{ backgroundColor: LIGHT_BG }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Working Together to Drive Sustainable Agricultural Transformation
            </p>
            <h2
              className="text-4xl sm:text-5xl font-medium text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              Partnerships
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Bugwere Coffee Company (BCC) thrives through strong partnerships with
              organizations that share our commitment to empowering rural
              communities. We collaborate with{" "}
              <strong className="text-gray-900">local governments</strong>,{" "}
              <strong className="text-gray-900">development agencies</strong>,{" "}
              <strong className="text-gray-900">financial institutions</strong>,{" "}
              <strong className="text-gray-900">research organizations</strong>,
              and{" "}
              <strong className="text-gray-900">
                community-based structures
              </strong>
              . Together, we build resilient agricultural systems that create
              lasting change in the Bugwere region and beyond.
            </p>

            {/* Partner icons */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 mb-12">
              {[
                { icon: Users, label: "Local Governments" },
                { icon: Sprout, label: "Development Agencies" },
                { icon: Leaf, label: "Research Orgs" },
                { icon: Mail, label: "Financial Inst." },
                { icon: Users, label: "Community Orgs" },
              ].map(({ icon: Icon, label }, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg shadow-sm"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${SECONDARY}15` }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{ color: SECONDARY }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 bg-white border-2 font-semibold text-sm transition-all hover:shadow-lg"
              style={{
                borderColor: SECONDARY,
                color: SECONDARY,
              }}
            >
              Become a Partner
            </a>
          </div>
        </div>
      </section>

      {/* ─── TRANSFORMATIVE AGRICULTURE MODEL ─── */}
      <section id="model" className="py-20 lg:py-28" style={{ backgroundColor: SECONDARY }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="max-w-3xl">
            <h6
              className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/70"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              Empowering Households
            </h6>
            <h2
              className="text-4xl sm:text-5xl font-medium text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              Our Transformative Agriculture Model
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Our model is built to empower rural households through a complete,
              end-to-end agricultural support system. We provide high-quality
              seedlings, agronomic training, and guaranteed markets, while
              strengthening families with short-term income crops, livestock
              projects, and financial inclusion through our community SACCO. By
              combining production support, value-chain integration, and rural
              insurance solutions, we help farmers grow sustainably, reduce risk,
              and build lasting prosperity.
            </p>

            {/* Model features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "High-Quality Seedling Distribution",
                "Agronomic Training & Extension",
                "Guaranteed Market Access",
                "Processing & Quality Assurance",
                "Financial Inclusion (SACCO)",
                "Rural Farmer Insurance",
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-white/90 text-base"
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: PRIMARY }}
                  />
                  {feature}
                </div>
              ))}
            </div>

            <a
              href="#about"
              className="inline-flex items-center px-8 py-3.5 bg-white font-semibold text-sm transition-all hover:shadow-lg"
              style={{ color: SECONDARY }}
            >
              Our Model
            </a>
          </div>
        </div>
      </section>

      {/* ─── NEWS & PRESS ─── */}
      <section id="news" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="text-center mb-16">
            <h6
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: PRIMARY, fontFamily: "var(--font-open-sans)" }}
            >
              News
            </h6>
            <h2
              className="text-4xl sm:text-5xl font-medium text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              Latest News & Press
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay updated with the latest news and developments from Bugwere
              Coffee Company and our community initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {NEWS_ARTICLES.map((article, i) => (
              <div
                key={i}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p
                    className="text-sm font-medium mb-2"
                    style={{ color: PRIMARY }}
                  >
                    {article.date}
                  </p>
                  <h4
                    className="text-lg font-medium text-gray-900 mb-4 leading-snug"
                    style={{ fontFamily: "var(--font-raleway)" }}
                  >
                    {article.title}
                  </h4>
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-2.5 bg-white border border-gray-200 font-semibold text-sm text-gray-800 hover:border-gray-400 transition-colors"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP ─── */}
      <section id="leadership" className="py-20 lg:py-28" style={{ backgroundColor: LIGHT_BG }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: PRIMARY, fontFamily: "var(--font-open-sans)" }}
            >
              Guiding Vision. Inspiring Impact.
            </p>
            <h2
              className="text-4xl sm:text-5xl font-medium text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              Leadership
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Our leadership team brings expertise, dedication, and a shared
              commitment to transforming communities through sustainable agriculture
              and financial empowerment. Together, they guide our programs, support
              farmers, and ensure impactful results across the Bugwere region.
            </p>

            {/* Volunteer / Newsletter */}
            <div
              className="inline-flex flex-col sm:flex-row items-stretch rounded overflow-hidden shadow-md max-w-lg mx-auto"
            >
              <input
                type="email"
                placeholder="Your email here"
                className="px-6 py-3.5 text-base text-gray-800 bg-white outline-none flex-1 min-w-0"
              />
              <button
                className="px-8 py-3.5 text-white font-semibold text-sm transition-colors"
                style={{ backgroundColor: SECONDARY }}
              >
                Volunteer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER CTA ─── */}
      <section style={{ backgroundColor: SECONDARY }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <h2
              className="text-3xl sm:text-4xl font-medium text-white"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              Your participation matters!
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 bg-white font-semibold text-sm transition-all hover:shadow-lg"
              style={{ color: SECONDARY }}
            >
              Join Now
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer id="contact" className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <Image
                src="/logo.png"
                alt="Bugwere Coffee Company"
                width={48}
                height={48}
                className="rounded mb-4"
              />
              <p
                className="text-white font-semibold text-lg mb-2"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Bugwere Coffee Company
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering rural households through sustainable agriculture in the
                Bugwere region of Eastern Uganda.
              </p>
            </div>

            {/* About */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                About
              </h4>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#leadership" className="hover:text-white transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#impact" className="hover:text-white transition-colors">
                    Impact Stories
                  </a>
                </li>
                <li>
                  <a href="#news" className="hover:text-white transition-colors">
                    News & Updates
                  </a>
                </li>
              </ul>
            </div>

            {/* What We Do */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                What We Do
              </h4>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li>
                  <a href="#what-we-do" className="hover:text-white transition-colors">
                    Coffee Production
                  </a>
                </li>
                <li>
                  <a href="#what-we-do" className="hover:text-white transition-colors">
                    Cocoa Farming
                  </a>
                </li>
                <li>
                  <a href="#model" className="hover:text-white transition-colors">
                    Livestock Support
                  </a>
                </li>
                <li>
                  <a href="#model" className="hover:text-white transition-colors">
                    Agronomy Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Contact Us
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Bugwere Region, Eastern Uganda
              </p>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-400 text-sm">Follow us on:</span>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Instagram, Linkedin].map(
                    (Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                        aria-label="Social media"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Bugwere Coffee Company. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ─── BACK TO TOP ─── */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 hover:shadow-xl transition-all"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

/* ─── MOBILE NAV ITEM ─── */
function MobileNavItem({
  item,
  onClose,
}: {
  item: (typeof NAV_ITEMS)[number];
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        <a
          href={item.href}
          className="flex-1 py-2.5 text-base font-medium text-gray-800"
          onClick={onClose}
        >
          {item.label}
        </a>
        {item.children && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-2 text-gray-500"
            aria-label={`Expand ${item.label}`}
          >
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>
      {item.children && expanded && (
        <div className="pl-4 pb-2 space-y-1">
          {item.children.map((child) => (
            <a
              key={child.label}
              href={child.href}
              className="block py-2 text-sm text-gray-600 hover:text-[--color-brand]"
              onClick={onClose}
            >
              {child.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
