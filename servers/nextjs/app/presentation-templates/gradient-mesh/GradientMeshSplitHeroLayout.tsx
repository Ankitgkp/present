import React from "react";
import * as z from "zod";
import { ImageSchema } from "../defaultSchemes";
import { GradientMeshFrame } from "./GradientMeshFrame";

export const layoutId = "gradient-mesh-split-hero";
export const layoutName = "Gradient Mesh Split Hero";
export const layoutDescription = "Left narrative with right hero image on textured gradient background.";

export const Schema = z.object({
  eyebrow: z.string().min(2).max(40).default("Creative Direction").meta({ description: "Small label above title." }),
  title: z.string().min(2).max(80).default("Build clean visual narratives").meta({ description: "Main title." }),
  body: z.string().min(20).max(280).default("Use a calm gradient mesh to keep the layout expressive while preserving readability and focus.").meta({ description: "Support paragraph." }),
  heroImage: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    __image_prompt__: "creative desk with soft cyan tones",
  }).meta({ description: "Right-side hero image." }),
});

type SchemaType = z.infer<typeof Schema>;

const GradientMeshSplitHeroLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <GradientMeshFrame variant="center">
      <div className="h-full grid grid-cols-[1fr_0.95fr] gap-10 items-center px-6 py-4">
        <div>
          <p className="text-xl uppercase tracking-[0.12em] mb-5" style={{ color: "#2E7A77" }}>{data?.eyebrow || "Creative Direction"}</p>
          <h2 className="text-6xl leading-[1.02] font-semibold tracking-[-0.02em]" style={{ color: "#121617" }}>{data?.title || "Build clean visual narratives"}</h2>
          <p className="text-2xl leading-relaxed mt-6" style={{ color: "#2D4A48" }}>{data?.body || "Use a calm gradient mesh to keep the layout expressive while preserving readability and focus."}</p>
        </div>

        <div className="h-[520px] rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.12)" }}>
          {data?.heroImage?.__image_url__ ? (
            <img src={data.heroImage.__image_url__} alt={data.heroImage.__image_prompt__} className="w-full h-full object-cover" />
          ) : null}
        </div>
      </div>
    </GradientMeshFrame>
  );
};

export default GradientMeshSplitHeroLayout;
