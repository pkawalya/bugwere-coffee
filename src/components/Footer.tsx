"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

const SECONDARY = "#193b2a";
const PRIMARY = "#c94449";

const FOOTER_SECTIONS = [
  {
    title: "About",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about/team" },
      { label: "Our Vision", href: "/about#vision" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Coffee Production", href: "/programs/coffee" },
      { label: "Cocoa Farming", href: "/programs/cocoa" },
      { label: "Livestock Support", href: "/programs/livestock" },
      { label: "Agronomy Services", href: "/programs/agronomy" },
      { label: "Community Development", href: "/programs/community" },
    ],
  },
  {
    title: "Our Model",
    links: [
      { label: "Seedling Distribution", href: "/model/seedlings" },
      { label: "Extension System", href: "/model/extension" },
      { label: "Market Access", href: "/model/market" },
      { label: "Financial Inclusion", href: "/model/financial" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Partners", href: "/connect/partners" },
      { label: "News & Updates", href: "/connect/news" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <>
      {/* CTA Band */}
      <section style={{ backgroundColor: SECONDARY }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-medium text-white mb-2"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Your participation matters!
              </h2>
              <p className="text-white/70 text-lg">
                Join us in transforming rural livelihoods across Eastern Uganda.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-white font-semibold text-sm rounded-xl transition-all hover:shadow-lg hover:scale-[1.02]"
                style={{ color: SECONDARY }}
              >
                Join Now
              </Link>
              <Link
                href="/connect/partners"
                className="inline-flex items-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold text-sm rounded-xl transition-all hover:bg-white/10"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-gray-950 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src="/logo.png"
                  alt="Bugwere Coffee"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <div>
                  <p
                    className="font-bold text-white text-sm"
                    style={{ fontFamily: "var(--font-raleway)" }}
                  >
                    Bugwere Coffee Company
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                Empowering rural households through sustainable agriculture in the
                Bugwere region of Eastern Uganda. Coffee, Cocoa, Livestock.
              </p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[--color-brand] transition-all"
                    aria-label="Social media"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Sections */}
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-400 text-sm hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Bugwere Coffee Company. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <BackToTop />
    </>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-xl shadow-lg flex items-center justify-center text-white transition-all hover:scale-110 hover:shadow-xl"
      style={{ backgroundColor: SECONDARY }}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
