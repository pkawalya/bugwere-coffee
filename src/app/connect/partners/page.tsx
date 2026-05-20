"use client";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import IconBox from "@/components/ui/IconBox";
import CTABand from "@/components/ui/CTABand";
import { Handshake, Users, Leaf, Microscope, PiggyBank, Building2, ArrowRight } from "lucide-react";
import { SECONDARY } from "@/lib/constants";

const PARTNER_TYPES = [
  { icon: <Building2 className="w-7 h-7" />, title: "Local Governments", desc: "Policy support, land access, and community mobilization through district and sub-county partnerships." },
  { icon: <Users className="w-7 h-7" />, title: "Development Agencies", desc: "Funding, technical expertise, and program design collaboration with international and local NGOs." },
  { icon: <PiggyBank className="w-7 h-7" />, title: "Financial Institutions", desc: "Banking services, credit facilities, and insurance products tailored for rural farming communities." },
  { icon: <Microscope className="w-7 h-7" />, title: "Research Organizations", desc: "Agricultural research, variety development, and evidence-based program improvement." },
  { icon: <Leaf className="w-7 h-7" />, title: "Community Organizations", desc: "Grassroots mobilization, local knowledge, and community trust that amplifies our impact." },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero title="Partners & Collaborators" subtitle="Building transformative change through strong, purpose-driven partnerships." breadcrumb={[{ label: "Connect", href: "/connect/partners" }, { label: "Partners", href: "/connect/partners" }]} />
      <Section background="white" py="xl">
        <Container>
          <SectionHeading label="Working Together" title="Our Partner Ecosystem" description="Bugwere Coffee Company thrives through strong partnerships with organizations that share our commitment to empowering rural communities. We believe that lasting change requires collaboration across sectors — government, private sector, civil society, and communities working together toward a common goal." centered />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNER_TYPES.map(({ icon, title, desc }, i) => (
              <div key={i} className="p-7 rounded-2xl border border-gray-100 hover:shadow-md hover:border-[--color-brand]/20 transition-all">
                <IconBox icon={icon} color={SECONDARY} size="lg" variant="filled" />
                <h3 className="text-lg font-bold text-gray-900 mb-2 mt-5" style={{ fontFamily: "var(--font-raleway)" }}>{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Become a partner CTA */}
      <section className="relative overflow-hidden" style={{ backgroundColor: SECONDARY }}>
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="relative max-w-4xl mx-auto px-6 text-center py-16">
          <IconBox icon={<Handshake className="w-12 h-12" />} color="#c94449" size="lg" variant="filled" />
          <h2 className="text-3xl font-bold text-white mb-4 mt-4" style={{ fontFamily: "var(--font-raleway)" }}>Become a Partner</h2>
          <p className="text-white/70 text-lg mb-8">Whether you represent a government agency, development organization, financial institution, or community group, we would love to explore how we can work together.</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white font-semibold text-sm rounded-xl transition-all hover:shadow-lg hover:scale-[1.02]" style={{ color: SECONDARY }}>
            Contact Us <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
