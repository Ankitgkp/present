import React from "react";
import * as z from "zod";

export const layoutId = "dark-space-team";
export const layoutName = "Dark Space Team";
export const layoutDescription = "Minimal team layout with low-radius cards in dark mode.";

export const Schema = z.object({
  title: z.string().min(5).max(80).default("Core Team"),
  members: z.array(z.object({ name: z.string().min(3).max(30), role: z.string().min(3).max(40), summary: z.string().min(10).max(100) })).max(4).default([
    { name: "Alex Carter", role: "AI Lead", summary: "Leads model strategy and system design." },
    { name: "Riya Shah", role: "ML Engineer", summary: "Builds and optimizes training and inference pipelines." },
    { name: "Noah Kim", role: "Platform Engineer", summary: "Owns serving reliability and observability stack." },
  ]),
});

type SchemaType = z.infer<typeof Schema>;

export default function DarkSpaceTeamLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video mx-auto overflow-hidden p-12"
      style={{ background: "#06080F", color: "#E5E7EB", fontFamily: "var(--body-font-family, Inter)" }}>
      <h1 className="text-4xl font-bold text-white">{data.title}</h1>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {(data.members ?? []).map((m, i) => (
          <div key={i} className="border border-slate-800 rounded-sm p-4 bg-[#0B1019]">
            <p className="text-lg font-semibold text-white">{m.name}</p>
            <p className="text-sm text-red-400 mt-1">{m.role}</p>
            <p className="text-sm leading-6 text-slate-300 mt-3">{m.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
