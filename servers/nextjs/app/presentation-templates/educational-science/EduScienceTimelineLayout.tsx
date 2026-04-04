import React from "react";
import * as z from "zod";

export const layoutId = "educational-science-timeline";
export const layoutName = "Scientific Process Timeline";
export const layoutDescription = "Simple timeline to explain scientific process steps with emphasis on written explanation.";

export const Schema = z.object({
  title: z.string().min(5).max(70).default("Scientific Method"),
  intro: z.string().min(30).max(220).default("The scientific method is a repeatable process used to investigate questions and test ideas."),
  stages: z.array(z.object({ step: z.string().min(3).max(30), detail: z.string().min(20).max(120) })).max(6).default([
    { step: "Observation", detail: "Notice a phenomenon and define a measurable question." },
    { step: "Hypothesis", detail: "Propose a testable explanation for the observation." },
    { step: "Experiment", detail: "Design and run tests while controlling variables." },
    { step: "Conclusion", detail: "Analyze data and accept, reject, or revise the hypothesis." },
  ]),
});

type SchemaType = z.infer<typeof Schema>;

export default function EduScienceTimelineLayout({ data }: { data: Partial<SchemaType> }) {
  const stages = data.stages ?? [];
  return (
    <div className="relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-white z-20 mx-auto overflow-hidden p-12"
      style={{ fontFamily: "var(--body-font-family, Inter)" }}>
      <h1 className="text-4xl font-bold text-slate-900">{data.title}</h1>
      <p className="text-lg leading-7 text-slate-700 mt-3 max-w-5xl">{data.intro}</p>
      <div className="mt-8 space-y-4">
        {stages.map((s, i) => (
          <div key={i} className="grid grid-cols-[40px_1fr] gap-3 items-start">
            <div className="w-8 h-8 rounded-full text-white text-sm font-semibold flex items-center justify-center mt-1" style={{ background: "var(--primary-color,#2563EB)" }}>{i + 1}</div>
            <div className="rounded-lg border border-slate-200 p-4 bg-slate-50">
              <h3 className="text-lg font-semibold text-slate-900">{s.step}</h3>
              <p className="text-sm leading-6 text-slate-700 mt-1">{s.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
