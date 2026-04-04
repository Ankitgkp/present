import React from "react";
import * as z from "zod";

export const layoutId = "educational-science-comparison";
export const layoutName = "Comparison Study";
export const layoutDescription = "Text-priority comparison layout for contrasting two scientific ideas, models, or outcomes.";

export const Schema = z.object({
  title: z.string().min(5).max(70).default("Mitosis vs Meiosis"),
  leftTitle: z.string().min(3).max(30).default("Mitosis"),
  rightTitle: z.string().min(3).max(30).default("Meiosis"),
  leftPoints: z.array(z.string().min(6).max(90)).max(5).default(["One cell division", "Produces 2 identical cells", "Used for growth and repair"]),
  rightPoints: z.array(z.string().min(6).max(90)).max(5).default(["Two cell divisions", "Produces 4 non-identical cells", "Used for gamete formation"]),
  summary: z.string().min(20).max(180).default("Both processes are essential, but they serve different biological purposes in organisms."),
});

type SchemaType = z.infer<typeof Schema>;

export default function EduScienceComparisonLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-white z-20 mx-auto overflow-hidden p-12"
      style={{ fontFamily: "var(--body-font-family, Inter)" }}>
      <h1 className="text-4xl font-bold text-slate-900">{data.title}</h1>
      <div className="grid grid-cols-2 gap-5 mt-7">
        <section className="rounded-xl border border-slate-200 p-5 bg-slate-50">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "var(--primary-color,#2563EB)" }}>{data.leftTitle}</h2>
          <ul className="space-y-2 text-slate-700 text-base leading-7">{(data.leftPoints ?? []).map((p, i) => <li key={i}>• {p}</li>)}</ul>
        </section>
        <section className="rounded-xl border border-slate-200 p-5 bg-slate-50">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "#0EA5E9" }}>{data.rightTitle}</h2>
          <ul className="space-y-2 text-slate-700 text-base leading-7">{(data.rightPoints ?? []).map((p, i) => <li key={i}>• {p}</li>)}</ul>
        </section>
      </div>
      <p className="mt-5 text-lg leading-7 text-slate-700 max-w-5xl">{data.summary}</p>
    </div>
  );
}
