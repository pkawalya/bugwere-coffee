"use client";

import PageHero, { SectionHeading } from "@/components/PageHero";
import { Heart, Users, Home, GraduationCap } from "lucide-react";

const PRIMARY = "#c94449";
const SECONDARY = "#193b2a";

export default function CommunityPage() {
  return (
    <>
      <PageHero
        title="Community Development"
        subtitle="Building resilient, self-sustaining communities through inclusive development initiatives."
        breadcrumb={[{ label: "Programs", href: "/programs/community" }, { label: "Community", href: "/programs/community" }]}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <SectionHeading
            label="Community Initiatives"
            title="Strengthening the Social Fabric"
            description="Beyond agriculture, Bugwere Coffee Company invests in community development initiatives that create lasting, systemic change. We believe that sustainable agriculture can only thrive in communities that are healthy, educated, and socially cohesive. Our community programs focus on building the infrastructure of opportunity — from savings groups and financial literacy training to women's empowerment and youth engagement programs."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              { icon: Heart, title: "Women's Empowerment", desc: "Ensuring women have equal access to resources, training, and decision-making." },
              { icon: Users, title: "SACCO Savings Groups", desc: "Community savings and credit cooperatives that provide financial safety nets." },
              { icon: Home, title: "Household Resilience", desc: "Diversified income streams that protect families from economic shocks." },
              { icon: GraduationCap, title: "Youth Engagement", desc: "Training the next generation of farmers and agricultural leaders." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${SECONDARY}10` }}>
                  <Icon className="w-6 h-6" style={{ color: SECONDARY }} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-raleway)" }}>{title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
