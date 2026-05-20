"use client";

import { FONT_RALEWAY, PRIMARY } from "@/lib/constants";
import { ReactNode } from "react";

interface JourneyStepProps {
  step: number;
  icon: ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function JourneyStep({
  step,
  icon,
  title,
  description,
  isLast = false,
}: JourneyStepProps) {
  return (
    <div className="flex gap-5 sm:gap-8">
      {/* Line + Circle */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
          style={{
            backgroundColor: PRIMARY,
            fontFamily: FONT_RALEWAY,
            boxShadow: `0 4px 20px ${PRIMARY}40`,
          }}
        >
          {icon || String(step).padStart(2, "0")}
        </div>
        {!isLast && (
          <div
            className="w-0.5 flex-1 mt-2 min-h-[40px]"
            style={{
              background: `linear-gradient(to bottom, ${PRIMARY}, ${PRIMARY}20)`,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className={`pb-10 ${isLast ? "pb-0" : ""}`}>
        <h4
          className="text-lg sm:text-xl font-bold text-gray-900 mb-2"
          style={{ fontFamily: FONT_RALEWAY }}
        >
          {title}
        </h4>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
}
