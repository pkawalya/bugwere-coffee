"use client";

import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import StatsBar from "@/components/ui/StatsBar";
import ImpactCard from "@/components/ui/ImpactCard";
import ProgramCard from "@/components/ui/ProgramCard";
import PillarCard from "@/components/ui/PillarCard";
import NewsCard from "@/components/ui/NewsCard";
import Newsletter from "@/components/ui/Newsletter";
import IconBox from "@/components/ui/IconBox";
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
import { PRIMARY, SECONDARY } from "@/lib/constants";

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
  { number: "5,000+", label: "Homes with Coffee Seedlings", icon: <Coffee className="w-6 h-6" /> },
  { number: "3,700+", label: "Homes with Cocoa Seedlings", icon: <Sprout className="w-6 h-6" /> },
  { number: "7,000+", label: "Homes with Fertilizers", icon: <Wheat className="w-6 h-6" /> },
  { number: "2023", label: "Year Founded", icon: <Leaf className="w-6 h-6" /> },
];

const PROGRAMS = [
  {
    icon: <Coffee className="w-7 h-7" style={{ color: "#8B6914" }} />,
    title: "Sustainable Coffee",
    desc: "High-value coffee production with guaranteed market access and expert agronomic support.",
    href: "/programs/coffee",
    color: "#8B6914",
  },
  {
    icon: <Sprout className="w-7 h-7" style={{ color: "#6B3A2A" }} />,
    title: "Cocoa Farming",
    desc: "Diversifying farmer income with resilient cocoa crops and comprehensive training programs.",
    href: "/programs/cocoa",
    color: "#6B3A2A",
  },
  {
    icon: <Bird className="w-7 h-7" style={{ color: "#2A5A3A" }} />,
    title: "Livestock Support",
    desc: "Piggery and poultry projects providing steady, diversified income for rural households.",
    href: "/programs/livestock",
    color: "#2A5A3A",
  },
  {
    icon: <Wheat className="w-7 h-7" style={{ color: "#4A6B2A" }} />,
    title: "Agronomy Services",
    desc: "Expert farmer training, extension services, and ongoing field support.",
    href: "/programs/agronomy",
    color: "#4A6B2A",
  },
  {
    icon: <Heart className="w-7 h-7" style={{ color: PRIMARY }} />,
    title: "Community Development",
    desc: "Building resilient communities through inclusive development initiatives.",
    href: "/programs/community",
    color: PRIMARY,
  },
];

const MODEL_PILLARS = [
  {
    icon: <Sprout className="w-6 h-6" />,
    title: "Seedling Distribution",
    desc: "Quality seedlings delivered to every farmer",
    href: "/model/seedlings",
  },
  {
    icon: <Microscope className="w-6 h-6" />,
    title: "Extension System",
    desc: "Agronomic training & field support",
    href: "/model/extension",
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Market Access",
    desc: "Guaranteed buying & fair prices",
    href: "/model/market",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Quality Assurance",
    desc: "Processing & quality standards",
    href: "/model/quality",
  },
  {
    icon: <PiggyBank className="w-6 h-6" />,
    title: "Financial Inclusion",
    desc: "SACCO & community savings groups",
    href: "/model/financial",
  },
  {
    icon: <Shield className="w-6 h-6" />,
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
      <StatsBar stats={IMPACT_STATS} dark />

      {/* ─── ABOUT ─── */}
      <Section background="white" py="xl">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                label="About Bugwere Coffee Company"
                title="Our Story"
                description="Founded in 2023, Bugwere Coffee Company (BCC) was established to respond to a critical challenge: How can rural households with limited land still generate sustainable income? Our answer lies in a holistic, community-driven approach that combines high-value coffee and cocoa production with diversified income streams, expert agronomic support, and guaranteed market access."
              />
              <Button variant="secondary" href="/about" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                Read Our Story
              </Button>
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
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 hidden lg:block">
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
        </Container>
      </Section>

      {/* ─── PROGRAMS ─── */}
      <Section background="light" py="xl">
        <Container>
          <SectionHeading
            label="What We Do"
            title="Our Programs"
            description="Bugwere Coffee Company empowers rural households through sustainable coffee and cocoa farming, micro-commercial farm development, livestock projects, intermediary crops, and expert agronomic support."
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((program) => (
              <ProgramCard
                key={program.title}
                icon={program.icon}
                title={program.title}
                description={program.desc}
                href={program.href}
                color={program.color}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── IMPACT IN NUMBERS ─── */}
      <Section background="white" py="xl">
        <Container>
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
              <ImpactCard
                key={i}
                image={card.img}
                stat={card.stat}
                title={card.title}
                description={card.desc}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── OUR MODEL ─── */}
      <Section background="dark" py="xl">
        <Container>
          <SectionHeading
            label="Empowering Households"
            title="Our Transformative Agriculture Model"
            description="Our model is built to empower rural households through a complete, end-to-end agricultural support system. We provide high-quality seedlings, agronomic training, and guaranteed markets, while strengthening families with short-term income crops, livestock projects, and financial inclusion."
            light
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MODEL_PILLARS.map((pillar) => (
              <PillarCard
                key={pillar.title}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.desc}
                href={pillar.href}
                light
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="white" href="/model" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
              Explore Our Model
            </Button>
          </div>
        </Container>
      </Section>

      {/* ─── PARTNERSHIPS ─── */}
      <Section background="white" py="xl">
        <Container>
          <SectionHeading
            label="Working Together"
            title="Partnerships"
            description="Bugwere Coffee Company thrives through strong partnerships with organizations that share our commitment to empowering rural communities. We collaborate with local governments, development agencies, financial institutions, research organizations, and community-based structures."
            centered
          />
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-5 mb-10">
            {[
              { icon: <Users className="w-7 h-7" />, label: "Local Governments" },
              { icon: <Leaf className="w-7 h-7" />, label: "Development Agencies" },
              { icon: <Microscope className="w-7 h-7" />, label: "Research Orgs" },
              { icon: <PiggyBank className="w-7 h-7" />, label: "Financial Inst." },
              { icon: <Heart className="w-7 h-7" />, label: "Community Orgs" },
            ].map(({ icon, label }, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-100 hover:border-[--color-brand]/20 hover:shadow-md transition-all"
              >
                <IconBox icon={icon} variant="filled" color={SECONDARY} size="lg" />
                <span className="text-sm font-medium text-gray-700 text-center">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" href="/connect/partners" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
              Become a Partner
            </Button>
          </div>
        </Container>
      </Section>

      {/* ─── NEWS ─── */}
      <Section background="light" py="xl">
        <Container>
          <SectionHeading
            label="Latest News"
            title="News & Press"
            description="Stay updated with the latest developments from Bugwere Coffee Company and our community initiatives."
            centered
          />
          <div className="grid md:grid-cols-3 gap-8">
            {NEWS_ARTICLES.map((article, i) => (
              <NewsCard
                key={i}
                image={article.image}
                date={article.date}
                title={article.title}
                href={article.href}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── NEWSLETTER ─── */}
      <Newsletter />
    </>
  );
}
