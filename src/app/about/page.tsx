"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import IconBox from "@/components/ui/IconBox";
import ValueCard from "@/components/ui/ValueCard";
import CTABand from "@/components/ui/CTABand";
import { CheckCircle2, ArrowRight, Eye, Heart } from "lucide-react";
import { PRIMARY, SECONDARY } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Our story, mission, and the driving force behind Bugwere Coffee Company."
        breadcrumb={[{ label: "About", href: "/about" }]}
      />

      {/* Story */}
      <Section background="white" py="xl">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                label="Our Story"
                title="Founded on a Simple Question"
                description="Founded in 2023, Bugwere Coffee Company (BCC) was established to respond to a critical challenge: How can rural households with limited land still generate sustainable income? Our answer lies in a holistic, community-driven approach that combines high-value coffee and cocoa production with diversified income streams, expert agronomic support, and guaranteed market access. We believe that every household, regardless of land size, deserves the opportunity to build a prosperous and sustainable future. Since our founding, we have grown from a small initiative into a region-wide movement that has touched thousands of lives across the Bugwere region of Eastern Uganda."
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/hero-1.png" alt="Bugwere community" width={1344} height={768} className="w-full" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Vision & Mission */}
      <Section background="light" py="xl">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <IconBox icon={<Eye className="w-7 h-7" />} color={PRIMARY} size="lg" variant="filled" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6" style={{ fontFamily: "var(--font-raleway)" }}>Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg italic">
                &ldquo;To transform Uganda&apos;s rural farming communities into empowered, sustainable producers and exporters of high-quality coffee.&rdquo;
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <IconBox icon={<Heart className="w-7 h-7" />} color={SECONDARY} size="lg" variant="filled" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6" style={{ fontFamily: "var(--font-raleway)" }}>Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower rural households through a complete, end-to-end agricultural support system that provides quality seedlings, expert training, guaranteed markets, and financial inclusion, enabling families to build lasting prosperity regardless of land size.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Approach */}
      <Section background="white" py="xl">
        <Container>
          <SectionHeading label="Our Approach" title="How We Work" description="We take a holistic, community-driven approach that addresses the full spectrum of challenges facing rural farming households." centered />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Quality Inputs", desc: "Premium seedlings, fertilizers, and farming supplies distributed directly to households." },
              { title: "Expert Training", desc: "Ongoing agronomic support and extension services from trained field officers." },
              { title: "Market Access", desc: "Guaranteed buying programs that ensure farmers can sell at fair prices." },
              { title: "Financial Inclusion", desc: "SACCO savings groups and insurance programs that protect against risk." },
            ].map((item, i) => (
              <ValueCard
                key={i}
                number={String(i + 1).padStart(2, "0")}
                title={item.title}
                description={item.desc}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTABand
        title="Meet the Team Behind BCC"
        subtitle="Our leadership brings expertise, dedication, and a shared commitment to transforming communities."
        primaryAction={{ label: "View Our Team", href: "/about/team" }}
      />
    </>
  );
}
