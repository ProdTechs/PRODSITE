import type { CSSProperties, ElementType, ReactNode } from "react";

/** Título com reveal linha a linha. O último elemento pode receber o cursor. */
export function Lines({
  as: Tag = "h2",
  lines,
  className = "",
  after,
}: {
  as?: ElementType;
  lines: string[];
  className?: string;
  after?: ReactNode;
}) {
  return (
    <Tag data-reveal="lines" className={className}>
      {lines.map((line, i) => (
        <span key={i} className="line">
          <span style={{ "--i": i } as CSSProperties}>
            {line}
            {i === lines.length - 1 && after}
          </span>
        </span>
      ))}
    </Tag>
  );
}
