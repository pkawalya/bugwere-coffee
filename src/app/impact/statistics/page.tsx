"use client";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProgressRing from "@/components/ui/ProgressRing";
import { TrendingUp } from "lucide-react";
import { PRIMARY, SECONDARY } from "@/lib/constants";

const STATS = [
  { label: "Coffee Seedling Homes", value: "5,000+", growth: "+40% from 2024", percentage: 71 },
  { label: "Cocoa Seedling Homes", value: "3,700+", growth: "+65% from 2024", percentage: 53 },
  { label: "Fertilizer Recipients", value: "7,000+", growth: "+35% from 2024", percentage: 100 },
  { label: "Active Farming Households", value: "8,200+", growth: "+50% from 2024", percentage: 82 },
  { label: "Field Officers Deployed", value: "45+", growth: "+20 from 2024", percentage: 60 },
  { label: "SACCO Members", value: "3,500+", growth: "+55% from 2024", percentage: 43 },
  { label: "Parishes Covered", value: "28", growth: "+8 new parishes", percentage: 35 },
  { label: "Total Lives Impacted", value: "15,000+", growth: "Growing daily", percentage: 90 },
  { label: "Average Yield Increase", value: "35%", growth: "Since program start", percentage: 35 },
];

export default function StatisticsPage() {
  return (
    <>
      <PageHero
        title="Farmer Statistics"
        subtitle="Data-driven insights into our growing impact across Eastern Uganda."
        breadcrumb={[{ label: "Impact", href: "/impact" }, { label: "Statistics", href: "/impact/statistics" }]}
        backgroundImage="/images/impact-fertilizer.jpeg"
      />

      <Section background="white" py="xl">
        <Container>
          <ScrollReveal>
            <SectionHeading
              label="By The Numbers"
              title="Our Reach at a Glance"
              description="We track and measure every aspect of our programs to ensure transparency, accountability, and continuous improvement."
              centered
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.05}>
                <div className="group p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-[--color-brand]/20 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1" style={{ fontFamily: "var(--font-open-sans)" }}>{stat.label}</p>
                      <p
                        className="text-2xl sm:text-3xl font-bold"
                        style={{ fontFamily: "var(--font-raleway)", color: i < 3 ? PRIMARY : SECONDARY }}
                      >
                        {stat.value}
                      </p>
                    </div>
                    <ProgressRing
                      percentage={stat.percentage}
                      size={60}
                      strokeWidth={5}
                      color={i < 3 ? PRIMARY : SECONDARY}
                      className="flex-shrink-0"
                    />
                  </div>
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <TrendingUp className="w-3.5 h-3.5" /> {stat.growth}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
