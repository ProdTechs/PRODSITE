type Props = {
  label: string;
  right?: string;
  tone?: "light" | "dark";
};

/** Label de canto: "O QUE FAZEMOS" ··· label à direita. */
export function SectionLabel({ label, right, tone = "light" }: Props) {
  const muted = tone === "dark" ? "text-bg/55" : "text-muted";

  return (
    <div className="flex items-baseline justify-between gap-6 pb-4">
      <p className="mono-label">{label}</p>
      {right && <p className={`mono-label hidden sm:block ${muted}`}>{right}</p>}
    </div>
  );
}
