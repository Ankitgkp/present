import React from "react";
import * as z from "zod";
import { ImageSchema } from "../defaultSchemes";
import { GradientMeshFrame } from "./GradientMeshFrame";

export const layoutId = "gradient-mesh-metrics-image";
export const layoutName = "Gradient Mesh Metrics + Image";
export const layoutDescription = "Image panel with three metric cards on textured mesh background.";

export const Schema = z.object({
  title: z.string().min(2).max(70).default("Impact Snapshot").meta({ description: "Slide title." }),
  image: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    __image_prompt__: "analytics dashboard on laptop",
  }).meta({ description: "Main image panel." }),
  metrics: z.array(z.object({
    label: z.string().min(2).max(40),
    value: z.string().min(1).max(20),
  })).min(3).max(3).default([
    { label: "Conversion", value: "+38%" },
    { label: "Retention", value: "91%" },
    { label: "Response time", value: "1.2s" },
  ]).meta({ description: "Three key metrics." }),
});

type SchemaType = z.infer<typeof Schema>;

const GradientMeshMetricsImageLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const metrics = data?.metrics || [];

  return (
    <GradientMeshFrame variant="right">
      <div className="h-full grid grid-cols-[1fr_0.95fr] gap-6 p-3">
        <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(18,75,78,0.25)", background: "rgba(238,240,229,0.4)" }}>
          {data?.image?.__image_url__ ? <img src={data.image.__image_url__} alt={data.image.__image_prompt__} className="w-full h-full object-cover" /> : null}
        </div>

        <div className="flex flex-col">
          <h2 className="text-6xl leading-[1.02] font-semibold mb-5" style={{ color: "#111516" }}>{data?.title || "Impact Snapshot"}</h2>
          <div className="grid grid-rows-3 gap-4 flex-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-2xl border p-5 flex items-center justify-between" style={{ borderColor: "rgba(18,75,78,0.25)", background: "rgba(238,240,229,0.48)", backdropFilter: "blur(4px)" }}>
                <span className="text-2xl" style={{ color: "#304346" }}>{metrics[i]?.label || "Metric"}</span>
                <span className="text-5xl font-semibold tracking-[-0.02em]" style={{ color: "#13666B" }}>{metrics[i]?.value || "0"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GradientMeshFrame>
  );
};

export default GradientMeshMetricsImageLayout;
