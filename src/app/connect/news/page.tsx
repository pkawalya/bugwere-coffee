"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { PRIMARY, SECONDARY, FONT_RALEWAY, FONT_OPENSANS, CREAM } from "@/lib/constants";

const FEATURED = {
  image: "/images/hero-fertilizer-support.png",
  date: "November 29, 2025",
  category: "Program Update",
  title: "Fertilizer Distribution Boosts Productivity for 7,000 Households",
  excerpt: "Our latest fertilizer distribution campaign has reached over 7,000 homes across the Bugwere region, with farmers reporting significant improvements in crop health and expected yields. This milestone represents the largest single distribution in our history, made possible through partnerships with local government and international development agencies.",
};

const ARTICLES = [
  {
    image: "/images/hero-cocoa-seedlings.png",
    date: "November 29, 2025",
    category: "Expansion",
    title: "Cocoa Expansion Program Impacts 3,700 Homes",
    excerpt: "The cocoa expansion program continues to transform livelihoods, with 3,700 homes now equipped with cocoa seedlings and the training needed to cultivate this resilient, high-value crop.",
  },
  {
    image: "/images/coffee-farmer-hd.jpeg",
    date: "November 29, 2025",
    category: "Milestone",
    title: "Bugwere Coffee Company Reaches Over 5,000 Homes With Coffee Seedlings",
    excerpt: "A landmark milestone for BCC as our coffee seedling distribution program surpasses 5,000 households, representing thousands of families building sustainable income through coffee farming.",
  },
];

const MORE_STORIES = [
  {
    date: "October 15, 2025",
    category: "Community",
    title: "SACCO Membership Surpasses 3,500 Active Members",
    excerpt: "Our community savings and credit cooperative continues to grow, providing financial services to thousands of rural families.",
  },
  {
    date: "September 28, 2025",
    category: "Agriculture",
    title: "New Disease-Resistant Coffee Varieties Introduced",
    excerpt: "BCC partners with research institutions to bring next-generation coffee varieties to Bugwere farmers, promising higher yields and better resilience.",
  },
  {
    date: "August 10, 2025",
    category: "Partnership",
    title: "Partnership With District Government Expands Training Programs",
    excerpt: "A new memorandum of understanding with local government will double our training capacity across the Bugwere region.",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Updates"
        subtitle="The latest developments from Bugwere Coffee Company and our community."
        breadcrumb={[{ label: "Connect", href: "/connect/news" }, { label: "News", href: "/connect/news" }]}
        backgroundImage="/images/hero-fertilizer-support.png"
      />

      {/* ─── Featured Article ─── */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-shape opacity-[0.03]" style={{ backgroundColor: PRIMARY }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: PRIMARY }} />
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>Featured</span>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="group grid lg:grid-cols-2 gap-10 p-6 sm:p-10 rounded-3xl border border-gray-100/60 hover:shadow-xl hover:border-transparent transition-all duration-300">
              <div className="relative h-64 sm:h-80 lg:h-full rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto">
                <Image src={FEATURED.image} alt={FEATURED.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 1024px) 100vw, 50vw" />
                {/* Gradient blend into card */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.08) 100%)' }} />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: PRIMARY, fontFamily: FONT_RALEWAY }}>
                    {FEATURED.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4" style={{ fontFamily: FONT_OPENSANS }}>
                  <Calendar className="w-4 h-4" /> {FEATURED.date}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>{FEATURED.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: FONT_OPENSANS }}>{FEATURED.excerpt}</p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── More Articles ─── */}
      <section className="py-24 sm:py-32 relative overflow-hidden" style={{ backgroundColor: CREAM }}>
        <div className="absolute top-1/3 -left-32 w-64 h-64 rounded-full opacity-[0.06]" style={{ backgroundColor: SECONDARY }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: PRIMARY }} />
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>Latest Stories</span>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {ARTICLES.map((article, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100/60 hover:shadow-xl hover:border-transparent transition-all duration-300">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
                    {/* Soft gradient blend */}
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.06) 100%)' }} />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: SECONDARY, fontFamily: FONT_RALEWAY }}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3" style={{ fontFamily: FONT_OPENSANS }}>
                      <Calendar className="w-4 h-4" /> {article.date}
                    </div>
                    <h3 className="text-xl font-bold mb-3 leading-tight" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>{article.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: FONT_OPENSANS }}>{article.excerpt}</p>
                    <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quick Stories ─── */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 blob-shape opacity-[0.03]" style={{ backgroundColor: SECONDARY }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: PRIMARY }} />
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>More From the Field</span>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {MORE_STORIES.map((story, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group p-6 sm:p-8 rounded-3xl border border-gray-100/60 hover:shadow-lg hover:border-transparent transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-500" style={{ fontFamily: FONT_OPENSANS }}>
                      <Clock className="w-4 h-4" /> {story.date}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: `${PRIMARY}10`, color: PRIMARY, fontFamily: FONT_RALEWAY }}>
                      <Tag className="w-3 h-3 inline mr-1" />{story.category}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold mb-2" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>{story.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: FONT_OPENSANS }}>{story.excerpt}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
