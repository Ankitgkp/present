import React from "react";
import * as z from "zod";
import { ImageSchema } from "../defaultSchemes";
import { GradientMeshFrame } from "./GradientMeshFrame";

export const layoutId = "gradient-mesh-triple-image";
export const layoutName = "Gradient Mesh Triple Image";
export const layoutDescription = "Three visual cards for process, portfolio, or highlights.";

export const Schema = z.object({
  title: z.string().min(2).max(70).default("Three Highlights").meta({ description: "Section title." }),
  items: z.array(z.object({
    heading: z.string().min(2).max(30),
    image: ImageSchema,
  })).min(3).max(3).default([
    {
      heading: "Discover",
      image: { __image_url__: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80", __image_prompt__: "person exploring gallery" },
    },
    {
      heading: "Design",
      image: { __image_url__: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80", __image_prompt__: "design notes on desk" },
    },
    {
      heading: "Deliver",
      image: { __image_url__: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80", __image_prompt__: "team collaboration" },
    },
  ]).meta({ description: "Three image highlights." }),
});

type SchemaType = z.infer<typeof Schema>;

const GradientMeshTripleImageLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const items = data?.items || [];

  return (
    <GradientMeshFrame variant="center">
      <div className="h-full p-3">
        <h2 className="text-6xl font-semibold mb-5" style={{ color: "#101415" }}>{data?.title || "Three Highlights"}</h2>
        <div className="grid grid-cols-3 gap-5 h-[80%]">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden border flex flex-col" style={{ borderColor: "rgba(18,75,78,0.25)", background: "rgba(238,240,229,0.45)" }}>
              <div className="h-[82%] bg-[#D8EFF0]">
                {items[i]?.image?.__image_url__ ? <img src={items[i].image.__image_url__} alt={items[i].image.__image_prompt__} className="w-full h-full object-cover" /> : null}
              </div>
              <div className="p-3 text-center">
                <p className="text-3xl font-medium" style={{ color: "#145C60" }}>{items[i]?.heading || "Item"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GradientMeshFrame>
  );
};

export default GradientMeshTripleImageLayout;
