import React from "react";
import * as z from "zod";

export const layoutId = "dark-space-agenda";
export const layoutName = "Dark Space Agenda";
export const layoutDescription = "Simple agenda layout with text focus and subtle geometric accents.";

export const Schema = z.object({
  title: z.string().min(5).max(80).default("Agenda"),
  items: z.array(z.string().min(5).max(90)).max(7).default([
    "Current AI landscape",
    "System architecture",
    "Performance and reliability",
    "Risk and governance",
    "Roadmap and next steps",
  ]),
});

type SchemaType = z.infer<typeof Schema>;

export default function DarkSpaceAgendaLayout({ data }: { data: Partial<SchemaType> }) {
  const items = data.items ?? [];
  return (
    <div className="relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video mx-auto overflow-hidden p-12"
      style={{ background: "#05070D", color: "#E5E7EB", fontFamily: "var(--body-font-family, Inter)" }}>
      <div className="absolute inset-y-0 left-0 w-[3px]" style={{ background: "#EF4444" }} />
      <h1 className="text-5xl font-bold text-white">{data.title}</h1>
      <div className="mt-8 space-y-3 max-w-4xl">
        {items.map((it, i) => (
          <div key={i} className="flex items-start gap-3 border border-slate-800 px-4 py-3 rounded-sm">
            <span className="text-red-400 font-semibold">{String(i + 1).padStart(2, "0")}</span>
            <p className="text-lg text-slate-200">{it}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
