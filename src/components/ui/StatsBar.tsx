"use client";

import React from "react";
import { FONT_RALEWAY, SECONDARY } from "@/lib/constants";

interface StatsBarProps {
  stats: { number: string; label: string; icon?: React.ReactNode }[];
  dark?: boolean;
}

export default function StatsBar({ stats, dark = true }: StatsBarProps) {
  return (
    <section style={{ backgroundColor: dark ? SECONDARY : "#fff" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              {stat.icon && (
                <div className="flex justify-center mb-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: dark
                        ? "rgba(201, 68, 73, 0.15)"
                        : `${SECONDARY}10`,
                    }}
                  >
                    <span
                      style={{
                        color: dark ? "#c94449" : SECONDARY,
                        width: "1.5rem",
                        height: "1.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {stat.icon}
                    </span>
                  </div>
                </div>
              )}
              <p
                className="text-3xl sm:text-4xl font-bold mb-1"
                style={{
                  fontFamily: FONT_RALEWAY,
                  color: dark ? "#fff" : SECONDARY,
                }}
              >
                {stat.number}
              </p>
              <p
                className={`text-sm ${
                  dark ? "text-white/60" : "text-gray-500"
                }`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
