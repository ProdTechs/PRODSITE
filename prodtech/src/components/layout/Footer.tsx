import Link from "next/link";
import { FOOTER_COLUMNS, SITE } from "@/lib/content";
import { Cursor } from "@/components/ui/Cursor";
import { Rule } from "@/components/ui/Rule";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <Rule />
      <div className="container-x">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 py-16 md:grid-cols-4 md:py-20">
          <div className="col-span-2 md:col-span-1">
            <p className="text-[22px] font-semibold tracking-[-0.04em]">
              {SITE.name}
              <Cursor blink={false} />
            </p>
            <p className="mt-4 max-w-[26ch] font-mono text-[13px] leading-relaxed text-muted">{SITE.tagline}</p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="mono-label text-muted">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => {
                  const external = /^(https?:|mailto:)/.test(link.href);
                  return (
                    <li key={link.label}>
                      {external ? (
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="link-u font-mono text-[13px]"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className="link-u font-mono text-[13px]">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 border-t border-muted/40 py-5 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {SITE.name}_
          </span>
          <span>{SITE.city}</span>
          <span>{SITE.domain}</span>
        </div>
      </div>

      {/* "ProdTech_" gigante vazando na base */}
      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
        <p className="-mb-[0.26em] whitespace-nowrap text-center text-[17vw] font-semibold leading-none tracking-[-0.06em] text-ink">
          {SITE.name}
          <span className="text-accent">_</span>
        </p>
      </div>
    </footer>
  );
}
