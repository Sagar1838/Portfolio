import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { StaggeredTextReveal } from "@/components/ui/StaggeredTextReveal";
import { skillCategories } from "@/data/skills";

const icons = [
  <svg key="core" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8A8A8A" strokeWidth="1.5" aria-hidden>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>,
  <svg key="state" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8A8A8A" strokeWidth="1.5" aria-hidden>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
  </svg>,
  <svg key="ui" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8A8A8A" strokeWidth="1.5" aria-hidden>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>,
  <svg key="tools" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8A8A8A" strokeWidth="1.5" aria-hidden>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>,
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 w-full section-padding">
      <div className="section-container">
        <SectionNumber number="02" />
        <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.9] font-medium tracking-[-0.03em] text-pure-white uppercase">
          <StaggeredTextReveal>TECHNICAL ARSENAL</StaggeredTextReveal>
        </h2>
        <p className="mt-4 max-w-xl font-display text-[clamp(1rem,1.5vw,1.25rem)] text-ash">
          Technologies and tools I work with daily.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, index) => (
            <RevealOnScroll key={category.name} delayMs={index * 70}>
              <article className="skill-card flex h-full flex-col border border-lead p-6 transition-all duration-700">
                <div className="mb-5 flex items-start justify-between gap-3">
                  {icons[index]}
                  <span className="font-mono text-[10px] tracking-[0.12em] text-ash uppercase">
                    {category.countLabel}
                  </span>
                </div>
                <h3 className="font-display text-xl text-pure-white">{category.name}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-lead px-2.5 py-1 font-mono text-[11px] text-ash"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
