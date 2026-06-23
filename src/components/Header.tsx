"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown, ChevronRight, Coffee, Sprout, Bird, Wheat, Heart,
  BarChart3, TrendingUp, MapPin, Microscope, ShoppingBag, Shield, PiggyBank,
  Handshake, Newspaper, Phone, Users, Eye, ArrowRight, Mail, UserCheck,
} from "lucide-react";
import { PRIMARY, SECONDARY, FONT_OPENSANS, FONT_RALEWAY } from "@/lib/constants";

const MEGA_MENUS: {
  label: string; href: string; icon: React.ReactNode; description: string;
  columns: { title: string; links: { label: string; href: string; icon: React.ReactNode; desc: string }[] }[];
}[] = [
  {
    label: "About", href: "/about", icon: <Users className="w-4 h-4" />,
    description: "Who we are & what drives us",
    columns: [
      { title: "Our Organization", links: [
        { label: "About Us", href: "/about", icon: <Eye className="w-5 h-5" />, desc: "Our story, mission & values" },
        { label: "Our Team", href: "/about/team", icon: <Users className="w-5 h-5" />, desc: "Meet the people behind BCC" },
        { label: "Board of Directors", href: "/about/board", icon: <UserCheck className="w-5 h-5" />, desc: "Governance & strategic oversight" },
      ]},
      { title: "Our Purpose", links: [
        { label: "Our Vision", href: "/about#vision", icon: <TrendingUp className="w-5 h-5" />, desc: "Transforming rural farming communities" },
        { label: "Our Approach", href: "/about#approach", icon: <Heart className="w-5 h-5" />, desc: "Holistic, community-driven model" },
      ]},
    ],
  },
  {
    label: "Programs", href: "/programs/coffee", icon: <Sprout className="w-4 h-4" />,
    description: "How we empower farming communities",
    columns: [
      { title: "Core Programs", links: [
        { label: "Sustainable Coffee", href: "/programs/coffee", icon: <Coffee className="w-5 h-5" />, desc: "High-value coffee production support" },
        { label: "Cocoa Farming", href: "/programs/cocoa", icon: <Sprout className="w-5 h-5" />, desc: "Diversifying with resilient cocoa crops" },
        { label: "Livestock Support", href: "/programs/livestock", icon: <Bird className="w-5 h-5" />, desc: "Piggery & poultry for steady income" },
      ]},
      { title: "Support Services", links: [
        { label: "Agronomy Services", href: "/programs/agronomy", icon: <Wheat className="w-5 h-5" />, desc: "Expert farmer training & extension" },
        { label: "Community Development", href: "/programs/community", icon: <Heart className="w-5 h-5" />, desc: "Building resilient communities" },
      ]},
    ],
  },
  {
    label: "Impact", href: "/impact", icon: <BarChart3 className="w-4 h-4" />,
    description: "Results that transform lives",
    columns: [
      { title: "Measuring Success", links: [
        { label: "Impact Stories", href: "/impact", icon: <Heart className="w-5 h-5" />, desc: "Real stories from the field" },
        { label: "Farmer Statistics", href: "/impact/statistics", icon: <BarChart3 className="w-5 h-5" />, desc: "Data-driven impact measurement" },
        { label: "Regional Expansion", href: "/impact/expansion", icon: <MapPin className="w-5 h-5" />, desc: "Growing our reach across Uganda" },
      ]},
    ],
  },
  {
    label: "Our Model", href: "/model", icon: <Microscope className="w-4 h-4" />,
    description: "Our end-to-end agricultural support system",
    columns: [
      { title: "Production & Support", links: [
        { label: "Seedling Distribution", href: "/model/seedlings", icon: <Sprout className="w-5 h-5" />, desc: "Quality seedlings for every farmer" },
        { label: "Extension System", href: "/model/extension", icon: <Wheat className="w-5 h-5" />, desc: "Agronomic training & field support" },
        { label: "Market Access", href: "/model/market", icon: <ShoppingBag className="w-5 h-5" />, desc: "Guaranteed buying & fair prices" },
      ]},
      { title: "Protection & Finance", links: [
        { label: "Quality Assurance", href: "/model/quality", icon: <Microscope className="w-5 h-5" />, desc: "Processing & quality standards" },
        { label: "Financial Inclusion", href: "/model/financial", icon: <PiggyBank className="w-5 h-5" />, desc: "SACCO & community savings" },
        { label: "Farmer Insurance", href: "/model/insurance", icon: <Shield className="w-5 h-5" />, desc: "Rural risk protection program" },
      ]},
    ],
  },
  {
    label: "Connect", href: "/connect/partners", icon: <Handshake className="w-4 h-4" />,
    description: "Partner, read, or reach out",
    columns: [
      { title: "Get Involved", links: [
        { label: "Partners", href: "/connect/partners", icon: <Handshake className="w-5 h-5" />, desc: "Collaborate with BCC" },
        { label: "News & Updates", href: "/connect/news", icon: <Newspaper className="w-5 h-5" />, desc: "Latest from the field" },
        { label: "Contact Us", href: "/contact", icon: <Phone className="w-5 h-5" />, desc: "Get in touch with our team" },
      ]},
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const megaTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMegaEnter = (label: string) => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setActiveMega(label);
  };
  const handleMegaLeave = () => {
    megaTimeoutRef.current = setTimeout(() => setActiveMega(null), 200);
  };
  const closeMobile = () => { setMobileOpen(false); setMobileExpanded(null); };

  const isActive = (menuHref: string) => {
    if (menuHref === "/") return pathname === "/";
    return pathname.startsWith(menuHref);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group relative z-10">
              <Image
                src="/logo.png"
                alt="Bugwere Coffee Company"
                width={40}
                height={40}
                className="rounded-lg transition-transform group-hover:scale-105"
              />
              <div className="hidden sm:block">
                <p
                  className="font-bold text-sm leading-tight transition-colors"
                  style={{ fontFamily: FONT_RALEWAY, color: scrolled ? SECONDARY : "#fff" }}
                >
                  Bugwere Coffee
                </p>
                <p
                  className="text-[10px] tracking-wider uppercase transition-colors"
                  style={{ color: scrolled ? "#6b7280" : "rgba(255,255,255,0.7)" }}
                >
                  Company
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {MEGA_MENUS.map((menu) => (
                <div
                  key={menu.label}
                  className="relative"
                  onMouseEnter={() => handleMegaEnter(menu.label)}
                  onMouseLeave={handleMegaLeave}
                >
                  <Link
                    href={menu.href}
                    className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all ${
                      activeMega === menu.label
                        ? scrolled ? "text-[--color-brand] bg-red-50/60" : "text-white bg-white/15"
                        : isActive(menu.href)
                        ? scrolled ? "text-[--color-brand]" : "text-white"
                        : scrolled ? "text-gray-700 hover:text-[--color-brand] hover:bg-gray-50" : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    style={{ fontFamily: FONT_OPENSANS }}
                  >
                    {menu.icon}
                    {menu.label}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-300 ${
                        activeMega === menu.label ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {/* Mega Menu Panel */}
                  {activeMega === menu.label && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-slide-down"
                      onMouseEnter={() => handleMegaEnter(menu.label)}
                      onMouseLeave={handleMegaLeave}
                    >
                      <div
                        className="px-8 py-5 border-b border-gray-100"
                        style={{ background: `linear-gradient(135deg, ${SECONDARY}08, ${PRIMARY}08)` }}
                      >
                        <p className="font-bold text-lg" style={{ fontFamily: FONT_RALEWAY, color: SECONDARY }}>{menu.label}</p>
                        <p className="text-sm text-gray-500 mt-0.5">{menu.description}</p>
                      </div>
                      <div className="p-6">
                        <div className={`grid gap-8 ${menu.columns.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
                          {menu.columns.map((col) => (
                            <div key={col.title}>
                              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">{col.title}</p>
                              <div className="space-y-1">
                                {col.links.map((link) => (
                                  <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group ${
                                      pathname === link.href ? "bg-red-50/50" : ""
                                    }`}
                                    onClick={() => setActiveMega(null)}
                                  >
                                    <div
                                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                      style={{ backgroundColor: `${SECONDARY}10`, color: SECONDARY }}
                                    >
                                      {link.icon}
                                    </div>
                                    <div>
                                      <p className="text-sm font-semibold text-gray-800 group-hover:text-[--color-brand] transition-colors">{link.label}</p>
                                      <p className="text-xs text-gray-500 mt-0.5">{link.desc}</p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className={`hidden sm:inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full transition-all hover:shadow-lg hover:scale-[1.02] ${
                  scrolled ? "text-white" : "text-white bg-white/15 hover:bg-white/25 border border-white/20"
                }`}
                style={scrolled ? { backgroundColor: PRIMARY, fontFamily: FONT_OPENSANS } : { fontFamily: FONT_OPENSANS }}
              >
                Support Us
              </Link>
              <button
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
                }`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMobile} />
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl overflow-y-auto custom-scrollbar animate-slide-in-right">
            <div className="p-5">
              <div className="flex items-center justify-between mb-8">
                <Image src="/logo.png" alt="Bugwere Coffee" width={36} height={36} className="rounded-lg" />
                <button onClick={closeMobile} className="p-2 hover:bg-gray-100 rounded-lg"><X className="w-5 h-5" /></button>
              </div>
              <div className="space-y-1">
                {MEGA_MENUS.map((menu) => (
                  <div key={menu.label}>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === menu.label ? null : menu.label)}
                      className={`flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                        isActive(menu.href) ? "text-[--color-brand] bg-red-50/50" : "text-gray-800 hover:bg-gray-50"
                      }`}
                    >
                      <span className="flex items-center gap-2">{menu.icon} {menu.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileExpanded === menu.label ? "rotate-180" : ""}`} />
                    </button>
                    {mobileExpanded === menu.label && (
                      <div className="pl-4 pb-2 space-y-0.5 animate-fade-in">
                        <Link href={menu.href} onClick={closeMobile} className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg" style={{ color: PRIMARY }}>
                          Overview <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        {menu.columns.map((col) => col.links.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            onClick={closeMobile}
                            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors ${
                              pathname === link.href ? "text-[--color-brand] bg-red-50/50" : "text-gray-600 hover:text-[--color-brand] hover:bg-red-50/50"
                            }`}
                          >
                            <ChevronRight className="w-3 h-3" />{link.label}
                          </Link>
                        )))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link
                  href="/contact"
                  onClick={closeMobile}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 text-white font-semibold rounded-full"
                  style={{ backgroundColor: PRIMARY }}
                >
                  Support Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
