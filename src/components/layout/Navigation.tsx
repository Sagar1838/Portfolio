"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="section-container flex h-16 items-center justify-between lg:h-20">
        <a
          href="#top"
          className="font-mono text-sm tracking-[0.18em] text-pure-white transition-colors hover:text-highlight"
        >
          {site.monogram}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash transition-colors hover:text-pure-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-highlight/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-highlight transition-colors hover:bg-highlight hover:text-ink"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Toggle menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-pure-white transition-transform ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-pure-white transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-ink transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="section-container flex h-full flex-col justify-center gap-6 pt-16">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl uppercase tracking-tight text-pure-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
