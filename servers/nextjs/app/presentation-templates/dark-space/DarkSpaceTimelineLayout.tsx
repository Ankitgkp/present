import React from "react";
import * as z from "zod";

export const layoutId = "dark-space-timeline";
export const layoutName = "Dark Space Timeline";
export const layoutDescription = "Milestone timeline in dark-space style with minimal rounding and high contrast text.";

export const Schema = z.object({
  title: z.string().min(5).max(80).default("Implementation Timeline"),
  items: z.array(z.object({ phase: z.string().min(3).max(24), detail: z.string().min(12).max(110) })).max(6).default([
    { phase: "Phase 1", detail: "Data foundations and model baselines" },
    { phase: "Phase 2", detail: "Production serving and observability" },
    { phase: "Phase 3", detail: "Governance and optimization" },
  ]),
});

type SchemaType = z.infer<typeof Schema>;

export default function DarkSpaceTimelineLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video mx-auto overflow-hidden p-12"
      style={{ background: "#06090F", color: "#E5E7EB", fontFamily: "var(--body-font-family, Inter)" }}>
      <h1 className="text-4xl font-bold text-white">{data.title}</h1>
      <div className="mt-8 grid grid-cols-3 gap-4">
        {(data.items ?? []).map((it, i) => (
          <div key={i} className="border border-slate-800 rounded-sm p-4 bg-[#0B0F18]">
            <p className="text-red-400 font-semibold">{it.phase}</p>
            <p className="text-sm leading-6 mt-2 text-slate-300">{it.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
