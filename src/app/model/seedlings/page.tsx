"use client";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PRIMARY, SECONDARY } from "@/lib/constants";

export default function SeedlingsPage() {
  return (
    <>
      <PageHero title="Seedling Production & Distribution" subtitle="Premium seedlings that give every farmer the best possible start." breadcrumb={[{ label: "Model", href: "/model" }, { label: "Seedlings", href: "/model/seedlings" }]} backgroundImage="/images/cocoa-seedlings-hd.jpeg" />
      <Section background="white" py="xl">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <SectionHeading label="Seedling Program" title="Quality Starts at the Root" description="Our seedling production and distribution program is the foundation of our agricultural model. We operate nurseries that produce premium coffee and cocoa seedlings, carefully selected for disease resistance, high yield potential, and suitability to the Bugwere climate. Each seedling is distributed directly to farming households along with planting instructions and ongoing support from our extension team. With over 5,000 homes receiving coffee seedlings and 3,700 receiving cocoa seedlings, this program has become the gateway to sustainable income for thousands of families." />
              </ScrollReveal>
            </div>
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.1} direction="right">
                <div className="p-6 sm:p-8 rounded-2xl" style={{ backgroundColor: `${SECONDARY}08` }}>
                  <h4 className="text-lg font-bold text-gray-900 mb-5" style={{ fontFamily: "var(--font-raleway)" }}>Key Facts</h4>
                  <div className="space-y-4">
                    {[
                      { label: "Coffee Homes", value: "5,000+" },
                      { label: "Cocoa Homes", value: "3,700+" },
                      { label: "Varieties", value: "Disease-Resistant" },
                      { label: "Distribution", value: "Free to Farmers" },
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
            {["Disease-resistant, high-yield varieties", "Community nurseries managed by trained staff", "Free distribution to registered farming households", "Planting guides and follow-up visits included", "Adapted to Bugwere's specific climate and soil", "Continuous supply with seasonal distribution cycles"].map((item, i) => (
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
              <Button variant="secondary" href="/programs/coffee" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">View Coffee Program</Button>
            </ScrollReveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
