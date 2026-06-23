"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight, Eye, Heart, Lightbulb, Target, Handshake, Globe } from "lucide-react";
import { PRIMARY, SECONDARY, FONT_RALEWAY, FONT_OPENSANS, CREAM } from "@/lib/constants";

const VALUES = [
  { icon: <Heart className="w-6 h-6" />, title: "Community First", desc: "Every decision we make centers on the well-being and prosperity of the farming communities we serve." },
  { icon: <Lightbulb className="w-6 h-6" />, title: "Innovation", desc: "We embrace new approaches and technologies that can amplify our impact and transform rural agriculture." },
  { icon: <Target className="w-6 h-6" />, title: "Accountability", desc: "We measure our success by the real, tangible improvements in farmers' lives, not just numbers on a page." },
  { icon: <Handshake className="w-6 h-6" />, title: "Partnership", desc: "We believe lasting change comes from collaboration — with communities, governments, and organizations." },
  { icon: <Globe className="w-6 h-6" />, title: "Sustainability", desc: "Our model is designed to create self-sustaining ecosystems that outlast any single program or intervention." },
];

const TIMELINE = [
  { year: "2023", title: "The Beginning", desc: "Bugwere Coffee Company was founded to address the critical challenge of sustainable income for rural households with limited land in Eastern Uganda." },
  { year: "2023", title: "First Seedlings", desc: "Launched our coffee seedling distribution program, reaching the first 1,000 homes in the Bugwere region with high-quality coffee plantlets." },
  { year: "2024", title: "Cocoa Expansion", desc: "Expanded into cocoa farming, diversifying income streams for farming families and strengthening economic resilience across the community." },
  { year: "2024", title: "7,000+ Homes", desc: "Our fertilizer distribution program scaled rapidly, reaching over 7,000 households and dramatically improving crop yields across the region." },
  { year: "2025", title: "Growing Impact", desc: "Today, BCC touches over 15,000 lives through integrated programs spanning coffee, cocoa, livestock, agronomy, and community development." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Our story, mission, and the driving force behind Bugwere Coffee Company."
        breadcrumb={[{ label: "About", href: "/about" }]}
        backgroundImage="/images/hero-uganda-coffee.png"
      />

      {/* Story Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: PRIMARY, fontFamily: FONT_OPENSANS }}>
                  Our Story
                </p>
                <h2
                  className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-6"
                  style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}
                >
                  Founded on a Simple Question
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Founded in 2023, Bugwere Coffee Company (BCC) was established to respond to a critical challenge:
                  How can rural households with limited land still generate sustainable income?
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Our answer lies in a holistic, community-driven approach that combines high-value coffee and cocoa
                  production with diversified income streams, expert agronomic support, and guaranteed market access.
                  We believe that every household, regardless of land size, deserves the opportunity to build a
                  prosperous and sustainable future.
                </p>
                <Link
                  href="/about/team"
                  className="inline-flex items-center gap-2 px-7 py-3 text-white font-semibold text-sm rounded-full transition-all hover:shadow-lg hover:scale-[1.02]"
                  style={{ backgroundColor: SECONDARY, fontFamily: FONT_OPENSANS }}
                >
                  Meet Our Team <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/images/hero-uganda-coffee.png" alt="Bugwere community" width={1344} height={896} className="w-full object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                <div
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 hidden lg:block"
                >
                  <p className="text-3xl font-bold" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>5,000+</p>
                  <p className="text-sm text-gray-500">Families empowered</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission — Large typographic statements */}
      <section id="vision" className="py-24 sm:py-32" style={{ backgroundColor: CREAM }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="relative rounded-3xl p-10 sm:p-12 overflow-hidden" style={{ backgroundColor: SECONDARY }}>
                <div className="absolute -top-10 -right-10 w-40 h-40 blob-shape opacity-[0.06] bg-white" />
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${PRIMARY}20` }}>
                  <Eye className="w-7 h-7" style={{ color: PRIMARY }} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4" style={{ fontFamily: FONT_RALEWAY }}>Our Vision</h3>
                <p className="text-white/70 text-lg leading-relaxed italic">
                  &ldquo;To transform Uganda&apos;s rural farming communities into empowered, sustainable producers and exporters of high-quality coffee.&rdquo;
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="bg-white rounded-3xl p-10 sm:p-12 shadow-sm">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${SECONDARY}10` }}>
                  <Heart className="w-7 h-7" style={{ color: SECONDARY }} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: FONT_RALEWAY }}>Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To empower rural households through a complete, end-to-end agricultural support system that provides
                  quality seedlings, expert training, guaranteed markets, and financial inclusion, enabling families
                  to build lasting prosperity regardless of land size.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: PRIMARY, fontFamily: FONT_OPENSANS }}>
                What We Stand For
              </p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                Our Values
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl hover:shadow-md transition-all group">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${PRIMARY}12`, color: PRIMARY }}
                  >
                    {v.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm" style={{ fontFamily: FONT_RALEWAY }}>{v.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 sm:py-32" style={{ backgroundColor: CREAM }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: PRIMARY, fontFamily: FONT_OPENSANS }}>
                Our Journey
              </p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                Milestones
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-2xl mx-auto">
            {TIMELINE.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`flex gap-6 ${i < TIMELINE.length - 1 ? "pb-10" : ""}`}>
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg"
                      style={{ backgroundColor: PRIMARY, fontFamily: FONT_RALEWAY, boxShadow: `0 4px 15px ${PRIMARY}30` }}
                    >
                      {item.year.slice(2)}
                    </div>
                    {i < TIMELINE.length - 1 && (
                      <div className="w-0.5 flex-1 mt-2 min-h-[20px]" style={{ background: `linear-gradient(to bottom, ${PRIMARY}, ${PRIMARY}15)` }} />
                    )}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: PRIMARY, fontFamily: FONT_OPENSANS }}>{item.year}</p>
                    <h4 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: FONT_RALEWAY }}>{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Board Link Section ─── */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] blob-shape opacity-[0.03]" style={{ backgroundColor: PRIMARY }} />
        <div className="absolute bottom-0 right-0 w-72 h-72 blob-shape-2 opacity-[0.02]" style={{ backgroundColor: SECONDARY }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden" style={{ backgroundColor: SECONDARY }}>
              <div className="absolute -top-10 -right-10 w-40 h-40 blob-shape opacity-[0.06] bg-white" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 blob-shape-2 opacity-[0.04] bg-white" />
              <div className="relative grid md:grid-cols-2 gap-8 items-center p-10 sm:p-14">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: PRIMARY, fontFamily: FONT_OPENSANS }}>
                    Governance & Oversight
                  </p>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: FONT_RALEWAY, color: "white" }}>
                    Board of Directors
                  </h2>
                  <p className="text-white/60 text-base leading-relaxed mb-8">
                    Our board brings together distinguished professionals from marketing, media, development, and technology — united by a commitment to BCC&apos;s mission and the communities we serve.
                  </p>
                  <Link
                    href="/about/board"
                    className="inline-flex items-center gap-2 px-7 py-3 bg-white font-semibold text-sm rounded-full transition-all hover:shadow-lg hover:scale-[1.02]"
                    style={{ color: SECONDARY, fontFamily: FONT_OPENSANS }}
                  >
                    View Board Members <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { initials: "PK", label: "Director", c: PRIMARY },
                    { initials: "MR", label: "Director", c: SECONDARY },
                    { initials: "AH", label: "Director", c: SECONDARY },
                    { initials: "DT", label: "Director", c: PRIMARY },
                  ].map((m, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: m.c, fontFamily: FONT_RALEWAY }}
                      >
                        {m.initials}
                      </div>
                      <p className="text-white/40 text-[10px] font-medium" style={{ fontFamily: FONT_OPENSANS }}>{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: SECONDARY }}>
        <div className="absolute -top-20 -left-20 w-80 h-80 blob-shape opacity-[0.04] bg-white" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" style={{ fontFamily: FONT_RALEWAY }}>
            Meet the Team Behind BCC
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Our leadership brings expertise, dedication, and a shared commitment to transforming communities.
          </p>
          <Link
            href="/about/team"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white font-semibold text-sm rounded-full transition-all hover:shadow-xl hover:scale-[1.03]"
            style={{ color: SECONDARY, fontFamily: FONT_OPENSANS }}
          >
            View Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
