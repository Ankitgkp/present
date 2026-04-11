import React from "react";
import * as z from "zod";
import { ImageSchema } from "../defaultSchemes";
import { GradientMeshFrame } from "./GradientMeshFrame";

export const layoutId = "gradient-mesh-dual-image";
export const layoutName = "Gradient Mesh Dual Image";
export const layoutDescription = "Two balanced image cards with short labels and captions.";

export const Schema = z.object({
  title: z.string().min(2).max(70).default("Side-by-side Comparison").meta({ description: "Section title." }),
  cards: z.array(z.object({
    heading: z.string().min(2).max(40),
    caption: z.string().min(10).max(120),
    image: ImageSchema,
  })).min(2).max(2).default([
    {
      heading: "Before",
      caption: "Dense composition with low visual hierarchy.",
      image: { __image_url__: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80", __image_prompt__: "workspace before redesign" },
    },
    {
      heading: "After",
      caption: "Balanced, spacious design with guided attention.",
      image: { __image_url__: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80", __image_prompt__: "workspace after redesign" },
    },
  ]).meta({ description: "Two image comparison cards." }),
});

type SchemaType = z.infer<typeof Schema>;

const GradientMeshDualImageLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const cards = data?.cards || [];

  return (
    <GradientMeshFrame variant="left">
      <div className="h-full p-3">
        <h2 className="text-6xl font-semibold mb-4" style={{ color: "#101415" }}>{data?.title || "Side-by-side Comparison"}</h2>
        <div className="grid grid-cols-2 gap-5 h-[82%]">
          {[0, 1].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden border flex flex-col" style={{ borderColor: "rgba(18,75,78,0.25)", background: "rgba(238,240,229,0.45)", backdropFilter: "blur(3px)" }}>
              <div className="h-[72%] bg-[#D8EFF0]">
                {cards[i]?.image?.__image_url__ ? <img src={cards[i].image.__image_url__} alt={cards[i].image.__image_prompt__} className="w-full h-full object-cover" /> : null}
              </div>
              <div className="p-4">
                <p className="text-4xl font-medium" style={{ color: "#125D62" }}>{cards[i]?.heading || "Card"}</p>
                <p className="text-xl mt-1" style={{ color: "#324447" }}>{cards[i]?.caption || "Description"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GradientMeshFrame>
  );
};

export default GradientMeshDualImageLayout;
