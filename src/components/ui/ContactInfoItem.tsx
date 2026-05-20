import React from "react";
import { SECONDARY } from "@/lib/constants";

interface ContactInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export default function ContactInfoItem({ icon, label, value }: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${SECONDARY}10` }}
      >
        <span style={{ color: SECONDARY }}>{icon}</span>
      </div>
      <div>
        <p className="font-semibold text-gray-900 text-sm">{label}</p>
        <p className="text-gray-600 text-sm">{value}</p>
      </div>
    </div>
  );
}
