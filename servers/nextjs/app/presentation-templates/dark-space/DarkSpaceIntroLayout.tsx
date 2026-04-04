import React from "react";
import * as z from "zod";

export const layoutId = "dark-space-intro";
export const layoutName = "Dark Space Intro";
export const layoutDescription = "Clean dark opener with red accent and minimal edge rounding.";

export const Schema = z.object({
  title: z.string().min(5).max(80).default("AI Systems for Real-World Impact"),
  subtitle: z.string().min(10).max(140).default("Designing reliable, scalable, and responsible intelligence platforms."),
  context: z.string().min(30).max(280).default("This presentation explores architecture, performance, governance, and implementation strategy for modern AI systems."),
});

type SchemaType = z.infer<typeof Schema>;

export default function DarkSpaceIntroLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video mx-auto overflow-hidden p-14"
      style={{ background: "#06080F", color: "#E5E7EB", fontFamily: "var(--body-font-family, Inter)" }}>
      <div className="absolute top-0 left-0 h-[4px] w-full" style={{ background: "linear-gradient(90deg,#EF4444,#991B1B)" }} />
      <div className="absolute -right-24 -top-24 w-72 h-72 border opacity-20" style={{ borderColor: "#EF4444" }} />
      <p className="text-sm uppercase tracking-[0.16em] font-semibold" style={{ color: "#F87171" }}>Dark Space Theme</p>
      <h1 className="text-6xl leading-[1.06] font-bold mt-4 max-w-5xl text-white">{data.title}</h1>
      <p className="text-xl leading-8 mt-5 max-w-4xl text-slate-300">{data.subtitle}</p>
      <p className="text-base leading-7 mt-7 max-w-4xl text-slate-400">{data.context}</p>
    </div>
  );
}
