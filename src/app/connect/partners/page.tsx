"use client";

import PageHero, { SectionHeading } from "@/components/PageHero";
import { Handshake, Users, Leaf, Microscope, PiggyBank, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

const PRIMARY = "#c94449";
const SECONDARY = "#193b2a";

const PARTNER_TYPES = [
  { icon: Building2, title: "Local Governments", desc: "Policy support, land access, and community mobilization through district and sub-county partnerships." },
  { icon: Users, title: "Development Agencies", desc: "Funding, technical expertise, and program design collaboration with international and local NGOs." },
  { icon: PiggyBank, title: "Financial Institutions", desc: "Banking services, credit facilities, and insurance products tailored for rural farming communities." },
  { icon: Microscope, title: "Research Organizations", desc: "Agricultural research, variety development, and evidence-based program improvement." },
  { icon: Leaf, title: "Community Organizations", desc: "Grassroots mobilization, local knowledge, and community trust that amplifies our impact." },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero title="Partners & Collaborators" subtitle="Building transformative change through strong, purpose-driven partnerships." breadcrumb={[{ label: "Connect", href: "/connect/partners" }, { label: "Partners", href: "/connect/partners" }]} />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <SectionHeading label="Working Together" title="Our Partner Ecosystem" description="Bugwere Coffee Company thrives through strong partnerships with organizations that share our commitment to empowering rural communities. We believe that lasting change requires collaboration across sectors — government, private sector, civil society, and communities working together toward a common goal." centered />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNER_TYPES.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="p-7 rounded-2xl border border-gray-100 hover:shadow-md hover:border-[--color-brand]/20 transition-all">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: `${SECONDARY}10` }}>
                  <Icon className="w-7 h-7" style={{ color: SECONDARY }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-raleway)" }}>{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a partner CTA */}
      <section className="py-16" style={{ backgroundColor: SECONDARY }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Handshake className="w-12 h-12 mx-auto mb-4" style={{ color: PRIMARY }} />
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-raleway)" }}>Become a Partner</h2>
          <p className="text-white/70 text-lg mb-8">Whether you represent a government agency, development organization, financial institution, or community group, we would love to explore how we can work together.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white font-semibold text-sm rounded-xl transition-all hover:shadow-lg" style={{ color: SECONDARY }}>
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
