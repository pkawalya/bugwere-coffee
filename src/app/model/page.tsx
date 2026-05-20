"use client";

import Link from "next/link";
import PageHero, { SectionHeading } from "@/components/PageHero";
import { Sprout, Microscope, ShoppingBag, CheckCircle2, PiggyBank, Shield, ArrowRight } from "lucide-react";

const PRIMARY = "#c94449";
const SECONDARY = "#193b2a";

const PILLARS = [
  { icon: Sprout, title: "Seedling Distribution", desc: "Quality seedlings delivered to every farmer, ensuring the best start for their coffee and cocoa farms.", href: "/model/seedlings" },
  { icon: Microscope, title: "Extension System", desc: "Agronomic training and field support from dedicated extension officers who visit farmers regularly.", href: "/model/extension" },
  { icon: ShoppingBag, title: "Market Access", desc: "Guaranteed buying programs that ensure farmers can sell their harvest at fair, transparent prices.", href: "/model/market" },
  { icon: CheckCircle2, title: "Quality Assurance", desc: "Processing and quality standards that ensure Bugwere coffee and cocoa meet international benchmarks.", href: "/model/quality" },
  { icon: PiggyBank, title: "Financial Inclusion", desc: "Community SACCO savings groups that provide access to credit and financial safety nets.", href: "/model/financial" },
  { icon: Shield, title: "Farmer Insurance", desc: "Rural risk protection that safeguards farmers against crop failure, disease, and climate shocks.", href: "/model/insurance" },
];

export default function ModelPage() {
  return (
    <>
      <PageHero
        title="Our Model"
        subtitle="A complete, end-to-end agricultural support system that transforms rural livelihoods."
        breadcrumb={[{ label: "Our Model", href: "/model" }]}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <SectionHeading
            label="How It Works"
            title="End-to-End Empowerment"
            description="Our model is built to empower rural households through a complete, end-to-end agricultural support system. We provide high-quality seedlings, agronomic training, and guaranteed markets, while strengthening families with short-term income crops, livestock projects, and financial inclusion through our community SACCO. By combining production support, value-chain integration, and rural insurance solutions, we help farmers grow sustainably, reduce risk, and build lasting prosperity."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {PILLARS.map((pillar, i) => (
              <Link key={pillar.title} href={pillar.href} className="group p-7 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-[--color-brand]/20 transition-all">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: `${SECONDARY}10` }}>
                  <pillar.icon className="w-7 h-7" style={{ color: SECONDARY }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[--color-brand] transition-colors" style={{ fontFamily: "var(--font-raleway)" }}>{pillar.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: PRIMARY }}>
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
