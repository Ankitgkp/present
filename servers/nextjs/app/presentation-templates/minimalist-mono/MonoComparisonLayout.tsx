import React from "react";
import * as z from "zod";

export const layoutId = "minimalist-mono-comparison";
export const layoutName = "Mono Comparison";
export const layoutDescription = "Two-column comparison slide with modern monochrome styling.";

export const Schema = z.object({
  title: z.string().min(5).max(80).default("Option Comparison"),
  leftTitle: z.string().min(3).max(30).default("Option A"),
  rightTitle: z.string().min(3).max(30).default("Option B"),
  leftPoints: z.array(z.string().min(6).max(90)).max(5).default(["Lower cost", "Faster launch", "Simpler operations"]),
  rightPoints: z.array(z.string().min(6).max(90)).max(5).default(["Higher quality", "More flexibility", "Longer implementation"]),
});

type SchemaType = z.infer<typeof Schema>;

export default function MonoComparisonLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-white mx-auto overflow-hidden p-12"
      style={{ color: "#0A0A0A", fontFamily: "var(--body-font-family, Inter)" }}>
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <section className="border border-zinc-300 p-5"><h2 className="text-2xl font-semibold">{data.leftTitle}</h2><ul className="mt-3 space-y-2">{(data.leftPoints ?? []).map((p, i) => <li key={i}>• {p}</li>)}</ul></section>
        <section className="border border-zinc-300 p-5"><h2 className="text-2xl font-semibold">{data.rightTitle}</h2><ul className="mt-3 space-y-2">{(data.rightPoints ?? []).map((p, i) => <li key={i}>• {p}</li>)}</ul></section>
      </div>
    </div>
  );
}
