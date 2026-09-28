"use client";

import { useState, type FormEvent } from "react";
import { FINAL_CTA, whatsappLink } from "@/lib/content";

/** Formulário curto: sem backend, monta a mensagem e abre o WhatsApp. */
export function LeadForm() {
  const [challenge, setChallenge] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = [
      "Olá! Vim pelo site da ProdTech.",
      `Nome: ${data.get("name")}`,
      `WhatsApp: ${data.get("phone")}`,
      `Desafio: ${challenge ?? "Não informado"}`,
    ].join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  const field =
    "mt-2 block w-full border-0 border-b border-bg/30 bg-transparent py-3 font-mono text-[15px] text-bg outline-none transition-colors placeholder:text-bg/30 focus:border-accent";

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <p className="mono-label text-bg/55">Ou deixe seus dados</p>
      <label className="block">
        <span className="mono-label">Nome</span>
        <input name="name" required autoComplete="name" placeholder="Seu nome" className={field} />
      </label>
      <label className="block">
        <span className="mono-label">WhatsApp</span>
        <input
          name="phone"
          required
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(85) 9 0000-0000"
          className={field}
        />
      </label>
      <fieldset>
        <legend className="mono-label">Qual o desafio?</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {FINAL_CTA.chips.map((chip) => {
            const on = challenge === chip;
            return (
              <button
                key={chip}
                type="button"
                aria-pressed={on}
                onClick={() => setChallenge(on ? null : chip)}
                className={`border px-3 py-2 font-mono text-xs transition-colors ${
                  on ? "border-accent bg-accent text-ink" : "border-bg/30 hover:border-bg"
                }`}
              >
                {chip}
              </button>
            );
          })}
        </div>
      </fieldset>
      <button
        type="submit"
        className="group flex h-12 w-full items-center justify-between bg-bg px-5 font-mono text-[13px] text-ink transition-colors hover:bg-accent"
      >
        Enviar pelo WhatsApp
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}
