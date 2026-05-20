"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PRIMARY, FONT_RALEWAY } from "@/lib/constants";

interface StoryCardProps {
  image: string;
  title: string;
  excerpt: string;
  href?: string;
}

export default function StoryCard({ image, title, excerpt, href }: StoryCardProps) {
  const content = (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h4
          className="text-lg font-bold text-gray-900 mb-2"
          style={{ fontFamily: FONT_RALEWAY }}
        >
          {title}
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{excerpt}</p>
        <a
          href={href || "#"}
          className="text-sm font-semibold flex items-center gap-1"
          style={{ color: PRIMARY }}
        >
          Read Full Story <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );

  return content;
}
