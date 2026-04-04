import React from "react";
import * as z from "zod";

export const layoutId = "dark-space-metrics";
export const layoutName = "Dark Space Metrics";
export const layoutDescription = "KPI snapshot layout for AI performance, reliability, and efficiency metrics.";

export const Schema = z.object({
  title: z.string().min(5).max(80).default("Performance Snapshot"),
  metrics: z.array(z.object({ label: z.string().min(3).max(30), value: z.string().min(1).max(14), note: z.string().min(10).max(80) })).max(6).default([
    { label: "Latency", value: "92ms", note: "P95 inference response time" },
    { label: "Uptime", value: "99.97%", note: "Service availability" },
    { label: "Accuracy", value: "94.2%", note: "Validated benchmark score" },
    { label: "Cost / 1K", value: "$0.12", note: "Inference compute cost" },
  ]),
});

type SchemaType = z.infer<typeof Schema>;

export default function DarkSpaceMetricsLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video mx-auto overflow-hidden p-12"
      style={{ background: "#05070E", color: "#E5E7EB", fontFamily: "var(--body-font-family, Inter)" }}>
      <h1 className="text-4xl font-bold text-white">{data.title}</h1>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {(data.metrics ?? []).map((m, i) => (
          <div key={i} className="border border-slate-800 rounded-sm p-4 bg-[#0A0E17]">
            <p className="text-sm text-slate-400">{m.label}</p>
            <p className="text-3xl font-bold mt-1 text-red-400">{m.value}</p>
            <p className="text-xs mt-2 text-slate-400">{m.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
