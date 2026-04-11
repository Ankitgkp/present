import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "salvia-nature-action";
export const layoutName = "Salvia Nature Action";
export const layoutDescription = "Action-focused slide with title, dual tags, CTA, and right-side plant image.";

export const Schema = z.object({
  topLabel: z.string().min(2).max(30).default("Nature").meta({ description: "Small top label." }),
  title: z.string().min(2).max(80).default("Save the Nature").meta({ description: "Main title." }),
  tagLeft: z.string().min(2).max(24).default("Leaves").meta({ description: "Left tag." }),
  tagRight: z.string().min(2).max(24).default("Trees").meta({ description: "Right tag." }),
  body: z.string().min(20).max(220).default("Lorem ipsum style content area for campaign details, impact statement, and call-to-action context.").meta({ description: "Body text." }),
  cta: z.string().min(2).max(40).default("Register Here").meta({ description: "CTA button label." }),
  image: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1446071103084-c257b5f70672?auto=format&fit=crop&w=1200&q=80",
    __image_prompt__: "green tropical leaves isolated composition",
  }).meta({ description: "Right-side leaf image." }),
});

type SchemaType = z.infer<typeof Schema>;

const SalviaNatureActionLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden p-8" style={{ background: "#5E9A8C", fontFamily: "var(--heading-font-family, 'Inter, sans-serif')" }}>
      <div className="absolute -left-24 top-0 w-[320px] h-[720px] rounded-full opacity-30" style={{ background: "#3F776B" }}></div>
      <div className="absolute -right-24 bottom-0 w-[320px] h-[720px] rounded-full opacity-30" style={{ background: "#3F776B" }}></div>

      <div className="absolute inset-8 rounded-sm shadow-2xl p-10 grid grid-cols-[57%_43%] gap-8" style={{ background: "#F3F1EC" }}>
        <div className="flex flex-col justify-center relative">
          <div className="absolute bottom-2 left-0 opacity-20 text-[190px] leading-none font-serif pointer-events-none" style={{ color: "#BAB9B7" }}>nature</div>
          <div className="relative z-10">
            <p className="text-3xl uppercase mb-4" style={{ color: "#363535" }}>{data?.topLabel || "Nature"}</p>
            <h2 className="text-8xl uppercase leading-none mb-5" style={{ color: "#363535" }}>{data?.title || "Save the Nature"}</h2>

            <div className="flex items-center gap-6 mb-5">
              <div className="border px-8 py-2 text-3xl uppercase" style={{ borderColor: "#5E5A58", color: "#383534" }}>{data?.tagLeft || "Leaves"}</div>
              <div className="h-[2px] w-28" style={{ background: "#7D7A78" }}></div>
              <div className="border px-8 py-2 text-3xl uppercase" style={{ borderColor: "#5E5A58", color: "#383534" }}>{data?.tagRight || "Trees"}</div>
            </div>

            <p className="text-2xl leading-relaxed max-w-2xl mb-6" style={{ color: "#4D4A48" }}>{data?.body || "Lorem ipsum style content area for campaign details, impact statement, and call-to-action context."}</p>
            <div className="inline-block px-6 py-2 text-3xl" style={{ background: "#64A697", color: "#F4F4F3" }}>{data?.cta || "Register Here"}</div>
          </div>
        </div>

        <div className="h-full rounded-md overflow-hidden bg-[#DFE9E5]">
          {data?.image?.__image_url__ ? <img src={data.image.__image_url__} alt={data.image.__image_prompt__} className="w-full h-full object-contain" /> : null}
        </div>
      </div>
    </div>
  );
};

export default SalviaNatureActionLayout;
