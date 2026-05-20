"use client";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PRIMARY } from "@/lib/constants";

export default function LivestockPage() {
  return (
    <>
      <PageHero
        title="Livestock Support"
        subtitle="Piggery and poultry projects providing steady, diversified income for rural households."
        breadcrumb={[{ label: "Programs", href: "/programs/livestock" }, { label: "Livestock", href: "/programs/livestock" }]}
      />
      <Section background="white" py="xl">
        <Container>
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
            <Button variant="secondary" href="/contact" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
              Learn How to Join
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
