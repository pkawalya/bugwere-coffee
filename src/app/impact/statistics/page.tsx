"use client";

import PageHero, { SectionHeading } from "@/components/PageHero";
import { TrendingUp } from "lucide-react";

const PRIMARY = "#c94449";
const SECONDARY = "#193b2a";

export default function StatisticsPage() {
  return (
    <>
      <PageHero
        title="Farmer Statistics"
        subtitle="Data-driven insights into our growing impact across Eastern Uganda."
        breadcrumb={[{ label: "Impact", href: "/impact" }, { label: "Statistics", href: "/impact/statistics" }]}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <SectionHeading label="By The Numbers" title="Our Reach at a Glance" description="We track and measure every aspect of our programs to ensure transparency, accountability, and continuous improvement. Here is a summary of our key statistics as of 2025." centered />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Coffee Seedling Homes", value: "5,000+", growth: "+40% from 2024" },
              { label: "Cocoa Seedling Homes", value: "3,700+", growth: "+65% from 2024" },
              { label: "Fertilizer Recipients", value: "7,000+", growth: "+35% from 2024" },
              { label: "Active Farming Households", value: "8,200+", growth: "+50% from 2024" },
              { label: "Field Officers Deployed", value: "45+", growth: "+20 from 2024" },
              { label: "SACCO Members", value: "3,500+", growth: "+55% from 2024" },
              { label: "Parishes Covered", value: "28", growth: "+8 new parishes" },
              { label: "Total Lives Impacted", value: "15,000+", growth: "Growing daily" },
              { label: "Average Yield Increase", value: "35%", growth: "Since program start" },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-raleway)", color: i < 3 ? PRIMARY : SECONDARY }}>{stat.value}</p>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <TrendingUp className="w-3.5 h-3.5" /> {stat.growth}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
