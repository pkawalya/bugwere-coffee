"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import JourneyStep from "@/components/ui/JourneyStep";
import { Sprout, Microscope, ShoppingBag, CheckCircle2, PiggyBank, Shield, ArrowRight } from "lucide-react";
import { PRIMARY, SECONDARY, FONT_RALEWAY, FONT_OPENSANS, CREAM } from "@/lib/constants";

const PILLARS = [
  { icon: <Sprout className="w-5 h-5" />, title: "Seedling Distribution", desc: "Quality seedlings delivered to every farmer, ensuring the best start for their coffee and cocoa farms. We source premium varieties suited to local conditions and provide them at no cost to participating households.", href: "/model/seedlings" },
  { icon: <Microscope className="w-5 h-5" />, title: "Extension System", desc: "Agronomic training and field support from dedicated extension officers who visit farmers regularly. Our team provides hands-on guidance on planting, pruning, pest management, and harvest techniques.", href: "/model/extension" },
  { icon: <ShoppingBag className="w-5 h-5" />, title: "Market Access", desc: "Guaranteed buying programs that ensure farmers can sell their harvest at fair, transparent prices. We eliminate middlemen and connect farmers directly to premium markets.", href: "/model/market" },
  { icon: <CheckCircle2 className="w-5 h-5" />, title: "Quality Assurance", desc: "Processing and quality standards that ensure Bugwere coffee and cocoa meet international benchmarks. We invest in post-harvest processing infrastructure and quality testing.", href: "/model/quality" },
  { icon: <PiggyBank className="w-5 h-5" />, title: "Financial Inclusion", desc: "Community SACCO savings groups that provide access to credit and financial safety nets. Farmers can save, borrow, and build financial resilience through collective action.", href: "/model/financial" },
  { icon: <Shield className="w-5 h-5" />, title: "Farmer Insurance", desc: "Rural risk protection that safeguards farmers against crop failure, disease, and climate shocks. Our insurance program provides a safety net that encourages investment in better farming practices.", href: "/model/insurance" },
];

export default function ModelPage() {
  return (
    <>
      <PageHero
        title="Our Model"
        subtitle="A complete, end-to-end agricultural support system that transforms rural livelihoods."
        breadcrumb={[{ label: "Our Model", href: "/model" }]}
      />

      {/* Introduction */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div className="lg:sticky lg:top-32">
                <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: PRIMARY, fontFamily: FONT_OPENSANS }}>
                  How It Works
                </p>
                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6"
                  style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}
                >
                  End-to-End Empowerment
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Our model is built to empower rural households through a complete, end-to-end agricultural support
                  system. We provide high-quality seedlings, agronomic training, and guaranteed markets, while
                  strengthening families with short-term income crops, livestock projects, and financial inclusion.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  By combining production support, value-chain integration, and rural insurance solutions, we help
                  farmers grow sustainably, reduce risk, and build lasting prosperity. Each pillar of our model
                  reinforces the others, creating a self-sustaining ecosystem of empowerment.
                </p>
              </div>
            </ScrollReveal>

            {/* Journey Steps */}
            <div>
              {PILLARS.map((pillar, i) => (
                <ScrollReveal key={pillar.title} delay={i * 0.1}>
                  <JourneyStep
                    step={i + 1}
                    icon={pillar.icon}
                    title={pillar.title}
                    description={pillar.desc}
                    isLast={i === PILLARS.length - 1}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore Each Pillar */}
      <section className="py-24 sm:py-32" style={{ backgroundColor: CREAM }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: PRIMARY, fontFamily: FONT_OPENSANS }}>
                Deep Dive
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                Explore Each Pillar
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILLARS.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 0.1}>
                <Link
                  href={pillar.href}
                  className="group block p-7 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-3 border-transparent"
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderTopColor = PRIMARY; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderTopColor = "transparent"; }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${SECONDARY}10`, color: SECONDARY }}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[--color-brand] transition-colors" style={{ fontFamily: FONT_RALEWAY }}>
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{pillar.desc.slice(0, 100)}...</p>
                  <span className="text-sm font-semibold inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: PRIMARY }}>
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
