"use client";

import Image from "next/image";
import Link from "next/link";
import { PRIMARY, FONT_RALEWAY } from "@/lib/constants";

interface NewsCardProps {
  image: string;
  date: string;
  title: string;
  href: string;
  category?: string;
}

export default function NewsCard({
  image,
  date,
  title,
  href,
  category,
}: NewsCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {category && (
          <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-white rounded-full" style={{ backgroundColor: PRIMARY }}>
            {category}
          </span>
        )}
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold mb-2" style={{ color: PRIMARY }}>
          {date}
        </p>
        <h4
          className="text-base font-bold text-gray-900 leading-snug group-hover:text-[--color-brand] transition-colors"
          style={{ fontFamily: FONT_RALEWAY }}
        >
          {title}
        </h4>
      </div>
    </Link>
  );
}
