import React from "react";
import * as z from "zod";

export const layoutId = "educational-science-concepts";
export const layoutName = "Core Concepts";
export const layoutDescription = "Text-heavy concept slide with structured explanation blocks and minimal decorative shapes.";

export const Schema = z.object({
  title: z.string().min(5).max(70).default("Core Concepts of Photosynthesis"),
  explanation: z.string().min(60).max(420).default("Photosynthesis is the process by which green plants convert light energy into chemical energy. Chlorophyll absorbs sunlight and helps create glucose from carbon dioxide and water."),
  points: z.array(z.object({ heading: z.string().min(4).max(40), detail: z.string().min(20).max(140) })).max(6).default([
    { heading: "Input", detail: "Plants use sunlight, carbon dioxide, and water as input materials." },
    { heading: "Output", detail: "Glucose and oxygen are produced as outputs." },
    { heading: "Location", detail: "The process mainly takes place in chloroplasts." },
  ]),
});

type SchemaType = z.infer<typeof Schema>;

export default function EduScienceConceptLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-white z-20 mx-auto overflow-hidden p-12"
      style={{ fontFamily: "var(--body-font-family, Inter)" }}>
      <div className="absolute right-8 top-8 w-24 h-24 rounded-2xl opacity-10 rotate-12" style={{ background: "var(--primary-color,#2563EB)" }} />
      <div className="h-full grid grid-rows-[auto_auto_1fr] gap-5">
        <h1 className="text-4xl font-bold text-slate-900">{data.title}</h1>
        <p className="text-lg leading-8 text-slate-700 max-w-6xl">{data.explanation}</p>
        <div className="grid grid-cols-2 gap-4 content-start">
          {(data.points ?? []).map((p, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-4 bg-white">
              <h3 className="text-lg font-semibold text-slate-900">{p.heading}</h3>
              <p className="text-sm leading-6 text-slate-600 mt-1">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
