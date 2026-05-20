"use client";

import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import { SectionHeading } from "@/components/PageHero";
import {
  Coffee,
  Sprout,
  Bird,
  Wheat,
  Heart,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Leaf,
  Shield,
  PiggyBank,
  ShoppingBag,
  Microscope,
} from "lucide-react";

const PRIMARY = "#c94449";
const SECONDARY = "#193b2a";
const LIGHT_BG = "#F4F7FA";

const HERO_SLIDES = [
  {
    image: "/images/hero-1.png",
    subtitle: "Bugwere Coffee Company",
    title: "Empowering Communities Through Sustainable Agriculture",
    description:
      "Transforming rural livelihoods in Eastern Uganda through coffee, cocoa, and diversified farming programs.",
    cta: "Join The Campaign",
    ctaHref: "#about",
  },
  {
    image: "/images/hero-2.png",
    subtitle: "Seedling Program",
    title: "Over 5,000 Homes Supplied With Coffee Seedlings",
    description:
      "Helping families establish long-term, high-value coffee farms that provide steady and sustainable household income.",
    cta: "Our Programs",
    ctaHref: "/programs/coffee",
  },
  {
    image: "/images/hero-3.png",
    subtitle: "Cocoa Expansion",
    title: "Diversifying Income Through Cocoa Farming",
    description:
      "Supporting communities to diversify earnings with cocoa, a resilient crop that strengthens economic stability.",
    cta: "Learn More",
    ctaHref: "/programs/cocoa",
  },
  {
    image: "/images/hero-4.png",
    subtitle: "Agricultural Support",
    title: "7,000+ Homes Supplied With Fertilizers",
    description:
      "Improving soil health and boosting crop productivity, enabling farmers to achieve higher yields and better quality harvests.",
    cta: "See Our Impact",
    ctaHref: "/impact",
  },
];

const IMPACT_STATS = [
  { number: "5,000+", label: "Homes with Coffee Seedlings", icon: Coffee },
  { number: "3,700+", label: "Homes with Cocoa Seedlings", icon: Sprout },
  { number: "7,000+", label: "Homes with Fertilizers", icon: Wheat },
  { number: "2023", label: "Year Founded", icon: Leaf },
];

const PROGRAMS = [
  {
    icon: Coffee,
    title: "Sustainable Coffee",
    desc: "High-value coffee production with guaranteed market access and expert agronomic support.",
    href: "/programs/coffee",
    color: "#8B6914",
  },
  {
    icon: Sprout,
    title: "Cocoa Farming",
    desc: "Diversifying farmer income with resilient cocoa crops and comprehensive training programs.",
    href: "/programs/cocoa",
    color: "#6B3A2A",
  },
  {
    icon: Bird,
    title: "Livestock Support",
    desc: "Piggery and poultry projects providing steady, diversified income for rural households.",
    href: "/programs/livestock",
    color: "#2A5A3A",
  },
  {
    icon: Wheat,
    title: "Agronomy Services",
    desc: "Expert farmer training, extension services, and ongoing field support.",
    href: "/programs/agronomy",
    color: "#4A6B2A",
  },
  {
    icon: Heart,
    title: "Community Development",
    desc: "Building resilient communities through inclusive development initiatives.",
    href: "/programs/community",
    color: PRIMARY,
  },
];

const MODEL_PILLARS = [
  {
    icon: Sprout,
    title: "Seedling Distribution",
    desc: "Quality seedlings delivered to every farmer",
    href: "/model/seedlings",
  },
  {
    icon: Microscope,
    title: "Extension System",
    desc: "Agronomic training & field support",
    href: "/model/extension",
  },
  {
    icon: ShoppingBag,
    title: "Market Access",
    desc: "Guaranteed buying & fair prices",
    href: "/model/market",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    desc: "Processing & quality standards",
    href: "/model/quality",
  },
  {
    icon: PiggyBank,
    title: "Financial Inclusion",
    desc: "SACCO & community savings groups",
    href: "/model/financial",
  },
  {
    icon: Shield,
    title: "Farmer Insurance",
    desc: "Rural risk protection program",
    href: "/model/insurance",
  },
];

const NEWS_ARTICLES = [
  {
    image: "/images/news-1.png",
    date: "Nov 29, 2025",
    title: "Fertilizer Distribution Boosts Productivity for 7,000 Households",
    href: "/connect/news",
  },
  {
    image: "/images/news-2.png",
    date: "Nov 29, 2025",
    title: "Cocoa Expansion Program Impacts 3,700 Homes",
    href: "/connect/news",
  },
  {
    image: "/images/news-3.png",
    date: "Nov 29, 2025",
    title: "Bugwere Coffee Reaches Over 5,000 Homes With Coffee Seedlings",
    href: "/connect/news",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO SLIDER ─── */}
      <HeroSlider slides={HERO_SLIDES} />

      {/* ─── IMPACT STATS BAR ─── */}
      <section style={{ backgroundColor: SECONDARY }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {IMPACT_STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${PRIMARY}20` }}
                  >
                    <stat.icon className="w-6 h-6" style={{ color: PRIMARY }} />
                  </div>
                </div>
                <p
                  className="text-3xl sm:text-4xl font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  {stat.number}
                </p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                label="About Bugwere Coffee Company"
                title="Our Story"
                description="Founded in 2023, Bugwere Coffee Company (BCC) was established to respond to a critical challenge: How can rural households with limited land still generate sustainable income? Our answer lies in a holistic, community-driven approach that combines high-value coffee and cocoa production with diversified income streams, expert agronomic support, and guaranteed market access."
              />
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3 text-white font-semibold text-sm rounded-xl transition-all hover:shadow-lg hover:scale-[1.02]"
                style={{ backgroundColor: SECONDARY }}
              >
                Read Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-photo.png"
                  alt="Bugwere Coffee community"
                  width={864}
                  height={1152}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating stat card */}
              <div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 hidden lg:block"
              >
                <p
                  className="text-3xl font-bold"
                  style={{ color: PRIMARY, fontFamily: "var(--font-raleway)" }}
                >
                  5,000+
                </p>
                <p className="text-sm text-gray-500">Families empowered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROGRAMS ─── */}
      <section id="programs" className="py-20 lg:py-28" style={{ backgroundColor: LIGHT_BG }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="Our Programs"
            description="Bugwere Coffee Company empowers rural households through sustainable coffee and cocoa farming, micro-commercial farm development, livestock projects, intermediary crops, and expert agronomic support."
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((program) => (
              <Link
                key={program.title}
                href={program.href}
                className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors"
                  style={{ backgroundColor: `${program.color}12` }}
                >
                  <program.icon
                    className="w-7 h-7"
                    style={{ color: program.color }}
                  />
                </div>
                <h3
                  className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[--color-brand] transition-colors"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {program.desc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: PRIMARY }}>
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IMPACT IN NUMBERS ─── */}
      <section id="impact" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <SectionHeading
            label="Bugwere Impact"
            title="Our Impact in Numbers"
            description="Strengthening communities through scalable, high-impact agricultural support across the Bugwere region."
            centered
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "/images/impact-coffee.png",
                stat: "5,000+",
                title: "Homes Supplied With Coffee Seedlings",
                desc: "Helping families establish long-term, high-value coffee farms that provide steady and sustainable household income.",
              },
              {
                img: "/images/impact-cocoa.png",
                stat: "3,700+",
                title: "Homes Supplied With Cocoa Seedlings",
                desc: "Supporting communities to diversify earnings with cocoa, a resilient crop that strengthens economic stability.",
              },
              {
                img: "/images/impact-fertilizer.png",
                stat: "7,000+",
                title: "Homes Supplied With Fertilizers",
                desc: "Improving soil health and boosting crop productivity, enabling farmers to achieve higher yields and better quality harvests.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p
                    className="absolute bottom-4 left-6 text-3xl font-bold text-white"
                    style={{ fontFamily: "var(--font-raleway)" }}
                  >
                    {card.stat}
                  </p>
                </div>
                <div className="p-6">
                  <h4
                    className="text-lg font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "var(--font-raleway)" }}
                  >
                    {card.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR MODEL ─── */}
      <section id="model" className="py-20 lg:py-28" style={{ backgroundColor: SECONDARY }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <SectionHeading
            label="Empowering Households"
            title="Our Transformative Agriculture Model"
            description="Our model is built to empower rural households through a complete, end-to-end agricultural support system. We provide high-quality seedlings, agronomic training, and guaranteed markets, while strengthening families with short-term income crops, livestock projects, and financial inclusion."
            light
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MODEL_PILLARS.map((pillar) => (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${PRIMARY}25` }}
                >
                  <pillar.icon className="w-6 h-6" style={{ color: PRIMARY }} />
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-white/90 mb-1" style={{ fontFamily: "var(--font-raleway)" }}>
                    {pillar.title}
                  </h4>
                  <p className="text-white/60 text-sm">{pillar.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/model"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white font-semibold text-sm rounded-xl transition-all hover:shadow-lg"
              style={{ color: SECONDARY }}
            >
              Explore Our Model <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PARTNERSHIPS ─── */}
      <section id="partnerships" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <SectionHeading
            label="Working Together"
            title="Partnerships"
            description="Bugwere Coffee Company thrives through strong partnerships with organizations that share our commitment to empowering rural communities. We collaborate with local governments, development agencies, financial institutions, research organizations, and community-based structures."
            centered
          />
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-5 mb-10">
            {[
              { icon: Users, label: "Local Governments" },
              { icon: Leaf, label: "Development Agencies" },
              { icon: Microscope, label: "Research Orgs" },
              { icon: PiggyBank, label: "Financial Inst." },
              { icon: Heart, label: "Community Orgs" },
            ].map(({ icon: Icon, label }, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-100 hover:border-[--color-brand]/20 hover:shadow-md transition-all"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${SECONDARY}10` }}
                >
                  <Icon className="w-7 h-7" style={{ color: SECONDARY }} />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/connect/partners"
              className="inline-flex items-center gap-2 px-7 py-3 border-2 font-semibold text-sm rounded-xl transition-all hover:shadow-lg"
              style={{ borderColor: SECONDARY, color: SECONDARY }}
            >
              Become a Partner <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── NEWS ─── */}
      <section id="news" className="py-20 lg:py-28" style={{ backgroundColor: LIGHT_BG }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <SectionHeading
            label="Latest News"
            title="News & Press"
            description="Stay updated with the latest developments from Bugwere Coffee Company and our community initiatives."
            centered
          />
          <div className="grid md:grid-cols-3 gap-8">
            {NEWS_ARTICLES.map((article, i) => (
              <Link
                key={i}
                href={article.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold mb-2" style={{ color: PRIMARY }}>
                    {article.date}
                  </p>
                  <h4
                    className="text-base font-bold text-gray-900 leading-snug group-hover:text-[--color-brand] transition-colors"
                    style={{ fontFamily: "var(--font-raleway)" }}
                  >
                    {article.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h3
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Stay in the Loop
          </h3>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest updates on our programs and impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[--color-brand]/20 focus:border-[--color-brand] transition-all"
            />
            <button
              className="px-6 py-3 text-white font-semibold text-sm rounded-xl transition-all hover:shadow-lg"
              style={{ backgroundColor: PRIMARY }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
