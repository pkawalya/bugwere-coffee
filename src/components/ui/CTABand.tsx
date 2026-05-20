import Link from "next/link";
import { SECONDARY, FONT_RALEWAY } from "@/lib/constants";

interface CTABandProps {
  title: string;
  subtitle: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}

export default function CTABand({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
}: CTABandProps) {
  return (
    <section style={{ backgroundColor: SECONDARY }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-3xl sm:text-4xl font-medium text-white mb-2"
              style={{ fontFamily: FONT_RALEWAY }}
            >
              {title}
            </h2>
            <p className="text-white/70 text-lg">{subtitle}</p>
          </div>
          <div className="flex gap-4">
            {primaryAction && (
              <Link
                href={primaryAction.href}
                className="inline-flex items-center px-8 py-3.5 bg-white font-semibold text-sm rounded-xl transition-all hover:shadow-lg hover:scale-[1.02]"
                style={{ color: SECONDARY }}
              >
                {primaryAction.label}
              </Link>
            )}
            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className="inline-flex items-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold text-sm rounded-xl transition-all hover:bg-white/10"
              >
                {secondaryAction.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
