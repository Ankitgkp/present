import React from "react";
import * as z from "zod";

export const layoutId = "dark-space-closing";
export const layoutName = "Dark Space Closing";
export const layoutDescription = "Final call-to-action slide in dark style with strong red emphasis.";

export const Schema = z.object({
  title: z.string().min(5).max(80).default("Let’s Build It"),
  message: z.string().min(20).max(220).default("Ready to move from prototype to production with a scalable AI platform?"),
  cta: z.string().min(6).max(80).default("Next: Technical Discovery Workshop"),
});

type SchemaType = z.infer<typeof Schema>;

export default function DarkSpaceClosingLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video mx-auto overflow-hidden p-14 flex flex-col justify-center"
      style={{ background: "#05070D", color: "#E5E7EB", fontFamily: "var(--body-font-family, Inter)" }}>
      <div className="absolute bottom-0 left-0 h-[4px] w-full" style={{ background: "linear-gradient(90deg,#7F1D1D,#EF4444)" }} />
      <h1 className="text-6xl font-bold text-white max-w-4xl">{data.title}</h1>
      <p className="text-xl leading-8 mt-5 max-w-4xl text-slate-300">{data.message}</p>
      <div className="mt-8 inline-block border border-red-500 rounded-sm px-5 py-3 text-red-300 text-lg font-semibold w-fit">{data.cta}</div>
    </div>
  );
}
