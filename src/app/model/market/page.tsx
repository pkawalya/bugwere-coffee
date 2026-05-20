"use client";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PRIMARY } from "@/lib/constants";

export default function MarketPage() {
  return (
    <>
      <PageHero title="Market Access & Guaranteed Buying" subtitle="Ensuring every farmer can sell their harvest at fair, transparent prices." breadcrumb={[{ label: "Model", href: "/model" }, { label: "Market Access", href: "/model/market" }]} />
      <Section background="white" py="xl">
        <Container>
          <SectionHeading label="Market Access" title="Guaranteed Demand, Fair Prices" description="One of the greatest risks for smallholder farmers is market uncertainty — the fear that after investing time and resources into a crop, there will be no buyer at a fair price. Our guaranteed buying program eliminates this risk entirely. BCC commits to purchasing all coffee and cocoa produced by our registered farmers at transparent, competitive prices. This guarantee is the foundation that gives farmers the confidence to invest in their farms and plan for the future." />
          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            {["Guaranteed purchase of all registered farmer output", "Transparent, competitive pricing published in advance", "Collection centers within walking distance of farms", "Immediate payment upon delivery — no delays", "Direct access to premium export markets", "Price premiums for high-quality produce"].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-xl border border-gray-100">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: PRIMARY }} />
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button variant="primary" href="/contact" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
              Partner With Us
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
