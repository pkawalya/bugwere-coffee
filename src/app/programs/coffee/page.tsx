"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import CTABand from "@/components/ui/CTABand";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PRIMARY } from "@/lib/constants";

const HIGHLIGHTS = [
  "Over 5,000 homes supplied with premium coffee seedlings",
  "Guaranteed market access through our buying program",
  "Expert agronomic training and ongoing field support",
  "Processing and quality assurance at collection centers",
  "Financial inclusion through community SACCO savings groups",
  "Rural farmer insurance protecting against crop failure",
];

export default function CoffeePage() {
  return (
    <>
      <PageHero
        title="Sustainable Coffee Production"
        subtitle="Empowering households through high-value coffee farming with guaranteed support from seedling to market."
        breadcrumb={[{ label: "Programs", href: "/programs/coffee" }, { label: "Coffee", href: "/programs/coffee" }]}
      />

      <Section background="white" py="xl">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                label="Coffee Program"
                title="From Seedling to Cup"
                description="Our sustainable coffee production program is the cornerstone of Bugwere Coffee Company. We provide everything a farming household needs to establish and maintain a productive coffee farm — from premium seedlings and fertilizers to expert training and guaranteed market access. Coffee is a high-value, long-term crop that provides steady income for families year after year, making it the ideal foundation for rural economic transformation."
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/impact-coffee.png" alt="Coffee seedlings" width={1344} height={768} className="w-full" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </Container>
      </Section>

      <Section background="light" py="xl">
        <Container>
          <SectionHeading label="Program Highlights" title="What We Provide" centered />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HIGHLIGHTS.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-white rounded-xl shadow-sm">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: PRIMARY }} />
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand
        title="Ready to Start Your Coffee Farm?"
        subtitle="Join thousands of households already benefiting from our coffee production program."
        primaryAction={{ label: "Get Started", href: "/contact" }}
        secondaryAction={{ label: "Our Model", href: "/model" }}
      />
    </>
  );
}
