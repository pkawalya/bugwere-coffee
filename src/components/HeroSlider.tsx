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
  const [slideKey, setSlideKey] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(index > current ? "next" : "prev");
      setCurrent(index);
      setProgress(0);
      setSlideKey((k) => k + 1);
      setTimeout(() => setIsAnimating(false), 1000);
    },
    [isAnimating, current]
  );

  const next = useCallback(() => {
    setDirection("next");
    goTo((current + 1) % slides.length);
  }, [current, slides.length, goTo]);

  const prev = useCallback(() => {
    setDirection("prev");
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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next(); else prev();
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
      {/* ── Background Images with enhanced crossfade + parallax Ken Burns ── */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-all duration-[1500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          style={{
            opacity: current === i ? 1 : 0,
            transform: current === i ? "scale(1)" : "scale(1.06)",
          }}
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

      {/* ── Content-focused Overlay: dark behind text, light elsewhere ── */}
      {/* Subtle full-screen tint — just enough to keep controls readable */}
      <div className="absolute inset-0 bg-black/10" />
      {/* Bottom gradient for control bar readability */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />
      {/* Localized dark backdrop behind the text content area */}
      <div
        className="absolute inset-0 hidden sm:block"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.15) 55%, transparent 72%)",
        }}
      />
      {/* Mobile: slightly heavier since text spans wider */}
      <div
        className="absolute inset-0 sm:hidden"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 80%, transparent 100%)",
        }}
      />
      {/* Subtle vertical darkening at top for depth */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/20 to-transparent" />
      {/* Diagonal accent shape — subtle secondary color overlay (content side only) */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          clipPath: "polygon(0 0, 45% 0, 33% 100%, 0 100%)",
          background: `linear-gradient(160deg, ${SECONDARY}25, ${SECONDARY}05)`,
        }}
      />

      {/* ── Animated decorative elements ── */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full opacity-[0.03] bg-white animate-float-slow pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full opacity-[0.02] bg-white animate-float pointer-events-none" />
      {/* Horizontal accent line */}
      <div
        className="absolute left-0 right-0 top-1/2 h-px opacity-[0.06] pointer-events-none"
        style={{ background: `linear-gradient(90deg, transparent, white, transparent)` }}
      />

      {/* ── Slide Content with directional animations ── */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16">
          <div className="max-w-xl">
            {/* Subtitle pill */}
            <span
              key={`sub-${slideKey}`}
              className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white mb-6"
              style={{
                backgroundColor: PRIMARY,
                animation: direction === "next"
                  ? "slideInRight 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both"
                  : "slideInLeft 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both",
              }}
            >
              {slide.subtitle}
            </span>

            {/* Title — reduced font sizes */}
            <h1
              key={`title-${slideKey}`}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-white leading-[1.15] mb-4"
              style={{
                fontFamily: FONT_RALEWAY,
                animation: direction === "next"
                  ? "heroTitleNext 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both"
                  : "heroTitlePrev 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both",
              }}
            >
              {slide.title}
            </h1>

            {/* Description */}
            <p
              key={`desc-${slideKey}`}
              className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-md"
              style={{
                animation: direction === "next"
                  ? "fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s both"
                  : "fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s both",
              }}
            >
              {slide.description}
            </p>

            {/* CTAs */}
            <div
              key={`cta-${slideKey}`}
              className="flex flex-wrap gap-3"
              style={{
                animation: direction === "next"
                  ? "fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s both"
                  : "fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s both",
              }}
            >
              <Link
                href={slide.ctaHref}
                className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#c94449]/25 hover:scale-[1.04]"
                style={{ backgroundColor: PRIMARY, fontFamily: FONT_OPENSANS }}
              >
                {slide.cta}
              </Link>
              <Link
                href="#manifesto"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/20 text-white font-semibold text-sm rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm"
                style={{ fontFamily: FONT_OPENSANS }}
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right side: Vertical slide indicator — sleek dots ── */}
      <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="group relative flex items-center gap-3 transition-all duration-500"
            aria-label={`Go to slide ${i + 1}`}
          >
            {/* Slide number */}
            <span
              className={`text-[10px] font-bold transition-all duration-300 ${
                current === i
                  ? "text-white opacity-100"
                  : "text-white/25 opacity-0 group-hover:opacity-50"
              }`}
              style={{ fontFamily: FONT_RALEWAY }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {/* Track bar with active progress glow */}
            <span
              className="block rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                width: "2px",
                height: current === i ? "36px" : "12px",
                backgroundColor: current === i ? "#fff" : "rgba(255,255,255,0.2)",
                boxShadow: current === i ? "0 0 8px rgba(255,255,255,0.3)" : "none",
              }}
            />
          </button>
        ))}
      </div>

      {/* ── Bottom Control Bar ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-6 pt-6 flex items-center justify-between">
          {/* Left: dot indicators + slide counter */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="rounded-full transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    width: current === i ? "24px" : "6px",
                    height: "6px",
                    backgroundColor: current === i ? "#fff" : "rgba(255,255,255,0.3)",
                    boxShadow: current === i ? "0 0 6px rgba(255,255,255,0.4)" : "none",
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <span
              className="text-white/35 text-xs font-medium hidden sm:block"
              style={{ fontFamily: FONT_OPENSANS }}
            >
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Right: play/pause + arrows */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="w-8 h-8 rounded-full bg-white/8 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-all"
              aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
            >
              {isPaused ? <Play className="w-3 h-3 ml-0.5" /> : <Pause className="w-3 h-3" />}
            </button>
            <button
              onClick={prev}
              className="w-8 h-8 rounded-full bg-white/8 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={next}
              className="w-8 h-8 rounded-full bg-white/8 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Progress bar with gradient */}
        <div className="h-[2px] bg-white/8">
          <div
            className="h-full transition-all duration-100 ease-linear"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${PRIMARY}, #e87074)`,
            }}
          />
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2">
        <span
          className="text-white/30 text-[10px] uppercase tracking-[0.25em]"
          style={{ fontFamily: FONT_OPENSANS }}
        >
          Scroll
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-white/30 animate-bounce" />
      </div>
    </section>
  );
}
