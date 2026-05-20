"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero, { SectionHeading } from "@/components/PageHero";
import { CheckCircle2, ArrowRight, Eye, Heart, Users } from "lucide-react";

const SECONDARY = "#193b2a";
const PRIMARY = "#c94449";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Our story, mission, and the driving force behind Bugwere Coffee Company."
        breadcrumb={[{ label: "About", href: "/about" }]}
      />

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                label="Our Story"
                title="Founded on a Simple Question"
                description="Founded in 2023, Bugwere Coffee Company (BCC) was established to respond to a critical challenge: How can rural households with limited land still generate sustainable income? Our answer lies in a holistic, community-driven approach that combines high-value coffee and cocoa production with diversified income streams, expert agronomic support, and guaranteed market access. We believe that every household, regardless of land size, deserves the opportunity to build a prosperous and sustainable future. Since our founding, we have grown from a small initiative into a region-wide movement that has touched thousands of lives across the Bugwere region of Eastern Uganda."
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/hero-1.png" alt="Bugwere community" width={1344} height={768} className="w-full" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20" style={{ backgroundColor: "#F4F7FA" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${PRIMARY}12` }}>
                <Eye className="w-7 h-7" style={{ color: PRIMARY }} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-raleway)" }}>Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg italic">
                &ldquo;To transform Uganda&apos;s rural farming communities into empowered, sustainable producers and exporters of high-quality coffee.&rdquo;
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${SECONDARY}12` }}>
                <Heart className="w-7 h-7" style={{ color: SECONDARY }} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-raleway)" }}>Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower rural households through a complete, end-to-end agricultural support system that provides quality seedlings, expert training, guaranteed markets, and financial inclusion, enabling families to build lasting prosperity regardless of land size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <SectionHeading label="Our Approach" title="How We Work" description="We take a holistic, community-driven approach that addresses the full spectrum of challenges facing rural farming households." centered />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Quality Inputs", desc: "Premium seedlings, fertilizers, and farming supplies distributed directly to households." },
              { title: "Expert Training", desc: "Ongoing agronomic support and extension services from trained field officers." },
              { title: "Market Access", desc: "Guaranteed buying programs that ensure farmers can sell at fair prices." },
              { title: "Financial Inclusion", desc: "SACCO savings groups and insurance programs that protect against risk." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white font-bold text-sm" style={{ backgroundColor: PRIMARY }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-raleway)" }}>{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: SECONDARY }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-raleway)" }}>Meet the Team Behind BCC</h2>
          <p className="text-white/70 text-lg mb-8">Our leadership brings expertise, dedication, and a shared commitment to transforming communities.</p>
          <Link href="/about/team" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white font-semibold text-sm rounded-xl transition-all hover:shadow-lg" style={{ color: SECONDARY }}>
            View Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
