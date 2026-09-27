import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { StaggeredTextReveal } from "@/components/ui/StaggeredTextReveal";
import { site } from "@/data/site";

export function ContactSection() {
  return (
    <section id="contact" className="relative z-10 w-full section-padding">
      <div className="section-container text-center">
        <SectionNumber number="06" />
        <h2 className="mx-auto max-w-3xl font-display text-[clamp(1.75rem,4vw,3rem)] leading-[0.95] font-medium tracking-[-0.03em] text-pure-white uppercase">
          <StaggeredTextReveal>{"LET'S BUILD SOMETHING"}</StaggeredTextReveal>
        </h2>

        <RevealOnScroll className="mt-8">
          <a
            href={`mailto:${site.email}`}
            className="inline-block break-all font-display text-[clamp(1.1rem,3vw,2.4rem)] font-bold text-pure-white underline decoration-lead underline-offset-8 transition-colors hover:text-highlight hover:decoration-highlight"
          >
            {site.email}
          </a>
        </RevealOnScroll>

        <RevealOnScroll className="mx-auto mt-8 max-w-2xl" delayMs={80}>
          <p className="font-display text-[clamp(1rem,1.6vw,1.35rem)] leading-relaxed text-ash">
            Based in {site.location} — open to frontend roles and collaborative
            product work.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
