import { site, socialLinks } from "@/data/site";

const linkClass =
  "font-mono text-xs tracking-[0.12em] text-ash uppercase transition-colors hover:text-pure-white";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-lead bg-ink">
      <div className="section-container flex flex-col items-center gap-6 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-lg font-medium text-pure-white">{site.name}</p>
          <p className="mt-1 font-mono text-xs tracking-[0.14em] text-ash uppercase">
            {site.role}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-end">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={linkClass}
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Resume
          </a>
          <a href={`tel:+${site.phoneRaw}`} className={linkClass}>
            {site.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
