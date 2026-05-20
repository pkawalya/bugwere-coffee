"use client";

import { FONT_RALEWAY, PRIMARY, SECONDARY } from "@/lib/constants";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image?: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  image,
}: TestimonialCardProps) {
  return (
    <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-sm">
      {/* Large decorative quote mark */}
      <span
        className="absolute -top-4 left-8 text-7xl font-bold leading-none select-none"
        style={{ color: PRIMARY, fontFamily: FONT_RALEWAY, opacity: 0.15 }}
      >
        &ldquo;
      </span>

      <blockquote
        className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 italic relative z-10"
        style={{ fontFamily: FONT_RALEWAY }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-4">
        {image ? (
          <div
            className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0"
            style={{ border: `3px solid ${PRIMARY}30` }}
          >
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-white text-lg font-bold"
            style={{ backgroundColor: SECONDARY, fontFamily: FONT_RALEWAY }}
          >
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-bold text-gray-900 text-sm" style={{ fontFamily: FONT_RALEWAY }}>
            {name}
          </p>
          <p className="text-gray-500 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
