"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import JourneyStep from "@/components/ui/JourneyStep";
import { Sprout, BookOpen, HeartHandshake, ShoppingBasket, ArrowRight, Coffee, Sun, Droplets } from "lucide-react";
import { PRIMARY, SECONDARY, FONT_RALEWAY, FONT_OPENSANS, CREAM } from "@/lib/constants";

const KEY_FACTS = [
  { label: "Homes Reached", value: "5,000+", icon: <HeartHandshake className="w-5 h-5" /> },
  { label: "Seedling Varieties", value: "3 Premium", icon: <Sprout className="w-5 h-5" /> },
  { label: "Field Officers", value: "45+", icon: <BookOpen className="w-5 h-5" /> },
  { label: "Yield Increase", value: "+35%", icon: <Sun className="w-5 h-5" /> },
];

const HIGHLIGHTS = [
  "Over 5,000 homes supplied with premium coffee seedlings",
  "Guaranteed market access through our buying program",
  "Expert agronomic training and ongoing field support",
  "Processing and quality assurance at collection centers",
  "Financial inclusion through community SACCO savings groups",
  "Rural farmer insurance protecting against crop failure",
];

export default function CoffeePage() {
  return (
    <>
      <PageHero
        title="Sustainable Coffee Production"
        subtitle="Empowering households through high-value coffee farming with guaranteed support from seedling to market."
        breadcrumb={[{ label: "Programs", href: "/programs/coffee" }, { label: "Coffee", href: "/programs/coffee" }]}
      />

      {/* ─── Immersive About Section ─── */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-shape opacity-[0.03]" style={{ backgroundColor: PRIMARY }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 blob-shape-2 opacity-[0.02]" style={{ backgroundColor: SECONDARY }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: PRIMARY }} />
                  <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>Coffee Program</span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-[1.05] mb-8" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                  From Seedling<br />to Cup
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6" style={{ fontFamily: FONT_OPENSANS }}>
                  Our sustainable coffee production program is the cornerstone of Bugwere Coffee Company. We provide everything a farming household needs to establish and maintain a productive coffee farm — from premium seedlings and fertilizers to expert training and guaranteed market access.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: FONT_OPENSANS }}>
                  Coffee is a high-value, long-term crop that provides steady income for families year after year, making it the ideal foundation for rural economic transformation. In the rich volcanic soils of Bugwere, our Arabica and Robusta varieties flourish under the careful guidance of our extension team, producing beans that command premium prices on international markets.
                </p>
              </ScrollReveal>
            </div>

            {/* Key Facts Sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.15} direction="right">
                <div className="p-8 rounded-3xl relative overflow-hidden" style={{ backgroundColor: CREAM }}>
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: PRIMARY }} />
                  <h4 className="text-xl font-bold mb-6" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                    Key Facts
                  </h4>
                  <div className="space-y-5">
                    {KEY_FACTS.map((fact) => (
                      <div key={fact.label} className="flex items-center gap-4 pb-4 border-b border-gray-200/60 last:border-0 last:pb-0">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${PRIMARY}12`, color: PRIMARY }}>
                          {fact.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-500" style={{ fontFamily: FONT_OPENSANS }}>{fact.label}</p>
                          <p className="text-lg font-bold" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>{fact.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It Works — Journey Steps ─── */}
      <section className="py-24 sm:py-32 relative overflow-hidden" style={{ backgroundColor: SECONDARY }}>
        <div className="absolute inset-0 bg-dots-pattern" />
        <div className="absolute -top-20 -right-20 w-96 h-96 blob-shape opacity-[0.04] bg-white" />
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
                The Coffee Journey
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            <JourneyStep
              step={1}
              icon={<Sprout className="w-5 h-5 text-white" />}
              title="Seedling Distribution"
              description="Premium coffee seedlings — carefully selected for disease resistance and yield potential — are delivered directly to your doorstep, free of charge. Each household receives enough seedlings to establish a commercially viable plot."
              isLast={false}
            />
            <JourneyStep
              step={2}
              icon={<BookOpen className="w-5 h-5 text-white" />}
              title="Planting & Training"
              description="Hands-on training from our field officers covers optimal planting techniques, spacing, shade management, and soil preparation. We ensure every farmer knows exactly how to give their seedlings the best possible start."
              isLast={false}
            />
            <JourneyStep
              step={3}
              icon={<HeartHandshake className="w-5 h-5 text-white" />}
              title="Ongoing Support"
              description="Regular farm visits and agronomic guidance continue throughout the growing cycle. From pruning to pest management, our team is there every step of the way, ensuring healthy trees and maximum productivity."
              isLast={false}
            />
            <JourneyStep
              step={4}
              icon={<ShoppingBasket className="w-5 h-5 text-white" />}
              title="Harvest & Market"
              description="When your coffee is ready, our guaranteed buying program ensures you can sell at fair, transparent prices. No middlemen, no uncertainty — just a reliable market for your hard-earned harvest."
              isLast={true}
            />
          </div>
        </div>
      </section>

      {/* ─── Program Highlights ─── */}
      <section className="py-24 sm:py-32 relative overflow-hidden" style={{ backgroundColor: CREAM }}>
        <div className="absolute top-1/2 -right-32 w-64 h-64 rounded-full opacity-[0.06]" style={{ backgroundColor: PRIMARY }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: PRIMARY }} />
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>What We Provide</span>
                <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: PRIMARY }} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold leading-tight" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                Program Highlights
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HIGHLIGHTS.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="group p-6 bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100/60 hover:border-transparent">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${PRIMARY}10`, color: PRIMARY }}>
                    <Coffee className="w-5 h-5" />
                  </div>
                  <p className="text-gray-700 leading-relaxed" style={{ fontFamily: FONT_OPENSANS }}>{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Did You Know ─── */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-96 h-96 blob-shape opacity-[0.03]" style={{ backgroundColor: SECONDARY }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: <Droplets className="w-8 h-8" />, stat: "3 Varieties", label: "Disease-resistant Arabica and Robusta varieties selected for Bugwere's unique microclimate" },
              { icon: <Sun className="w-8 h-8" />, stat: "3–5 Years", label: "From planting to first harvest — then productive for 30+ years of steady income" },
              { icon: <ShoppingBasket className="w-8 h-8" />, stat: "Premium Price", label: "Our processing and quality assurance ensures beans meet export-grade standards" },
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

      {/* ─── CTA ─── */}
      <section className="py-20 sm:py-28 relative overflow-hidden" style={{ backgroundColor: PRIMARY }}>
        <div className="absolute inset-0 bg-dots-pattern" />
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-[0.06] bg-white blob-shape animate-float" />
        <div className="absolute bottom-0 -left-10 w-72 h-72 blob-shape-2 opacity-[0.04] bg-white animate-float-slow" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: FONT_RALEWAY }}>
              Ready to Start Your<br />Coffee Farm?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto" style={{ fontFamily: FONT_OPENSANS }}>
              Join thousands of households already benefiting from our coffee production program. From seedling to market, we are with you every step.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white font-semibold text-sm rounded-full transition-all hover:shadow-xl hover:scale-[1.03]"
                style={{ color: SECONDARY, fontFamily: FONT_OPENSANS }}
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
