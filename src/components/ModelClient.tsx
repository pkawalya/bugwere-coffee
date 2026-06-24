"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import JourneyStep from "@/components/ui/JourneyStep";
import { ArrowRight } from "lucide-react";
import { PRIMARY, SECONDARY, FONT_RALEWAY, FONT_OPENSANS, CREAM } from "@/lib/constants";
import { getIcon } from "@/lib/icon-map";
import type { ModelPillar } from "@/lib/data";

const FALLBACK_PILLARS = [
  { icon: "Sprout", title: "Seedling Distribution", description: "Quality seedlings delivered to every farmer, ensuring the best start for their coffee and cocoa farms. We source premium varieties suited to local conditions and provide them at no cost to participating households.", href: "/model/seedlings" },
  { icon: "Microscope", title: "Extension System", description: "Agronomic training and field support from dedicated extension officers who visit farmers regularly. Our team provides hands-on guidance on planting, pruning, pest management, and harvest techniques.", href: "/model/extension" },
  { icon: "ShoppingBag", title: "Market Access", description: "Guaranteed buying programs that ensure farmers can sell their harvest at fair, transparent prices. We eliminate middlemen and connect farmers directly to premium markets.", href: "/model/market" },
  { icon: "CheckCircle2", title: "Quality Assurance", description: "Processing and quality standards that ensure Bugwere coffee and cocoa meet international benchmarks. We invest in post-harvest processing infrastructure and quality testing.", href: "/model/quality" },
  { icon: "PiggyBank", title: "Financial Inclusion", description: "Community SACCO savings groups that provide access to credit and financial safety nets. Farmers can save, borrow, and build financial resilience through collective action.", href: "/model/financial" },
  { icon: "Shield", title: "Farmer Insurance", description: "Rural risk protection that safeguards farmers against crop failure, disease, and climate shocks. Our insurance program provides a safety net that encourages investment in better farming practices.", href: "/model/insurance" },
];

interface ModelClientProps {
  pillars: ModelPillar[];
}

export default function ModelClient({ pillars: dbPillars }: ModelClientProps) {
  const pillars = dbPillars.length > 0 ? dbPillars : FALLBACK_PILLARS;

  return (
    <>
      <PageHero
        title="Our Model"
        subtitle="A complete, end-to-end agricultural support system that transforms rural livelihoods."
        breadcrumb={[{ label: "Our Model", href: "/model" }]}
        backgroundImage="/images/hero-4.jpeg"
      />

      {/* Introduction */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div className="lg:sticky lg:top-32">
                <div className="relative mb-8">
                  <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                    <Image
                      src="/images/hero-4.jpeg"
                      alt="Agricultural model in action"
                      fill
                      className="w-full h-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Gradient overlay — blends image edges */}
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, transparent 30%, rgba(25,59,42,0.1) 100%)' }} />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 70%, rgba(25,59,42,0.06) 100%)' }} />
                  </div>
                  <div
                    className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10"
                    style={{ backgroundColor: `${PRIMARY}12` }}
                  />
                </div>
                <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: PRIMARY, fontFamily: FONT_OPENSANS }}>
                  How It Works
                </p>
                <h2
                  className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-6"
                  style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}
                >
                  End-to-End Empowerment
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Our model is built to empower rural households through a complete, end-to-end agricultural support
                  system. We provide high-quality seedlings, agronomic training, and guaranteed markets, while
                  strengthening families with short-term income crops, livestock projects, and financial inclusion.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  By combining production support, value-chain integration, and rural insurance solutions, we help
                  farmers grow sustainably, reduce risk, and build lasting prosperity. Each pillar of our model
                  reinforces the others, creating a self-sustaining ecosystem of empowerment.
                </p>
                <Link
                  href="/model"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold text-sm rounded-full transition-all hover:shadow-xl hover:scale-[1.03]"
                  style={{ backgroundColor: SECONDARY, fontFamily: FONT_OPENSANS }}
                >
                  Full Model Overview <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Journey Steps */}
            <div>
              {pillars.map((pillar, i) => (
                <ScrollReveal key={pillar.title} delay={i * 0.1}>
                  <JourneyStep
                    step={i + 1}
                    icon={getIcon(pillar.icon)}
                    title={pillar.title}
                    description={pillar.description}
                    isLast={i === pillars.length - 1}
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
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                Explore Each Pillar
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 0.1}>
                <Link
                  href={pillar.href}
                  className="group block p-7 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-3 border-transparent"
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderTopColor = PRIMARY; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderTopColor = "transparent"; }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${SECONDARY}10`, color: SECONDARY }}>
                    {getIcon(pillar.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[--color-brand] transition-colors" style={{ fontFamily: FONT_RALEWAY }}>
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{pillar.description.slice(0, 100)}...</p>
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
