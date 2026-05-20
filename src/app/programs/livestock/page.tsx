"use client";

import PageHero, { SectionHeading } from "@/components/PageHero";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const PRIMARY = "#c94449";
const SECONDARY = "#193b2a";

export default function LivestockPage() {
  return (
    <>
      <PageHero
        title="Livestock Support"
        subtitle="Piggery and poultry projects providing steady, diversified income for rural households."
        breadcrumb={[{ label: "Programs", href: "/programs/livestock" }, { label: "Livestock", href: "/programs/livestock" }]}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <SectionHeading
            label="Livestock Program"
            title="Piggery & Poultry for Steady Income"
            description="While coffee and cocoa provide long-term income, our livestock support program ensures families have steady, short-term revenue streams. Through piggery and poultry projects, households can generate income within months rather than years, providing essential financial stability while their tree crops mature. This dual-income approach is central to our model of sustainable rural transformation, ensuring that no family has to wait years before seeing returns on their agricultural investment."
          />
          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            {[
              "Piggery projects providing income within 6-8 months",
              "Poultry farming for daily and weekly revenue",
              "Complementary to long-term coffee and cocoa income",
              "Training on modern livestock management practices",
              "Veterinary support and disease prevention",
              "Market linkages for livestock products",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-xl border border-gray-100">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: PRIMARY }} />
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 text-white font-semibold text-sm rounded-xl transition-all hover:shadow-lg" style={{ backgroundColor: SECONDARY }}>
              Learn How to Join <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
