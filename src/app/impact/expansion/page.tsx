"use client";

import PageHero, { SectionHeading } from "@/components/PageHero";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const PRIMARY = "#c94449";
const SECONDARY = "#193b2a";

export default function ExpansionPage() {
  return (
    <>
      <PageHero
        title="Regional Expansion"
        subtitle="Growing our reach across Eastern Uganda and beyond."
        breadcrumb={[{ label: "Impact", href: "/impact" }, { label: "Expansion", href: "/impact/expansion" }]}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <SectionHeading
            label="Growing Our Reach"
            title="From Bugwere to Beyond"
            description="What began as a focused initiative in the Bugwere region is now expanding across Eastern Uganda. Our proven model of end-to-end agricultural support is scalable and replicable, allowing us to bring the same transformative impact to new communities. We are strategically expanding into neighboring districts, building new partnerships, and adapting our programs to local contexts while maintaining the quality and integrity that defines our work."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { district: "Bugwere Region", status: "Active", households: "8,200+", parishes: "28" },
              { district: "Budaka District", status: "Expanding", households: "1,200+", parishes: "6" },
              { district: "Pallisa District", status: "New", households: "500+", parishes: "3" },
              { district: "Kibuku District", status: "Planning", households: "—", parishes: "—" },
              { district: "Butaleja District", status: "Planning", households: "—", parishes: "—" },
              { district: "Tororo District", status: "Future", households: "—", parishes: "—" },
            ].map((region, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4" style={{ color: PRIMARY }} />
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    region.status === "Active" ? "bg-green-100 text-green-700" :
                    region.status === "Expanding" ? "bg-blue-100 text-blue-700" :
                    region.status === "New" ? "bg-amber-100 text-amber-700" :
                    "bg-gray-100 text-gray-600"
                  }`}>
                    {region.status}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-raleway)" }}>{region.district}</h4>
                <div className="flex gap-6 text-sm text-gray-500">
                  <span>Households: <strong className="text-gray-800">{region.households}</strong></span>
                  <span>Parishes: <strong className="text-gray-800">{region.parishes}</strong></span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 text-white font-semibold text-sm rounded-xl" style={{ backgroundColor: PRIMARY }}>
              Partner With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
