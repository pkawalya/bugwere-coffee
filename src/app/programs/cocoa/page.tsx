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

export default function CocoaPage() {
  return (
    <>
      <PageHero
        title="Cocoa Farming"
        subtitle="Diversifying farmer income with resilient cocoa crops and comprehensive support."
        breadcrumb={[{ label: "Programs", href: "/programs/cocoa" }, { label: "Cocoa", href: "/programs/cocoa" }]}
      />
      <Section background="white" py="xl">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                label="Cocoa Program"
                title="Building Resilience Through Cocoa"
                description="Our cocoa farming program supports communities to diversify their earnings with cocoa — a resilient, high-value crop that strengthens economic stability. With over 3,700 homes already supplied with cocoa seedlings, we are helping families build a more secure and prosperous future. Cocoa is particularly well-suited to the Bugwere climate and provides an excellent complement to coffee farming, reducing household risk through income diversification."
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/impact-cocoa.png" alt="Cocoa farming" width={1344} height={768} className="w-full" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </Container>
      </Section>
      <Section background="light" py="xl">
        <Container>
          <SectionHeading label="Program Benefits" title="Why Cocoa?" centered />
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "Over 3,700 homes supplied with cocoa seedlings",
              "Cocoa thrives in Bugwere's tropical climate",
              "Diversifies income beyond coffee production",
              "High global demand ensures market stability",
              "Expert training on cocoa cultivation and processing",
              "Guaranteed market access through BCC buying program",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-white rounded-xl shadow-sm">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: PRIMARY }} />
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <CTABand
        title="Start Your Cocoa Farm"
        subtitle="Join our cocoa expansion program and diversify your income today."
        primaryAction={{ label: "Get Started", href: "/contact" }}
      />
    </>
  );
}
