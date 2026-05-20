"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ChevronDown, Play, Pause } from "lucide-react";
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
  const [slideKey, setSlideKey] = useState(0); // force re-render for animations
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setProgress(0);
      setSlideKey((k) => k + 1);
      setTimeout(() => setIsAnimating(false), 900);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, slides.length, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, slides.length, goTo]);

  useEffect(() => {
    if (isPaused) return;
    progressRef.current = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 100 / 60));
    }, 100);
    intervalRef.current = setInterval(next, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [next, isPaused]);

  // Touch / swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) { next(); } else { prev(); }
    }
    touchStartX.current = null;
  };

  const slide = slides[current];

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Background Images with crossfade + Ken Burns ── */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className={`object-cover ${current === i ? "animate-ken-burns" : ""}`}
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* ── Layered Gradient Overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      {/* Vignette effect */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Diagonal accent shape */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          clipPath: "polygon(0 0, 55% 0, 42% 100%, 0 100%)",
          background: `linear-gradient(135deg, ${SECONDARY}35, ${SECONDARY}08)`,
        }}
      />

      {/* ── Floating decorative orbs ── */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-[0.03] bg-white animate-float-slow pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full opacity-[0.02] bg-white animate-float pointer-events-none" />

      {/* ── Slide Content ── */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16">
          <div className="max-w-xl">
            {/* Subtitle pill */}
            <span
              key={`sub-${slideKey}`}
              className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white mb-7 animate-fade-in-up"
              style={{
                backgroundColor: PRIMARY,
                animationDelay: "0.1s",
                animationFillMode: "both",
              }}
            >
              {slide.subtitle}
            </span>

            {/* Title — REDUCED font sizes */}
            <h1
              key={`title-${slideKey}`}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.12] mb-5 animate-fade-in-up"
              style={{
                fontFamily: FONT_RALEWAY,
                animationDelay: "0.25s",
                animationFillMode: "both",
              }}
            >
              {slide.title}
            </h1>

            {/* Description */}
            <p
              key={`desc-${slideKey}`}
              className="text-white/70 text-base sm:text-lg leading-relaxed mb-9 max-w-md animate-fade-in-up"
              style={{
                animationDelay: "0.4s",
                animationFillMode: "both",
              }}
            >
              {slide.description}
            </p>

            {/* CTAs */}
            <div
              key={`cta-${slideKey}`}
              className="flex flex-wrap gap-4 animate-fade-in-up"
              style={{
                animationDelay: "0.55s",
                animationFillMode: "both",
              }}
            >
              <Link
                href={slide.ctaHref}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-xl hover:scale-[1.04] hover:brightness-110"
                style={{ backgroundColor: PRIMARY, fontFamily: FONT_OPENSANS }}
              >
                {slide.cta}
              </Link>
              <Link
                href="#manifesto"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/20 text-white font-semibold text-sm rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm"
                style={{ fontFamily: FONT_OPENSANS }}
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right side: Vertical slide counter ── */}
      <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="group relative flex items-center gap-3 transition-all duration-500"
            aria-label={`Go to slide ${i + 1}`}
          >
            {/* Slide number */}
            <span
              className={`text-[11px] font-bold transition-all duration-300 ${
                current === i
                  ? "text-white opacity-100"
                  : "text-white/30 opacity-0 group-hover:opacity-60"
              }`}
              style={{ fontFamily: FONT_RALEWAY }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {/* Track bar */}
            <span
              className="block rounded-full transition-all duration-500"
              style={{
                width: "3px",
                height: current === i ? "40px" : "14px",
                backgroundColor: current === i ? "#fff" : "rgba(255,255,255,0.25)",
              }}
            />
          </button>
        ))}
      </div>

      {/* ── Bottom Control Bar ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-7 pt-7 flex items-center justify-between">
          {/* Left: dot indicators + slide counter */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="rounded-full transition-all duration-500"
                  style={{
                    width: current === i ? "28px" : "8px",
                    height: "8px",
                    backgroundColor: current === i ? "#fff" : "rgba(255,255,255,0.3)",
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <span
              className="text-white/40 text-xs font-medium hidden sm:block"
              style={{ fontFamily: FONT_OPENSANS }}
            >
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Right: play/pause + arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
              aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 ml-0.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Thin progress bar */}
        <div className="h-[2px] bg-white/10">
          <div
            className="h-full transition-all duration-100 ease-linear"
            style={{ width: `${progress}%`, backgroundColor: PRIMARY }}
          />
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2">
        <span
          className="text-white/40 text-[10px] uppercase tracking-[0.25em]"
          style={{ fontFamily: FONT_OPENSANS }}
        >
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-white/40 animate-bounce" />
      </div>
    </section>
  );
}
