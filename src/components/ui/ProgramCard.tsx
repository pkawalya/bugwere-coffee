"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRIMARY, FONT_RALEWAY } from "@/lib/constants";

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  color?: string;
}

export default function ProgramCard({
  icon,
  title,
  description,
  href,
  color = PRIMARY,
}: ProgramCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-2 border-transparent"
      style={{
        // @ts-expect-error CSS custom property
        "--card-color": color,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderTopColor = color;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderTopColor = "transparent";
      }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors"
        style={{ backgroundColor: `${color}12` }}
      >
        {icon}
      </div>
      <h3
        className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[--color-brand] transition-colors"
        style={{ fontFamily: FONT_RALEWAY }}
      >
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
      <div
        className="mt-4 flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: PRIMARY }}
      >
        Learn more <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </Link>
  );
}
