"use client";

import { useEffect, useRef } from "react";

type StaggeredTextRevealProps = {
  children: string;
  mode?: "line" | "word";
  className?: string;
  threshold?: number;
};

export function StaggeredTextReveal({
  children,
  mode = "line",
  className = "",
  threshold = 0.2,
}: StaggeredTextRevealProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const inners = Array.from(node.querySelectorAll<HTMLElement>(".line-inner"));
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      inners.forEach((el) => el.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          inners.forEach((el, index) => {
            window.setTimeout(() => el.classList.add("revealed"), index * 80);
          });
          observer.unobserve(node);
        });
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [children, threshold]);

  const parts = mode === "word" ? children.split(" ") : [children];

  return (
    <span ref={containerRef} className={`inline-block overflow-hidden ${className}`}>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`} className="inline-block overflow-hidden">
          <span className="line-inner">
            {part}
            {mode === "word" && index < parts.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </span>
  );
}
