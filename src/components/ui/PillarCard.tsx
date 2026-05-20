"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRIMARY, FONT_RALEWAY } from "@/lib/constants";

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  light?: boolean;
}

export default function PillarCard({
  icon,
  title,
  description,
  href,
  light = false,
}: PillarCardProps) {
  return (
    <Link
      href={href}
      className={`group flex items-start gap-4 p-5 rounded-2xl transition-all ${
        light
          ? "bg-white/[0.06] hover:bg-white/[0.12]"
          : "bg-white border border-gray-100 hover:shadow-lg hover:border-[--color-brand]/20"
      }`}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: light ? `${PRIMARY}25` : `${PRIMARY}12` }}
      >
        <span style={{ color: PRIMARY }}>{icon}</span>
      </div>
      <div className="flex-1">
        <h4
          className={`font-bold mb-1 ${light ? "text-white" : "text-gray-900"}`}
          style={{ fontFamily: FONT_RALEWAY }}
        >
          {title}
        </h4>
        <p className={`text-sm ${light ? "text-white/60" : "text-gray-600"}`}>
          {description}
        </p>
      </div>
      <ArrowRight
        className={`w-4 h-4 mt-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ${
          light ? "text-white/70" : "text-[--color-brand]"
        }`}
      />
    </Link>
  );
}
