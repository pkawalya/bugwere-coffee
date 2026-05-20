"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { SECONDARY, PRIMARY, FONT_RALEWAY, FONT_OPENSANS } from "@/lib/constants";
import BackToTop from "@/components/ui/BackToTop";
import Marquee from "@/components/ui/Marquee";

const FOOTER_SECTIONS = [
  { title: "About", links: [{ label: "About Us", href: "/about" }, { label: "Our Team", href: "/about/team" }, { label: "Our Vision", href: "/about#vision" }] },
  { title: "Programs", links: [{ label: "Coffee Production", href: "/programs/coffee" }, { label: "Cocoa Farming", href: "/programs/cocoa" }, { label: "Livestock Support", href: "/programs/livestock" }, { label: "Agronomy Services", href: "/programs/agronomy" }] },
  { title: "Our Model", links: [{ label: "Seedling Distribution", href: "/model/seedlings" }, { label: "Extension System", href: "/model/extension" }, { label: "Market Access", href: "/model/market" }, { label: "Financial Inclusion", href: "/model/financial" }] },
  { title: "Connect", links: [{ label: "Partners", href: "/connect/partners" }, { label: "News & Updates", href: "/connect/news" }, { label: "Contact Us", href: "/contact" }] },
];

const SOCIAL_LINKS = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

function SocialIcon({ icon: Icon, label, href }: { icon: React.ElementType; label: string; href: string }) {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="relative">
      <a
        href={href}
        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-[--color-brand] transition-all duration-300"
        aria-label={label}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <Icon className="w-4 h-4" />
      </a>
      {showTooltip && (
        <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md whitespace-nowrap animate-fade-in">
          {label}
        </span>
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <>
      {/* Marquee Strip */}
      <div className="py-5 overflow-hidden" style={{ backgroundColor: SECONDARY }}>
        <Marquee
          items={["COFFEE", "COCOA", "COMMUNITY", "SUSTAINABILITY", "EMPOWERMENT", "LIVELIHOODS", "FARMERS", "GROWTH"]}
          speed={25}
          className="text-white/15 text-sm font-bold uppercase tracking-[0.3em]"
        />
      </div>

      {/* CTA Band */}
      <section className="relative overflow-hidden" style={{ backgroundColor: CREAM_BG }}>
        <div className="absolute -top-20 -right-20 w-80 h-80 blob-shape opacity-[0.06]" style={{ backgroundColor: PRIMARY }} />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 blob-shape-2 opacity-[0.04]" style={{ backgroundColor: SECONDARY }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>
                Your participation matters!
              </h2>
              <p className="text-gray-600 text-lg" style={{ fontFamily: FONT_OPENSANS }}>
                Join us in transforming rural livelihoods across Eastern Uganda.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3.5 text-white font-semibold text-sm rounded-full transition-all hover:shadow-lg hover:scale-[1.02]"
                style={{ backgroundColor: PRIMARY, fontFamily: FONT_OPENSANS }}
              >
                Join Now
              </Link>
              <Link
                href="/connect/partners"
                className="inline-flex items-center px-8 py-3.5 border-2 font-semibold text-sm rounded-full transition-all hover:bg-[--color-brand] hover:text-white hover:border-[--color-brand]"
                style={{ borderColor: SECONDARY, color: SECONDARY, fontFamily: FONT_OPENSANS }}
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer style={{ backgroundColor: SECONDARY }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 pt-16 pb-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <Image src="/logo.png" alt="Bugwere Coffee" width={40} height={40} className="rounded-lg" />
                <p className="font-bold text-white text-sm" style={{ fontFamily: FONT_RALEWAY }}>
                  Bugwere Coffee Company
                </p>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs" style={{ fontFamily: FONT_OPENSANS }}>
                Empowering rural households through sustainable agriculture in the Bugwere region of Eastern Uganda.
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <SocialIcon key={social.label} {...social} />
                ))}
              </div>
            </div>

            {/* Link Sections */}
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <h4 className="text-white/60 font-semibold text-xs uppercase tracking-wider mb-4" style={{ fontFamily: FONT_RALEWAY }}>
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/40 text-sm hover:text-white transition-colors duration-200"
                        style={{ fontFamily: FONT_OPENSANS }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm" style={{ fontFamily: FONT_OPENSANS }}>
              &copy; {new Date().getFullYear()} Bugwere Coffee Company. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/30" style={{ fontFamily: FONT_OPENSANS }}>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <BackToTop />
    </>
  );
}

const CREAM_BG = "#FBF8F4";
