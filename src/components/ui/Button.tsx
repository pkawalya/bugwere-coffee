"use client";

import Link from "next/link";
import React from "react";
import { FONT_RALEWAY, PRIMARY, SECONDARY } from "@/lib/constants";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<string, React.CSSProperties> = {
  primary: { backgroundColor: PRIMARY, color: "#fff" },
  secondary: { backgroundColor: SECONDARY, color: "#fff" },
  outline: { borderColor: SECONDARY, color: SECONDARY, backgroundColor: "transparent" },
  ghost: { backgroundColor: "transparent", color: SECONDARY },
  white: { backgroundColor: "#fff", color: SECONDARY },
};

const sizeClasses: Record<string, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-7 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "left",
  className = "",
  children,
  fullWidth = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  const borderClass = variant === "outline" ? "border-2" : "";
  const widthClass = fullWidth ? "w-full" : "";
  const ghostHover = variant === "ghost" ? "hover:bg-gray-100" : "";
  const outlineHover = variant === "outline" ? `hover:text-white` : "";

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${borderClass} ${widthClass} ${ghostHover} ${outlineHover} ${className}`;

  const style: React.CSSProperties = { ...variantStyles[variant], fontFamily: FONT_RALEWAY };

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} style={style}>
      {content}
    </button>
  );
}
