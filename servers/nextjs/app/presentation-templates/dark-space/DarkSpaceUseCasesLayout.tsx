import React from "react";
import * as z from "zod";

export const layoutId = "dark-space-use-cases";
export const layoutName = "Dark Space Use Cases";
export const layoutDescription = "Use-case matrix with concise text and clean dark visual balance.";

export const Schema = z.object({
  title: z.string().min(5).max(80).default("High-Value AI Use Cases"),
  useCases: z.array(z.object({ name: z.string().min(4).max(40), impact: z.string().min(10).max(100) })).max(6).default([
    { name: "Support Automation", impact: "Resolve repetitive queries with contextual assistant workflows." },
    { name: "Fraud Detection", impact: "Detect anomaly patterns in near real-time streams." },
    { name: "Forecasting", impact: "Improve planning confidence through probabilistic predictions." },
  ]),
});

type SchemaType = z.infer<typeof Schema>;

export default function DarkSpaceUseCasesLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video mx-auto overflow-hidden p-12"
      style={{ background: "#05070C", color: "#E5E7EB", fontFamily: "var(--body-font-family, Inter)" }}>
      <h1 className="text-4xl font-bold text-white">{data.title}</h1>
      <div className="grid grid-cols-2 gap-4 mt-7">
        {(data.useCases ?? []).map((u, i) => (
          <div key={i} className="border border-slate-800 rounded-sm p-4 bg-[#0A0F18]">
            <p className="text-red-400 font-semibold">{u.name}</p>
            <p className="text-sm leading-6 mt-2 text-slate-300">{u.impact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
