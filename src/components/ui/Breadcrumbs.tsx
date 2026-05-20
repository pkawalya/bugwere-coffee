import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  items: { label: string; href: string }[];
  light?: boolean;
}

export default function Breadcrumbs({ items, light = true }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-1.5 text-sm mb-6 flex-wrap" aria-label="Breadcrumb">
      <Link
        href="/"
        className={`flex items-center gap-1 transition-colors ${
          light ? "text-white/60 hover:text-white" : "text-gray-400 hover:text-gray-700"
        }`}
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight
            className={`w-3 h-3 ${light ? "text-white/30" : "text-gray-300"}`}
          />
          {i === items.length - 1 ? (
            <span
              className={`font-medium ${
                light ? "text-white" : "text-gray-800"
              }`}
            >
              {item.label}
            </span>
          ) : (
            <Link
              href={item.href}
              className={`transition-colors ${
                light ? "text-white/60 hover:text-white" : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
