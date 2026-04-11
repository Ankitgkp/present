import React from "react";
import * as z from "zod";
import { ImageSchema } from "../defaultSchemes";
import { GradientMeshFrame } from "./GradientMeshFrame";

export const layoutId = "gradient-mesh-contact";
export const layoutName = "Gradient Mesh Contact";
export const layoutDescription = "Closing contact slide with image, CTA, and communication details.";

export const Schema = z.object({
  title: z.string().min(2).max(70).default("Let’s create something clear and memorable").meta({ description: "Closing headline." }),
  email: z.string().min(5).max(80).default("hello@studio.com").meta({ description: "Contact email." }),
  website: z.string().min(5).max(80).default("www.studio.com").meta({ description: "Website URL." }),
  image: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
    __image_prompt__: "creative office interior",
  }).meta({ description: "Closing visual image." }),
});

type SchemaType = z.infer<typeof Schema>;

const GradientMeshContactLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <GradientMeshFrame variant="left">
      <div className="h-full grid grid-cols-[0.95fr_1.05fr] gap-6 p-3">
        <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(18,75,78,0.25)", background: "rgba(238,240,229,0.4)" }}>
          {data?.image?.__image_url__ ? <img src={data.image.__image_url__} alt={data.image.__image_prompt__} className="w-full h-full object-cover" /> : null}
        </div>

        <div className="rounded-2xl p-10 flex flex-col justify-between" style={{ background: "rgba(238,240,229,0.52)", backdropFilter: "blur(5px)" }}>
          <h2 className="text-6xl leading-[1.05] font-semibold" style={{ color: "#111516" }}>{data?.title || "Let’s create something clear and memorable"}</h2>

          <div>
            <p className="text-xl uppercase tracking-[0.11em]" style={{ color: "#3A575A" }}>Contact</p>
            <p className="text-4xl mt-2 font-medium" style={{ color: "#12676D" }}>{data?.email || "hello@studio.com"}</p>
            <p className="text-2xl mt-2" style={{ color: "#355155" }}>{data?.website || "www.studio.com"}</p>
          </div>
        </div>
      </div>
    </GradientMeshFrame>
  );
};

export default GradientMeshContactLayout;
