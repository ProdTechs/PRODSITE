import type { CSSProperties } from "react";

/** Linha de 1px que desenha (scaleX 0 → 1) ao entrar na viewport. */
export function Rule({
  className = "text-muted/40",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <div
      aria-hidden="true"
      data-reveal="draw"
      className={`rule ${className}`}
      style={{ "--i": delay } as CSSProperties}
    />
  );
}
