"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import JourneyStep from "@/components/ui/JourneyStep";
import { Search, CalendarDays, HandMetal, Radio, ArrowRight, Microscope, BookOpen, TrendingUp, ShieldCheck } from "lucide-react";
import { PRIMARY, SECONDARY, FONT_RALEWAY, FONT_OPENSANS, CREAM } from "@/lib/constants";

const KEY_FACTS = [
  { label: "Field Officers", value: "45+", icon: <BookOpen className="w-5 h-5" /> },
  { label: "Training Topics", value: "20+", icon: <Microscope className="w-5 h-5" /> },
  { label: "Farm Visits/Month", value: "500+", icon: <CalendarDays className="w-5 h-5" /> },
  { label: "Yield Improvement", value: "+35%", icon: <TrendingUp className="w-5 h-5" /> },
];

const SERVICES = [
  "On-farm training and demonstration plots",
  "Soil testing and fertilizer recommendations",
  "Pest and disease identification and management",
  "Pruning and crop management techniques",
  "Post-harvest handling and storage best practices",
  "Climate adaptation and resilient farming methods",
];

export default function AgronomyPage() {
  return (
    <>
      <PageHero
        title="Agronomy & Farmer Support"
        subtitle="Expert training, extension services, and ongoing field support for every farmer."
        breadcrumb={[{ label: "Programs", href: "/programs/agronomy" }, { label: "Agronomy", href: "/programs/agronomy" }]}
        backgroundImage="/images/hero-3.png"
      />

      {/* ─── Immersive About Section ─── */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] blob-shape opacity-[0.03]" style={{ backgroundColor: SECONDARY }} />
        <div className="absolute bottom-0 right-0 w-72 h-72 blob-shape-2 opacity-[0.02]" style={{ backgroundColor: PRIMARY }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: PRIMARY }} />
                  <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>Agronomy Services</span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-[1.05] mb-8" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                  Knowledge That<br />Transforms Yields
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6" style={{ fontFamily: FONT_OPENSANS }}>
                  Our agronomic extension system is the backbone of our success. Trained field officers work directly with farming households, providing hands-on training in best practices for coffee and cocoa cultivation, soil management, pest control, and post-harvest handling.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: FONT_OPENSANS }}>
                  This personalized, ongoing support ensures that every farmer has the knowledge and skills to maximize their yields and produce high-quality crops that command premium prices in the market. We close the knowledge gap — one of the biggest barriers to agricultural productivity — farmer by farmer, village by village.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-2">
              <ScrollReveal delay={0.15} direction="right">
                <div className="p-8 rounded-3xl relative overflow-hidden" style={{ backgroundColor: CREAM }}>
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: SECONDARY }} />
                  <h4 className="text-xl font-bold mb-6" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>Key Facts</h4>
                  <div className="space-y-5">
                    {KEY_FACTS.map((fact) => (
                      <div key={fact.label} className="flex items-center gap-4 pb-4 border-b border-gray-200/60 last:border-0 last:pb-0">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${SECONDARY}10`, color: SECONDARY }}>
                          {fact.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-500" style={{ fontFamily: FONT_OPENSANS }}>{fact.label}</p>
                          <p className="text-lg font-bold" style={{ color: SECONDARY, fontFamily: FONT_RALEWAY }}>{fact.value}</p>
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
                The Agronomy Process
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            <JourneyStep
              step={1}
              icon={<Search className="w-5 h-5 text-white" />}
              title="Farm Assessment"
              description="Field officers visit your farm to evaluate soil conditions, existing crops, pest pressures, and overall health. We develop a personalized improvement plan tailored to your specific situation."
              isLast={false}
            />
            <JourneyStep
              step={2}
              icon={<CalendarDays className="w-5 h-5 text-white" />}
              title="Training Plan"
              description="A customized training calendar is created for your crops and seasonal needs. From planting to harvest, every critical stage is covered with targeted, practical education."
              isLast={false}
            />
            <JourneyStep
              step={3}
              icon={<HandMetal className="w-5 h-5 text-white" />}
              title="Hands-on Sessions"
              description="Regular on-farm demonstrations and practice sessions bring knowledge to life. Farmers learn by doing — pruning, composting, pest identification, and more, right in their own fields."
              isLast={false}
            />
            <JourneyStep
              step={4}
              icon={<Radio className="w-5 h-5 text-white" />}
              title="Continuous Support"
              description="Ongoing visits, digital progress tracking, and a direct line to expert advice. Our extension system means you are never alone in facing agricultural challenges — we are always a visit or call away."
              isLast={true}
            />
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="py-24 sm:py-32 relative overflow-hidden" style={{ backgroundColor: CREAM }}>
        <div className="absolute top-1/3 -left-32 w-64 h-64 rounded-full opacity-[0.06]" style={{ backgroundColor: SECONDARY }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: PRIMARY }} />
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>What We Offer</span>
                <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: PRIMARY }} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold leading-tight" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                Our Services
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="group p-6 bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100/60 hover:border-transparent">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${SECONDARY}10`, color: SECONDARY }}>
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <p className="text-gray-700 leading-relaxed" style={{ fontFamily: FONT_OPENSANS }}>{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <ScrollReveal>
              <Link
                href="/model/extension"
                className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm rounded-full transition-all hover:shadow-lg hover:scale-[1.03]"
                style={{ backgroundColor: SECONDARY, color: "white", fontFamily: FONT_OPENSANS }}
              >
                Extension System Details <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
