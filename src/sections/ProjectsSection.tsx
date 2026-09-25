"use client";

import { useRef, type MouseEvent } from "react";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { StaggeredTextReveal } from "@/components/ui/StaggeredTextReveal";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const mediaRef = useRef<HTMLDivElement>(null);

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const node = mediaRef.current;
    if (!node || window.matchMedia("(pointer: coarse)").matches) return;

    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    node.style.transform = `perspective(1000px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) scale3d(1.01, 1.01, 1)`;
  };

  const onLeave = () => {
    const node = mediaRef.current;
    if (!node) return;
    node.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <RevealOnScroll>
      <article
        className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
          project.reversed ? "" : ""
        }`}
      >
        <div
          className={`lg:col-span-6 ${project.reversed ? "lg:order-2" : "lg:order-1"}`}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          <div
            ref={mediaRef}
            className="transition-transform duration-500"
            style={{
              transform:
                "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
              transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            <MediaPlaceholder label={project.imagePlaceholderLabel} />
          </div>
          <p className="mt-3 font-mono text-[11px] tracking-[0.12em] text-ash">
            FIG. {String(index + 1).padStart(2, "0")} — PROJECT
          </p>
        </div>

        <div
          className={`lg:col-span-6 ${project.reversed ? "lg:order-1" : "lg:order-2"}`}
        >
          <p className="font-mono text-[11px] tracking-[0.14em] text-highlight uppercase">
            {project.subtitle}
          </p>
          <h3 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-tight text-pure-white">
            {project.title}
          </h3>
          <div className="mt-5 space-y-3">
            {project.description.map((paragraph) => (
              <p
                key={paragraph}
                className="font-display text-[15px] leading-relaxed text-ash"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-lead px-2.5 py-1 font-mono text-[11px] text-ash"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </RevealOnScroll>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 w-full section-padding">
      <div className="section-container">
        <SectionNumber number="04" />
        <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.9] font-medium tracking-[-0.03em] text-pure-white uppercase">
          <StaggeredTextReveal>SELECTED WORKS</StaggeredTextReveal>
        </h2>
        <p className="mt-4 max-w-xl font-display text-[clamp(1rem,1.5vw,1.25rem)] text-ash">
          Projects that define my craft.
        </p>

        <div className="mt-14 space-y-16 lg:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
