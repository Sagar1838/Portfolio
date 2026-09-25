import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { StaggeredTextReveal } from "@/components/ui/StaggeredTextReveal";
import { aboutStats, site } from "@/data/site";

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 w-full section-padding overflow-hidden">
      <div className="section-container relative">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <RevealOnScroll className="relative lg:col-span-5">
            <div className="relative">
              <MediaPlaceholder
                label="Portrait photo coming soon"
                aspectClassName="aspect-[3/4]"
              />
              <div className="pointer-events-none absolute top-4 left-4 font-mono text-[10px] tracking-[0.12em] text-cyan-trace">
                H: 480
              </div>
              <div className="pointer-events-none absolute top-4 right-4 font-mono text-[10px] tracking-[0.12em] text-cyan-trace">
                W: 360
              </div>
              <div className="pointer-events-none absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.12em] text-ash">
                ORIGIN: TL
              </div>
              <p className="mt-4 font-mono text-xs tracking-[0.12em] text-ash uppercase">
                {site.name}
              </p>
            </div>
          </RevealOnScroll>

          <div className="lg:col-span-7">
            <SectionNumber number="01" />
            <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.9] font-medium tracking-[-0.03em] text-pure-white uppercase">
              <StaggeredTextReveal>ABOUT</StaggeredTextReveal>
            </h2>

            <RevealOnScroll className="mt-8" delayMs={80}>
              <p className="max-w-2xl font-display text-[clamp(1rem,1.4vw,1.2rem)] leading-relaxed text-ash">
                {site.summary}
              </p>
            </RevealOnScroll>

            <RevealOnScroll className="mt-10" delayMs={140}>
              <p className="font-display text-sm text-ash">
                Currently at GTCSYS Technology Partners as a Frontend Developer,
                focused on production ReactJS, TypeScript, Next.js, and Vue.js
                interfaces.
              </p>
            </RevealOnScroll>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {aboutStats.map((stat, index) => (
                <RevealOnScroll key={stat.label} delayMs={100 + index * 80}>
                  <div className="border border-lead p-5">
                    <p className="font-display text-3xl text-pure-white sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 font-mono text-[11px] tracking-[0.12em] text-ash uppercase">
                      {stat.label}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
