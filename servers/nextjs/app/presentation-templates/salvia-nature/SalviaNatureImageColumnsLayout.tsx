import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "salvia-nature-image-columns";
export const layoutName = "Salvia Nature Image Columns";
export const layoutDescription = "Three image columns with title and subtitles for simple visual storytelling.";

export const Schema = z.object({
  title: z.string().min(2).max(60).default("Nature Highlights").meta({ description: "Section title." }),
  items: z.array(z.object({
    heading: z.string().min(2).max(30),
    caption: z.string().min(10).max(120),
    image: ImageSchema,
  })).min(3).max(3).default([
    {
      heading: "Leaves",
      caption: "Document local species and seasonal change.",
      image: { __image_url__: "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=900&q=80", __image_prompt__: "leaf close-up" },
    },
    {
      heading: "Water",
      caption: "Track streams, rainfall, and watershed health.",
      image: { __image_url__: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=900&q=80", __image_prompt__: "forest and water scene" },
    },
    {
      heading: "Soil",
      caption: "Support long-term regeneration and resilience.",
      image: { __image_url__: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80", __image_prompt__: "sprout growing from soil" },
    },
  ]).meta({ description: "Three image-driven columns." }),
});

type SchemaType = z.infer<typeof Schema>;

const SalviaNatureImageColumnsLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const items = data?.items || [];

  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden p-8" style={{ background: "#5E9A8C", fontFamily: "var(--heading-font-family, 'Inter, sans-serif')" }}>
      <div className="absolute inset-8 rounded-sm shadow-2xl p-8" style={{ background: "#F3F1EC" }}>
        <h2 className="text-6xl uppercase mb-6" style={{ color: "#363535" }}>{data?.title || "Nature Highlights"}</h2>
        <div className="grid grid-cols-3 gap-5 h-[82%]">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-md overflow-hidden border flex flex-col" style={{ borderColor: "#D8D4CE" }}>
              <div className="h-[68%] bg-[#DFE9E5]">
                {items[i]?.image?.__image_url__ ? <img src={items[i].image.__image_url__} alt={items[i].image.__image_prompt__} className="w-full h-full object-cover" /> : null}
              </div>
              <div className="p-4 flex-1">
                <p className="text-3xl uppercase mb-1" style={{ color: "#579C8E" }}>{items[i]?.heading || "Item"}</p>
                <p className="text-lg" style={{ color: "#4D4A48" }}>{items[i]?.caption || "Caption"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalviaNatureImageColumnsLayout;
