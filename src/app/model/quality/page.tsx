"use client";

import PageHero, { SectionHeading } from "@/components/PageHero";
import { CheckCircle2 } from "lucide-react";

const PRIMARY = "#c94449";

export default function QualityPage() {
  return (
    <>
      <PageHero title="Processing & Quality Assurance" subtitle="Maintaining the highest standards from farm to export." breadcrumb={[{ label: "Model", href: "/model" }, { label: "Quality", href: "/model/quality" }]} />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <SectionHeading label="Quality Standards" title="Excellence at Every Stage" description="Quality is not an afterthought — it is built into every step of our value chain. From the selection of seedlings to post-harvest processing and export preparation, we maintain rigorous quality standards that ensure Bugwere coffee and cocoa meet international benchmarks. Our processing centers are equipped with modern equipment, and our quality assurance team conducts regular inspections and training to ensure consistency across all operations." />
          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            {["Modern processing facilities with quality control", "Post-harvest handling training for all farmers", "Regular quality inspections and grading", "Certification support for export markets", "Traceability from farm to final product", "Continuous improvement through data analysis"].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-xl border border-gray-100">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: PRIMARY }} />
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
