"use client";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PRIMARY, SECONDARY } from "@/lib/constants";

export default function ExtensionPage() {
  return (
    <>
      <PageHero title="Agronomic Extension System" subtitle="Expert training and field support that transforms knowledge into yields." breadcrumb={[{ label: "Model", href: "/model" }, { label: "Extension", href: "/model/extension" }]} backgroundImage="/images/hero-fertilizer-support.png" />
      <Section background="white" py="xl">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <SectionHeading label="Extension Services" title="Knowledge Meets the Field" description="Our agronomic extension system deploys trained field officers directly into farming communities. These officers conduct regular farm visits, lead training sessions on best practices, and provide personalized advice on everything from planting techniques to pest management. The extension system ensures that the knowledge gap — one of the biggest barriers to agricultural productivity in rural Uganda — is systematically closed, farmer by farmer, village by village." />
              </ScrollReveal>
            </div>
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.1} direction="right">
                <div className="p-6 sm:p-8 rounded-2xl" style={{ backgroundColor: `${SECONDARY}08` }}>
                  <h4 className="text-lg font-bold text-gray-900 mb-5" style={{ fontFamily: "var(--font-raleway)" }}>Key Facts</h4>
                  <div className="space-y-4">
                    {[
                      { label: "Field Officers", value: "45+" },
                      { label: "Farm Visits/Month", value: "500+" },
                      { label: "Training Topics", value: "20+" },
                      { label: "Yield Improvement", value: "+35%" },
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
            {["45+ trained field officers deployed across the region", "Regular farm visits and on-site training", "Demonstration plots showcasing best practices", "Seasonal training calendars tailored to local needs", "Digital tools for tracking farmer progress", "Pest and disease surveillance and rapid response"].map((item, i) => (
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
              <Button variant="secondary" href="/programs/agronomy" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">Agronomy Program</Button>
            </ScrollReveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
