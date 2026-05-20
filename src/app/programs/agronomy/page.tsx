"use client";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PRIMARY } from "@/lib/constants";

export default function AgronomyPage() {
  return (
    <>
      <PageHero
        title="Agronomy & Farmer Support"
        subtitle="Expert training, extension services, and ongoing field support for every farmer."
        breadcrumb={[{ label: "Programs", href: "/programs/agronomy" }, { label: "Agronomy", href: "/programs/agronomy" }]}
      />
      <Section background="white" py="xl">
        <Container>
          <SectionHeading
            label="Agronomy Services"
            title="Knowledge That Transforms Yields"
            description="Our agronomic extension system is the backbone of our success. Trained field officers work directly with farming households, providing hands-on training in best practices for coffee and cocoa cultivation, soil management, pest control, and post-harvest handling. This personalized, ongoing support ensures that every farmer has the knowledge and skills to maximize their yields and produce high-quality crops that command premium prices in the market."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {[
              "On-farm training and demonstration plots",
              "Soil testing and fertilizer recommendations",
              "Pest and disease identification and management",
              "Pruning and crop management techniques",
              "Post-harvest handling and storage best practices",
              "Climate adaptation and resilient farming methods",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-xl border border-gray-100">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: PRIMARY }} />
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button variant="secondary" href="/model/extension" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
              Extension System Details
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
