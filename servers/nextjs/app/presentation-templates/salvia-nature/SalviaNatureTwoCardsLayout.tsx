import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "salvia-nature-two-cards";
export const layoutName = "Salvia Nature Two Cards";
export const layoutDescription = "Balanced two-content-card layout with center image for comparisons and paired ideas.";

export const Schema = z.object({
  title: z.string().min(2).max(60).default("Nature").meta({ description: "Main title." }),
  cardOneTitle: z.string().min(2).max(30).default("Leaves").meta({ description: "First card title." }),
  cardOneText: z.string().min(15).max(160).default("Plant-based systems improve air quality and support healthy habitats.").meta({ description: "First card text." }),
  cardTwoTitle: z.string().min(2).max(30).default("Tree").meta({ description: "Second card title." }),
  cardTwoText: z.string().min(15).max(160).default("Tree coverage helps regulate temperature and protects biodiversity.").meta({ description: "Second card text." }),
  centerImage: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1000&q=80",
    __image_prompt__: "single botanical leaf composition",
  }).meta({ description: "Center image." }),
});

type SchemaType = z.infer<typeof Schema>;

const SalviaNatureTwoCardsLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden p-8" style={{ background: "#5E9A8C", fontFamily: "var(--heading-font-family, 'Inter, sans-serif')" }}>
      <div className="absolute inset-8 rounded-sm shadow-2xl p-8" style={{ background: "#F3F1EC" }}>
        <h2 className="text-6xl uppercase mb-6 text-center" style={{ color: "#363535" }}>{data?.title || "Nature"}</h2>
        <div className="grid grid-cols-[1fr_320px_1fr] gap-6 h-[80%] items-center">
          <div className="rounded-md border p-6" style={{ borderColor: "#D2CEC8", background: "#F8F6F2" }}>
            <p className="text-3xl uppercase mb-3" style={{ color: "#579C8E" }}>{data?.cardOneTitle || "Leaves"}</p>
            <p className="text-xl leading-relaxed" style={{ color: "#4D4A48" }}>{data?.cardOneText || "Plant-based systems improve air quality and support healthy habitats."}</p>
          </div>
          <div className="h-[360px] rounded-md overflow-hidden bg-[#DFE9E5]">
            {data?.centerImage?.__image_url__ ? <img src={data.centerImage.__image_url__} alt={data.centerImage.__image_prompt__} className="w-full h-full object-contain" /> : null}
          </div>
          <div className="rounded-md border p-6" style={{ borderColor: "#D2CEC8", background: "#F8F6F2" }}>
            <p className="text-3xl uppercase mb-3" style={{ color: "#579C8E" }}>{data?.cardTwoTitle || "Tree"}</p>
            <p className="text-xl leading-relaxed" style={{ color: "#4D4A48" }}>{data?.cardTwoText || "Tree coverage helps regulate temperature and protects biodiversity."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalviaNatureTwoCardsLayout;
