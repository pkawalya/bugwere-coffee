"use client";

import Image from "next/image";
import { FONT_RALEWAY, FONT_OPENSANS, SECONDARY } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumb: { label: string; href: string }[];
  background?: string;
  backgroundImage?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumb,
  background,
  backgroundImage,
}: PageHeroProps) {
  const bgColor = background || SECONDARY;
  return (
    <section
      className="relative pt-32 sm:pt-36 pb-24 sm:pb-32 overflow-hidden grain-overlay"
      style={{ backgroundColor: bgColor }}
    >
      {/* Background image with blended overlay */}
      {backgroundImage && (
        <>
          <div className="absolute inset-0">
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
          {/* Dark overlay that blends image with the green brand color */}
          <div className="absolute inset-0" style={{ backgroundColor: `color-mix(in srgb, ${bgColor} 72%, transparent)` }} />
          {/* Gradient focused on text area */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${bgColor}e6 0%, ${bgColor}cc 35%, ${bgColor}88 65%, ${bgColor}99 100%)`,
            }}
          />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-32" style={{ background: `linear-gradient(to top, ${bgColor}, transparent)` }} />
        </>
      )}

      {/* Background patterns */}
      {!backgroundImage && <div className="absolute inset-0 bg-dots-pattern" />}

      {/* Organic decorative blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 blob-shape opacity-[0.04] bg-white" />
      <div className="absolute bottom-0 -left-10 w-72 h-72 blob-shape-2 opacity-[0.03] bg-white animate-float-slow" />

      {/* Diagonal bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-2"
        style={{
          background: `linear-gradient(90deg, ${bgColor}, #c94449, ${bgColor})`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumb} light />

        {/* Large title with creative layout */}
        <div className="mt-6">
          <h1
            className="text-xl sm:text-2xl lg:text-3xl xl:text-[2.25rem] font-bold text-white leading-[1.1] mb-6"
            style={{ fontFamily: FONT_RALEWAY }}
          >
            {title}
          </h1>
          <div className="flex items-start gap-4">
            <span
              className="hidden sm:block w-12 h-0.5 rounded-full mt-3 flex-shrink-0"
              style={{ backgroundColor: "#c94449" }}
            />
            <p
              className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed"
              style={{ fontFamily: FONT_OPENSANS }}
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { default as SectionHeading } from "@/components/ui/SectionHeading";
