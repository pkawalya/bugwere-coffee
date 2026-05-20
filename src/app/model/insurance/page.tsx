"use client";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";
import { PRIMARY } from "@/lib/constants";

export default function InsurancePage() {
  return (
    <>
      <PageHero title="Rural Farmer Insurance Program" subtitle="Protecting farming families against crop failure, disease, and climate shocks." breadcrumb={[{ label: "Model", href: "/model" }, { label: "Insurance", href: "/model/insurance" }]} />
      <Section background="white" py="xl">
        <Container>
          <SectionHeading label="Insurance" title="Farming Without Fear" description="Agriculture is inherently risky — droughts, floods, pests, and diseases can destroy a season's work in days. For smallholder farmers with no safety net, a single crop failure can be devastating. Our Rural Farmer Insurance Program provides a critical layer of protection that helps farmers manage risk and invest with confidence. Designed specifically for the realities of rural Ugandan agriculture, our insurance products are affordable, accessible, and responsive to the needs of farming households." />
          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            {["Affordable premiums designed for smallholder budgets", "Coverage for crop failure due to drought, flood, or disease", "Quick claims processing with local assessment teams", "Bundled with SACCO membership for convenience", "Group policies that reduce individual costs", "Education on risk management alongside insurance coverage"].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-xl border border-gray-100">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: PRIMARY }} />
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
