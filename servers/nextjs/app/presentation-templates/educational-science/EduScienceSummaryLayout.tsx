import React from "react";
import * as z from "zod";

export const layoutId = "educational-science-summary";
export const layoutName = "Lesson Summary";
export const layoutDescription = "Clean summary slide for main takeaways and next learning steps with minimal visuals.";

export const Schema = z.object({
  title: z.string().min(5).max(70).default("Lesson Summary"),
  recap: z.string().min(30).max(220).default("Today we covered the main principles, observed key examples, and connected them to real-world applications."),
  takeaways: z.array(z.string().min(8).max(100)).max(5).default([
    "Scientific models simplify complex systems",
    "Evidence strengthens explanations",
    "Variables must be controlled in experiments",
  ]),
  nextSteps: z.string().min(20).max(180).default("Next, apply these concepts in a practical activity and compare your observations with expected outcomes."),
});

type SchemaType = z.infer<typeof Schema>;

export default function EduScienceSummaryLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-white z-20 mx-auto overflow-hidden p-12"
      style={{ fontFamily: "var(--body-font-family, Inter)" }}>
      <div className="absolute right-10 bottom-10 w-40 h-40 rounded-full opacity-10" style={{ background: "var(--primary-color,#2563EB)" }} />
      <h1 className="text-4xl font-bold text-slate-900">{data.title}</h1>
      <p className="text-lg leading-7 text-slate-700 mt-3 max-w-5xl">{data.recap}</p>
      <div className="mt-6 space-y-3 max-w-5xl">
        {(data.takeaways ?? []).map((t, i) => (
          <div key={i} className="rounded-lg border border-slate-200 px-4 py-3 text-base leading-6 bg-slate-50">{t}</div>
        ))}
      </div>
      <p className="mt-6 text-base leading-7 text-slate-700 max-w-5xl"><span className="font-semibold">Next Step:</span> {data.nextSteps}</p>
    </div>
  );
}
