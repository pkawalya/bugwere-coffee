"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero, { SectionHeading } from "@/components/PageHero";
import { ArrowRight, Calendar } from "lucide-react";

const PRIMARY = "#c94449";

const ARTICLES = [
  {
    image: "/images/news-1.png",
    date: "November 29, 2025",
    title: "Fertilizer Distribution Boosts Productivity for 7,000 Households",
    excerpt: "Our latest fertilizer distribution campaign has reached over 7,000 homes across the Bugwere region, with farmers reporting significant improvements in crop health and expected yields.",
  },
  {
    image: "/images/news-2.png",
    date: "November 29, 2025",
    title: "Cocoa Expansion Program Impacts 3,700 Homes",
    excerpt: "The cocoa expansion program continues to transform livelihoods, with 3,700 homes now equipped with cocoa seedlings and the training needed to cultivate this resilient, high-value crop.",
  },
  {
    image: "/images/news-3.png",
    date: "November 29, 2025",
    title: "Bugwere Coffee Company Reaches Over 5,000 Homes With Coffee Seedlings",
    excerpt: "A landmark milestone for BCC as our coffee seedling distribution program surpasses 5,000 households, representing thousands of families building sustainable income through coffee farming.",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero title="News & Updates" subtitle="The latest developments from Bugwere Coffee Company and our community." breadcrumb={[{ label: "Connect", href: "/connect/news" }, { label: "News", href: "/connect/news" }]} />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <SectionHeading label="Latest" title="From the Field" description="Stay informed about our programs, partnerships, and the communities we serve." centered />
          <div className="space-y-8">
            {ARTICLES.map((article, i) => (
              <div key={i} className="group grid md:grid-cols-3 gap-6 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="relative h-48 md:h-full rounded-xl overflow-hidden">
                  <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="md:col-span-2 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" /> {article.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[--color-brand] transition-colors" style={{ fontFamily: "var(--font-raleway)" }}>{article.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{article.excerpt}</p>
                  <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: PRIMARY }}>
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
