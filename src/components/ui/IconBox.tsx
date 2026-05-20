import React from "react";
import { SECONDARY } from "@/lib/constants";

interface IconBoxProps {
  icon: React.ReactNode;
  color?: string;
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outlined" | "gradient";
}

const sizeMap: Record<string, string> = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-14 h-14",
};

const iconSizeMap: Record<string, string> = {
  sm: "w-5 h-5",
  md: "w-6 h-6",
  lg: "w-7 h-7",
};

export default function IconBox({
  icon,
  color = SECONDARY,
  size = "md",
  variant = "filled",
}: IconBoxProps) {
  const sizeClass = sizeMap[size];

  let style: React.CSSProperties = {};
  let borderClass = "";

  if (variant === "filled") {
    style.backgroundColor = `${color}15`;
    style.color = color;
  } else if (variant === "outlined") {
    borderClass = "border-2";
    style.borderColor = color;
    style.color = color;
  } else if (variant === "gradient") {
    style.background = `linear-gradient(135deg, ${color}20, ${color}08)`;
    style.color = color;
  }

  return (
    <div
      className={`${sizeClass} rounded-xl flex items-center justify-center flex-shrink-0 ${borderClass}`}
      style={style}
    >
      <span className={iconSizeMap[size]}>{icon}</span>
    </div>
  );
}
