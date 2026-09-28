import type { CasePreview as Kind } from "@/lib/content";

/** Wireframe monocromático de cada tipo de solução (substituir por imagens P&B reais via next/image). */
export function CasePreview({ kind, className = "" }: { kind: Kind; className?: string }) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-label={`Esboço: ${kind}`}>
      <rect width="320" height="220" fill="var(--ink)" />
      <g fill="none" stroke="var(--bg)" strokeWidth="1" opacity="0.9">
        <rect x="16" y="16" width="288" height="188" />
        <path d="M16 34h288" />
      </g>
      <g fill="var(--bg)">
        <rect x="24" y="22" width="36" height="6" opacity="0.8" />
        <rect x="286" y="22" width="10" height="6" fill="var(--bg)" />
      </g>

      {kind === "catalog" && (
        <g stroke="var(--bg)" fill="none">
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${28 + i * 64} 48)`}>
              <rect width="54" height="54" opacity="0.6" />
              <path d="M0 66h40M0 76h24" opacity="0.6" />
              <rect y="86" width="54" height="12" fill="var(--bg)" opacity={i === 1 ? 1 : 0.5} stroke="none" />
            </g>
          ))}
          <rect x="224" y="48" width="68" height="144" opacity="0.6" />
          <rect x="232" y="60" width="44" height="14" opacity="0.8" />
          <rect x="244" y="82" width="40" height="14" fill="var(--bg)" stroke="none" opacity="0.8" />
          <rect x="232" y="104" width="50" height="14" opacity="0.8" />
          <path d="M232 176h52" stroke="var(--bg)" strokeWidth="3" />
        </g>
      )}

      {kind === "dashboard" && (
        <g stroke="var(--bg)" fill="none">
          <path d="M72 34v170" opacity="0.6" />
          <path d="M28 52h32M28 66h26M28 80h30M28 94h22" opacity="0.6" />
          <rect x="84" y="46" width="64" height="34" opacity="0.6" />
          <rect x="156" y="46" width="64" height="34" opacity="0.6" />
          <rect x="228" y="46" width="64" height="34" opacity="0.6" />
          <path d="M92 70h24M164 70h32M236 70h18" strokeWidth="3" />
          <rect x="84" y="90" width="208" height="102" opacity="0.6" />
          <path d="M96 176l30-26 26 14 34-40 28 18 30-32 36 12" />
          <path d="M96 176l30-26 26 14 34-40" strokeWidth="2" />
        </g>
      )}

      {kind === "landing" && (
        <g stroke="var(--bg)" fill="none">
          <rect x="32" y="56" width="140" height="14" fill="var(--bg)" stroke="none" />
          <rect x="32" y="76" width="100" height="14" fill="var(--bg)" stroke="none" />
          <path d="M32 104h120M32 114h96" opacity="0.6" />
          <rect x="32" y="132" width="72" height="18" fill="var(--bg)" stroke="none" />
          <rect x="196" y="52" width="96" height="136" opacity="0.6" />
          {[0, 1, 2, 3].map((r) =>
            [0, 1, 2, 3].map((c) => (
              <rect
                key={`${r}-${c}`}
                x={206 + c * 20}
                y={80 + r * 22}
                width="14"
                height="14"
                opacity={r === 1 && c === 2 ? 1 : 0.5}
                fill={r === 1 && c === 2 ? "var(--bg)" : "none"}
                stroke="var(--bg)"
              />
            )),
          )}
          <path d="M206 64h52" />
        </g>
      )}

      {kind === "store" && (
        <g stroke="var(--bg)" fill="none">
          <rect x="28" y="46" width="130" height="146" opacity="0.6" />
          <path d="M60 172V92l33-26 33 26v80" opacity="0.8" />
          <rect x="170" y="46" width="122" height="12" fill="var(--bg)" stroke="none" />
          <path d="M170 72h80M170 84h60" opacity="0.6" />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={170 + i * 22} y="104" width="16" height="16" opacity="0.6" />
          ))}
          <rect x="170" y="140" width="122" height="18" fill="var(--bg)" stroke="none" />
          <rect x="170" y="166" width="122" height="18" opacity="0.6" />
        </g>
      )}
    </svg>
  );
}
