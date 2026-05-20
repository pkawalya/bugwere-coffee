"use client";

import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import BentoCard from "@/components/ui/BentoCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import JourneyStep from "@/components/ui/JourneyStep";
import Marquee from "@/components/ui/Marquee";
import {
  Coffee, Sprout, Bird, Wheat, Heart, ArrowRight,
  Leaf, Shield, PiggyBank, ShoppingBag, Microscope, CheckCircle2, Users, Quote,
} from "lucide-react";
import { PRIMARY, SECONDARY, FONT_RALEWAY, FONT_OPENSANS, CREAM } from "@/lib/constants";

const HERO_SLIDES = [
  {
    image: "/images/hero-1.png",
    subtitle: "Bugwere Coffee Company",
    title: "Empowering Communities Through Sustainable Agriculture",
    description: "Transforming rural livelihoods in Eastern Uganda through coffee, cocoa, and diversified farming programs.",
    cta: "Join The Campaign",
    ctaHref: "#manifesto",
  },
  {
    image: "/images/hero-2.png",
    subtitle: "Seedling Program",
    title: "Over 5,000 Homes Supplied With Coffee Seedlings",
    description: "Helping families establish long-term, high-value coffee farms that provide steady and sustainable household income.",
    cta: "Our Programs",
    ctaHref: "/programs/coffee",
  },
  {
    image: "/images/hero-3.png",
    subtitle: "Cocoa Expansion",
    title: "Diversifying Income Through Cocoa Farming",
    description: "Supporting communities to diversify earnings with cocoa, a resilient crop that strengthens economic stability.",
    cta: "Learn More",
    ctaHref: "/programs/cocoa",
  },
  {
    image: "/images/hero-4.png",
    subtitle: "Agricultural Support",
    title: "7,000+ Homes Supplied With Fertilizers",
    description: "Improving soil health and boosting crop productivity, enabling farmers to achieve higher yields and better quality harvests.",
    cta: "See Our Impact",
    ctaHref: "/impact",
  },
];

const BENTO_ITEMS = [
  { image: "/images/impact-coffee.png", title: "Sustainable Coffee", desc: "High-value coffee production with guaranteed market access and expert agronomic support for thousands of farming families.", href: "/programs/coffee", span: "sm:col-span-2 sm:row-span-2 min-h-[360px] sm:min-h-[480px]" },
  { image: "/images/impact-cocoa.png", title: "Cocoa Farming", desc: "Diversifying farmer income with resilient cocoa crops and comprehensive training programs.", href: "/programs/cocoa", span: "min-h-[220px]" },
  { image: "/images/impact-fertilizer.png", title: "Livestock Support", desc: "Piggery and poultry projects providing steady, diversified income for rural households.", href: "/programs/livestock", span: "min-h-[220px]" },
  { image: "/images/about-photo.png", title: "Agronomy Services", desc: "Expert farmer training, extension services, and ongoing field support from dedicated officers.", href: "/programs/agronomy", span: "sm:col-span-2 min-h-[220px]" },
];

const MODEL_STEPS = [
  { icon: <Sprout className="w-5 h-5" />, title: "Seedling Distribution", desc: "Quality coffee and cocoa seedlings delivered directly to every farmer household, ensuring the best start for their new farms." },
  { icon: <Microscope className="w-5 h-5" />, title: "Extension System", desc: "Dedicated field officers provide agronomic training, regular farm visits, and hands-on support throughout the growing season." },
  { icon: <ShoppingBag className="w-5 h-5" />, title: "Market Access", desc: "Guaranteed buying programs that ensure farmers can sell their harvest at fair, transparent prices without middlemen." },
  { icon: <CheckCircle2 className="w-5 h-5" />, title: "Quality Assurance", desc: "Processing and quality standards that ensure Bugwere coffee and cocoa meet international benchmarks for export." },
  { icon: <PiggyBank className="w-5 h-5" />, title: "Financial Inclusion", desc: "Community SACCO savings groups that provide access to credit, savings, and financial safety nets for farming families." },
  { icon: <Shield className="w-5 h-5" />, title: "Farmer Insurance", desc: "Rural risk protection that safeguards farmers against crop failure, disease, and climate shocks." },
];

const TESTIMONIALS = [
  { quote: "Before BCC brought coffee seedlings to our village, I struggled to feed my family. Now I have a thriving farm and my children are in school.", name: "Mama Grace", role: "Coffee Farmer, Bugwere", image: "/images/impact-coffee.png" },
  { quote: "The training programs changed everything. I learned how to care for my cocoa plants properly, and my yields have doubled since joining.", name: "James Wanyama", role: "Cocoa Farmer, Pallisa", image: "/images/impact-cocoa.png" },
  { quote: "The guaranteed market means I never worry about selling my harvest. BCC buys at fair prices, and I can plan for my family's future.", name: "Sarah Namwanje", role: "Coffee & Cocoa Farmer", image: "/images/impact-fertilizer.png" },
];

const NEWS = [
  { image: "/images/news-1.png", date: "Nov 29, 2025", title: "Fertilizer Distribution Boosts Productivity for 7,000 Households", href: "/connect/news", featured: true },
  { image: "/images/news-2.png", date: "Nov 29, 2025", title: "Cocoa Expansion Program Impacts 3,700 Homes", href: "/connect/news", featured: false },
  { image: "/images/news-3.png", date: "Nov 29, 2025", title: "Bugwere Coffee Reaches Over 5,000 Homes With Coffee Seedlings", href: "/connect/news", featured: false },
];

export default function Home() {
  return (
    <>
      {/* ═══ CINEMATIC HERO ═══ */}
      <HeroSlider slides={HERO_SLIDES} />

      {/* ═══ MARQUEE STRIP ═══ */}
      <div className="py-4 overflow-hidden" style={{ backgroundColor: SECONDARY }}>
        <Marquee
          items={["COFFEE", "COCOA", "COMMUNITY", "SUSTAINABILITY", "EMPOWERMENT", "LIVELIHOODS", "FARMERS", "GROWTH"]}
          speed={25}
          className="text-white/30 text-sm font-bold uppercase tracking-[0.3em]"
          style={{ fontFamily: FONT_RALEWAY } as React.CSSProperties}
        />
      </div>

      {/* ═══ MANIFESTO — Split Image + Content ═══ */}
      <section id="manifesto" className="py-20 sm:py-28" style={{ backgroundColor: CREAM }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/hero-1.png"
                    alt="Bugwere farming community"
                    width={1344}
                    height={896}
                    className="w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Floating stat card */}
                <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-5 hidden lg:block">
                  <p className="text-2xl font-bold" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>15,000+</p>
                  <p className="text-xs text-gray-500" style={{ fontFamily: FONT_OPENSANS }}>Lives impacted since 2023</p>
                </div>
                {/* Decorative accent */}
                <div
                  className="absolute -top-3 -left-3 w-20 h-20 rounded-2xl -z-10"
                  style={{ backgroundColor: `${PRIMARY}15` }}
                />
              </div>
            </ScrollReveal>

            {/* Content Side */}
            <ScrollReveal direction="right">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: PRIMARY, fontFamily: FONT_OPENSANS }}>
                  Our Manifesto
                </p>
                <h2
                  className="text-xl sm:text-2xl lg:text-3xl xl:text-[2.25rem] font-bold leading-[1.2] mb-6"
                  style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}
                >
                  We believe every farmer — regardless of land size — deserves the opportunity to build a{" "}
                  <span className="text-gradient-primary">prosperous</span> and{" "}
                  <span className="text-gradient-green">sustainable</span> future.
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                  Founded in 2023 in the Bugwere region of Eastern Uganda, we respond to a critical challenge:
                  How can rural households with limited land still generate sustainable income? Our answer is a
                  holistic, community-driven approach that combines high-value coffee and cocoa production with
                  diversified income streams, expert agronomic support, and guaranteed market access.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold text-sm rounded-full transition-all hover:shadow-xl hover:scale-[1.03]"
                  style={{ backgroundColor: SECONDARY, fontFamily: FONT_OPENSANS }}
                >
                  Read Our Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ BENTO GRID — PROGRAMS ═══ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: PRIMARY, fontFamily: FONT_OPENSANS }}>
                  What We Do
                </p>
                <h2
                  className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight"
                  style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}
                >
                  Our Programs
                </h2>
              </div>
              <Link
                href="/programs/coffee"
                className="inline-flex items-center gap-2 text-sm font-semibold group"
                style={{ color: PRIMARY, fontFamily: FONT_OPENSANS }}
              >
                View All Programs
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
            {BENTO_ITEMS.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1} direction={i % 2 === 0 ? "up" : "left"}>
                <BentoCard
                  image={item.image}
                  title={item.title}
                  description={item.desc}
                  href={item.href}
                  className={item.span}
                />
              </ScrollReveal>
            ))}
          </div>

          {/* Community full-width card */}
          <ScrollReveal delay={0.2}>
            <Link
              href="/programs/community"
              className="group mt-5 relative block overflow-hidden rounded-3xl"
              style={{ backgroundColor: SECONDARY }}
            >
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04] bg-white translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-[0.03] bg-white -translate-x-1/4 translate-y-1/3" />
              <div className="relative px-8 sm:px-12 py-10 sm:py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${PRIMARY}25` }}
                  >
                    <Heart className="w-7 h-7" style={{ color: PRIMARY }} />
                  </div>
                  <div>
                    <h3
                      className="text-xl sm:text-2xl font-bold text-white mb-2"
                      style={{ fontFamily: FONT_RALEWAY }}
                    >
                      Community Development
                    </h3>
                    <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-lg">
                      Building resilient communities through inclusive development initiatives, empowering families to thrive together.
                    </p>
                  </div>
                </div>
                <span
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white text-sm font-semibold rounded-full transition-all group-hover:bg-white/20 flex-shrink-0"
                  style={{ fontFamily: FONT_OPENSANS }}
                >
                  Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ IMPACT — Split Image + Counters ═══ */}
      <section className="py-20 sm:py-28 relative overflow-hidden" style={{ backgroundColor: SECONDARY }}>
        <div className="absolute inset-0 bg-dots-pattern" />
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full opacity-[0.03] bg-white animate-float" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full opacity-[0.02] bg-white animate-float-slow" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/impact-coffee.png"
                    alt="Coffee farming impact"
                    width={1344}
                    height={896}
                    className="w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Overlay accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#193b2a]/40 to-transparent rounded-3xl" />
              </div>
            </ScrollReveal>

            {/* Counters Side */}
            <div>
              <ScrollReveal>
                <div className="mb-10">
                  <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: PRIMARY, fontFamily: FONT_OPENSANS }}>
                    Bugwere Impact
                  </p>
                  <h2
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight mb-4"
                    style={{ fontFamily: FONT_RALEWAY }}
                  >
                    Our Impact in Numbers
                  </h2>
                  <p className="text-white/60 text-base max-w-lg">
                    Strengthening communities through scalable, high-impact agricultural support across the Bugwere region.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                {[
                  { end: 5000, suffix: "+", label: "Coffee Seedlings Homes", icon: <Coffee className="w-6 h-6" /> },
                  { end: 3700, suffix: "+", label: "Cocoa Seedlings Homes", icon: <Sprout className="w-6 h-6" /> },
                  { end: 7000, suffix: "+", label: "Fertilizer Homes", icon: <Wheat className="w-6 h-6" /> },
                  { end: 15000, suffix: "+", label: "Lives Impacted", icon: <Users className="w-6 h-6" /> },
                ].map((stat, i) => (
                  <ScrollReveal key={stat.label} delay={i * 0.1}>
                    <div className="p-5 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${PRIMARY}25` }}
                        >
                          <span style={{ color: PRIMARY }}>{stat.icon}</span>
                        </div>
                      </div>
                      <AnimatedCounter
                        end={stat.end}
                        suffix={stat.suffix}
                        duration={2500}
                        className="text-3xl sm:text-4xl font-bold text-white mb-1"
                        style={{ fontFamily: FONT_RALEWAY }}
                      />
                      <p className="text-white/45 text-xs sm:text-sm">{stat.label}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.3}>
                <div className="mt-8">
                  <Link
                    href="/impact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-white font-semibold text-sm rounded-full transition-all hover:shadow-xl hover:scale-[1.03]"
                    style={{ color: SECONDARY, fontFamily: FONT_OPENSANS }}
                  >
                    Explore Our Impact <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MODEL — Image + Journey Steps ═══ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image + Text Side (sticky) */}
            <div className="lg:sticky lg:top-32">
              <ScrollReveal direction="left">
                <div className="relative mb-8">
                  <div className="rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/hero-2.png"
                      alt="Agricultural model in action"
                      width={1344}
                      height={896}
                      className="w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  {/* Decorative accent */}
                  <div
                    className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl -z-10"
                    style={{ backgroundColor: `${PRIMARY}12` }}
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: PRIMARY, fontFamily: FONT_OPENSANS }}>
                    Empowering Households
                  </p>
                  <h2
                    className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-4"
                    style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}
                  >
                    Our Transformative Agriculture Model
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    Our model is built to empower rural households through a complete, end-to-end agricultural
                    support system. From seedling to market, we walk with farmers every step of the way.
                  </p>
                  <Link
                    href="/model"
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold text-sm rounded-full transition-all hover:shadow-xl hover:scale-[1.03]"
                    style={{ backgroundColor: SECONDARY, fontFamily: FONT_OPENSANS }}
                  >
                    Explore Our Model <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Journey Steps */}
            <div>
              {MODEL_STEPS.map((step, i) => (
                <ScrollReveal key={step.title} delay={i * 0.1}>
                  <JourneyStep
                    step={i + 1}
                    icon={step.icon}
                    title={step.title}
                    description={step.desc}
                    isLast={i === MODEL_STEPS.length - 1}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMMUNITY VOICES — Image Cards ═══ */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: CREAM }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: PRIMARY, fontFamily: FONT_OPENSANS }}>
                Community Voices
              </p>
              <h2
                className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight"
                style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}
              >
                Stories from the Field
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.15}>
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div
                      className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${PRIMARY}90` }}
                    >
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs"
                        style={{ backgroundColor: SECONDARY, fontFamily: FONT_RALEWAY }}
                      >
                        {t.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-gray-900" style={{ fontFamily: FONT_RALEWAY }}>{t.name}</p>
                        <p className="text-xs text-gray-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MAGAZINE NEWS ═══ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: PRIMARY, fontFamily: FONT_OPENSANS }}>
                  Latest News
                </p>
                <h2
                  className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight"
                  style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}
                >
                  News & Press
                </h2>
              </div>
              <Link
                href="/connect/news"
                className="inline-flex items-center gap-2 text-sm font-semibold group"
                style={{ color: PRIMARY, fontFamily: FONT_OPENSANS }}
              >
                All Articles <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Featured article */}
            <ScrollReveal>
              <Link href={NEWS[0].href} className="group block relative overflow-hidden rounded-3xl h-[400px] sm:h-[480px]">
                <Image
                  src={NEWS[0].image}
                  alt={NEWS[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3"
                    style={{ backgroundColor: PRIMARY, color: "#fff", fontFamily: FONT_OPENSANS }}
                  >
                    Featured
                  </span>
                  <p className="text-white/60 text-xs mb-2" style={{ fontFamily: FONT_OPENSANS }}>{NEWS[0].date}</p>
                  <h3
                    className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[#e87074] transition-colors"
                    style={{ fontFamily: FONT_RALEWAY }}
                  >
                    {NEWS[0].title}
                  </h3>
                </div>
              </Link>
            </ScrollReveal>

            {/* Supporting articles */}
            <div className="flex flex-col gap-6">
              {NEWS.slice(1).map((article, i) => (
                <ScrollReveal key={article.title} delay={(i + 1) * 0.15}>
                  <Link href={article.href} className="group flex gap-5 items-start bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors">
                    <div className="relative w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden">
                      <Image src={article.image} alt={article.title} fill className="object-cover" sizes="112px" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs mb-1.5" style={{ color: PRIMARY, fontFamily: FONT_OPENSANS }}>{article.date}</p>
                      <h4
                        className="text-sm sm:text-base font-bold text-gray-900 leading-snug group-hover:text-[--color-brand] transition-colors"
                        style={{ fontFamily: FONT_RALEWAY }}
                      >
                        {article.title}
                      </h4>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ JOIN THE MOVEMENT CTA ═══ */}
      <section className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: SECONDARY }}>
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute -top-20 -left-20 w-96 h-96 blob-shape opacity-[0.04] bg-white" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 blob-shape-2 opacity-[0.03] bg-white animate-float-slow" />

        <div className="relative max-w-4xl mx-auto px-6 sm:px-10 text-center">
          <ScrollReveal>
            <p className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: PRIMARY, fontFamily: FONT_OPENSANS }}>
              Join The Movement
            </p>
            <h2
              className="text-xl sm:text-2xl lg:text-3xl xl:text-[2.25rem] font-bold text-white leading-[1.15] mb-6"
              style={{ fontFamily: FONT_RALEWAY }}
            >
              Your participation matters!
            </h2>
            <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-10">
              Join us in transforming rural livelihoods across Eastern Uganda. Every contribution creates lasting change.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white font-semibold text-sm rounded-full transition-all hover:shadow-xl hover:scale-[1.03]"
                style={{ color: SECONDARY, fontFamily: FONT_OPENSANS }}
              >
                Join Now
              </Link>
              <Link
                href="/connect/partners"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/25 text-white font-semibold text-sm rounded-full transition-all hover:bg-white/10 hover:border-white/40"
                style={{ fontFamily: FONT_OPENSANS }}
              >
                Partner With Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
