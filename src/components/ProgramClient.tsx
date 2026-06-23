"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import JourneyStep from "@/components/ui/JourneyStep";
import { ArrowRight } from "lucide-react";
import { PRIMARY, SECONDARY, FONT_RALEWAY, FONT_OPENSANS, CREAM } from "@/lib/constants";
import { getIcon } from "@/lib/icon-map";
import type { Program } from "@/lib/data";

interface ProgramClientProps {
  program: Program;
}

// Hardcoded journey steps per program slug (not in DB yet)
const PROGRAM_JOURNEYS: Record<string, { title: string; description: string; icon: string }[]> = {
  coffee: [
    { title: "Seedling Distribution", description: "Premium coffee seedlings — carefully selected for disease resistance and yield potential — are delivered directly to your doorstep, free of charge. Each household receives enough seedlings to establish a commercially viable plot.", icon: "Sprout" },
    { title: "Planting & Training", description: "Hands-on training from our field officers covers optimal planting techniques, spacing, shade management, and soil preparation. We ensure every farmer knows exactly how to give their seedlings the best possible start.", icon: "BookOpen" },
    { title: "Ongoing Support", description: "Regular farm visits and agronomic guidance continue throughout the growing cycle. From pruning to pest management, our team is there every step of the way, ensuring healthy trees and maximum productivity.", icon: "HeartHandshake" },
    { title: "Harvest & Market", description: "When your coffee is ready, our guaranteed buying program ensures you can sell at fair, transparent prices. No middlemen, no uncertainty — just a reliable market for your hard-earned harvest.", icon: "ShoppingBag" },
  ],
  cocoa: [
    { title: "Cocoa Seedlings", description: "Premium cocoa seedlings selected specifically for the Bugwere climate — high-yielding, disease-resistant varieties that thrive in our tropical conditions. Delivered free to registered households.", icon: "Sprout" },
    { title: "Planting Guidance", description: "Step-by-step training on cocoa cultivation, including shade management, spacing, and intercropping techniques that maximize land use while young cocoa trees establish.", icon: "BookOpen" },
    { title: "Ongoing Care", description: "Field officers provide regular support and monitoring, from pruning techniques to fermentation and drying methods that ensure top-quality beans for premium markets.", icon: "HeartHandshake" },
    { title: "Harvest & Market", description: "Guaranteed purchase at competitive, transparent prices. Our processing and quality assurance ensures your cocoa meets international standards, earning you the best possible return.", icon: "ShoppingBag" },
  ],
  livestock: [
    { title: "Enrollment", description: "Register for the livestock support program. Our team assesses your household's needs, existing resources, and suitability for piggery or poultry projects, creating a personalized plan.", icon: "ClipboardList" },
    { title: "Training", description: "Learn modern piggery and poultry management from our experienced extension officers. Topics include housing construction, feeding regimes, breeding, and disease prevention.", icon: "BookOpen" },
    { title: "Setup", description: "Receive starter animals and housing support to get your project off the ground. We provide the initial investment so you can focus on learning and growing your enterprise.", icon: "Home" },
    { title: "Income Generation", description: "Start earning within months, not years. Pigs reach market weight in 6–8 months, while poultry begins producing eggs within weeks — providing cash flow while coffee and cocoa mature.", icon: "Zap" },
  ],
  agronomy: [
    { title: "Soil Assessment", description: "Our agronomists begin with a comprehensive soil analysis and farm assessment, identifying the specific needs and opportunities of each household's land.", icon: "Microscope" },
    { title: "Customized Training", description: "Tailored agronomic training programs covering planting techniques, pest management, organic farming methods, and climate-smart agriculture practices suited to local conditions.", icon: "BookOpen" },
    { title: "Field Support", description: "Regular visits from dedicated extension officers who provide hands-on guidance, monitor crop health, and help troubleshoot issues as they arise throughout the growing season.", icon: "HeartHandshake" },
    { title: "Quality Harvest", description: "Support through harvest and post-harvest processing to ensure the highest quality output, ready for premium market access through our guaranteed buying program.", icon: "CheckCircle2" },
  ],
  community: [
    { title: "Community Mapping", description: "We start by understanding the unique needs, resources, and aspirations of each community through participatory assessments and stakeholder engagement.", icon: "Users" },
    { title: "Program Design", description: "Together with community leaders, we design tailored initiatives that address local priorities — from financial literacy and SACCO formation to youth empowerment and women's groups.", icon: "BookOpen" },
    { title: "Implementation", description: "Hands-on support for program rollout, including training facilitators, providing materials, and building local capacity to sustain initiatives independently.", icon: "HeartHandshake" },
    { title: "Sustainable Impact", description: "We measure outcomes, share results, and gradually transition ownership to the community — ensuring that development gains continue long after direct intervention ends.", icon: "CheckCircle2" },
  ],
};

// Hardcoded "Did You Know" sections per program
const PROGRAM_FACTS: Record<string, { icon: string; stat: string; label: string }[]> = {
  coffee: [
    { icon: "Droplets", stat: "3 Varieties", label: "Disease-resistant Arabica and Robusta varieties selected for Bugwere's unique microclimate" },
    { icon: "Sun", stat: "3–5 Years", label: "From planting to first harvest — then productive for 30+ years of steady income" },
    { icon: "ShoppingBag", stat: "Premium Price", label: "Our processing and quality assurance ensures beans meet export-grade standards" },
  ],
  cocoa: [
    { icon: "Sun", stat: "4–5 Years", label: "From planting to first harvest — then productive for decades of reliable income" },
    { icon: "Leaf", stat: "Shade-Grown", label: "Cocoa thrives under shade, allowing intercropping with other food crops" },
    { icon: "TrendingUp", stat: "Rising Demand", label: "Global demand for cocoa continues to grow, ensuring strong market prices" },
  ],
  livestock: [
    { icon: "Clock", stat: "6–8 Months", label: "From starter pig to market weight — one of the fastest returns in agriculture" },
    { icon: "Bird", stat: "Daily Income", label: "Poultry provides eggs and meat for both household consumption and market sale" },
    { icon: "Shield", stat: "Risk Reduction", label: "Diversified income protects families from coffee and cocoa price fluctuations" },
  ],
  agronomy: [
    { icon: "Microscope", stat: "Expert-Led", label: "All training delivered by qualified agronomists with years of field experience" },
    { icon: "CheckCircle2", stat: "Yield +40%", label: "Farmers adopting improved practices report significant yield increases" },
    { icon: "Leaf", stat: "Climate-Smart", label: "Techniques designed to build resilience against changing weather patterns" },
  ],
  community: [
    { icon: "Users", stat: "Inclusive", label: "Programs designed to empower women, youth, and the most vulnerable households" },
    { icon: "PiggyBank", stat: "3,500+ Members", label: "SACCO membership continues to grow, providing financial services to rural families" },
    { icon: "Heart", stat: "Self-Sustaining", label: "Community-led initiatives that continue delivering impact beyond direct support" },
  ],
};

// CTA data per program
const PROGRAM_CTA: Record<string, { title: string; subtitle: string }> = {
  coffee: { title: "Ready to Start Your Coffee Farm?", subtitle: "Join thousands of households already benefiting from our coffee production program. From seedling to market, we are with you every step." },
  cocoa: { title: "Start Your Cocoa Farm", subtitle: "Join our cocoa expansion program and diversify your income today. Cocoa provides the perfect complement to coffee farming, reducing risk and increasing prosperity." },
  livestock: { title: "Start Earning In Months", subtitle: "While your coffee and cocoa grow, livestock provides the income you need today. Join our program and build a complete financial future." },
  agronomy: { title: "Transform Your Farm", subtitle: "Expert agronomic support can dramatically increase your yields and income. Join our extension program and learn from the best." },
  community: { title: "Strengthen Your Community", subtitle: "Together, we can build stronger, more resilient communities. Join our community development programs and be part of the change." },
};

export default function ProgramClient({ program }: ProgramClientProps) {
  const slug = program.slug;
  const accentColor = program.accent_color || PRIMARY;
  const journey = PROGRAM_JOURNEYS[slug] || PROGRAM_JOURNEYS.coffee;
  const facts = PROGRAM_FACTS[slug] || PROGRAM_FACTS.coffee;
  const cta = PROGRAM_CTA[slug] || PROGRAM_CTA.coffee;

  return (
    <>
      <PageHero
        title={program.title}
        subtitle={program.subtitle}
        breadcrumb={[{ label: "Programs", href: `/programs/${slug}` }, { label: program.title.split(" ")[0], href: `/programs/${slug}` }]}
        backgroundImage={program.hero_image}
      />

      {/* ─── Immersive About Section ─── */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-shape opacity-[0.03]" style={{ backgroundColor: accentColor }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 blob-shape-2 opacity-[0.02]" style={{ backgroundColor: SECONDARY }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: accentColor }} />
                  <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: accentColor, fontFamily: FONT_RALEWAY }}>{program.title}</span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-[1.05] mb-8" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                  {program.subtitle}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: FONT_OPENSANS }}>
                  {program.description}
                </p>
              </ScrollReveal>
            </div>

            {/* Key Facts Sidebar */}
            {program.key_facts && program.key_facts.length > 0 && (
              <div className="lg:col-span-2">
                <ScrollReveal delay={0.15} direction="right">
                  <div className="p-8 rounded-3xl relative overflow-hidden" style={{ backgroundColor: CREAM }}>
                    <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: accentColor }} />
                    <h4 className="text-xl font-bold mb-6" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                      Key Facts
                    </h4>
                    <div className="space-y-5">
                      {program.key_facts.map((fact) => (
                        <div key={fact.label} className="flex items-center gap-4 pb-4 border-b border-gray-200/60 last:border-0 last:pb-0">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${accentColor}12`, color: accentColor }}>
                            {getIcon(fact.icon)}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-500" style={{ fontFamily: FONT_OPENSANS }}>{fact.label}</p>
                            <p className="text-lg font-bold" style={{ color: accentColor, fontFamily: FONT_RALEWAY }}>{fact.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── How It Works — Journey Steps ─── */}
      <section className="py-24 sm:py-32 relative overflow-hidden" style={{ backgroundColor: accentColor }}>
        <div className="absolute inset-0 bg-dots-pattern" />
        <div className="absolute -top-20 -left-20 w-96 h-96 blob-shape opacity-[0.04] bg-white" />
        <div className="absolute bottom-0 -left-10 w-72 h-72 blob-shape-2 opacity-[0.03] bg-white animate-float-slow" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-0.5 rounded-full bg-white/30" />
                <span className="text-sm font-semibold uppercase tracking-wider text-white/60" style={{ fontFamily: FONT_RALEWAY }}>How It Works</span>
                <span className="w-8 h-0.5 rounded-full bg-white/30" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-[1.05]" style={{ fontFamily: FONT_RALEWAY }}>
                The {program.title.split(" ")[0]} Journey
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            {journey.map((step, i) => (
              <JourneyStep
                key={step.title}
                step={i + 1}
                icon={getIcon(step.icon, "w-5 h-5 text-white")}
                title={step.title}
                description={step.description}
                isLast={i === journey.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Program Highlights ─── */}
      {program.highlights && program.highlights.length > 0 && (
        <section className="py-24 sm:py-32 relative overflow-hidden" style={{ backgroundColor: CREAM }}>
          <div className="absolute top-1/2 -right-32 w-64 h-64 rounded-full opacity-[0.06]" style={{ backgroundColor: accentColor }} />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: accentColor }} />
                  <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: accentColor, fontFamily: FONT_RALEWAY }}>What We Provide</span>
                  <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: accentColor }} />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold leading-tight" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                  Program Highlights
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {program.highlights.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="group p-6 bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100/60 hover:border-transparent">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${accentColor}10`, color: accentColor }}>
                      {getIcon("Coffee")}
                    </div>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: FONT_OPENSANS }}>{item}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Did You Know ─── */}
      {facts.length > 0 && (
        <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-96 h-96 blob-shape opacity-[0.03]" style={{ backgroundColor: SECONDARY }} />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-8">
              {facts.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="text-center p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: `${SECONDARY}08`, color: SECONDARY }}>
                      {getIcon(item.icon, "w-8 h-8")}
                    </div>
                    <p className="text-2xl font-bold mb-2" style={{ color: accentColor, fontFamily: FONT_RALEWAY }}>{item.stat}</p>
                    <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: FONT_OPENSANS }}>{item.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA ─── */}
      <section className="py-20 sm:py-28 relative overflow-hidden" style={{ backgroundColor: accentColor }}>
        <div className="absolute inset-0 bg-dots-pattern" />
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-[0.06] bg-white blob-shape animate-float" />
        <div className="absolute bottom-0 -left-10 w-72 h-72 blob-shape-2 opacity-[0.04] bg-white animate-float-slow" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: FONT_RALEWAY }}>
              {cta.title}
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto" style={{ fontFamily: FONT_OPENSANS }}>
              {cta.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white font-semibold text-sm rounded-full transition-all hover:shadow-xl hover:scale-[1.03]"
                style={{ color: accentColor, fontFamily: FONT_OPENSANS }}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/model"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold text-sm rounded-full transition-all hover:bg-white/10"
                style={{ fontFamily: FONT_OPENSANS }}
              >
                Our Model
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
