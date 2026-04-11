import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "calm-waves-image-right";
export const layoutName = "Calm Waves Image Right";
export const layoutDescription = "Mirror layout with text on left and image on right, suitable for section intros.";

export const Schema = z.object({
  title: z.string().min(2).max(60).default("Your text").meta({ description: "Title text." }),
  description: z.string().min(20).max(260).default("Use this slide to introduce a topic while anchoring attention with a supporting image.").meta({ description: "Body text." }),
  image: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=80",
    __image_prompt__: "calm textured fabric in neutral tones",
  }).meta({ description: "Right side image." }),
});

type SchemaType = z.infer<typeof Schema>;

const CalmWavesImageRightLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden p-10" style={{ background: "#A8BCC3", fontFamily: "var(--heading-font-family, 'Inter, sans-serif')" }}>
      <div className="absolute left-10 right-10 bottom-8 h-7 rounded-b-md" style={{ background: "#5A718D" }}></div>
      <div className="h-full rounded-md p-8 grid grid-cols-[58%_42%] gap-8 relative z-10" style={{ background: "#F2EEE8" }}>
        <div className="flex flex-col justify-center">
          <h2 className="text-6xl leading-none mb-6" style={{ color: "#474747" }}>{data?.title || "Your text"}</h2>
          <p className="text-xl leading-relaxed max-w-xl" style={{ color: "#66605B" }}>{data?.description || "Use this slide to introduce a topic while anchoring attention with a supporting image."}</p>
        </div>
        <div className="rounded-md overflow-hidden border" style={{ borderColor: "rgba(38, 52, 67, 0.2)", background: "#D9E2EA" }}>
          {data?.image?.__image_url__ ? (
            <img src={data.image.__image_url__} alt={data.image.__image_prompt__} className="w-full h-full object-cover" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CalmWavesImageRightLayout;
