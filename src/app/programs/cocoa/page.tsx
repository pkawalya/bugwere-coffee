"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import JourneyStep from "@/components/ui/JourneyStep";
import { Sprout, BookOpen, HeartHandshake, ShoppingBasket, ArrowRight, Leaf, TrendingUp, ShieldCheck } from "lucide-react";
import { PRIMARY, SECONDARY, FONT_RALEWAY, FONT_OPENSANS, CREAM } from "@/lib/constants";

const KEY_FACTS = [
  { label: "Homes Reached", value: "3,700+", icon: <HeartHandshake className="w-5 h-5" /> },
  { label: "Growth Rate", value: "+65%", icon: <TrendingUp className="w-5 h-5" /> },
  { label: "Climate Suitability", value: "Excellent", icon: <Sprout className="w-5 h-5" /> },
  { label: "Market Outlook", value: "Strong Demand", icon: <ShieldCheck className="w-5 h-5" /> },
];

const BENEFITS = [
  "Over 3,700 homes supplied with cocoa seedlings",
  "Cocoa thrives in Bugwere's tropical climate",
  "Diversifies income beyond coffee production",
  "High global demand ensures market stability",
  "Expert training on cocoa cultivation and processing",
  "Guaranteed market access through BCC buying program",
];

export default function CocoaPage() {
  return (
    <>
      <PageHero
        title="Cocoa Farming"
        subtitle="Diversifying farmer income with resilient cocoa crops and comprehensive support."
        breadcrumb={[{ label: "Programs", href: "/programs/cocoa" }, { label: "Cocoa", href: "/programs/cocoa" }]}
      />

      {/* ─── Immersive About Section ─── */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] blob-shape opacity-[0.03]" style={{ backgroundColor: "#6B3A2A" }} />
        <div className="absolute bottom-0 right-0 w-72 h-72 blob-shape-2 opacity-[0.02]" style={{ backgroundColor: SECONDARY }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: PRIMARY }} />
                  <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>Cocoa Program</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.05] mb-8" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                  Building Resilience<br />Through Cocoa
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6" style={{ fontFamily: FONT_OPENSANS }}>
                  Our cocoa farming program supports communities to diversify their earnings with cocoa — a resilient, high-value crop that strengthens economic stability. With over 3,700 homes already supplied with cocoa seedlings, we are helping families build a more secure and prosperous future.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: FONT_OPENSANS }}>
                  Cocoa is particularly well-suited to the Bugwere climate and provides an excellent complement to coffee farming, reducing household risk through income diversification. Global demand for cocoa continues to rise, making this an opportune moment for Ugandan farmers to enter the market with quality, sustainably produced beans.
                </p>
              </ScrollReveal>
            </div>

            {/* Key Facts Sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.15} direction="right">
                <div className="p-8 rounded-3xl relative overflow-hidden" style={{ backgroundColor: CREAM }}>
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: "#6B3A2A" }} />
                  <h4 className="text-xl font-bold mb-6" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>Key Facts</h4>
                  <div className="space-y-5">
                    {KEY_FACTS.map((fact) => (
                      <div key={fact.label} className="flex items-center gap-4 pb-4 border-b border-gray-200/60 last:border-0 last:pb-0">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#6B3A2A12", color: "#6B3A2A" }}>
                          {fact.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-500" style={{ fontFamily: FONT_OPENSANS }}>{fact.label}</p>
                          <p className="text-lg font-bold" style={{ color: "#6B3A2A", fontFamily: FONT_RALEWAY }}>{fact.value}</p>
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
      <section className="py-24 sm:py-32 relative overflow-hidden" style={{ backgroundColor: "#6B3A2A" }}>
        <div className="absolute inset-0 bg-dots-pattern" />
        <div className="absolute -top-20 -left-20 w-96 h-96 blob-shape opacity-[0.04] bg-white" />
        <div className="absolute bottom-0 right-0 w-72 h-72 blob-shape-2 opacity-[0.03] bg-white animate-float-slow" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-0.5 rounded-full bg-white/30" />
                <span className="text-sm font-semibold uppercase tracking-wider text-white/60" style={{ fontFamily: FONT_RALEWAY }}>How It Works</span>
                <span className="w-8 h-0.5 rounded-full bg-white/30" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-[1.05]" style={{ fontFamily: FONT_RALEWAY }}>
                The Cocoa Journey
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            <JourneyStep
              step={1}
              icon={<Sprout className="w-5 h-5 text-white" />}
              title="Cocoa Seedlings"
              description="Premium cocoa seedlings selected specifically for the Bugwere climate — high-yielding, disease-resistant varieties that thrive in our tropical conditions. Delivered free to registered households."
              isLast={false}
            />
            <JourneyStep
              step={2}
              icon={<BookOpen className="w-5 h-5 text-white" />}
              title="Planting Guidance"
              description="Step-by-step training on cocoa cultivation, including shade management, spacing, and intercropping techniques that maximize land use while young cocoa trees establish."
              isLast={false}
            />
            <JourneyStep
              step={3}
              icon={<HeartHandshake className="w-5 h-5 text-white" />}
              title="Ongoing Care"
              description="Field officers provide regular support and monitoring, from pruning techniques to fermentation and drying methods that ensure top-quality beans for premium markets."
              isLast={false}
            />
            <JourneyStep
              step={4}
              icon={<ShoppingBasket className="w-5 h-5 text-white" />}
              title="Harvest & Market"
              description="Guaranteed purchase at competitive, transparent prices. Our processing and quality assurance ensures your cocoa meets international standards, earning you the best possible return."
              isLast={true}
            />
          </div>
        </div>
      </section>

      {/* ─── Benefits ─── */}
      <section className="py-24 sm:py-32 relative overflow-hidden" style={{ backgroundColor: CREAM }}>
        <div className="absolute top-1/2 -left-32 w-64 h-64 rounded-full opacity-[0.06]" style={{ backgroundColor: "#6B3A2A" }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: PRIMARY }} />
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>Why Cocoa?</span>
                <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: PRIMARY }} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                Program Benefits
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="group p-6 bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100/60 hover:border-transparent">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#6B3A2A10", color: "#6B3A2A" }}>
                    <Leaf className="w-5 h-5" />
                  </div>
                  <p className="text-gray-700 leading-relaxed" style={{ fontFamily: FONT_OPENSANS }}>{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 sm:py-28 relative overflow-hidden" style={{ backgroundColor: "#6B3A2A" }}>
        <div className="absolute inset-0 bg-dots-pattern" />
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-[0.06] bg-white blob-shape animate-float" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: FONT_RALEWAY }}>
              Start Your<br />Cocoa Farm
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto" style={{ fontFamily: FONT_OPENSANS }}>
              Join our cocoa expansion program and diversify your income today. Cocoa provides the perfect complement to coffee farming, reducing risk and increasing prosperity.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white font-semibold text-sm rounded-full transition-all hover:shadow-xl hover:scale-[1.03]"
              style={{ color: "#6B3A2A", fontFamily: FONT_OPENSANS }}
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
