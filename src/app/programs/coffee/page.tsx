"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero, { SectionHeading } from "@/components/PageHero";
import { CheckCircle2, ArrowRight } from "lucide-react";

const PRIMARY = "#c94449";
const SECONDARY = "#193b2a";

const HIGHLIGHTS = [
  "Over 5,000 homes supplied with premium coffee seedlings",
  "Guaranteed market access through our buying program",
  "Expert agronomic training and ongoing field support",
  "Processing and quality assurance at collection centers",
  "Financial inclusion through community SACCO savings groups",
  "Rural farmer insurance protecting against crop failure",
];

export default function CoffeePage() {
  return (
    <>
      <PageHero
        title="Sustainable Coffee Production"
        subtitle="Empowering households through high-value coffee farming with guaranteed support from seedling to market."
        breadcrumb={[{ label: "Programs", href: "/programs/coffee" }, { label: "Coffee", href: "/programs/coffee" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                label="Coffee Program"
                title="From Seedling to Cup"
                description="Our sustainable coffee production program is the cornerstone of Bugwere Coffee Company. We provide everything a farming household needs to establish and maintain a productive coffee farm — from premium seedlings and fertilizers to expert training and guaranteed market access. Coffee is a high-value, long-term crop that provides steady income for families year after year, making it the ideal foundation for rural economic transformation."
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/impact-coffee.png" alt="Coffee seedlings" width={1344} height={768} className="w-full" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#F4F7FA" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <SectionHeading label="Program Highlights" title="What We Provide" centered />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HIGHLIGHTS.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-white rounded-xl shadow-sm">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: PRIMARY }} />
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: SECONDARY }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-raleway)" }}>Ready to Start Your Coffee Farm?</h2>
          <p className="text-white/70 text-lg mb-8">Join thousands of households already benefiting from our coffee production program.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white font-semibold text-sm rounded-xl transition-all hover:shadow-lg" style={{ color: SECONDARY }}>
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/model" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold text-sm rounded-xl transition-all hover:bg-white/10">
              Our Model
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
