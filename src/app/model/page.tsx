"use client";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import PillarCard from "@/components/ui/PillarCard";
import { Sprout, Microscope, ShoppingBag, CheckCircle2, PiggyBank, Shield, ArrowRight } from "lucide-react";
import { PRIMARY, SECONDARY } from "@/lib/constants";

const PILLARS = [
  { icon: <Sprout className="w-6 h-6" />, title: "Seedling Distribution", desc: "Quality seedlings delivered to every farmer, ensuring the best start for their coffee and cocoa farms.", href: "/model/seedlings" },
  { icon: <Microscope className="w-6 h-6" />, title: "Extension System", desc: "Agronomic training and field support from dedicated extension officers who visit farmers regularly.", href: "/model/extension" },
  { icon: <ShoppingBag className="w-6 h-6" />, title: "Market Access", desc: "Guaranteed buying programs that ensure farmers can sell their harvest at fair, transparent prices.", href: "/model/market" },
  { icon: <CheckCircle2 className="w-6 h-6" />, title: "Quality Assurance", desc: "Processing and quality standards that ensure Bugwere coffee and cocoa meet international benchmarks.", href: "/model/quality" },
  { icon: <PiggyBank className="w-6 h-6" />, title: "Financial Inclusion", desc: "Community SACCO savings groups that provide access to credit and financial safety nets.", href: "/model/financial" },
  { icon: <Shield className="w-6 h-6" />, title: "Farmer Insurance", desc: "Rural risk protection that safeguards farmers against crop failure, disease, and climate shocks.", href: "/model/insurance" },
];

export default function ModelPage() {
  return (
    <>
      <PageHero
        title="Our Model"
        subtitle="A complete, end-to-end agricultural support system that transforms rural livelihoods."
        breadcrumb={[{ label: "Our Model", href: "/model" }]}
      />
      <Section background="white" py="xl">
        <Container>
          <SectionHeading
            label="How It Works"
            title="End-to-End Empowerment"
            description="Our model is built to empower rural households through a complete, end-to-end agricultural support system. We provide high-quality seedlings, agronomic training, and guaranteed markets, while strengthening families with short-term income crops, livestock projects, and financial inclusion through our community SACCO. By combining production support, value-chain integration, and rural insurance solutions, we help farmers grow sustainably, reduce risk, and build lasting prosperity."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {PILLARS.map((pillar) => (
              <PillarCard
                key={pillar.title}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.desc}
                href={pillar.href}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
