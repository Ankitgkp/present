import React from "react";
import * as z from "zod";

export const layoutId = "minimalist-mono-closing";
export const layoutName = "Mono Closing";
export const layoutDescription = "Minimal final slide with clear CTA and non-rounded monochrome elements.";

export const Schema = z.object({
  title: z.string().min(5).max(80).default("Thank You"),
  message: z.string().min(20).max(220).default("Let’s align on next steps and move into implementation."),
  cta: z.string().min(6).max(90).default("Next: Strategy Workshop"),
});

type SchemaType = z.infer<typeof Schema>;

export default function MonoClosingLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-white mx-auto overflow-hidden p-14 flex flex-col justify-center"
      style={{ color: "#0A0A0A", fontFamily: "var(--body-font-family, Inter)" }}>
      <h1 className="text-6xl font-bold">{data.title}</h1>
      <p className="text-2xl mt-5 max-w-4xl text-zinc-700">{data.message}</p>
      <div className="mt-8 border border-black px-5 py-3 w-fit text-lg font-semibold">{data.cta}</div>
    </div>
  );
}
