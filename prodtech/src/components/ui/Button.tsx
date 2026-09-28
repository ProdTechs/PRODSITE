import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "ink" | "accent" | "outline-light";

const variants: Record<Variant, string> = {
  ink: "bg-ink text-bg hover:bg-accent hover:text-ink",
  accent: "bg-accent text-ink hover:bg-bg",
  "outline-light": "border border-bg/40 text-bg hover:border-accent hover:bg-accent hover:text-ink",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "ink",
  arrow = true,
  className = "",
  external,
}: Props) {
  const isExternal = external ?? /^(https?:|mailto:)/.test(href);
  const cls = `group inline-flex h-12 items-center justify-between gap-6 px-5 font-mono text-[13px] tracking-tight transition-colors duration-200 ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      )}
    </>
  );

  return isExternal ? (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
