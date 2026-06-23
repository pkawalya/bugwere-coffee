"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { PRIMARY, SECONDARY, FONT_RALEWAY, FONT_OPENSANS, CREAM } from "@/lib/constants";
import type { BoardMember } from "@/lib/data";

const FALLBACK_BOARD = [
  {
    name: "Primrose Kobusingye",
    role: "Board Member",
    bio: "Primrose Kobusingye is a seasoned marketing, communications, and growth leader with over 15 years of senior leadership experience across banking, microfinance, advertising/media, and development sectors.",
    color: PRIMARY,
    photo: "/images/primrose-kobusingye.jpg",
  },
  {
    name: "Moses Rudende",
    role: "Board Member",
    bio: "Moses Rudende is a seasoned media and strategic communications professional with over 16 years of leadership experience across Uganda's broadcast and corporate communications landscape.",
    color: SECONDARY,
    photo: "/images/moses-rudende.jpg",
  },
  {
    name: "Abraham Hadoto",
    role: "Board Member",
    bio: "Abraham Hadoto is a senior development professional with decades of experience in humanitarian response, livelihoods recovery, and inclusive agricultural value chain development across Africa and fragile contexts.",
    color: SECONDARY,
    photo: "/images/abraham-hadoto.jpg",
  },
  {
    name: "David Tusubira",
    role: "Board Member",
    bio: "David Tusubira is a serial technology entrepreneur with a decade of experience in technology venture bootstrapping. He holds a bachelor's degree in Electrical Engineering from Makerere University with a strong background in electronics and computer programming.",
    color: PRIMARY,
    photo: "/images/david-tusubira.jpg",
  },
];

interface BoardClientProps {
  board: BoardMember[];
}

export default function BoardClient({ board: dbBoard }: BoardClientProps) {
  const board = dbBoard.length > 0 ? dbBoard : FALLBACK_BOARD;

  return (
    <>
      <PageHero
        title="Board of Directors"
        subtitle="Governance, oversight, and strategic leadership guiding BCC's mission."
        breadcrumb={[
          { label: "About", href: "/about" },
          { label: "Board of Directors", href: "/about/board" },
        ]}
        backgroundImage="/images/hero-2.png"
      />

      {/* ─── Intro ─── */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-shape opacity-[0.03]" style={{ backgroundColor: PRIMARY }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 blob-shape-2 opacity-[0.02]" style={{ backgroundColor: SECONDARY }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: PRIMARY }} />
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: PRIMARY, fontFamily: FONT_RALEWAY }}>
                  Governance & Oversight
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.05] mb-6" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                Leadership That Serves
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4" style={{ fontFamily: FONT_OPENSANS }}>
                Our board brings together distinguished professionals from marketing and communications, media, development, and technology
                — united by a commitment to BCC&apos;s mission and the communities we serve. Each member contributes
                unique expertise and perspective, ensuring that our strategy is both ambitious and grounded in the realities of
                rural Eastern Uganda.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: FONT_OPENSANS }}>
                Together, they provide the strategic oversight, financial stewardship, and accountability framework that enables
                BCC to deliver lasting, measurable impact for thousands of farming households.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Board Members — Full Cards with Photos ─── */}
      <section className="pb-24 sm:pb-32" style={{ backgroundColor: CREAM }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8">
            {board.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100/60 hover:shadow-xl hover:border-transparent transition-all duration-300 h-full">
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-bl-[60px] opacity-[0.04] transition-opacity group-hover:opacity-[0.08]"
                    style={{ backgroundColor: member.color }}
                  />

                  <div className="p-8 sm:p-10">
                    {/* Photo + Name Row */}
                    <div className="flex items-start gap-5 mb-6">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        {member.photo ? (
                          <Image src={member.photo} alt={member.name} width={80} height={80} className="w-full h-full object-cover" />
                        ) : (
                          <div
                            className="w-full h-full flex items-center justify-center text-white text-xl font-bold"
                            style={{ backgroundColor: member.color, fontFamily: FONT_RALEWAY }}
                          >
                            {member.name.split(" ").filter(w => w.length > 1).map(w => w[0]).join("").slice(0, 2)}
                          </div>
                        )}
                      </div>
                      <div>
                        <h3
                          className="text-xl font-bold mb-1"
                          style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}
                        >
                          {member.name}
                        </h3>
                        <p
                          className="text-sm font-semibold inline-block px-3 py-1 rounded-full"
                          style={{
                            color: PRIMARY,
                            backgroundColor: `${PRIMARY}10`,
                            fontFamily: FONT_OPENSANS,
                          }}
                        >
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Bio — multi-paragraph */}
                    {member.bio.split("\n\n").map((para, pi) => (
                      <p
                        key={pi}
                        className="text-gray-600 text-sm leading-relaxed mb-3 last:mb-0"
                        style={{ fontFamily: FONT_OPENSANS }}
                      >
                        {para}
                      </p>
                    ))}

                    {/* Social Links */}
                    <div className="flex gap-2 mt-6 pt-4 border-t border-gray-100">
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = PRIMARY; e.currentTarget.style.color = 'white'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; }}
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = PRIMARY; e.currentTarget.style.color = 'white'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; }}
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: SECONDARY }}>
        <div className="absolute -top-20 -left-20 w-80 h-80 blob-shape opacity-[0.04] bg-white" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" style={{ fontFamily: FONT_RALEWAY }}>
            Meet the Team Behind BCC
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Our leadership brings expertise, dedication, and a shared commitment to transforming communities.
          </p>
          <Link
            href="/about/team"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white font-semibold text-sm rounded-full transition-all hover:shadow-xl hover:scale-[1.03]"
            style={{ color: SECONDARY, fontFamily: FONT_OPENSANS }}
          >
            View Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
