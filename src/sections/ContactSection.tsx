import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { StaggeredTextReveal } from "@/components/ui/StaggeredTextReveal";
import { site, socialLinks } from "@/data/site";

export function ContactSection() {
  return (
    <section id="contact" className="relative z-10 w-full section-padding">
      <div className="section-container">
        <SectionNumber number="06" />
        <h2 className="max-w-3xl font-display text-[clamp(1.75rem,4vw,3rem)] leading-[0.95] font-medium tracking-[-0.03em] text-pure-white uppercase">
          <StaggeredTextReveal>{"LET'S BUILD SOMETHING"}</StaggeredTextReveal>
        </h2>

        <RevealOnScroll className="mt-8 max-w-2xl">
          <p className="font-display text-[clamp(1.05rem,1.6vw,1.35rem)] leading-relaxed text-ash">
            Based in {site.location} — open to frontend roles and collaborative
            product work.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10" delayMs={80}>
          <a
            href={`mailto:${site.email}`}
            className="inline-block font-display text-[clamp(1.4rem,3vw,2.4rem)] font-bold text-pure-white underline decoration-lead underline-offset-8 transition-colors hover:text-highlight hover:decoration-highlight"
          >
            {site.email}
          </a>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10 flex flex-wrap gap-6" delayMs={120}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-mono text-xs tracking-[0.14em] text-ash uppercase transition-colors hover:text-pure-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:+${site.phoneRaw}`}
            className="font-mono text-xs tracking-[0.14em] text-ash uppercase transition-colors hover:text-pure-white"
          >
            {site.phone}
          </a>
          <a
            href={site.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-[0.14em] text-highlight uppercase transition-colors hover:text-pure-white"
          >
            Resume
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
