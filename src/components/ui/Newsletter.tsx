"use client";

import { useState } from "react";
import { PRIMARY, FONT_RALEWAY } from "@/lib/constants";

interface NewsletterProps {
  title?: string;
  description?: string;
}

export default function Newsletter({
  title = "Stay in the Loop",
  description = "Subscribe to our newsletter for the latest updates on our programs and impact.",
}: NewsletterProps) {
  const [email, setEmail] = useState("");

  return (
    <section className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h3
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
          style={{ fontFamily: FONT_RALEWAY }}
        >
          {title}
        </h3>
        <p className="text-gray-600 mb-8">{description}</p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            setEmail("");
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[--color-brand]/20 focus:border-[--color-brand] transition-all"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 text-white font-semibold text-sm rounded-xl transition-all hover:shadow-lg hover:scale-[1.02]"
            style={{ backgroundColor: PRIMARY }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
