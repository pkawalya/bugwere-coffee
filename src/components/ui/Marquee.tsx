"use client";

interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
  separator?: string;
}

export default function Marquee({
  items,
  speed = 30,
  className = "",
  separator = "•",
}: MarqueeProps) {
  const content = items.join(` ${separator} `) + ` ${separator} `;
  const doubled = content + content;

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="inline-block animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        <span className="inline-block">{doubled}</span>
      </div>
    </div>
  );
}
