import Link from "next/link";
import { CASES } from "@/lib/content";

/** Lista editorial de cases: título, setor e seta. */
export function CasesList() {
  return (
    <ul className="border-t border-muted/40">
      {CASES.map((c) => (
        <li key={c.slug} className="border-b border-muted/40">
          <Link
            href={`/cases/${c.slug}`}
            className="group flex items-baseline justify-between gap-6 py-6 sm:py-7"
          >
            <span className="text-[clamp(20px,2.2vw,30px)] font-medium leading-tight tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-2">
              {c.title}
            </span>
            <span className="flex shrink-0 items-baseline gap-6 font-mono text-[13px] text-muted">
              <span className="hidden sm:inline">{c.sector}</span>
              <span
                aria-hidden="true"
                className="transition-[color,translate] duration-300 group-hover:translate-x-1 group-hover:text-accent"
              >
                →
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
