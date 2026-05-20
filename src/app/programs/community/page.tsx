"use client";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import IconBox from "@/components/ui/IconBox";
import { Heart, Users, Home, GraduationCap } from "lucide-react";
import { SECONDARY } from "@/lib/constants";

export default function CommunityPage() {
  return (
    <>
      <PageHero
        title="Community Development"
        subtitle="Building resilient, self-sustaining communities through inclusive development initiatives."
        breadcrumb={[{ label: "Programs", href: "/programs/community" }, { label: "Community", href: "/programs/community" }]}
      />
      <Section background="white" py="xl">
        <Container>
          <SectionHeading
            label="Community Initiatives"
            title="Strengthening the Social Fabric"
            description="Beyond agriculture, Bugwere Coffee Company invests in community development initiatives that create lasting, systemic change. We believe that sustainable agriculture can only thrive in communities that are healthy, educated, and socially cohesive. Our community programs focus on building the infrastructure of opportunity — from savings groups and financial literacy training to women's empowerment and youth engagement programs."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              { icon: <Heart className="w-6 h-6" />, title: "Women's Empowerment", desc: "Ensuring women have equal access to resources, training, and decision-making." },
              { icon: <Users className="w-6 h-6" />, title: "SACCO Savings Groups", desc: "Community savings and credit cooperatives that provide financial safety nets." },
              { icon: <Home className="w-6 h-6" />, title: "Household Resilience", desc: "Diversified income streams that protect families from economic shocks." },
              { icon: <GraduationCap className="w-6 h-6" />, title: "Youth Engagement", desc: "Training the next generation of farmers and agricultural leaders." },
            ].map(({ icon, title, desc }, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                <IconBox icon={icon} color={SECONDARY} variant="filled" />
                <h4 className="font-bold text-gray-900 mb-2 mt-4" style={{ fontFamily: "var(--font-raleway)" }}>{title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
