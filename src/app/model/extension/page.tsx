"use client";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PRIMARY } from "@/lib/constants";

export default function ExtensionPage() {
  return (
    <>
      <PageHero title="Agronomic Extension System" subtitle="Expert training and field support that transforms knowledge into yields." breadcrumb={[{ label: "Model", href: "/model" }, { label: "Extension", href: "/model/extension" }]} />
      <Section background="white" py="xl">
        <Container>
          <SectionHeading label="Extension Services" title="Knowledge Meets the Field" description="Our agronomic extension system deploys trained field officers directly into farming communities. These officers conduct regular farm visits, lead training sessions on best practices, and provide personalized advice on everything from planting techniques to pest management. The extension system ensures that the knowledge gap — one of the biggest barriers to agricultural productivity in rural Uganda — is systematically closed, farmer by farmer, village by village." />
          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            {["45+ trained field officers deployed across the region", "Regular farm visits and on-site training", "Demonstration plots showcasing best practices", "Seasonal training calendars tailored to local needs", "Digital tools for tracking farmer progress", "Pest and disease surveillance and rapid response"].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-xl border border-gray-100">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: PRIMARY }} />
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button variant="secondary" href="/programs/agronomy" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
              Agronomy Program
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
