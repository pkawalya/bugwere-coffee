"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero, { SectionHeading } from "@/components/PageHero";
import { ArrowRight, Heart } from "lucide-react";

const PRIMARY = "#c94449";
const SECONDARY = "#193b2a";

const STORIES = [
  {
    title: "From Subsistence to Sustainability",
    excerpt: "How one family transformed their small plot into a thriving coffee farm with BCC's support, generating income they never thought possible.",
    image: "/images/impact-coffee.png",
  },
  {
    title: "A Cocoa Revolution in Bugwere",
    excerpt: "When cocoa seedlings arrived in her village, Mama Grace saw an opportunity to diversify her income and secure her children's future.",
    image: "/images/impact-cocoa.png",
  },
  {
    title: "7,000 Homes and Counting",
    excerpt: "The fertilizer distribution program has fundamentally changed crop yields across the region, enabling families to harvest more and earn more.",
    image: "/images/impact-fertilizer.png",
  },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        title="Impact Stories"
        subtitle="Real stories from the field showing how BCC programs transform lives and communities."
        breadcrumb={[{ label: "Impact", href: "/impact" }]}
      />

      {/* Key Stats */}
      <section style={{ backgroundColor: SECONDARY }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "5,000+", label: "Coffee Homes" },
              { num: "3,700+", label: "Cocoa Homes" },
              { num: "7,000+", label: "Fertilizer Homes" },
              { num: "15,000+", label: "Lives Impacted" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-raleway)" }}>{s.num}</p>
                <p className="text-white/60 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <SectionHeading label="From the Field" title="Impact Stories" description="Every number represents a family, a story, a transformed livelihood. Here are some of the stories behind our impact." centered />
          <div className="grid md:grid-cols-3 gap-8">
            {STORIES.map((story, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <div className="relative h-52 overflow-hidden">
                  <Image src={story.image} alt={story.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-raleway)" }}>{story.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{story.excerpt}</p>
                  <a href="#" className="text-sm font-semibold flex items-center gap-1" style={{ color: PRIMARY }}>
                    Read Full Story <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore more */}
      <section className="py-16" style={{ backgroundColor: "#F4F7FA" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-raleway)" }}>Explore Our Data</h2>
          <p className="text-gray-600 mb-8">Dive deeper into the numbers and see how our programs are growing across the region.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/impact/statistics" className="inline-flex items-center gap-2 px-7 py-3 text-white font-semibold text-sm rounded-xl" style={{ backgroundColor: SECONDARY }}>
              Farmer Statistics <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/impact/expansion" className="inline-flex items-center gap-2 px-7 py-3 border-2 font-semibold text-sm rounded-xl" style={{ borderColor: SECONDARY, color: SECONDARY }}>
              Regional Expansion
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
