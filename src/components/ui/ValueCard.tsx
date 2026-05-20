import React from "react";
import { PRIMARY, SECONDARY, FONT_RALEWAY } from "@/lib/constants";

interface ValueCardProps {
  number?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export default function ValueCard({ number, icon, title, description }: ValueCardProps) {
  return (
    <div className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300">
      {number && (
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white font-bold text-sm"
          style={{ backgroundColor: PRIMARY, fontFamily: FONT_RALEWAY }}
        >
          {number}
        </div>
      )}
      {icon && (
        <div className="mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${SECONDARY}10` }}
          >
            <span style={{ color: SECONDARY }}>{icon}</span>
          </div>
        </div>
      )}
      <h4
        className="font-bold text-gray-900 mb-2"
        style={{ fontFamily: FONT_RALEWAY }}
      >
        {title}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
