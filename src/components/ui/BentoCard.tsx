"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRIMARY, FONT_RALEWAY } from "@/lib/constants";

interface BentoCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  className?: string;
  overlay?: "dark" | "gradient" | "light";
}

export default function BentoCard({
  image,
  title,
  description,
  href,
  className = "",
  overlay = "gradient",
}: BentoCardProps) {
  const overlayClass =
    overlay === "dark"
      ? "bg-black/60"
      : overlay === "light"
      ? "bg-white/70"
      : "bg-gradient-to-t from-black/80 via-black/30 to-transparent";

  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-3xl block ${className}`}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className={`absolute inset-0 ${overlayClass} transition-all duration-500 group-hover:opacity-90`} />
      <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
        <span
          className="inline-block w-8 h-0.5 rounded-full mb-3 transition-all duration-500 group-hover:w-12"
          style={{ backgroundColor: PRIMARY }}
        />
        <h3
          className="text-xl sm:text-2xl font-bold text-white mb-2 transition-transform duration-500 group-hover:-translate-y-1"
          style={{ fontFamily: FONT_RALEWAY }}
        >
          {title}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed mb-4 max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          {description}
        </p>
        <div
          className="flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
          style={{ color: PRIMARY }}
        >
          Explore <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
