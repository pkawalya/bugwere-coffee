"use client";

import PageHero, { SectionHeading } from "@/components/PageHero";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const PRIMARY = "#c94449";
const SECONDARY = "#193b2a";

export default function FinancialPage() {
  return (
    <>
      <PageHero title="Financial Inclusion (SACCO)" subtitle="Community savings and credit cooperatives that empower financial independence." breadcrumb={[{ label: "Model", href: "/model" }, { label: "Financial Inclusion", href: "/model/financial" }]} />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <SectionHeading label="SACCO" title="Savings, Credit, Community" description="Financial exclusion is one of the biggest barriers to rural development. Without access to banking, credit, or savings mechanisms, farming households are vulnerable to economic shocks and unable to invest in their future. Our community SACCO (Savings and Credit Cooperative Organization) addresses this directly by providing a trusted, member-owned financial institution that offers savings accounts, affordable loans, and financial literacy training. With over 3,500 active members, our SACCO is transforming how rural families manage and grow their money." />
          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            {["3,500+ active SACCO members and growing", "Savings accounts with competitive interest rates", "Affordable loans for farm inputs and emergencies", "Financial literacy and business training", "Member-owned and democratically governed", "Mobile banking for remote communities"].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-xl border border-gray-100">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: PRIMARY }} />
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10"><Link href="/programs/community" className="inline-flex items-center gap-2 px-7 py-3 text-white font-semibold text-sm rounded-xl" style={{ backgroundColor: SECONDARY }}>Community Programs <ArrowRight className="w-4 h-4" /></Link></div>
        </div>
      </section>
    </>
  );
}
