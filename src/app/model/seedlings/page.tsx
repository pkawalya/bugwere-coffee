"use client";

import PageHero, { SectionHeading } from "@/components/PageHero";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const PRIMARY = "#c94449";
const SECONDARY = "#193b2a";

export default function SeedlingsPage() {
  return (
    <>
      <PageHero title="Seedling Production & Distribution" subtitle="Premium seedlings that give every farmer the best possible start." breadcrumb={[{ label: "Model", href: "/model" }, { label: "Seedlings", href: "/model/seedlings" }]} />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <SectionHeading label="Seedling Program" title="Quality Starts at the Root" description="Our seedling production and distribution program is the foundation of our agricultural model. We operate nurseries that produce premium coffee and cocoa seedlings, carefully selected for disease resistance, high yield potential, and suitability to the Bugwere climate. Each seedling is distributed directly to farming households along with planting instructions and ongoing support from our extension team. With over 5,000 homes receiving coffee seedlings and 3,700 receiving cocoa seedlings, this program has become the gateway to sustainable income for thousands of families." />
          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            {["Disease-resistant, high-yield varieties", "Community nurseries managed by trained staff", "Free distribution to registered farming households", "Planting guides and follow-up visits included", "Adapted to Bugwere's specific climate and soil", "Continuous supply with seasonal distribution cycles"].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-xl border border-gray-100">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: PRIMARY }} />
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/programs/coffee" className="inline-flex items-center gap-2 px-7 py-3 text-white font-semibold text-sm rounded-xl" style={{ backgroundColor: SECONDARY }}>
              View Coffee Program <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
