import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "salvia-nature-about";
export const layoutName = "Salvia Nature About";
export const layoutDescription = "About slide with large script-style background texture, image, and compact copy.";

export const Schema = z.object({
  title: z.string().min(2).max(50).default("About Us").meta({ description: "Main title." }),
  label: z.string().min(2).max(24).default("Leaves").meta({ description: "Small label." }),
  body: z.string().min(20).max(220).default("Share your mission, values, and impact with a clean editorial composition.").meta({ description: "Body text." }),
  cta: z.string().min(2).max(40).default("Read More").meta({ description: "CTA label." }),
  image: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1459666644539-a9755287d6b0?auto=format&fit=crop&w=1000&q=80",
    __image_prompt__: "botanical branch with muted green tones",
  }).meta({ description: "Decorative image." }),
});

type SchemaType = z.infer<typeof Schema>;

const SalviaNatureAboutLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden p-8" style={{ background: "#5E9A8C", fontFamily: "var(--heading-font-family, 'Inter, sans-serif')" }}>
      <div className="absolute inset-8 rounded-sm shadow-2xl p-10 grid grid-cols-[56%_44%] gap-8" style={{ background: "#7BB1A3" }}>
        <div className="relative flex flex-col justify-center">
          <div className="absolute inset-0 opacity-25 text-[190px] leading-none font-serif pointer-events-none" style={{ color: "#2F665B" }}>nature</div>
          <div className="relative z-10 max-w-xl">
            <p className="text-2xl uppercase mb-3" style={{ color: "#1B3E37" }}>{data?.label || "Leaves"}</p>
            <p className="text-6xl uppercase mb-4" style={{ color: "#EEF5F1" }}>{data?.title || "About Us"}</p>
            <p className="text-2xl leading-relaxed mb-6" style={{ color: "#E3F0EA" }}>{data?.body || "Share your mission, values, and impact with a clean editorial composition."}</p>
            <div className="inline-block px-6 py-2 text-2xl" style={{ background: "#67A696", color: "#EFF7F3" }}>{data?.cta || "Read More"}</div>
          </div>
        </div>
        <div className="rounded-md overflow-hidden border" style={{ borderColor: "rgba(27, 62, 55, 0.25)", background: "#A7CDC2" }}>
          {data?.image?.__image_url__ ? <img src={data.image.__image_url__} alt={data.image.__image_prompt__} className="w-full h-full object-contain" /> : null}
        </div>
      </div>
    </div>
  );
};

export default SalviaNatureAboutLayout;
