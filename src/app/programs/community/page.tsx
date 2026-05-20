"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import JourneyStep from "@/components/ui/JourneyStep";
import { Heart, Users, Home, GraduationCap, ArrowRight, Sparkles, HandHeart, UserCheck } from "lucide-react";
import { PRIMARY, SECONDARY, FONT_RALEWAY, FONT_OPENSANS, CREAM } from "@/lib/constants";

const INITIATIVES = [
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Women's Empowerment",
    desc: "Ensuring women have equal access to resources, training, and decision-making. We believe that when women thrive, entire communities flourish. Our programs prioritize female participation and leadership at every level.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "SACCO Savings Groups",
    desc: "Community savings and credit cooperatives that provide financial safety nets. Members pool their savings to create a revolving fund that provides affordable loans for farm inputs, school fees, and emergencies.",
  },
  {
    icon: <Home className="w-7 h-7" />,
    title: "Household Resilience",
    desc: "Diversified income streams that protect families from economic shocks. By combining coffee, cocoa, and livestock with financial services, we create multiple layers of protection against uncertainty.",
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: "Youth Engagement",
    desc: "Training the next generation of farmers and agricultural leaders. Our youth programs provide skills, mentorship, and startup support to make agriculture an attractive, viable career path for young people.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        title="Community Development"
        subtitle="Building resilient, self-sustaining communities through inclusive development initiatives."
        breadcrumb={[{ label: "Programs", href: "/programs/community" }, { label: "Community", href: "/programs/community" }]}
      />

      {/* ─── Immersive Intro ─── */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-shape opacity-[0.03]" style={{ backgroundColor: PRIMARY }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 blob-shape-2 opacity-[0.02]" style={{ backgroundColor: SECONDARY }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: PRIMARY }} />
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>Community Initiatives</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.05] mb-8" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                Strengthening the<br />Social Fabric
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6" style={{ fontFamily: FONT_OPENSANS }}>
                Beyond agriculture, Bugwere Coffee Company invests in community development initiatives that create lasting, systemic change. We believe that sustainable agriculture can only thrive in communities that are healthy, educated, and socially cohesive.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: FONT_OPENSANS }}>
                Our community programs address the social determinants of rural prosperity — financial inclusion, gender equity, youth opportunity, and household resilience — creating an ecosystem where both farms and families can flourish together.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Initiatives ─── */}
      <section className="py-24 sm:py-32 relative overflow-hidden" style={{ backgroundColor: CREAM }}>
        <div className="absolute top-1/3 -right-32 w-64 h-64 rounded-full opacity-[0.06]" style={{ backgroundColor: PRIMARY }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: PRIMARY }} />
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>What We Do</span>
                <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: PRIMARY }} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                Our Initiatives
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-8">
            {INITIATIVES.map(({ icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 0.1}>
                <div className="group p-8 rounded-3xl bg-white border border-gray-100/60 hover:shadow-xl hover:border-transparent transition-all duration-300 h-full">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${SECONDARY}10`, color: SECONDARY }}
                  >
                    {icon}
                  </div>
                  <h4
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}
                  >
                    {title}
                  </h4>
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: FONT_OPENSANS }}
                  >
                    {desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How Community Development Works ─── */}
      <section className="py-24 sm:py-32 relative overflow-hidden" style={{ backgroundColor: SECONDARY }}>
        <div className="absolute inset-0 bg-dots-pattern" />
        <div className="absolute -top-20 -right-20 w-96 h-96 blob-shape opacity-[0.04] bg-white" />
        <div className="absolute bottom-0 -left-10 w-72 h-72 blob-shape-2 opacity-[0.03] bg-white animate-float-slow" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-0.5 rounded-full bg-white/30" />
                <span className="text-sm font-semibold uppercase tracking-wider text-white/60" style={{ fontFamily: FONT_RALEWAY }}>Our Approach</span>
                <span className="w-8 h-0.5 rounded-full bg-white/30" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-[1.05]" style={{ fontFamily: FONT_RALEWAY }}>
                How It Works
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            <JourneyStep
              step={1}
              icon={<Sparkles className="w-5 h-5 text-white" />}
              title="Community Mobilization"
              description="We begin by listening — engaging community leaders, elders, and members to understand local needs, priorities, and existing structures. Trust is the foundation of everything we build."
              isLast={false}
            />
            <JourneyStep
              step={2}
              icon={<HandHeart className="w-5 h-5 text-white" />}
              title="Program Design"
              description="Together with community members, we design initiatives that address real needs — from SACCO formation to women's leadership training — ensuring programs are culturally appropriate and community-owned."
              isLast={false}
            />
            <JourneyStep
              step={3}
              icon={<UserCheck className="w-5 h-5 text-white" />}
              title="Implementation & Growth"
              description="Programs launch with BCC support but are designed to become self-sustaining. We train community champions who carry the work forward, ensuring lasting impact beyond our direct involvement."
              isLast={true}
            />
          </div>
        </div>
      </section>

      {/* ─── Testimonial ─── */}
      <section className="py-24 sm:py-32 relative overflow-hidden" style={{ backgroundColor: CREAM }}>
        <div className="absolute top-0 -left-20 w-72 h-72 blob-shape opacity-[0.04]" style={{ backgroundColor: PRIMARY }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span
              className="text-8xl sm:text-9xl leading-none select-none block -mb-6"
              style={{ color: `${PRIMARY}40`, fontFamily: "Georgia, serif" }}
            >
              &ldquo;
            </span>
            <p
              className="text-xl sm:text-2xl text-gray-800 italic leading-relaxed max-w-3xl mx-auto mb-8"
              style={{ fontFamily: FONT_OPENSANS }}
            >
              The SACCO gave me access to credit for the first time in my life. I used my loan to expand my poultry project and now I have a steady income while my coffee plants mature. My children are in school, and I finally feel secure about our future.
            </p>
            <div>
              <p className="font-bold text-lg" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>Sarah Nambi</p>
              <p className="text-gray-500 text-sm" style={{ fontFamily: FONT_OPENSANS }}>SACCO Member & Poultry Farmer</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 sm:py-28 relative overflow-hidden" style={{ backgroundColor: PRIMARY }}>
        <div className="absolute inset-0 bg-dots-pattern" />
        <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full opacity-[0.06] bg-white blob-shape animate-float" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: FONT_RALEWAY }}>
              Join Our<br />Community
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto" style={{ fontFamily: FONT_OPENSANS }}>
              Whether through a SACCO, a women's group, or a youth training program, there is a place for you in our community. Together, we build resilience.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white font-semibold text-sm rounded-full transition-all hover:shadow-xl hover:scale-[1.03]"
              style={{ color: SECONDARY, fontFamily: FONT_OPENSANS }}
            >
              Get Involved <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
