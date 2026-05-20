"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SECONDARY, PRIMARY, FONT_RALEWAY, FONT_OPENSANS } from "@/lib/constants";

interface Slide {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  cta: string;
  ctaHref: string;
}

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setProgress(0);
      setTimeout(() => setIsAnimating(false), 800);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, slides.length, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, slides.length, goTo]);

  /* Auto-advance with progress tracking */
  useEffect(() => {
    if (isPaused) return;

    // Progress bar update
    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (100 / 60); // 60 updates per 6000ms
      });
    }, 100);

    intervalRef.current = setInterval(next, 6000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [next, isPaused]);

  // Progress reset is handled in goTo callback

  return (
    <section
      className="relative h-screen min-h-[700px] max-h-[1000px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides with parallax-like effect */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-all duration-1000"
          style={{
            opacity: current === i ? 1 : 0,
            transform: current === i ? "scale(1)" : "scale(1.08)",
          }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Content with staggered animations */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="transition-all duration-700"
                style={{
                  opacity: current === i ? 1 : 0,
                  transform: current === i ? "translateY(0)" : "translateY(30px)",
                  position: i === 0 ? "relative" : "absolute",
                  pointerEvents: current === i ? "auto" : "none",
                }}
              >
                {/* Staggered subtitle */}
                <span
                  className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white mb-6 transition-all duration-500"
                  style={{
                    backgroundColor: PRIMARY,
                    transitionDelay: current === i ? "0.1s" : "0s",
                    opacity: current === i ? 1 : 0,
                    transform: current === i ? "translateY(0)" : "translateY(10px)",
                  }}
                >
                  {slide.subtitle}
                </span>
                {/* Staggered title */}
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 transition-all duration-500"
                  style={{
                    fontFamily: FONT_RALEWAY,
                    transitionDelay: current === i ? "0.2s" : "0s",
                    opacity: current === i ? 1 : 0,
                    transform: current === i ? "translateY(0)" : "translateY(15px)",
                  }}
                >
                  {slide.title}
                </h1>
                {/* Staggered description */}
                <p
                  className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg transition-all duration-500"
                  style={{
                    transitionDelay: current === i ? "0.35s" : "0s",
                    opacity: current === i ? 1 : 0,
                    transform: current === i ? "translateY(0)" : "translateY(15px)",
                  }}
                >
                  {slide.description}
                </p>
                {/* Staggered CTAs */}
                <div
                  className="flex flex-wrap gap-4 transition-all duration-500"
                  style={{
                    transitionDelay: current === i ? "0.5s" : "0s",
                    opacity: current === i ? 1 : 0,
                    transform: current === i ? "translateY(0)" : "translateY(15px)",
                  }}
                >
                  <Link
                    href={slide.ctaHref}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white font-semibold text-sm rounded-xl transition-all hover:shadow-xl hover:scale-[1.02]"
                    style={{ color: SECONDARY, fontFamily: FONT_OPENSANS }}
                  >
                    {slide.cta}
                  </Link>
                  <Link
                    href="#about"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold text-sm rounded-xl transition-all hover:bg-white/10"
                    style={{ fontFamily: FONT_OPENSANS }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical Text Indicator on the right */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col items-center gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="group relative flex items-center gap-3 transition-all duration-300"
            aria-label={`Go to slide ${i + 1}`}
          >
            <span
              className={`text-xs font-bold transition-all duration-300 ${
                current === i ? "text-white opacity-100" : "text-white/40 opacity-0 group-hover:opacity-70"
              }`}
              style={{ fontFamily: FONT_RALEWAY }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className="block rounded-full transition-all duration-500"
              style={{
                width: current === i ? "3px" : "3px",
                height: current === i ? "32px" : "16px",
                backgroundColor: current === i ? "#fff" : "rgba(255,255,255,0.3)",
              }}
            />
          </button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="group relative h-1.5 rounded-full transition-all duration-500"
            style={{
              width: current === i ? "40px" : "8px",
              backgroundColor: current === i ? "#fff" : "rgba(255,255,255,0.4)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/10">
        <div
          className="h-full transition-all duration-100 ease-linear"
          style={{
            width: `${progress}%`,
            backgroundColor: PRIMARY,
          }}
        />
      </div>
    </section>
  );
}
