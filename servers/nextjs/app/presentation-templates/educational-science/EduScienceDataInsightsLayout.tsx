import React from "react";
import * as z from "zod";

export const layoutId = "educational-science-data-insights";
export const layoutName = "Data Insights";
export const layoutDescription = "Education-focused data slide with concise chart-like bars and detailed explanatory notes.";

export const Schema = z.object({
  title: z.string().min(5).max(70).default("Data Insights: Heat Transfer Rates"),
  insight: z.string().min(30).max(220).default("Materials with higher thermal conductivity transfer heat faster under identical conditions."),
  metrics: z.array(z.object({ label: z.string().min(3).max(25), value: z.string().min(1).max(10), note: z.string().min(10).max(90) })).max(5).default([
    { label: "Copper", value: "401", note: "Highest conductivity among tested materials." },
    { label: "Aluminum", value: "237", note: "Strong conduction with lower cost." },
    { label: "Steel", value: "50", note: "Moderate conductivity and structural strength." },
  ]),
});

type SchemaType = z.infer<typeof Schema>;

export default function EduScienceDataInsightsLayout({ data }: { data: Partial<SchemaType> }) {
  const metrics = data.metrics ?? [];
  const max = Math.max(...metrics.map((m) => Number(m.value) || 1), 1);
  return (
    <div className="relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-white z-20 mx-auto overflow-hidden p-12"
      style={{ fontFamily: "var(--body-font-family, Inter)" }}>
      <h1 className="text-4xl font-bold text-slate-900">{data.title}</h1>
      <p className="text-lg leading-7 text-slate-700 mt-3 max-w-5xl">{data.insight}</p>
      <div className="mt-8 space-y-4">
        {metrics.map((m, i) => {
          const width = `${Math.max(18, Math.round(((Number(m.value) || 1) / max) * 100))}%`;
          return (
            <div key={i} className="grid grid-cols-[110px_1fr_240px] gap-3 items-center">
              <p className="font-semibold text-slate-800">{m.label}</p>
              <div className="h-7 rounded-md bg-slate-100 overflow-hidden"><div className="h-full rounded-md" style={{ width, background: "var(--primary-color,#2563EB)" }} /></div>
              <p className="text-sm leading-6 text-slate-600">{m.note}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
