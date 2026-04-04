import React from "react";
import * as z from "zod";

export const layoutId = "minimalist-mono-concept";
export const layoutName = "Mono Concept";
export const layoutDescription = "Text-focused concept slide in minimalist black/white style.";

export const Schema = z.object({
  title: z.string().min(5).max(80).default("Core Concept"),
  description: z.string().min(50).max(420).default("A clear explanation of the core idea with practical interpretation and implementation relevance."),
  points: z.array(z.object({ heading: z.string().min(3).max(36), detail: z.string().min(16).max(120) })).max(4).default([
    { heading: "Definition", detail: "What it is and why it matters." },
    { heading: "Mechanism", detail: "How it works in real systems." },
    { heading: "Impact", detail: "How outcomes improve when applied." },
  ]),
});

type SchemaType = z.infer<typeof Schema>;

export default function MonoConceptLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-white mx-auto overflow-hidden p-12"
      style={{ color: "#0A0A0A", fontFamily: "var(--body-font-family, Inter)" }}>
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <p className="text-lg leading-8 mt-4 max-w-5xl text-zinc-700">{data.description}</p>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {(data.points ?? []).map((p, i) => (
          <div key={i} className="border border-zinc-300 p-4">
            <p className="font-semibold text-xl">{p.heading}</p>
            <p className="text-sm leading-6 mt-2 text-zinc-700">{p.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
