import React from "react";
import * as z from "zod";

export const layoutId = "educational-science-faq";
export const layoutName = "Science Q&A";
export const layoutDescription = "Question-and-answer slide for classroom-style explanations with text-first clarity.";

export const Schema = z.object({
  title: z.string().min(5).max(70).default("Common Questions"),
  faqs: z.array(z.object({ question: z.string().min(8).max(90), answer: z.string().min(20).max(180) })).max(5).default([
    { question: "Why does ice float on water?", answer: "Ice is less dense than liquid water because hydrogen bonds create an open crystalline structure." },
    { question: "What is acceleration?", answer: "Acceleration is the rate at which velocity changes over time, including speeding up, slowing down, or changing direction." },
  ]),
});

type SchemaType = z.infer<typeof Schema>;

export default function EduScienceFAQLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-white z-20 mx-auto overflow-hidden p-12"
      style={{ fontFamily: "var(--body-font-family, Inter)" }}>
      <h1 className="text-4xl font-bold text-slate-900">{data.title}</h1>
      <div className="mt-7 space-y-4">
        {(data.faqs ?? []).map((f, i) => (
          <div key={i} className="rounded-xl border border-slate-200 p-4">
            <p className="text-lg font-semibold" style={{ color: "var(--primary-color,#2563EB)" }}>Q{i + 1}. {f.question}</p>
            <p className="text-base leading-7 text-slate-700 mt-2">{f.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
