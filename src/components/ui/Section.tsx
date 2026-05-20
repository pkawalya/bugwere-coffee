import React from "react";
import { PRIMARY, SECONDARY, LIGHT_BG } from "@/lib/constants";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  background?: "white" | "light" | "dark" | "primary" | "gradient";
  py?: "sm" | "md" | "lg" | "xl";
}

const bgMap: Record<string, string> = {
  white: "bg-white",
  light: "",
  dark: "",
  primary: "",
  gradient: "",
};

const pyMap: Record<string, string> = {
  sm: "py-12",
  md: "py-16",
  lg: "py-20",
  xl: "py-28",
};

export default function Section({
  className = "",
  children,
  background = "white",
  py = "lg",
}: SectionProps) {
  const bgClass = bgMap[background];
  const pyClass = pyMap[py];

  // For colors that can't be represented as Tailwind classes, use inline styles
  let style: React.CSSProperties = {};
  let bgStyleClass = bgClass;

  if (background === "light") {
    style.backgroundColor = LIGHT_BG;
  } else if (background === "dark") {
    style.backgroundColor = SECONDARY;
  } else if (background === "primary") {
    style.backgroundColor = PRIMARY;
  } else if (background === "gradient") {
    style.background = `linear-gradient(135deg, ${SECONDARY}, #0d1f16)`;
  }

  return (
    <section className={`${bgStyleClass} ${pyClass} ${className}`} style={style}>
      {children}
    </section>
  );
}
