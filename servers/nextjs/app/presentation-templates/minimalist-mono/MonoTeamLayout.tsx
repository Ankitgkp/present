import React from "react";
import * as z from "zod";

export const layoutId = "minimalist-mono-team";
export const layoutName = "Mono Team";
export const layoutDescription = "Simple team slide with rectangular cards and black/white visual language.";

export const Schema = z.object({
  title: z.string().min(5).max(80).default("Team"),
  members: z.array(z.object({ name: z.string().min(3).max(30), role: z.string().min(3).max(40), summary: z.string().min(8).max(100) })).max(4).default([
    { name: "Alex", role: "Lead", summary: "Owns strategy and architecture direction." },
    { name: "Riya", role: "Engineer", summary: "Builds core model and platform services." },
    { name: "Noah", role: "Ops", summary: "Maintains reliability and release workflows." },
  ]),
});

type SchemaType = z.infer<typeof Schema>;

export default function MonoTeamLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-white mx-auto overflow-hidden p-12"
      style={{ color: "#0A0A0A", fontFamily: "var(--body-font-family, Inter)" }}>
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {(data.members ?? []).map((m, i) => (
          <div key={i} className="border border-zinc-300 p-4">
            <p className="font-semibold text-lg">{m.name}</p>
            <p className="text-sm text-zinc-600 mt-1">{m.role}</p>
            <p className="text-sm leading-6 mt-3 text-zinc-700">{m.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
