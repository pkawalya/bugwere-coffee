"use client";

import Image from "next/image";
import { FONT_RALEWAY, FONT_OPENSANS, SECONDARY, PRIMARY } from "@/lib/constants";
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
      className="relative pt-32 sm:pt-36 pb-20 sm:pb-28 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Background image — positioned to the right, natural ratio, blended into brand color */}
      {backgroundImage && (
        <>
          {/* Full-width image layer with heavy brand-color overlay for atmosphere */}
          <div className="absolute inset-0">
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover object-center opacity-30"
              sizes="100vw"
              priority
            />
          </div>
          {/* Brand color wash — strong so text is always readable */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `${bgColor}d9` }}
          />

          {/* Right-side featured image — respects natural aspect ratio */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[45%] max-w-[600px] hidden lg:block pointer-events-none">
            <div className="relative mr-8 xl:mr-16">
              {/* Image with natural proportions */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src={backgroundImage}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1280px) 45vw, 600px"
                  priority
                />
                {/* Subtle inner gradient — blends bottom-right into brand color */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                      linear-gradient(135deg, transparent 40%, ${bgColor}66 70%, ${bgColor}cc 100%),
                      linear-gradient(to bottom, transparent 60%, ${bgColor}88 100%)
                    `,
                  }}
                />
              </div>
              {/* Decorative offset accent behind image */}
              <div
                className="absolute -bottom-3 -left-3 w-full h-full rounded-2xl -z-10 opacity-20"
                style={{ backgroundColor: PRIMARY }}
              />
            </div>
          </div>

          {/* Left-to-center gradient — ensures text area is always clean */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background: `linear-gradient(to right, ${bgColor}f0 0%, ${bgColor}dd 50%, ${bgColor}bb 100%)`,
            }}
          />

          {/* Organic decorative blobs */}
          <div className="absolute -top-20 -right-20 w-96 h-96 blob-shape opacity-[0.04] bg-white" />
          <div className="absolute bottom-0 -left-10 w-72 h-72 blob-shape-2 opacity-[0.03] bg-white animate-float-slow" />
        </>
      )}

      {/* Background patterns for no-image heroes */}
      {!backgroundImage && <div className="absolute inset-0 bg-dots-pattern" />}
      {!backgroundImage && (
        <>
          <div className="absolute -top-20 -right-20 w-96 h-96 blob-shape opacity-[0.04] bg-white" />
          <div className="absolute bottom-0 -left-10 w-72 h-72 blob-shape-2 opacity-[0.03] bg-white animate-float-slow" />
        </>
      )}

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

        {/* Title & subtitle — constrained width to avoid image overlap on lg+ */}
        <div className="mt-6 lg:max-w-[55%] xl:max-w-[50%]">
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
              className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed"
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
