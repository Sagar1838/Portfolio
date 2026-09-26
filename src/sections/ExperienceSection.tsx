"use client";

import Image from "next/image";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { StaggeredTextReveal } from "@/components/ui/StaggeredTextReveal";
import { experience } from "@/data/experience";
import type { ExperienceRole } from "@/types";

function ExperienceMedia({ role }: { role: ExperienceRole }) {
  if (!role.imageSrc) {
    return <MediaPlaceholder label={role.imagePlaceholderLabel} />;
  }

  return (
    <div className="relative aspect-[16/9] overflow-hidden border border-lead bg-steel">
      <Image
        src={role.imageSrc}
        alt={role.imageAlt ?? role.title}
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover object-center"
        unoptimized
        priority
      />
      <div className="corner-bracket corner-bracket-tl" aria-hidden />
      <div className="corner-bracket corner-bracket-br" aria-hidden />
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="relative z-10 w-full section-padding">
      <div className="section-container">
        <SectionNumber number="03" />
        <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.9] font-medium tracking-[-0.03em] text-pure-white uppercase">
          <StaggeredTextReveal>EXPERIENCE</StaggeredTextReveal>
        </h2>
        <p className="mt-4 max-w-xl font-display text-[clamp(1rem,1.5vw,1.25rem)] text-ash">
          Production frontend work across ReactJS, TypeScript, Next.js, and Vue.js.
        </p>

        <div className="mt-14 space-y-20 lg:space-y-28">
          {experience.map((role, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <RevealOnScroll key={role.id} threshold={0}>
                <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                  <div
                    className={`lg:col-span-5 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <ExperienceMedia role={role} />
                    <p className="mt-3 font-mono text-[11px] tracking-[0.12em] text-ash">
                      {role.figureLabel}
                    </p>
                  </div>

                  <div
                    className={`lg:col-span-7 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <p className="font-mono text-[11px] tracking-[0.14em] text-highlight uppercase">
                      {role.period}
                    </p>
                    <h3 className="mt-3 font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-pure-white">
                      {role.title}
                    </h3>
                    <p className="mt-2 font-display text-lg text-ash">{role.company}</p>
                    <ul className="mt-6 space-y-3">
                      {role.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 font-display text-[15px] leading-relaxed text-ash"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 bg-cyan-trace" aria-hidden />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
