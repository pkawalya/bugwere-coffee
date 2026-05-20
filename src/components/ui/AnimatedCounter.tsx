"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
  className = "",
  style,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className={className} style={style}>
      {count.toLocaleString()}{suffix}
    </div>
  );
}
