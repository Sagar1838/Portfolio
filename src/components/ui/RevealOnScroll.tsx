"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delayMs?: number;
};

function isNearViewport(node: HTMLElement, margin = 80) {
  const rect = node.getBoundingClientRect();
  return rect.top < window.innerHeight + margin && rect.bottom > -margin;
}

export function RevealOnScroll({
  children,
  className = "",
  threshold = 0,
  delayMs = 0,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let timeoutId = 0;

    const show = () => {
      timeoutId = window.setTimeout(() => {
        node.classList.add("is-visible");
      }, delayMs);
    };

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced || isNearViewport(node)) {
      show();
      return () => window.clearTimeout(timeoutId);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show();
            observer.unobserve(node);
          }
        });
      },
      { threshold, rootMargin: "100px 0px" },
    );

    observer.observe(node);
    return () => {
      window.clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [delayMs, threshold]);

  return (
    <div ref={ref} className={`reveal-up ${className}`}>
      {children}
    </div>
  );
}
