import React from "react";
import * as z from "zod";

export const layoutId = "minimalist-mono-use-cases";
export const layoutName = "Mono Use Cases";
export const layoutDescription = "Use-case matrix with black/white styling and content-first balance.";

export const Schema = z.object({
  title: z.string().min(5).max(80).default("Use Cases"),
  items: z.array(z.object({ name: z.string().min(4).max(40), detail: z.string().min(12).max(110) })).max(6).default([
    { name: "Customer Support", detail: "Automate repetitive queries while preserving escalation quality." },
    { name: "Forecasting", detail: "Improve planning accuracy with continuous model updates." },
    { name: "Fraud Monitoring", detail: "Detect anomalies and reduce response time." },
  ]),
});

type SchemaType = z.infer<typeof Schema>;

export default function MonoUseCasesLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-white mx-auto overflow-hidden p-12"
      style={{ color: "#0A0A0A", fontFamily: "var(--body-font-family, Inter)" }}>
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {(data.items ?? []).map((it, i) => (
          <div key={i} className="border border-zinc-300 p-4">
            <p className="font-semibold text-lg">{it.name}</p>
            <p className="text-sm leading-6 mt-2 text-zinc-700">{it.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
