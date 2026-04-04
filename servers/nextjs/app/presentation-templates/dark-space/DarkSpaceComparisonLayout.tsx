import React from "react";
import * as z from "zod";

export const layoutId = "dark-space-comparison";
export const layoutName = "Dark Space Comparison";
export const layoutDescription = "Two-column comparison for model options or platform alternatives.";

export const Schema = z.object({
  title: z.string().min(5).max(80).default("Model Option Comparison"),
  leftTitle: z.string().min(3).max(30).default("Option A"),
  rightTitle: z.string().min(3).max(30).default("Option B"),
  leftPoints: z.array(z.string().min(6).max(90)).max(5).default(["Lower latency", "Simpler stack", "Lower maintenance"]),
  rightPoints: z.array(z.string().min(6).max(90)).max(5).default(["Higher accuracy", "Richer outputs", "Higher compute demand"]),
});

type SchemaType = z.infer<typeof Schema>;

export default function DarkSpaceComparisonLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video mx-auto overflow-hidden p-12"
      style={{ background: "#05070D", color: "#E5E7EB", fontFamily: "var(--body-font-family, Inter)" }}>
      <h1 className="text-4xl font-bold text-white">{data.title}</h1>
      <div className="grid grid-cols-2 gap-4 mt-7">
        <section className="border border-slate-800 rounded-sm p-5 bg-[#0A0E16]"><h2 className="text-xl font-semibold text-red-400">{data.leftTitle}</h2><ul className="mt-3 space-y-2 text-slate-300 text-sm">{(data.leftPoints ?? []).map((p, i) => <li key={i}>• {p}</li>)}</ul></section>
        <section className="border border-slate-800 rounded-sm p-5 bg-[#0A0E16]"><h2 className="text-xl font-semibold text-red-400">{data.rightTitle}</h2><ul className="mt-3 space-y-2 text-slate-300 text-sm">{(data.rightPoints ?? []).map((p, i) => <li key={i}>• {p}</li>)}</ul></section>
      </div>
    </div>
  );
}
