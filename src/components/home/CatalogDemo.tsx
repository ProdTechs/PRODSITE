"use client";

import { useEffect, useRef, useState } from "react";
import { DEMO_PRODUCTS, DEMO_QUESTIONS } from "@/lib/content";

type Product = (typeof DEMO_PRODUCTS)[number];
type Message = { from: "bot" | "user" | "system"; text: string };

const BASE_SCORE = 30;
const HOT_THRESHOLD = 70;
const SEGMENTS = 20;

function ProductArt({ shape }: { shape: Product["shape"] }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "square" as const,
  };
  return (
    <svg viewBox="0 0 120 90" className="h-full w-full" aria-hidden="true">
      <path d="M0 78h120" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      {shape === "table" && <path {...common} d="M18 38h84M22 38v40M98 38v40M18 44h84" />}
      {shape === "chair" && <path {...common} d="M44 14v64M44 48h34v30M44 48h34M78 48v-2M44 20h8" />}
      {shape === "lamp" && <path {...common} d="M44 16h32l8 22H36zM60 38v40M48 78h24" />}
    </svg>
  );
}

export function CatalogDemo() {
  const [product, setProduct] = useState<Product | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [question, setQuestion] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [typing, setTyping] = useState(false);
  const [done, setDone] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const logRef = useRef<HTMLDivElement>(null);

  const later = (fn: () => void, ms: number) => {
    timers.current.push(setTimeout(fn, ms));
  };
  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => clearTimers, []);

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, question]);

  const botSays = (text: string, delay: number, then?: () => void) => {
    later(() => setTyping(true), delay);
    later(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text }]);
      then?.();
    }, delay + 900);
  };

  const start = (p: Product) => {
    clearTimers();
    setProduct(p);
    setScore(BASE_SCORE);
    setQuestion(null);
    setDone(false);
    setTyping(false);
    setMessages([{ from: "system", text: `lead capturado · /produto/${p.id}` }]);
    botSays(`Oi! Vi que você se interessou pela ${p.name}. Posso te fazer 2 perguntas rápidas?`, 400, () =>
      botSays(DEMO_QUESTIONS[0].question, 300, () => setQuestion(0)),
    );
  };

  const answer = (label: string, points: number) => {
    if (question === null) return;
    const next = question + 1;
    const total = score + points;
    setQuestion(null);
    setScore(total);
    setMessages((m) => [...m, { from: "user", text: label }]);

    if (next < DEMO_QUESTIONS.length) {
      botSays(DEMO_QUESTIONS[next].question, 300, () => setQuestion(next));
      return;
    }

    const hot = total >= HOT_THRESHOLD;
    botSays(
      hot
        ? "Perfeito! Vou te passar agora pra um consultor com condição especial."
        : "Show! Vou te mandar ideias e medidas de referência por aqui.",
      300,
      () => {
        setMessages((m) => [
          ...m,
          {
            from: "system",
            text: hot
              ? `score ${total} → QUENTE · enviado ao comercial ✓`
              : `score ${total} → FRIO · sequência de nutrição ✓`,
          },
        ]);
        setDone(true);
      },
    );
  };

  const reset = () => {
    clearTimers();
    setProduct(null);
    setMessages([]);
    setQuestion(null);
    setScore(0);
    setTyping(false);
    setDone(false);
  };

  const hot = score >= HOT_THRESHOLD;
  const filled = Math.round((score / 100) * SEGMENTS);

  return (
    <div className="grid border border-muted/40 lg:grid-cols-12">
      {/* Mini-catálogo */}
      <div className="lg:col-span-7 lg:border-r lg:border-muted/40">
        <div className="flex items-center justify-between border-b border-muted/40 px-5 py-3">
          <span className="mono-label">Catálogo demo</span>
          <span className="mono-label text-muted">Produtos fictícios</span>
        </div>
        <ul className="grid sm:grid-cols-3">
          {DEMO_PRODUCTS.map((p, i) => {
            const selected = product?.id === p.id;
            return (
              <li
                key={p.id}
                className={`flex sm:flex-col ${i > 0 ? "border-t border-muted/40 sm:border-l sm:border-t-0" : ""}`}
              >
                <div
                  className={`w-28 shrink-0 border-r border-muted/40 p-3 transition-colors sm:aspect-4/3 sm:w-auto sm:border-b sm:border-r-0 sm:p-5 ${
                    selected ? "bg-ink text-bg" : "text-ink"
                  }`}
                >
                  <ProductArt shape={p.shape} />
                </div>
                <div className="flex flex-1 flex-col gap-1 p-4 sm:p-5">
                  <span className="font-mono text-[11px] text-muted">/produto/{p.id}</span>
                  <span className="text-lg font-medium tracking-[-0.02em]">{p.name}</span>
                  <span className="font-mono text-[13px]">{p.price}</span>
                  <button
                    type="button"
                    onClick={() => start(p)}
                    className={`mt-4 flex h-10 items-center justify-between px-3 font-mono text-xs transition-colors ${
                      selected ? "bg-accent text-ink" : "bg-ink text-bg hover:bg-accent hover:text-ink"
                    }`}
                  >
                    Tenho interesse <span aria-hidden="true">→</span>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Chat simulado + termômetro */}
      <div className="flex flex-col border-t border-muted/40 lg:col-span-5 lg:border-t-0">
        <div className="flex items-center justify-between border-b border-muted/40 bg-ink px-5 py-3 text-bg">
          <span className="mono-label">
            Bot ProdTech<span className="text-accent">_</span> · WhatsApp
          </span>
          <span className="mono-label text-bg/55">Simulação</span>
        </div>

        <div
          ref={logRef}
          aria-live="polite"
          className="flex h-80 flex-col gap-3 overflow-y-auto px-5 py-5"
        >
          {messages.length === 0 && (
            <p className="m-auto max-w-[30ch] text-center font-mono text-[13px] leading-relaxed text-muted">
              Clique em “Tenho interesse” em um produto para iniciar a conversa
              <span className="cursor">_</span>
            </p>
          )}
          {messages.map((m, i) =>
            m.from === "system" ? (
              <p key={i} className="font-mono text-[11px] text-muted">
                &gt; {m.text}
              </p>
            ) : (
              <p
                key={i}
                className={`max-w-[85%] px-4 py-3 text-[15px] leading-snug ${
                  m.from === "bot" ? "self-start border border-muted/40" : "self-end bg-ink text-bg"
                }`}
              >
                {m.text}
              </p>
            ),
          )}
          {typing && (
            <p className="self-start font-mono text-xs text-muted">
              digitando<span className="cursor">_</span>
            </p>
          )}
          {question !== null && (
            <div className="flex flex-wrap justify-end gap-2 pt-1">
              {DEMO_QUESTIONS[question].options.map((o) => (
                <button
                  key={o.label}
                  type="button"
                  onClick={() => answer(o.label, o.score)}
                  className="border border-ink px-3 py-2 font-mono text-xs transition-colors hover:border-accent hover:bg-accent"
                >
                  {o.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mt-auto border-t border-muted/40 px-5 py-4">
          <div className="flex items-baseline justify-between">
            <span className="mono-label text-muted">Temperatura do lead</span>
            <span className="font-mono text-xs">
              {product ? (
                <>
                  {score}/100 · <span className={hot ? "text-accent" : "text-muted"}>{hot ? "QUENTE" : "FRIO"}</span>
                </>
              ) : (
                <span className="text-muted">—</span>
              )}
            </span>
          </div>
          <div
            className="relative mt-3 grid gap-0.75"
            style={{ gridTemplateColumns: `repeat(${SEGMENTS}, minmax(0, 1fr))` }}
            role="meter"
            aria-label="Temperatura do lead"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={score}
          >
            {Array.from({ length: SEGMENTS }, (_, i) => (
              <span
                key={i}
                className={`h-3 transition-colors duration-300 ${
                  i < filled ? (hot ? "bg-accent" : "bg-muted") : "bg-muted/20"
                }`}
                style={{ transitionDelay: `${i * 15}ms` }}
              />
            ))}
          </div>
          <div className="relative mt-2 flex justify-between font-mono text-[10px] text-muted">
            <span>0</span>
            <span className="absolute -translate-x-1/2 border-l border-muted pl-1" style={{ left: `${HOT_THRESHOLD}%` }}>
              {HOT_THRESHOLD} quente
            </span>
            <span>100</span>
          </div>
          {(done || product) && (
            <button type="button" onClick={reset} className="link-u mt-3 font-mono text-xs text-muted">
              ↺ Reiniciar demo
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
