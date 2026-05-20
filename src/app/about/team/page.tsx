"use client";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import IconBox from "@/components/ui/IconBox";
import { Linkedin, Mail } from "lucide-react";
import { PRIMARY, SECONDARY } from "@/lib/constants";

const TEAM = [
  { name: "Executive Director", role: "Strategic Leadership & Vision", bio: "Leading BCC's mission to transform rural livelihoods through sustainable agriculture and community empowerment across the Bugwere region." },
  { name: "Head of Programs", role: "Agricultural Programs & Implementation", bio: "Overseeing all agricultural programs including coffee, cocoa, livestock, and agronomic extension services." },
  { name: "Finance & Administration", role: "Financial Management & SACCO", bio: "Managing BCC's financial operations, community SACCO, and ensuring transparent resource allocation." },
  { name: "Field Operations Lead", role: "Farmer Training & Extension", bio: "Coordinating field teams that deliver training, seedlings, and ongoing support to thousands of farming households." },
  { name: "Partnerships Coordinator", role: "Strategic Partnerships & Growth", bio: "Building and maintaining partnerships with government, development agencies, and research organizations." },
  { name: "Community Engagement", role: "Community Development & Outreach", bio: "Ensuring community voices are heard and development initiatives align with local needs and priorities." },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="Dedicated professionals driving transformation in Eastern Uganda."
        breadcrumb={[
          { label: "About", href: "/about" },
          { label: "Our Team", href: "/about/team" },
        ]}
      />

      <Section background="white" py="xl">
        <Container>
          <SectionHeading
            label="Guiding Vision. Inspiring Impact."
            title="Leadership"
            description="Our leadership team brings expertise, dedication, and a shared commitment to transforming communities through sustainable agriculture and financial empowerment. Together, they guide our programs, support farmers, and ensure impactful results across the Bugwere region."
            centered
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <div key={i} className="group bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:border-[--color-brand]/20 transition-all">
                <IconBox
                  icon={<span className="text-2xl font-bold" style={{ fontFamily: "var(--font-raleway)" }}>{member.name.split(" ").map(w => w[0]).join("")}</span>}
                  color={i % 2 === 0 ? SECONDARY : PRIMARY}
                  size="lg"
                  variant="filled"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-1 mt-5" style={{ fontFamily: "var(--font-raleway)" }}>{member.name}</h3>
                <p className="text-sm font-medium mb-3" style={{ color: PRIMARY }}>{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex gap-2">
                  <a href="#" className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-[--color-brand] hover:text-white transition-all">
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-[--color-brand] hover:text-white transition-all">
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
