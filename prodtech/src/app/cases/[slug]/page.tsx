import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { CASES } from "@/lib/content";
import { CasePreview } from "@/components/ui/CasePreview";
import { Cursor } from "@/components/ui/Cursor";
import { Lines } from "@/components/ui/Lines";
import { Rule } from "@/components/ui/Rule";
import { FinalCta } from "@/components/home/FinalCta";

export const dynamicParams = false;

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/cases/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = CASES.find((item) => item.slug === slug);
  if (!c) return {};
  return { title: c.title, description: c.summary };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default async function CasePage({ params }: PageProps<"/cases/[slug]">) {
  const { slug } = await params;
  const index = CASES.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  const c = CASES[index];
  const next = CASES[(index + 1) % CASES.length];

  const blocks = [
    { label: "Desafio", body: <p>{c.challenge}</p> },
    {
      label: "Solução",
      body: (
        <ol className="space-y-4">
          {c.solution.map((s, i) => (
            <li key={s} className="grid grid-cols-[40px_1fr]">
              <span className="font-mono text-xs leading-[2.2] text-muted">{pad(i + 1)}</span>
              {s}
            </li>
          ))}
        </ol>
      ),
    },
    {
      label: "Stack",
      body: (
        <ul className="flex flex-wrap gap-2">
          {c.stack.map((s) => (
            <li key={s} className="border border-muted/60 px-3 py-2 font-mono text-[13px]">
              {s}
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: "Resultado esperado",
      body: (
        <p className="flex gap-5">
          <span className="dash mt-[0.6em]" aria-hidden="true" />
          {c.result}
        </p>
      ),
    },
  ];

  return (
    <>
      <article className="pt-[72px]">
        <div className="container-x pb-24 pt-10 sm:pt-14">
          <div className="flex items-baseline justify-between gap-6 pb-4">
            <Link href="/#cases" className="mono-label link-u">
              ← Cases
            </Link>
            <p className="mono-label text-muted">
              Case {pad(index + 1)} / {pad(CASES.length)}
            </p>
          </div>
          <Rule />

          <Lines
            as="h1"
            lines={[c.title]}
            after={<Cursor />}
            className="display max-w-[16ch] pb-10 pt-12 text-[clamp(40px,7vw,104px)] sm:pt-16"
          />

          <dl className="grid grid-cols-2 border-y border-muted/40 font-mono text-[13px] sm:grid-cols-3">
            {[
              ["Setor", c.sector],
              ["Entregas", c.tags.join(" · ")],
              ["Status", "Conceito"],
            ].map(([k, v], i) => (
              <div
                key={k}
                className={`py-5 ${i > 0 ? "border-l border-muted/40 pl-5" : ""} ${i === 2 ? "col-span-2 border-l-0 border-t pl-0 sm:col-span-1 sm:border-l sm:border-t-0 sm:pl-5" : ""}`}
              >
                <dt className="mono-label text-muted">{k}</dt>
                <dd className="mt-2">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="grid gap-12 pt-12 lg:grid-cols-12">
            <p className="max-w-[40ch] text-[clamp(20px,2vw,26px)] font-medium leading-snug tracking-[-0.03em] lg:col-span-5">
              {c.summary}
            </p>
            <div className="lg:col-span-7">
              <CasePreview kind={c.preview} className="block h-auto w-full" />
            </div>
          </div>

          <div className="mt-20">
            {blocks.map((b, i) => (
              <section key={b.label} className="grid gap-6 border-t border-muted/40 py-10 lg:grid-cols-12">
                <p className="mono-label flex gap-5 lg:col-span-4">
                  <span className="text-muted">{pad(i + 1)}</span>
                  {b.label}
                </p>
                <div
                  data-reveal="up"
                  style={{ "--i": 0 } as CSSProperties}
                  className="max-w-[60ch] text-lg leading-relaxed lg:col-span-8"
                >
                  {b.body}
                </div>
              </section>
            ))}
          </div>

          <Link
            href={`/cases/${next.slug}`}
            className="group flex items-baseline justify-between gap-6 border-y border-muted/40 py-8 transition-colors hover:bg-ink hover:text-bg sm:px-4"
          >
            <span className="mono-label text-muted group-hover:text-bg/60">Próximo case</span>
            <span className="text-[clamp(22px,2.6vw,36px)] font-medium tracking-[-0.035em]">{next.title}</span>
            <span aria-hidden="true" className="font-mono group-hover:text-accent">
              →
            </span>
          </Link>
        </div>
      </article>
      <FinalCta index={2} total={2} />
    </>
  );
}
