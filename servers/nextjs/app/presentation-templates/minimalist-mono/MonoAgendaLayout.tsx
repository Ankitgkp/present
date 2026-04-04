import React from "react";
import * as z from "zod";

export const layoutId = "minimalist-mono-agenda";
export const layoutName = "Mono Agenda";
export const layoutDescription = "Simple agenda with black text, clean spacing, and non-rounded cards.";

export const Schema = z.object({
  title: z.string().min(4).max(60).default("Agenda"),
  items: z.array(z.string().min(5).max(90)).max(8).default([
    "Context",
    "Challenges",
    "Approach",
    "Metrics",
    "Roadmap",
  ]),
});

type SchemaType = z.infer<typeof Schema>;

export default function MonoAgendaLayout({ data }: { data: Partial<SchemaType> }) {
  const items = data.items ?? [];
  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-white mx-auto overflow-hidden p-12"
      style={{ color: "#0A0A0A", fontFamily: "var(--body-font-family, Inter)" }}>
      <h1 className="text-5xl font-bold">{data.title}</h1>
      <div className="mt-8 space-y-3 max-w-4xl">
        {items.map((it, i) => (
          <div key={i} className="border border-zinc-300 px-4 py-3 flex gap-3">
            <span className="font-semibold">{String(i + 1).padStart(2, "0")}</span>
            <p className="text-lg">{it}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
