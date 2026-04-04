import React from "react";
import * as z from "zod";

export const layoutId = "minimalist-mono-intro";
export const layoutName = "Mono Intro";
export const layoutDescription = "Minimal white/black intro slide with sharp edges and modern typography.";

export const Schema = z.object({
  title: z.string().min(5).max(80).default("Modern AI Strategy"),
  subtitle: z.string().min(10).max(140).default("Simple, focused, and execution-ready approach"),
  context: z.string().min(20).max(260).default("This deck outlines priorities, architecture choices, and practical steps to deliver measurable AI impact."),
});

type SchemaType = z.infer<typeof Schema>;

export default function MonoIntroLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-white mx-auto overflow-hidden p-14"
      style={{ color: "#0A0A0A", fontFamily: "var(--body-font-family, Inter)" }}>
      <div className="h-[3px] w-24 bg-black" />
      <h1 className="text-6xl font-bold leading-[1.05] mt-6 max-w-5xl">{data.title}</h1>
      <p className="text-2xl mt-5 max-w-4xl text-zinc-700">{data.subtitle}</p>
      <p className="text-base leading-7 mt-8 max-w-4xl text-zinc-600">{data.context}</p>
    </div>
  );
}
