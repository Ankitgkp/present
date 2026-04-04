import React from "react";
import * as z from "zod";

export const layoutId = "minimalist-mono-timeline";
export const layoutName = "Mono Timeline";
export const layoutDescription = "Minimal timeline with sharp card edges and high content readability.";

export const Schema = z.object({
  title: z.string().min(5).max(80).default("Execution Timeline"),
  steps: z.array(z.object({ label: z.string().min(3).max(24), detail: z.string().min(12).max(120) })).max(6).default([
    { label: "Phase 1", detail: "Discovery and baseline setup" },
    { label: "Phase 2", detail: "Implementation and testing" },
    { label: "Phase 3", detail: "Launch and optimization" },
  ]),
});

type SchemaType = z.infer<typeof Schema>;

export default function MonoTimelineLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-white mx-auto overflow-hidden p-12"
      style={{ color: "#0A0A0A", fontFamily: "var(--body-font-family, Inter)" }}>
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {(data.steps ?? []).map((s, i) => (
          <div key={i} className="border border-zinc-300 p-4">
            <p className="font-semibold">{s.label}</p>
            <p className="text-sm leading-6 mt-2 text-zinc-700">{s.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
