import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "calm-waves-image-left";
export const layoutName = "Calm Waves Image Left";
export const layoutDescription = "Image-left content-right layout with subtle topographic texture and generous whitespace.";

export const Schema = z.object({
  title: z.string().min(2).max(60).default("Lorem ipsum").meta({ description: "Title text." }),
  description: z.string().min(20).max(260).default("A simple content section with space for an image and concise narrative.").meta({ description: "Body text." }),
  image: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=1000&q=80",
    __image_prompt__: "minimal office desk with blue-gray aesthetic",
  }).meta({ description: "Left side image." }),
});

type SchemaType = z.infer<typeof Schema>;

const CalmWavesImageLeftLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden p-10" style={{ background: "#A8BCC3", fontFamily: "var(--heading-font-family, 'Inter, sans-serif')" }}>
      <div className="h-full rounded-md p-8 grid grid-cols-[45%_55%] gap-8" style={{ background: "#F2EEE8" }}>
        <div className="rounded-md overflow-hidden border" style={{ borderColor: "rgba(38, 52, 67, 0.2)", background: "#D9E2EA" }}>
          {data?.image?.__image_url__ ? (
            <img src={data.image.__image_url__} alt={data.image.__image_prompt__} className="w-full h-full object-cover" />
          ) : null}
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-6xl leading-none mb-6" style={{ color: "#474747" }}>{data?.title || "Lorem ipsum"}</h2>
          <p className="text-xl leading-relaxed max-w-xl" style={{ color: "#66605B" }}>{data?.description || "A simple content section with space for an image and concise narrative."}</p>
        </div>
      </div>
    </div>
  );
};

export default CalmWavesImageLeftLayout;
