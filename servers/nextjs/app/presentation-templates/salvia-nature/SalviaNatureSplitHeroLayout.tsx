import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "salvia-nature-split-hero";
export const layoutName = "Salvia Nature Split Hero";
export const layoutDescription = "Text-left and hero-image-right layout with soft textured background wordmark.";

export const Schema = z.object({
  title: z.string().min(2).max(80).default("Wild Nature").meta({ description: "Main title." }),
  kicker: z.string().min(2).max(40).default("Environment").meta({ description: "Small kicker." }),
  body: z.string().min(20).max(220).default("Build environmental awareness through practical ideas, local action, and clear communication.").meta({ description: "Body paragraph." }),
  cta: z.string().min(2).max(40).default("Read More").meta({ description: "Button text." }),
  tag: z.string().min(2).max(30).default("Leaves").meta({ description: "Tag text." }),
  image: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
    __image_prompt__: "leaf branch illustration style",
  }).meta({ description: "Hero leaf image." }),
});

type SchemaType = z.infer<typeof Schema>;

const SalviaNatureSplitHeroLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden p-8" style={{ background: "#5E9A8C", fontFamily: "var(--heading-font-family, 'Inter, sans-serif')" }}>
      <div className="absolute -left-24 top-0 w-[320px] h-[720px] rounded-full opacity-30" style={{ background: "#3F776B" }}></div>
      <div className="absolute inset-8 rounded-sm shadow-2xl p-10 grid grid-cols-[54%_46%] gap-6" style={{ background: "#F3F1EC" }}>
        <div className="relative flex flex-col justify-center">
          <div className="absolute inset-0 flex items-end opacity-20 text-[190px] leading-none font-serif select-none pointer-events-none" style={{ color: "#BAB9B7" }}>
            nature
          </div>
          <div className="relative z-10">
            <h2 className="text-7xl uppercase leading-none mb-3" style={{ color: "#363535" }}>{data?.title || "Wild Nature"}</h2>
            <p className="text-4xl uppercase mb-3 tracking-[0.08em]" style={{ color: "#579C8E" }}>{data?.kicker || "Environment"}</p>
            <p className="text-2xl leading-relaxed max-w-2xl mb-6" style={{ color: "#4D4A48" }}>{data?.body || "Build environmental awareness through practical ideas, local action, and clear communication."}</p>
            <div className="inline-block px-6 py-2 text-2xl mb-5" style={{ background: "#64A697", color: "#F4F4F3" }}>{data?.cta || "Read More"}</div>
            <div className="border inline-block px-10 py-2 text-3xl uppercase" style={{ borderColor: "#5E5A58", color: "#383534" }}>{data?.tag || "Leaves"}</div>
          </div>
        </div>
        <div className="h-full rounded-md overflow-hidden bg-[#DFE9E5]">
          {data?.image?.__image_url__ ? (
            <img src={data.image.__image_url__} alt={data.image.__image_prompt__} className="w-full h-full object-contain" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SalviaNatureSplitHeroLayout;
