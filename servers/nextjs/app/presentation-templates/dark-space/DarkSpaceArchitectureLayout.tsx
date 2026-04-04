import React from "react";
import * as z from "zod";

export const layoutId = "dark-space-architecture";
export const layoutName = "Dark Space Architecture";
export const layoutDescription = "Architecture layout for AI platform components in a low-radius dark visual style.";

export const Schema = z.object({
  title: z.string().min(5).max(80).default("Reference Architecture"),
  layers: z.array(z.object({ name: z.string().min(3).max(40), details: z.string().min(20).max(120) })).max(5).default([
    { name: "Data Layer", details: "Collection, validation, labeling, and storage services." },
    { name: "Model Layer", details: "Training, evaluation, registry, and experimentation." },
    { name: "Serving Layer", details: "Inference APIs, caching, routing, and monitoring." },
  ]),
});

type SchemaType = z.infer<typeof Schema>;

export default function DarkSpaceArchitectureLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video mx-auto overflow-hidden p-12"
      style={{ background: "#04060C", color: "#E5E7EB", fontFamily: "var(--body-font-family, Inter)" }}>
      <h1 className="text-4xl font-bold text-white">{data.title}</h1>
      <div className="mt-7 space-y-3 max-w-5xl">
        {(data.layers ?? []).map((l, i) => (
          <div key={i} className="grid grid-cols-[170px_1fr] gap-4 border border-slate-800 rounded-sm p-4 bg-[#0A0F19]">
            <p className="font-semibold text-red-400">{l.name}</p>
            <p className="text-sm leading-6 text-slate-300">{l.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
