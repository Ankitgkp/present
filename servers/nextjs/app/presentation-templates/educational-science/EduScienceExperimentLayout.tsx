import React from "react";
import * as z from "zod";

export const layoutId = "educational-science-experiment";
export const layoutName = "Experiment Breakdown";
export const layoutDescription = "Structured experiment slide highlighting hypothesis, method, observations, and conclusion in a clean format.";

export const Schema = z.object({
  title: z.string().min(5).max(70).default("Experiment: Effects of Light on Plant Growth"),
  hypothesis: z.string().min(20).max(180).default("Plants receiving more sunlight will show faster growth over the same period."),
  method: z.string().min(40).max(260).default("Two groups of plants were placed in different light conditions and measured daily for two weeks."),
  observations: z.string().min(40).max(260).default("The high-light group had consistently greater stem height and leaf size compared to the low-light group."),
  conclusion: z.string().min(30).max(220).default("The data supports the hypothesis that light exposure significantly influences plant growth rate."),
});

type SchemaType = z.infer<typeof Schema>;

export default function EduScienceExperimentLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-white z-20 mx-auto overflow-hidden p-10"
      style={{ fontFamily: "var(--body-font-family, Inter)" }}>
      <div className="absolute top-0 left-0 h-2 w-full" style={{ background: "linear-gradient(90deg,var(--primary-color,#2563EB),#22C55E)" }} />
      <h1 className="text-4xl font-bold text-slate-900 mt-4">{data.title}</h1>
      <div className="grid grid-cols-2 gap-4 mt-6 text-sm leading-6">
        <section className="rounded-lg border border-slate-200 p-4"><h3 className="font-semibold text-slate-900 mb-1">Hypothesis</h3><p className="text-slate-700">{data.hypothesis}</p></section>
        <section className="rounded-lg border border-slate-200 p-4"><h3 className="font-semibold text-slate-900 mb-1">Method</h3><p className="text-slate-700">{data.method}</p></section>
        <section className="rounded-lg border border-slate-200 p-4"><h3 className="font-semibold text-slate-900 mb-1">Observations</h3><p className="text-slate-700">{data.observations}</p></section>
        <section className="rounded-lg border border-slate-200 p-4 bg-slate-50"><h3 className="font-semibold text-slate-900 mb-1">Conclusion</h3><p className="text-slate-700">{data.conclusion}</p></section>
      </div>
    </div>
  );
}
