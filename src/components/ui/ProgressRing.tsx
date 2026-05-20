"use client";

import { useEffect, useState } from "react";

interface ProgressRingProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
  className?: string;
  label?: string;
  value?: string;
}

export default function ProgressRing({
  percentage,
  size = 120,
  strokeWidth = 8,
  color = "#c94449",
  trackColor = "#e5e7eb",
  className = "",
  label,
  value,
}: ProgressRingProps) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!hasAnimated) {
        setHasAnimated(true);
        setAnimatedPercentage(percentage);
      }
    }, 200);
    return () => clearTimeout(timeout);
  }, [percentage, hasAnimated]);

  const offset = circumference - (animatedPercentage / 100) * circumference;

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          {/* Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={trackColor}
            strokeWidth={strokeWidth}
          />
          {/* Progress */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="progress-ring-circle"
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-xl sm:text-2xl font-bold"
            style={{ fontFamily: "var(--font-raleway)", color }}
          >
            {value || `${percentage}%`}
          </span>
        </div>
      </div>
      {label && (
        <p
          className="text-sm text-gray-600 text-center max-w-[140px]"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          {label}
        </p>
      )}
    </div>
  );
}
