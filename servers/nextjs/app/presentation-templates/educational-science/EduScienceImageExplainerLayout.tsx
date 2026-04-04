import React from "react";
import * as z from "zod";
import { ImageSchema } from "../defaultSchemes";

export const layoutId = "educational-science-image-explainer";
export const layoutName = "Image Explainer";
export const layoutDescription = "Clean explainer slide with one educational image and strong text explanation.";

export const Schema = z.object({
  title: z.string().min(5).max(70).default("Human Heart: Structure and Function"),
  explanation: z.string().min(40).max(320).default("The heart has four chambers and functions as a pump to circulate oxygen-rich and oxygen-poor blood through separate pathways."),
  annotations: z.array(z.string().min(6).max(90)).max(4).default([
    "Atria receive blood",
    "Ventricles pump blood",
    "Valves prevent backflow",
  ]),
  image: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
    __image_prompt__: "diagram style science anatomy heart"
  }),
});

type SchemaType = z.infer<typeof Schema>;

export default function EduScienceImageExplainerLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-white z-20 mx-auto overflow-hidden p-10"
      style={{ fontFamily: "var(--body-font-family, Inter)" }}>
      <h1 className="text-4xl font-bold text-slate-900">{data.title}</h1>
      <div className="grid grid-cols-[1.1fr_1fr] gap-6 mt-6 h-[530px]">
        <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
          {data.image?.__image_url__ ? <img src={data.image.__image_url__} alt={data.image.__image_prompt__} className="w-full h-full object-cover" /> : null}
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg leading-8 text-slate-700">{data.explanation}</p>
          <div className="space-y-3 mt-2">
            {(data.annotations ?? []).map((a, i) => (
              <div key={i} className="rounded-lg border border-slate-200 p-3 text-base leading-6 bg-white">{a}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
