import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { StaggeredTextReveal } from "@/components/ui/StaggeredTextReveal";
import { site } from "@/data/site";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh w-full items-end overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 20%, rgba(212,175,55,0.12) 0%, transparent 45%), radial-gradient(ellipse at 20% 80%, rgba(0,180,216,0.08) 0%, transparent 40%), linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.35) 45%, rgba(10,10,10,1) 100%), #0A0A0A",
        }}
        aria-hidden
      />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(138,138,138,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(138,138,138,0.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />

      <div className="section-container relative z-10 w-full pb-16 pt-28 lg:pb-24 lg:pt-32">
        <div className="relative max-w-5xl border border-lead/80 p-6 sm:p-10 lg:p-14">
          <CornerBrackets />

          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-highlight">
            Portfolio / {site.location.split(",")[0]}
          </p>

          <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] font-medium tracking-[-0.03em] text-pure-white uppercase">
            <StaggeredTextReveal>{site.name.toUpperCase()}</StaggeredTextReveal>
          </h1>

          <p className="mt-6 font-mono text-[clamp(0.85rem,2vw,1.1rem)] tracking-[0.18em] text-ash uppercase">
            <StaggeredTextReveal mode="word">{site.roleLine}</StaggeredTextReveal>
          </p>

          <p className="mt-4 max-w-xl font-display text-base text-ash sm:text-lg">
            {site.location}
          </p>
        </div>

        <div className="mt-12 flex items-center gap-3 font-mono text-[11px] tracking-[0.16em] text-ash uppercase">
          <span className="scroll-bob inline-block h-8 w-px bg-ash/50" aria-hidden />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
