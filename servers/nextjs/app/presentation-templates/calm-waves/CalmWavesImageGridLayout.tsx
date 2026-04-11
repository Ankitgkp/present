import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "calm-waves-image-grid";
export const layoutName = "Calm Waves Image Grid";
export const layoutDescription = "Clean image-driven 2x2 gallery with heading and short intro text.";

export const Schema = z.object({
  title: z.string().min(2).max(60).default("Image Gallery").meta({ description: "Section title." }),
  intro: z.string().min(20).max(200).default("Highlight key moments, products, or references with a balanced visual grid.").meta({ description: "Short intro text." }),
  images: z.array(ImageSchema).min(4).max(4).default([
    { __image_url__: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80", __image_prompt__: "minimal coffee shop interior" },
    { __image_url__: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80", __image_prompt__: "neutral interior corner" },
    { __image_url__: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80", __image_prompt__: "architectural details in muted palette" },
    { __image_url__: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=900&q=80", __image_prompt__: "decor and styling objects" },
  ]).meta({ description: "Four gallery images." }),
});

type SchemaType = z.infer<typeof Schema>;

const CalmWavesImageGridLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const images = data?.images || [];

  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden p-10" style={{ background: "#A8BCC3", fontFamily: "var(--heading-font-family, 'Inter, sans-serif')" }}>
      <div className="h-full rounded-md p-8" style={{ background: "#F2EEE8" }}>
        <div className="mb-5">
          <h2 className="text-5xl leading-none mb-3" style={{ color: "#474747" }}>{data?.title || "Image Gallery"}</h2>
          <p className="text-lg" style={{ color: "#66605B" }}>{data?.intro || "Highlight key moments, products, or references with a balanced visual grid."}</p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[78%]">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="rounded-md overflow-hidden border" style={{ borderColor: "rgba(38, 52, 67, 0.2)", background: "#D9E2EA" }}>
              {images[i]?.__image_url__ ? (
                <img src={images[i].__image_url__} alt={images[i].__image_prompt__} className="w-full h-full object-cover" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalmWavesImageGridLayout;
