"use client";

import Image from "next/image";
import Link from "next/link";
import { FONT_RALEWAY } from "@/lib/constants";

interface ImpactCardProps {
  image: string;
  stat: string;
  title: string;
  description: string;
  href?: string;
}

export default function ImpactCard({
  image,
  stat,
  title,
  description,
  href,
}: ImpactCardProps) {
  const content = (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-2 border-transparent hover:border-[--color-brand]">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <p
          className="absolute bottom-4 left-6 text-3xl font-bold text-white"
          style={{ fontFamily: FONT_RALEWAY }}
        >
          {stat}
        </p>
      </div>
      <div className="p-6">
        <h4
          className="text-lg font-bold text-gray-900 mb-2"
          style={{ fontFamily: FONT_RALEWAY }}
        >
          {title}
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
