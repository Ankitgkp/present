import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "calm-waves-two-images";
export const layoutName = "Calm Waves Two Images";
export const layoutDescription = "Two-image comparison layout with short explanatory labels.";

export const Schema = z.object({
  title: z.string().min(2).max(60).default("Before / After").meta({ description: "Title text." }),
  leftLabel: z.string().min(2).max(40).default("Before").meta({ description: "Left image label." }),
  rightLabel: z.string().min(2).max(40).default("After").meta({ description: "Right image label." }),
  leftImage: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1465800872432-2b6a9e3f9f87?auto=format&fit=crop&w=900&q=80",
    __image_prompt__: "work in progress workspace",
  }).meta({ description: "Left image." }),
  rightImage: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
    __image_prompt__: "final refined interior composition",
  }).meta({ description: "Right image." }),
});

type SchemaType = z.infer<typeof Schema>;

const CalmWavesTwoImagesLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden p-10" style={{ background: "#A8BCC3", fontFamily: "var(--heading-font-family, 'Inter, sans-serif')" }}>
      <div className="h-full rounded-md p-8" style={{ background: "#F2EEE8" }}>
        <h2 className="text-5xl leading-none mb-6" style={{ color: "#474747" }}>{data?.title || "Before / After"}</h2>
        <div className="grid grid-cols-2 gap-6 h-[80%]">
          <div className="h-full flex flex-col gap-3">
            <span className="text-xl" style={{ color: "#66605B" }}>{data?.leftLabel || "Before"}</span>
            <div className="rounded-md overflow-hidden border flex-1" style={{ borderColor: "rgba(38, 52, 67, 0.2)", background: "#D9E2EA" }}>
              {data?.leftImage?.__image_url__ ? <img src={data.leftImage.__image_url__} alt={data.leftImage.__image_prompt__} className="w-full h-full object-cover" /> : null}
            </div>
          </div>
          <div className="h-full flex flex-col gap-3">
            <span className="text-xl" style={{ color: "#66605B" }}>{data?.rightLabel || "After"}</span>
            <div className="rounded-md overflow-hidden border flex-1" style={{ borderColor: "rgba(38, 52, 67, 0.2)", background: "#D9E2EA" }}>
              {data?.rightImage?.__image_url__ ? <img src={data.rightImage.__image_url__} alt={data.rightImage.__image_prompt__} className="w-full h-full object-cover" /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalmWavesTwoImagesLayout;
