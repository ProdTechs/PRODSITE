"use client";

import { useEffect, useState } from "react";
import { TERMINAL_SCENARIOS } from "@/lib/content";

type Line = (typeof TERMINAL_SCENARIOS)[number][number];

const TYPE_MS = 28;
const LINE_PAUSE_MS = 650;
const CYCLE_PAUSE_MS = 2600;

function renderLine(line: Line, text: string) {
  if (!line.hl) return text;
  const at = line.text.indexOf(line.hl);
  if (at < 0 || text.length <= at) return text;
  return (
    <>
      {text.slice(0, at)}
      <span className="text-accent">{text.slice(at, at + line.hl.length)}</span>
      {text.slice(at + line.hl.length)}
    </>
  );
}

/** Mini terminal: as linhas de cada cenário são digitadas em loop. */
export function TerminalDemo() {
  const [scenario, setScenario] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [chars, setChars] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const lines = TERMINAL_SCENARIOS[scenario];

  useEffect(() => {
    if (reduced) return;
    let t: ReturnType<typeof setTimeout>;
    if (lineIdx >= lines.length) {
      t = setTimeout(() => {
        setScenario((s) => (s + 1) % TERMINAL_SCENARIOS.length);
        setLineIdx(0);
        setChars(0);
      }, CYCLE_PAUSE_MS);
    } else if (chars < lines[lineIdx].text.length) {
      t = setTimeout(() => setChars((c) => c + 1), TYPE_MS);
    } else {
      t = setTimeout(() => {
        setLineIdx((i) => i + 1);
        setChars(0);
      }, LINE_PAUSE_MS);
    }
    return () => clearTimeout(t);
  }, [reduced, lines, lineIdx, chars]);

  const shownLines = reduced ? lines.length : lineIdx;

  return (
    <div className="flex h-full min-h-[300px] flex-col bg-ink text-bg" role="img" aria-label="Simulação do fluxo: lead chega pelo catálogo, bot conversa, lead é pontuado e encaminhado.">
      <div className="flex items-center justify-between border-b border-bg/15 px-5 py-3">
        <span className="mono-label text-bg/55">pipeline / leads.log</span>
        <span className="mono-label flex items-center gap-2 text-bg/55">
          <span className="cursor inline-block h-2 w-2 bg-accent" />
          Ao vivo
        </span>
      </div>
      <div aria-hidden="true" className="flex-1 space-y-3 px-5 py-6 font-mono text-[13px] leading-relaxed sm:text-sm">
        {lines.map((line, i) => {
          if (i > shownLines) return null;
          const typing = i === shownLines;
          if (typing && reduced) return null;
          const text = typing ? line.text.slice(0, chars) : line.text;
          return (
            <p key={`${scenario}-${i}`} className="flex gap-3">
              <span className="text-muted">&gt;</span>
              <span>
                {renderLine(line, text)}
                {typing && <span className="cursor">_</span>}
              </span>
            </p>
          );
        })}
        {shownLines >= lines.length && (
          <p className="flex gap-3">
            <span className="text-muted">&gt;</span>
            <span className="cursor">_</span>
          </p>
        )}
      </div>
      <div className="grid grid-cols-3 border-t border-bg/15 font-mono text-[11px] text-bg/55">
        {["catálogo", "bot", "crm"].map((s, i) => (
          <span key={s} className={`px-5 py-3 ${i > 0 ? "border-l border-bg/15" : ""}`}>
            {s} <span className="text-bg">ok</span>
          </span>
        ))}
      </div>
    </div>
  );
}
