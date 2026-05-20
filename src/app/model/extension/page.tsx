"use client";

import PageHero, { SectionHeading } from "@/components/PageHero";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const PRIMARY = "#c94449";
const SECONDARY = "#193b2a";

export default function ExtensionPage() {
  return (
    <>
      <PageHero title="Agronomic Extension System" subtitle="Expert training and field support that transforms knowledge into yields." breadcrumb={[{ label: "Model", href: "/model" }, { label: "Extension", href: "/model/extension" }]} />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <SectionHeading label="Extension Services" title="Knowledge Meets the Field" description="Our agronomic extension system deploys trained field officers directly into farming communities. These officers conduct regular farm visits, lead training sessions on best practices, and provide personalized advice on everything from planting techniques to pest management. The extension system ensures that the knowledge gap — one of the biggest barriers to agricultural productivity in rural Uganda — is systematically closed, farmer by farmer, village by village." />
          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            {["45+ trained field officers deployed across the region", "Regular farm visits and on-site training", "Demonstration plots showcasing best practices", "Seasonal training calendars tailored to local needs", "Digital tools for tracking farmer progress", "Pest and disease surveillance and rapid response"].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-xl border border-gray-100">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: PRIMARY }} />
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10"><Link href="/programs/agronomy" className="inline-flex items-center gap-2 px-7 py-3 text-white font-semibold text-sm rounded-xl" style={{ backgroundColor: SECONDARY }}>Agronomy Program <ArrowRight className="w-4 h-4" /></Link></div>
        </div>
      </section>
    </>
  );
}
