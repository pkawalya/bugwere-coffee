"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { SECONDARY } from "@/lib/constants";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-xl shadow-lg flex items-center justify-center text-white transition-all hover:scale-110 hover:shadow-xl"
      style={{ backgroundColor: SECONDARY }}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
