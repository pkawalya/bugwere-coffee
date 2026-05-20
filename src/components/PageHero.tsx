"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const PRIMARY = "#c94449";
const SECONDARY = "#193b2a";

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumb: { label: string; href: string }[];
  background?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumb,
  background,
}: PageHeroProps) {
  return (
    <section
      className="relative pt-28 pb-20 overflow-hidden"
      style={{ backgroundColor: background || SECONDARY }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04] bg-white -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-[0.04] bg-white translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm mb-6">
          <Link
            href="/"
            className="text-white/60 hover:text-white transition-colors"
          >
            Home
          </Link>
          {breadcrumb.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="text-white/30">/</span>
              {i === breadcrumb.length - 1 ? (
                <span className="text-white font-medium">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </span>
          ))}
        </nav>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          style={{ fontFamily: "var(--font-raleway)" }}
        >
          {title}
        </h1>
        <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export function SectionHeading({
  label,
  title,
  description,
  centered = false,
  light = false,
}: {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <p
          className="text-sm font-semibold uppercase tracking-wider mb-3"
          style={{ color: PRIMARY }}
        >
          {label}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? "text-white" : "text-gray-900"
        }`}
        style={{ fontFamily: "var(--font-raleway)" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg leading-relaxed max-w-3xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-gray-600"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
