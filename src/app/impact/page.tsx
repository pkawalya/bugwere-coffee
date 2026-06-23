"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { ArrowRight, Heart } from "lucide-react";
import { PRIMARY, SECONDARY, FONT_RALEWAY, FONT_OPENSANS, CREAM } from "@/lib/constants";

const STORIES = [
  {
    title: "From Subsistence to Sustainability",
    excerpt: "How one family transformed their small plot into a thriving coffee farm with BCC's support, generating income they never thought possible. Before joining our program, this family struggled to meet basic needs. Today, they not only feed their children but also send them to school.",
    image: "/images/impact-coffee.png",
  },
  {
    title: "A Cocoa Revolution in Bugwere",
    excerpt: "When cocoa seedlings arrived in her village, Mama Grace saw an opportunity to diversify her income and secure her children's future. She now earns from both coffee and cocoa, creating a resilient financial foundation.",
    image: "/images/impact-cocoa.png",
  },
  {
    title: "7,000 Homes and Counting",
    excerpt: "The fertilizer distribution program has fundamentally changed crop yields across the region, enabling families to harvest more and earn more. Farmers report yield increases of up to 40% after adopting the improved inputs.",
    image: "/images/impact-fertilizer.png",
  },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        title="Our Impact"
        subtitle="Real stories and data showing how BCC programs transform lives and communities."
        breadcrumb={[{ label: "Impact", href: "/impact" }]}
        backgroundImage="/images/impact-coffee.png"
      />

      {/* Animated Counter Hero */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: SECONDARY }}>
        <div className="absolute inset-0 bg-dots-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { end: 5000, suffix: "+", label: "Coffee Homes" },
              { end: 3700, suffix: "+", label: "Cocoa Homes" },
              { end: 7000, suffix: "+", label: "Fertilizer Homes" },
              { end: 15000, suffix: "+", label: "Lives Impacted" },
            ].map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.15}>
                <div className="text-center">
                  <AnimatedCounter
                    end={s.end}
                    suffix={s.suffix}
                    duration={2500}
                    className="text-2xl sm:text-3xl font-bold text-white mb-2"
                    style={{ fontFamily: FONT_RALEWAY }}
                  />
                  <p className="text-white/50 text-sm">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories - Alternating image/text */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: PRIMARY, fontFamily: FONT_OPENSANS }}>
                From the Field
              </p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                Impact Stories
              </h2>
            </div>
          </ScrollReveal>

          {STORIES.map((story, i) => (
            <ScrollReveal key={story.title} delay={0.1}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center mb-20 last:mb-0 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                    <Image src={story.image} alt={story.title} fill className="w-full h-full object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                    {/* Gradient blend — fades image edges into surrounding white */}
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(255,255,255,0.12) 100%)' }} />
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top left, transparent 50%, rgba(255,255,255,0.06) 100%)' }} />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span
                    className="inline-block w-8 h-0.5 rounded-full mb-4"
                    style={{ backgroundColor: PRIMARY }}
                  />
                  <h3
                    className="text-xl sm:text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: FONT_RALEWAY }}
                  >
                    {story.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{story.excerpt}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: PRIMARY, fontFamily: FONT_OPENSANS }}
                  >
                    Read Full Story <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Explore more */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: FONT_RALEWAY }}>
              Explore Our Data
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Dive deeper into the numbers and see how our programs are growing across the region.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/impact/statistics"
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold text-sm rounded-full"
                style={{ backgroundColor: SECONDARY, fontFamily: FONT_OPENSANS }}
              >
                Farmer Statistics <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/impact/expansion"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 font-semibold text-sm rounded-full transition-all hover:bg-[--color-brand] hover:text-white hover:border-[--color-brand]"
                style={{ borderColor: SECONDARY, color: SECONDARY, fontFamily: FONT_OPENSANS }}
              >
                Regional Expansion
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
