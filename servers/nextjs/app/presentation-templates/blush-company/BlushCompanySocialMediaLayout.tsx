import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "blush-company-social-media";
export const layoutName = "Blush Company Social Media";
export const layoutDescription = "Phone mockup and strategy bullets for social channel plans.";

export const Schema = z.object({
  title: z.string().min(2).max(60).default("Social Media").meta({ description: "Section title." }),
  description: z.string().min(20).max(220).default("We optimize your social presence with creative strategy, campaign systems, and measurable engagement outcomes.").meta({ description: "Section description." }),
  channels: z.array(z.string().min(2).max(30)).min(3).max(5).default(["Instagram", "LinkedIn", "Pinterest", "TikTok"]).meta({ description: "List of channels." }),
  phoneImage: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    __image_prompt__: "minimal product image suitable for phone screen mockup",
  }).meta({ description: "Image displayed inside phone frame." }),
});

type SchemaType = z.infer<typeof Schema>;

const BlushCompanySocialMediaLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const channels = data?.channels || ["Instagram", "LinkedIn", "Pinterest", "TikTok"];

  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden p-10"
      style={{ background: "#F2ECE7", fontFamily: "var(--heading-font-family, 'Georgia, serif')" }}
    >
      <div className="h-full rounded-md px-10 py-8 grid grid-cols-[320px_1fr] gap-10 items-center" style={{ background: "#F9F5F2", border: "1px solid rgba(87, 65, 53, 0.12)" }}>
        <div className="relative w-[250px] h-[470px] mx-auto rounded-[36px] p-3" style={{ background: "#201A17", boxShadow: "0 24px 50px rgba(64, 46, 37, 0.25)" }}>
          <div className="absolute top-3 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full" style={{ background: "#120F0D" }}></div>
          <div className="w-full h-full rounded-[28px] overflow-hidden bg-[#E7DDD5] mt-2">
            {data?.phoneImage?.__image_url__ ? (
              <img src={data.phoneImage.__image_url__} alt={data.phoneImage.__image_prompt__} className="w-full h-full object-cover" />
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-6xl uppercase leading-none" style={{ color: "#2E221B" }}>{data?.title || "Social Media"}</h2>
          <p className="text-xl leading-relaxed max-w-2xl" style={{ color: "#5A473C" }}>
            {data?.description || "We optimize your social presence with creative strategy, campaign systems, and measurable engagement outcomes."}
          </p>
          <ul className="grid grid-cols-2 gap-3 mt-3">
            {channels.map((channel, idx) => (
              <li key={`${channel}-${idx}`} className="rounded-md px-4 py-3 text-lg" style={{ background: "#EFE3DB", color: "#4A382E" }}>
                {String.fromCharCode(97 + idx)}) {channel}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlushCompanySocialMediaLayout;
