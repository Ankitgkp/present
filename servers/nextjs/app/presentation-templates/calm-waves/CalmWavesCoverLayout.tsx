import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "calm-waves-cover";
export const layoutName = "Calm Waves Cover";
export const layoutDescription = "Simple cover slide with soft wave bands and a right-side hero image.";

export const Schema = z.object({
  title: z.string().min(2).max(70).default("Your text here").meta({ description: "Main cover title." }),
  subtitle: z.string().min(5).max(120).default("Calm, clean slides for modern storytelling.").meta({ description: "Supporting subtitle." }),
  image: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1100&q=80",
    __image_prompt__: "calm sea surface with soft blue tones",
  }).meta({ description: "Hero image on right side." }),
});

type SchemaType = z.infer<typeof Schema>;

const CalmWavesCoverLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "#E9ECEB", fontFamily: "var(--heading-font-family, 'Inter, sans-serif')" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #F1EDE7 0%, #F1EDE7 30%, #7D92AB 30%, #526B86 100%)" }}></div>
      <div className="absolute top-24 left-0 right-0 h-24" style={{ background: "#F1EDE7", borderBottomLeftRadius: "55% 100%", borderBottomRightRadius: "45% 100%" }}></div>
      <div className="absolute top-36 left-0 right-0 h-32" style={{ background: "#7C90A8", borderBottomLeftRadius: "50% 100%", borderBottomRightRadius: "55% 100%" }}></div>

      <div className="relative z-10 h-full grid grid-cols-[55%_45%] px-12 py-10 gap-8">
        <div className="flex flex-col justify-end pb-12">
          <h1 className="text-6xl leading-none font-semibold mb-5" style={{ color: "#F5F1ED" }}>{data?.title || "Your text here"}</h1>
          <p className="text-lg max-w-md" style={{ color: "#DFE7EF" }}>{data?.subtitle || "Calm, clean slides for modern storytelling."}</p>
        </div>
        <div className="rounded-md overflow-hidden border" style={{ borderColor: "rgba(38, 52, 67, 0.25)", background: "#DEE6EE" }}>
          {data?.image?.__image_url__ ? (
            <img src={data.image.__image_url__} alt={data.image.__image_prompt__} className="w-full h-full object-cover" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CalmWavesCoverLayout;
