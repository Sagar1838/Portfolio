import { site, socialLinks } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-lead bg-ink">
      <div className="section-container flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-xs tracking-[0.16em] text-pure-white">
            {site.monogram}
          </p>
          <p className="mt-2 font-mono text-xs text-ash">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-mono text-xs text-ash transition-colors hover:text-pure-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:+${site.phoneRaw}`}
            className="font-mono text-xs text-ash transition-colors hover:text-pure-white"
          >
            {site.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
