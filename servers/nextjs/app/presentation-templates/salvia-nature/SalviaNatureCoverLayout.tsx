import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "salvia-nature-cover";
export const layoutName = "Salvia Nature Cover";
export const layoutDescription = "Main banner cover with cream card, botanical hero image, and salvia green frame.";

export const Schema = z.object({
  header: z.string().min(2).max(60).default("Banner Template").meta({ description: "Top header label." }),
  subHeader: z.string().min(2).max(40).default("Nature").meta({ description: "Small subtitle." }),
  title: z.string().min(2).max(80).default("Environment").meta({ description: "Main central title." }),
  leftTitle: z.string().min(2).max(30).default("Leaves").meta({ description: "Left tag title." }),
  leftBody: z.string().min(20).max(240).default("Create sustainable habits with practical, community-centered actions that improve local ecosystems.").meta({ description: "Left text block." }),
  rightTitle: z.string().min(2).max(30).default("Tree").meta({ description: "Right tag title." }),
  rightBody: z.string().min(20).max(240).default("Protect biodiversity through restoration efforts, responsible land use, and long-term stewardship.").meta({ description: "Right text block." }),
  heroImage: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1200&q=80",
    __image_prompt__: "botanical leaf illustration style on transparent or light background",
  }).meta({ description: "Central botanical image." }),
});

type SchemaType = z.infer<typeof Schema>;

const SalviaNatureCoverLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden p-8"
      style={{ background: "#5E9A8C", fontFamily: "var(--heading-font-family, 'Inter, sans-serif')" }}
    >
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-30" style={{ background: "#3F776B" }}></div>
      <div className="absolute -bottom-28 -right-28 w-[340px] h-[340px] rounded-full opacity-35" style={{ background: "#3B7266" }}></div>

      <div className="relative h-full flex flex-col items-center">
        <h1 className="text-5xl font-bold uppercase tracking-[0.08em] mt-2" style={{ color: "#101615" }}>
          {data?.header || "Banner Template"}
        </h1>
        <p className="text-3xl uppercase tracking-[0.14em] -mt-1" style={{ color: "#101615" }}>
          {data?.subHeader || "Nature"}
        </p>

        <div className="mt-4 w-[92%] h-[83%] rounded-sm shadow-2xl p-10 relative" style={{ background: "#F3F1EC" }}>
          <div className="absolute inset-0 opacity-20 text-[220px] leading-none font-serif flex items-center justify-center pointer-events-none" style={{ color: "#B8B8B8" }}>
            nature
          </div>

          <div className="relative z-10 h-full flex flex-col">
            <p className="text-4xl uppercase tracking-[0.16em] text-center mb-4" style={{ color: "#579C8E" }}>
              {data?.title || "Environment"}
            </p>

            <div className="grid grid-cols-[1fr_300px_1fr] gap-6 items-center flex-1">
              <div>
                <div className="border px-4 py-2 text-center text-2xl uppercase mb-4" style={{ borderColor: "#5E5A58", color: "#383534" }}>
                  {data?.leftTitle || "Leaves"}
                </div>
                <p className="text-lg leading-relaxed" style={{ color: "#4D4A48" }}>{data?.leftBody || "Create sustainable habits with practical, community-centered actions that improve local ecosystems."}</p>
              </div>

              <div className="h-[330px] rounded-md overflow-hidden bg-[#DFE9E5]">
                {data?.heroImage?.__image_url__ ? (
                  <img src={data.heroImage.__image_url__} alt={data.heroImage.__image_prompt__} className="w-full h-full object-contain" />
                ) : null}
              </div>

              <div>
                <div className="border px-4 py-2 text-center text-2xl uppercase mb-4" style={{ borderColor: "#5E5A58", color: "#383534" }}>
                  {data?.rightTitle || "Tree"}
                </div>
                <p className="text-lg leading-relaxed" style={{ color: "#4D4A48" }}>{data?.rightBody || "Protect biodiversity through restoration efforts, responsible land use, and long-term stewardship."}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalviaNatureCoverLayout;
