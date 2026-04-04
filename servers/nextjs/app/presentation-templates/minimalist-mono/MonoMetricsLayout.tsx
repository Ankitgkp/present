import React from "react";
import * as z from "zod";

export const layoutId = "minimalist-mono-metrics";
export const layoutName = "Mono Metrics";
export const layoutDescription = "Simple KPI cards with monochrome palette and sharp edges.";

export const Schema = z.object({
  title: z.string().min(5).max(80).default("Performance Snapshot"),
  metrics: z.array(z.object({ label: z.string().min(3).max(30), value: z.string().min(1).max(12), note: z.string().min(6).max(70) })).max(6).default([
    { label: "Accuracy", value: "94.2%", note: "Validated test set" },
    { label: "Latency", value: "87ms", note: "P95 response" },
    { label: "Uptime", value: "99.9%", note: "Service availability" },
  ]),
});

type SchemaType = z.infer<typeof Schema>;

export default function MonoMetricsLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-white mx-auto overflow-hidden p-12"
      style={{ color: "#0A0A0A", fontFamily: "var(--body-font-family, Inter)" }}>
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {(data.metrics ?? []).map((m, i) => (
          <div key={i} className="border border-zinc-300 p-4">
            <p className="text-sm text-zinc-600">{m.label}</p>
            <p className="text-3xl font-bold mt-1">{m.value}</p>
            <p className="text-xs text-zinc-600 mt-2">{m.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
