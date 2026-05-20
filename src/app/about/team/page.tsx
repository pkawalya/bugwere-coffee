"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
import { PRIMARY, SECONDARY, FONT_RALEWAY, FONT_OPENSANS, CREAM } from "@/lib/constants";

const TEAM = [
  { name: "Executive Director", role: "Strategic Leadership & Vision", bio: "Leading BCC's mission to transform rural livelihoods through sustainable agriculture and community empowerment across the Bugwere region. Two decades of experience in development and organizational leadership.", color: SECONDARY },
  { name: "Head of Programs", role: "Agricultural Programs & Implementation", bio: "Overseeing all agricultural programs including coffee, cocoa, livestock, and agronomic extension services. Brings deep expertise in smallholder farming systems and program design.", color: PRIMARY },
  { name: "Finance & Administration", role: "Financial Management & SACCO", bio: "Managing BCC's financial operations, community SACCO, and ensuring transparent resource allocation. Certified accountant with a passion for financial inclusion in rural communities.", color: SECONDARY },
  { name: "Field Operations Lead", role: "Farmer Training & Extension", bio: "Coordinating field teams that deliver training, seedlings, and ongoing support to thousands of farming households. A hands-on leader who spends as much time in villages as in the office.", color: PRIMARY },
  { name: "Partnerships Coordinator", role: "Strategic Partnerships & Growth", bio: "Building and maintaining partnerships with government, development agencies, and research organizations. Skilled at bridging diverse sectors toward shared goals.", color: SECONDARY },
  { name: "Community Engagement", role: "Community Development & Outreach", bio: "Ensuring community voices are heard and development initiatives align with local needs and priorities. A trusted advocate who has worked in Bugwere communities for over a decade.", color: PRIMARY },
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

      {/* ─── Leadership Intro ─── */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-shape opacity-[0.03]" style={{ backgroundColor: PRIMARY }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 blob-shape-2 opacity-[0.02]" style={{ backgroundColor: SECONDARY }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: PRIMARY }} />
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>Guiding Vision. Inspiring Impact.</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.05] mb-6" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                Leadership
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: FONT_OPENSANS }}>
                Our leadership team brings expertise, dedication, and a shared commitment to transforming communities through sustainable agriculture and financial empowerment. Each member contributes unique strengths to our mission.
              </p>
            </div>
          </ScrollReveal>

          {/* ─── Team Grid with Creative Layout ─── */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group relative bg-white rounded-3xl p-8 border border-gray-100/60 hover:shadow-xl hover:border-transparent transition-all duration-300 h-full">
                  {/* Decorative corner accent */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 rounded-bl-[40px] opacity-[0.04] transition-opacity group-hover:opacity-[0.08]"
                    style={{ backgroundColor: member.color }}
                  />

                  {/* Overlapping avatar */}
                  <div className="relative mb-6">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg"
                      style={{
                        backgroundColor: member.color,
                        fontFamily: FONT_RALEWAY,
                        boxShadow: `0 4px 20px ${member.color}30`,
                      }}
                    >
                      {member.name.split(" ").map(w => w[0]).join("")}
                    </div>
                  </div>
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium mb-4" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6" style={{ fontFamily: FONT_OPENSANS }}>
                    {member.bio}
                  </p>
                  <div className="flex gap-2">
                    <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-white transition-all" style={{ hover: { backgroundColor: PRIMARY } }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = PRIMARY; e.currentTarget.style.color = 'white'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; }}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = PRIMARY; e.currentTarget.style.color = 'white'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; }}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="py-24 sm:py-32 relative overflow-hidden" style={{ backgroundColor: CREAM }}>
        <div className="absolute top-1/3 -right-32 w-64 h-64 rounded-full opacity-[0.06]" style={{ backgroundColor: SECONDARY }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: PRIMARY }} />
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>What Drives Us</span>
                <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: PRIMARY }} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                Our Shared Values
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Integrity", desc: "Transparency and accountability in every decision and transaction" },
              { title: "Impact", desc: "Measurable, lasting change in the communities we serve" },
              { title: "Inclusion", desc: "Ensuring every voice is heard, especially women and youth" },
              { title: "Innovation", desc: "Continuously improving through evidence and local knowledge" },
            ].map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="text-center p-6 rounded-3xl bg-white border border-gray-100/60 hover:shadow-lg hover:border-transparent transition-all duration-300">
                  <div className="w-3 h-3 rounded-full mx-auto mb-4" style={{ backgroundColor: PRIMARY }} />
                  <h4 className="text-lg font-bold mb-2" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: FONT_OPENSANS }}>{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
