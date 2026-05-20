"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero, { SectionHeading } from "@/components/PageHero";
import { CheckCircle2, ArrowRight } from "lucide-react";

const PRIMARY = "#c94449";
const SECONDARY = "#193b2a";

export default function CocoaPage() {
  return (
    <>
      <PageHero
        title="Cocoa Farming"
        subtitle="Diversifying farmer income with resilient cocoa crops and comprehensive support."
        breadcrumb={[{ label: "Programs", href: "/programs/cocoa" }, { label: "Cocoa", href: "/programs/cocoa" }]}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                label="Cocoa Program"
                title="Building Resilience Through Cocoa"
                description="Our cocoa farming program supports communities to diversify their earnings with cocoa — a resilient, high-value crop that strengthens economic stability. With over 3,700 homes already supplied with cocoa seedlings, we are helping families build a more secure and prosperous future. Cocoa is particularly well-suited to the Bugwere climate and provides an excellent complement to coffee farming, reducing household risk through income diversification."
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/impact-cocoa.png" alt="Cocoa farming" width={1344} height={768} className="w-full" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: "#F4F7FA" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <SectionHeading label="Program Benefits" title="Why Cocoa?" centered />
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "Over 3,700 homes supplied with cocoa seedlings",
              "Cocoa thrives in Bugwere's tropical climate",
              "Diversifies income beyond coffee production",
              "High global demand ensures market stability",
              "Expert training on cocoa cultivation and processing",
              "Guaranteed market access through BCC buying program",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-white rounded-xl shadow-sm">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: PRIMARY }} />
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16" style={{ backgroundColor: SECONDARY }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-raleway)" }}>Start Your Cocoa Farm</h2>
          <p className="text-white/70 mb-8">Join our cocoa expansion program and diversify your income today.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white font-semibold text-sm rounded-xl transition-all hover:shadow-lg" style={{ color: SECONDARY }}>
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
