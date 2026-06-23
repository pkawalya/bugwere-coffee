"use client";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PRIMARY, SECONDARY } from "@/lib/constants";

export default function MarketPage() {
  return (
    <>
      <PageHero title="Market Access & Guaranteed Buying" subtitle="Ensuring every farmer can sell their harvest at fair, transparent prices." breadcrumb={[{ label: "Model", href: "/model" }, { label: "Market Access", href: "/model/market" }]} backgroundImage="/images/coffee-farmer-hd.jpeg" />
      <Section background="white" py="xl">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <SectionHeading label="Market Access" title="Guaranteed Demand, Fair Prices" description="One of the greatest risks for smallholder farmers is market uncertainty — the fear that after investing time and resources into a crop, there will be no buyer at a fair price. Our guaranteed buying program eliminates this risk entirely. BCC commits to purchasing all coffee and cocoa produced by our registered farmers at transparent, competitive prices. This guarantee is the foundation that gives farmers the confidence to invest in their farms and plan for the future." />
              </ScrollReveal>
            </div>
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.1} direction="right">
                <div className="p-6 sm:p-8 rounded-2xl" style={{ backgroundColor: `${SECONDARY}08` }}>
                  <h4 className="text-lg font-bold text-gray-900 mb-5" style={{ fontFamily: "var(--font-raleway)" }}>Key Facts</h4>
                  <div className="space-y-4">
                    {[
                      { label: "Price Model", value: "Transparent" },
                      { label: "Payment", value: "Immediate" },
                      { label: "Market Type", value: "Premium Export" },
                      { label: "Collection", value: "Walking Distance" },
                    ].map((fact) => (
                      <div key={fact.label} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                        <span className="text-gray-600 text-sm" style={{ fontFamily: "var(--font-open-sans)" }}>{fact.label}</span>
                        <span className="font-bold" style={{ color: PRIMARY, fontFamily: "var(--font-raleway)" }}>{fact.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mt-12">
            {["Guaranteed purchase of all registered farmer output", "Transparent, competitive pricing published in advance", "Collection centers within walking distance of farms", "Immediate payment upon delivery — no delays", "Direct access to premium export markets", "Price premiums for high-quality produce"].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 p-5 rounded-xl border border-gray-100 hover:shadow-sm transition-all">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: PRIMARY }} />
                  <p className="text-gray-700 text-sm" style={{ fontFamily: "var(--font-open-sans)" }}>{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10">
            <ScrollReveal>
              <Button variant="primary" href="/contact" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">Partner With Us</Button>
            </ScrollReveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
