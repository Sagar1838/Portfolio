import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { StaggeredTextReveal } from "@/components/ui/StaggeredTextReveal";
import { site } from "@/data/site";

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 w-full section-padding overflow-hidden">
      <div className="section-container relative">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <RevealOnScroll className="relative mx-auto w-full max-w-xs lg:col-span-4 lg:max-w-none" threshold={0}>
            <div className="relative aspect-[3/4] overflow-hidden border border-lead bg-steel">
              <Image
                src={site.portraitSrc}
                alt={site.portraitAlt}
                fill
                sizes="(max-width: 1024px) 320px, 33vw"
                className="object-cover object-[center_20%]"
                priority
                unoptimized
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,10,10,0.45) 0%, transparent 35%)",
                }}
                aria-hidden
              />
              <div className="corner-bracket corner-bracket-tl" aria-hidden />
              <div className="corner-bracket corner-bracket-br" aria-hidden />
            </div>
          </RevealOnScroll>

          <div className="lg:col-span-8">
            <SectionNumber number="01" />
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.9] font-medium tracking-[-0.03em] text-pure-white uppercase">
              <StaggeredTextReveal>ABOUT</StaggeredTextReveal>
            </h2>

            <RevealOnScroll className="mt-8" delayMs={80}>
              <p className="font-display text-[clamp(1rem,1.4vw,1.2rem)] leading-relaxed text-ash">
                {site.summary}
              </p>
            </RevealOnScroll>

            <RevealOnScroll className="mt-8" delayMs={140}>
              <p className="font-display text-sm text-ash">
                Currently at GTCSYS Technology Partners as a Frontend Developer,
                focused on production ReactJS, TypeScript, Next.js, and Vue.js
                interfaces.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
