"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HERO, NAV, SITE, whatsappLink } from "@/lib/content";
import { Cursor } from "@/components/ui/Cursor";

const pad = (n: number) => String(n).padStart(2, "0");

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-muted/40 bg-bg transition-[height] duration-300 ${
        scrolled ? "h-14" : "h-[72px]"
      }`}
    >
      <div className="container-x flex h-full items-center justify-between gap-8">
        <Link
          href="/"
          className="text-[22px] font-semibold tracking-[-0.04em]"
          aria-label={`${SITE.name} — início`}
          onClick={() => setOpen(false)}
        >
          {SITE.name}
          <Cursor blink={false} />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item, i) => (
            <Link key={item.href} href={item.href} className="group font-mono text-[13px]">
              <span className="mr-2 text-muted transition-colors group-hover:text-accent">{pad(i + 1)}</span>
              <span className="link-u">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink(HERO.primaryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden h-10 items-center gap-4 bg-ink px-4 font-mono text-[13px] text-bg transition-colors hover:bg-accent hover:text-ink sm:inline-flex"
          >
            Vamos conversar
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className={`relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-[6px] border lg:hidden ${
              open ? "border-bg/40 text-bg" : "border-ink text-ink"
            }`}
          >
            <span
              className={`block h-px w-4 bg-current transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-current transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Menu mobile: tela cheia --ink */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[55] flex flex-col bg-ink text-bg transition-[clip-path] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] lg:hidden ${
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="container-x flex h-[72px] items-center">
          <span className="mono-label text-bg/55">Menu</span>
        </div>
        <nav aria-label="Menu mobile" className="container-x flex flex-1 flex-col justify-center">
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-5 border-t border-bg/15 py-5 last:border-b"
            >
              <span className="font-mono text-sm text-accent">{pad(i + 1)}</span>
              <span className="text-[clamp(36px,10vw,64px)] font-semibold leading-none tracking-[-0.045em] transition-transform duration-300 group-hover:translate-x-2">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
        <div className="container-x flex items-center justify-between gap-4 pb-8 pt-6">
          <a
            href={whatsappLink(HERO.primaryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-6 bg-accent px-5 font-mono text-[13px] text-ink"
          >
            Vamos conversar <span aria-hidden="true">→</span>
          </a>
          <span className="mono-label text-bg/55">{SITE.city}</span>
        </div>
      </div>
    </header>
  );
}
