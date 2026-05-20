"use client";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MapPin, ArrowRight } from "lucide-react";
import { PRIMARY, SECONDARY } from "@/lib/constants";

const REGIONS = [
  { district: "Bugwere Region", status: "Active", households: "8,200+", parishes: "28", color: "#22c55e" },
  { district: "Budaka District", status: "Expanding", households: "1,200+", parishes: "6", color: "#3b82f6" },
  { district: "Pallisa District", status: "New", households: "500+", parishes: "3", color: "#f59e0b" },
  { district: "Kibuku District", status: "Planning", households: "—", parishes: "—", color: "#9ca3af" },
  { district: "Butaleja District", status: "Planning", households: "—", parishes: "—", color: "#9ca3af" },
  { district: "Tororo District", status: "Future", households: "—", parishes: "—", color: "#9ca3af" },
];

export default function ExpansionPage() {
  return (
    <>
      <PageHero
        title="Regional Expansion"
        subtitle="Growing our reach across Eastern Uganda and beyond."
        breadcrumb={[{ label: "Impact", href: "/impact" }, { label: "Expansion", href: "/impact/expansion" }]}
        backgroundImage="/images/hero-3.png"
      />

      <Section background="white" py="xl">
        <Container>
          <ScrollReveal>
            <SectionHeading
              label="Growing Our Reach"
              title="From Bugwere to Beyond"
              description="What began as a focused initiative in the Bugwere region is now expanding across Eastern Uganda. Our proven model of end-to-end agricultural support is scalable and replicable, allowing us to bring the same transformative impact to new communities."
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {REGIONS.map((region, i) => (
              <ScrollReveal key={region.district} delay={i * 0.08}>
                <div className="group p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-[--color-brand]/20 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4" style={{ color: region.color }} />
                    <span
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                      style={{ backgroundColor: `${region.color}15`, color: region.color }}
                    >
                      {region.status}
                    </span>
                  </div>
                  <h4
                    className="text-lg font-bold text-gray-900 mb-3"
                    style={{ fontFamily: "var(--font-raleway)" }}
                  >
                    {region.district}
                  </h4>
                  <div className="flex gap-6 text-sm text-gray-500" style={{ fontFamily: "var(--font-open-sans)" }}>
                    <span>Households: <strong className="text-gray-800">{region.households}</strong></span>
                    <span>Parishes: <strong className="text-gray-800">{region.parishes}</strong></span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <ScrollReveal>
              <Button variant="primary" href="/contact" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                Partner With Us
              </Button>
            </ScrollReveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
