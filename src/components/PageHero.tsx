"use client";

import { FONT_RALEWAY } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

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
      className="relative pt-28 pb-20 overflow-hidden grain-overlay"
      style={{ backgroundColor: background || "#193b2a" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots-pattern" />

      {/* Animated decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-[0.04] bg-white animate-float" />
      <div className="absolute bottom-10 left-5 w-48 h-48 rounded-full opacity-[0.03] bg-white animate-float-slow" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full opacity-[0.02] bg-white animate-float" style={{ animationDelay: "1s" }} />

      {/* Gradient accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c94449] via-[#c94449]/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumb} light />

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          style={{ fontFamily: FONT_RALEWAY }}
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

// Re-export SectionHeading from new location for backwards compatibility
export { default as SectionHeading } from "@/components/ui/SectionHeading";
