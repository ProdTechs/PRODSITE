"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const reveal = (el: Element) => el.setAttribute("data-in", "");

/** Marca com data-in todo [data-reveal] que entra na viewport; o CSS faz o resto. */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-in])"));

    // Sem IntersectionObserver: nada pode ficar escondido.
    if (!("IntersectionObserver" in window)) {
      els.forEach(reveal);
      return;
    }

    // O que já está na tela aparece de imediato, sem depender do primeiro callback do observer.
    const vh = window.innerHeight;
    const pending = els.filter((el) => {
      const { top, bottom } = el.getBoundingClientRect();
      if (top < vh && bottom >= 0) {
        reveal(el);
        return false;
      }
      return true;
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target);
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    pending.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
