import React from "react";
import * as z from "zod";
import { GradientMeshFrame } from "./GradientMeshFrame";

export const layoutId = "gradient-mesh-cover";
export const layoutName = "Gradient Mesh Cover";
export const layoutDescription = "Minimal centered cover with soft mesh glow and subtle textured noise.";

export const Schema = z.object({
  title: z.string().min(2).max(80).default("Gradient Mesh").meta({ description: "Main cover heading." }),
  subtitle: z.string().min(8).max(180).default("Soft visual storytelling with calming aqua tones.").meta({ description: "Supporting line below title." }),
});

type SchemaType = z.infer<typeof Schema>;

const GradientMeshCoverLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <GradientMeshFrame variant="left">
      <div className="h-full flex items-center justify-center">
        <div className="text-center max-w-[860px] px-8 py-6">
          <h1 className="text-[88px] leading-[0.92] font-bold tracking-[-0.03em]" style={{ color: "#111314" }}>
            {data?.title || "Gradient Mesh"}
          </h1>
          <p className="text-2xl mt-7" style={{ color: "#2C4745" }}>
            {data?.subtitle || "Soft visual storytelling with calming aqua tones."}
          </p>
        </div>
      </div>
    </GradientMeshFrame>
  );
};

export default GradientMeshCoverLayout;
