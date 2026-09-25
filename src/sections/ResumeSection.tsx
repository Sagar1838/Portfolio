import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { StaggeredTextReveal } from "@/components/ui/StaggeredTextReveal";
import { resume } from "@/data/resume";

export function ResumeSection() {
  const { education } = resume;

  return (
    <section
      id="resume"
      className="relative z-10 w-full"
      style={{ backgroundColor: "#0A0A0A", paddingTop: 80, paddingBottom: 120 }}
    >
      <div className="section-container">
        <SectionNumber number="05" />
        <h2 className="text-center font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.9] font-medium tracking-[-0.03em] text-pure-white uppercase">
          <StaggeredTextReveal>{resume.headline}</StaggeredTextReveal>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-display text-ash">
          {resume.subcopy}
        </p>

        <RevealOnScroll className="mt-12 flex justify-center">
          <div className="relative w-full max-w-[800px] border border-lead p-8 lg:p-12">
            <CornerBrackets pulse={false} />

            <div className="mb-4 flex items-center gap-2">
              <span className="h-1 w-1 bg-cyan-trace" aria-hidden />
              <span className="font-mono text-[clamp(11px,1vw,13px)] tracking-[0.08em] text-ash uppercase">
                {education.institution}
              </span>
            </div>

            <h3 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-bold text-pure-white">
              <StaggeredTextReveal threshold={0.1}>{education.degree}</StaggeredTextReveal>
            </h3>

            <div className="mt-3 flex items-center gap-2">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                stroke="#8A8A8A"
                strokeWidth="1"
                aria-hidden
              >
                <path d="M5 0C3.34 0 2 1.34 2 3c0 2.25 3 7 3 7s3-4.75 3-7c0-1.66-1.34-3-3-3z" />
                <circle cx="5" cy="3" r="1" />
              </svg>
              <span className="font-display text-[clamp(1rem,1.2vw,1.125rem)] text-ash">
                {education.location}
              </span>
            </div>

            <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <span className="font-mono text-sm text-pure-white">{education.period}</span>
              <span className="pill-pulse border px-4 py-1.5 font-mono text-[13px] font-medium text-highlight"
                style={{ borderColor: "rgba(212,175,55,0.6)" }}
              >
                {education.cgpa}
              </span>
            </div>

            <div className="my-6 h-px w-full bg-lead" />

            <p className="font-display text-[15px] leading-relaxed text-ash">
              {education.summary}
            </p>

            <div className="mt-8">
              <a
                href={resume.downloadHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex border border-highlight/60 px-5 py-3 font-mono text-[11px] tracking-[0.14em] text-highlight uppercase transition-colors hover:bg-highlight hover:text-ink"
              >
                {resume.downloadLabel}
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
