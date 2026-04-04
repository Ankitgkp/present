import React from "react";
import * as z from "zod";

export const layoutId = "dark-space-concepts";
export const layoutName = "Dark Space Concepts";
export const layoutDescription = "Text-heavy concept explanation layout with clean dark styling.";

export const Schema = z.object({
  title: z.string().min(5).max(80).default("Core AI Concepts"),
  description: z.string().min(60).max(420).default("Modern AI systems combine data pipelines, model training loops, inference services, and observability controls to produce reliable and measurable outcomes."),
  points: z.array(z.object({ heading: z.string().min(4).max(40), detail: z.string().min(20).max(140) })).max(4).default([
    { heading: "Data Quality", detail: "Model outcomes depend strongly on representative, clean, and well-labeled data." },
    { heading: "Serving", detail: "Inference pipelines require low latency and stable throughput under load." },
    { heading: "Evaluation", detail: "Offline and online evaluation help detect regressions early." },
  ]),
});

type SchemaType = z.infer<typeof Schema>;

export default function DarkSpaceConceptLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video mx-auto overflow-hidden p-12"
      style={{ background: "#060910", color: "#E5E7EB", fontFamily: "var(--body-font-family, Inter)" }}>
      <h1 className="text-4xl font-bold text-white">{data.title}</h1>
      <p className="mt-4 text-lg leading-8 text-slate-300 max-w-5xl">{data.description}</p>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {(data.points ?? []).map((p, i) => (
          <div key={i} className="border border-slate-800 rounded-sm p-4 bg-[#0B101A]">
            <h3 className="text-xl font-semibold text-red-400">{p.heading}</h3>
            <p className="text-sm leading-6 text-slate-300 mt-1">{p.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
