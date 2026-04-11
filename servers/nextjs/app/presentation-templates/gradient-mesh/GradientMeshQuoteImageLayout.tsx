import React from "react";
import * as z from "zod";
import { ImageSchema } from "../defaultSchemes";
import { GradientMeshFrame } from "./GradientMeshFrame";

export const layoutId = "gradient-mesh-quote-image";
export const layoutName = "Gradient Mesh Quote + Image";
export const layoutDescription = "Editorial quote layout with portrait image and role line.";

export const Schema = z.object({
  quote: z.string().min(20).max(280).default("The right visual atmosphere can simplify complexity and make every message feel intentional.").meta({ description: "Main quote text." }),
  author: z.string().min(2).max(50).default("Avery Chen").meta({ description: "Quote author name." }),
  role: z.string().min(2).max(80).default("Creative Strategy Lead").meta({ description: "Author role." }),
  image: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    __image_prompt__: "professional portrait",
  }).meta({ description: "Author or contextual portrait image." }),
});

type SchemaType = z.infer<typeof Schema>;

const GradientMeshQuoteImageLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <GradientMeshFrame variant="center">
      <div className="h-full grid grid-cols-[1.15fr_0.85fr] gap-6 p-3 items-center">
        <div className="rounded-2xl p-10" style={{ background: "rgba(238,240,229,0.5)", backdropFilter: "blur(5px)" }}>
          <p className="text-7xl leading-none mb-4" style={{ color: "#12838A" }}>“</p>
          <p className="text-4xl leading-relaxed" style={{ color: "#1A2D30" }}>{data?.quote || "The right visual atmosphere can simplify complexity and make every message feel intentional."}</p>
          <p className="text-3xl mt-8 font-medium" style={{ color: "#124C50" }}>{data?.author || "Avery Chen"}</p>
          <p className="text-xl" style={{ color: "#365155" }}>{data?.role || "Creative Strategy Lead"}</p>
        </div>

        <div className="h-[520px] rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(18,75,78,0.25)", background: "rgba(238,240,229,0.42)" }}>
          {data?.image?.__image_url__ ? <img src={data.image.__image_url__} alt={data.image.__image_prompt__} className="w-full h-full object-cover" /> : null}
        </div>
      </div>
    </GradientMeshFrame>
  );
};

export default GradientMeshQuoteImageLayout;
