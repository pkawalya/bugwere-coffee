import React from "react";
import { PRIMARY, FONT_RALEWAY } from "@/lib/constants";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = false,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      {label && (
        <div className={`flex items-center gap-3 mb-3 ${centered ? "justify-center" : ""}`}>
          <span
            className="w-8 h-0.5 rounded-full"
            style={{ backgroundColor: PRIMARY }}
          />
          <p
            className="text-sm font-semibold uppercase tracking-wider"
            style={{ color: PRIMARY }}
          >
            {label}
          </p>
          <span
            className="w-8 h-0.5 rounded-full"
            style={{ backgroundColor: PRIMARY }}
          />
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-[2.25rem] font-bold leading-tight mb-4 ${
          light ? "text-white" : "text-gray-900"
        }`}
        style={{ fontFamily: FONT_RALEWAY }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-relaxed max-w-3xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-gray-600"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
