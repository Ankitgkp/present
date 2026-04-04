import React from "react";
import * as z from "zod";

export const layoutId = "educational-science-intro";
export const layoutName = "Science Intro";
export const layoutDescription = "Clean introductory science slide with text-first structure and subtle academic shapes.";

export const Schema = z.object({
  title: z.string().min(5).max(70).default("Understanding Cell Division"),
  subtitle: z.string().min(8).max(120).default("A simple guide to how new cells are formed"),
  context: z.string().min(40).max(360).default("Cell division is essential for growth, repair, and reproduction. In this lesson, we will understand the key stages and why each stage matters in biological systems."),
  objectives: z.array(z.string().min(6).max(80)).max(4).default([
    "Define mitosis and cytokinesis",
    "Identify key stages in sequence",
    "Explain why cell division is important",
  ]),
});

type SchemaType = z.infer<typeof Schema>;

export default function EduScienceIntroLayout({ data }: { data: Partial<SchemaType> }) {
  const objectives = data.objectives ?? [];
  return (
    <div className="relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-white z-20 mx-auto overflow-hidden p-14"
      style={{ fontFamily: "var(--body-font-family, Inter)", color: "var(--background-text,#0F172A)" }}>
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10" style={{ background: "var(--primary-color,#2563EB)" }} />
      <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full opacity-10" style={{ background: "#10B981" }} />

      <div className="relative h-full flex flex-col gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.15em] font-semibold" style={{ color: "var(--primary-color,#2563EB)" }}>Educational Science</p>
          <h1 className="text-5xl leading-tight font-bold mt-2 max-w-4xl">{data.title}</h1>
          <p className="text-xl mt-3 max-w-4xl text-slate-600">{data.subtitle}</p>
        </div>

        <p className="text-lg leading-8 max-w-5xl text-slate-700">{data.context}</p>

        <div className="grid grid-cols-2 gap-4 mt-auto max-w-4xl">
          {objectives.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base leading-6">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
