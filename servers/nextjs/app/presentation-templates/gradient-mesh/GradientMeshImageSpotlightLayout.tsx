import React from "react";
import * as z from "zod";
import { ImageSchema } from "../defaultSchemes";
import { GradientMeshFrame } from "./GradientMeshFrame";

export const layoutId = "gradient-mesh-image-spotlight";
export const layoutName = "Gradient Mesh Image Spotlight";
export const layoutDescription = "Single large image spotlight with title and caption.";

export const Schema = z.object({
  title: z.string().min(2).max(70).default("Visual Spotlight").meta({ description: "Slide title." }),
  caption: z.string().min(12).max(220).default("A focused visual moment that drives the story before deeper explanation.").meta({ description: "Caption under the title." }),
  image: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
    __image_prompt__: "modern architecture with cyan sky",
  }).meta({ description: "Main spotlight image." }),
});

type SchemaType = z.infer<typeof Schema>;

const GradientMeshImageSpotlightLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <GradientMeshFrame variant="right">
      <div className="h-full p-3">
        <div className="h-full rounded-2xl p-6 flex flex-col" style={{ background: "rgba(238,240,229,0.42)", backdropFilter: "blur(4px)" }}>
          <div className="mb-4">
            <h2 className="text-6xl font-semibold tracking-[-0.02em]" style={{ color: "#101415" }}>{data?.title || "Visual Spotlight"}</h2>
            <p className="text-2xl mt-2" style={{ color: "#334649" }}>{data?.caption || "A focused visual moment that drives the story before deeper explanation."}</p>
          </div>

          <div className="flex-1 rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(18,75,78,0.25)" }}>
            {data?.image?.__image_url__ ? (
              <img src={data.image.__image_url__} alt={data.image.__image_prompt__} className="w-full h-full object-cover" />
            ) : null}
          </div>
        </div>
      </div>
    </GradientMeshFrame>
  );
};

export default GradientMeshImageSpotlightLayout;
