"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

function subscribePointer(onStoreChange: () => void) {
  const fine = window.matchMedia("(pointer: fine)");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  fine.addEventListener("change", onStoreChange);
  reduced.addEventListener("change", onStoreChange);
  return () => {
    fine.removeEventListener("change", onStoreChange);
    reduced.removeEventListener("change", onStoreChange);
  };
}

function getPointerSnapshot() {
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function CustomCursor() {
  const enabled = useSyncExternalStore(
    subscribePointer,
    getPointerSnapshot,
    () => false,
  );
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest(
        "a, button, [role='button'], input, textarea, select",
      );
      setHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  const size = hovering ? 20 : 14;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
      style={{
        width: size,
        height: size,
        transform: `translate(${position.x - size / 2}px, ${position.y - size / 2}px)`,
        transition: "width 0.2s, height 0.2s",
      }}
      aria-hidden
    >
      <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none">
        <line x1="8" y1="0" x2="8" y2="16" stroke="#D4AF37" strokeWidth="1" />
        <line x1="0" y1="8" x2="16" y2="8" stroke="#D4AF37" strokeWidth="1" />
      </svg>
    </div>
  );
}
