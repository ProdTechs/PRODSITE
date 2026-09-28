import { TOTAL_SECTIONS } from "@/lib/content";

type Props = {
  index: number;
  label: string;
  right?: string;
  tone?: "light" | "dark";
  total?: number;
};

/** Label de canto: "03 / 07  O QUE FAZEMOS" ··· label à direita. */
export function SectionLabel({ index, label, right, tone = "light", total = TOTAL_SECTIONS }: Props) {
  const pad = (n: number) => String(n).padStart(2, "0");
  const muted = tone === "dark" ? "text-bg/55" : "text-muted";

  return (
    <div className="flex items-baseline justify-between gap-6 pb-4">
      <p className="mono-label flex gap-5">
        <span className={muted}>
          {pad(index)} / {pad(total)}
        </span>
        <span>{label}</span>
      </p>
      {right && <p className={`mono-label hidden sm:block ${muted}`}>{right}</p>}
    </div>
  );
}
