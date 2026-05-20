"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Building2, Users, PiggyBank, Microscope, Leaf, Handshake, ArrowRight, CheckCircle2, Globe, HeartHandshake, BarChart3 } from "lucide-react";
import { PRIMARY, SECONDARY, FONT_RALEWAY, FONT_OPENSANS, CREAM } from "@/lib/constants";

const PARTNER_TYPES = [
  {
    icon: <Building2 className="w-7 h-7" />,
    title: "Local Governments",
    desc: "Policy support, land access, and community mobilization through district and sub-county partnerships. Government endorsement ensures our programs align with local development priorities.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Development Agencies",
    desc: "Funding, technical expertise, and program design collaboration with international and local NGOs. These partnerships bring global best practices to our local context.",
  },
  {
    icon: <PiggyBank className="w-7 h-7" />,
    title: "Financial Institutions",
    desc: "Banking services, credit facilities, and insurance products tailored for rural farming communities. Financial partners make our SACCO and insurance programs possible.",
  },
  {
    icon: <Microscope className="w-7 h-7" />,
    title: "Research Organizations",
    desc: "Agricultural research, variety development, and evidence-based program improvement. Research partnerships ensure our practices are grounded in science and data.",
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    title: "Community Organizations",
    desc: "Grassroots mobilization, local knowledge, and community trust that amplifies our impact. These are the organizations that connect us directly to the people we serve.",
  },
];

const PARTNER_BENEFITS = [
  "Direct impact on thousands of farming households",
  "Access to a proven, scalable agricultural model",
  "Shared learning and knowledge exchange",
  "Visibility and recognition in program communications",
  "Regular impact reports and field visits",
  "Collaboration on research and innovation",
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        title="Partners & Collaborators"
        subtitle="Building transformative change through strong, purpose-driven partnerships."
        breadcrumb={[{ label: "Connect", href: "/connect/partners" }, { label: "Partners", href: "/connect/partners" }]}
      />

      {/* ─── Partner Ecosystem ─── */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-shape opacity-[0.03]" style={{ backgroundColor: SECONDARY }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 blob-shape-2 opacity-[0.02]" style={{ backgroundColor: PRIMARY }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: PRIMARY }} />
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>Working Together</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.05] mb-6" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                Our Partner<br />Ecosystem
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: FONT_OPENSANS }}>
                Bugwere Coffee Company thrives through strong partnerships with organizations that share our commitment to empowering rural communities. We believe that lasting change requires collaboration across sectors — government, private sector, civil society, and communities working together toward a common goal.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PARTNER_TYPES.map(({ icon, title, desc }, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group p-8 rounded-3xl border border-gray-100/60 hover:shadow-xl hover:border-transparent transition-all duration-300 h-full">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${SECONDARY}10`, color: SECONDARY }}
                  >
                    {icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: FONT_OPENSANS }}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Partner Benefits ─── */}
      <section className="py-24 sm:py-32 relative overflow-hidden" style={{ backgroundColor: CREAM }}>
        <div className="absolute top-1/3 -right-32 w-64 h-64 rounded-full opacity-[0.06]" style={{ backgroundColor: PRIMARY }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: PRIMARY }} />
                  <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>Why Partner</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold leading-[1.05] mb-6" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                  Benefits of<br />Collaboration
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8" style={{ fontFamily: FONT_OPENSANS }}>
                  Partnership with BCC means joining a proven ecosystem of rural transformation. Our partners gain access to deep community connections, measurable impact, and the satisfaction of creating real, lasting change.
                </p>
              </ScrollReveal>
            </div>
            <div>
              <div className="space-y-4">
                {PARTNER_BENEFITS.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.06}>
                    <div className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-gray-100/60 hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${PRIMARY}10`, color: PRIMARY }}>
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <p className="text-gray-700" style={{ fontFamily: FONT_OPENSANS }}>{item}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-96 h-96 blob-shape opacity-[0.03]" style={{ backgroundColor: SECONDARY }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="w-8 h-8" />, stat: "5+ Sectors", label: "Government, development, finance, research, and community partners" },
              { icon: <HeartHandshake className="w-8 h-8" />, stat: "12+ Partners", label: "Active collaborations across Eastern Uganda and beyond" },
              { icon: <BarChart3 className="w-8 h-8" />, stat: "8,200+ Homes", label: "Reached through our collective partnership efforts" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: `${SECONDARY}08`, color: SECONDARY }}>
                    {item.icon}
                  </div>
                  <p className="text-2xl font-bold mb-2" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>{item.stat}</p>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: FONT_OPENSANS }}>{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Become a Partner CTA ─── */}
      <section className="py-20 sm:py-28 relative overflow-hidden" style={{ backgroundColor: SECONDARY }}>
        <div className="absolute inset-0 bg-dots-pattern" />
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-[0.06] bg-white blob-shape animate-float" />
        <div className="absolute bottom-0 -left-10 w-72 h-72 blob-shape-2 opacity-[0.04] bg-white animate-float-slow" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: `${PRIMARY}20`, color: PRIMARY }}>
              <Handshake className="w-10 h-10" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: FONT_RALEWAY }}>
              Become a Partner
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto" style={{ fontFamily: FONT_OPENSANS }}>
              Whether you represent a government agency, development organization, financial institution, or community group, we would love to explore how we can work together toward transformative impact.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white font-semibold text-sm rounded-full transition-all hover:shadow-xl hover:scale-[1.03]"
              style={{ color: SECONDARY, fontFamily: FONT_OPENSANS }}
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
