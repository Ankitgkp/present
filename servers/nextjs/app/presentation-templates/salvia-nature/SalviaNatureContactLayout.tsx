import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "salvia-nature-contact";
export const layoutName = "Salvia Nature Contact";
export const layoutDescription = "Contact layout with compact image block and footer details in matching palette.";

export const Schema = z.object({
  title: z.string().min(2).max(40).default("Contact").meta({ description: "Title text." }),
  text: z.string().min(10).max(140).default("Connect with us to collaborate on climate-positive projects.").meta({ description: "Intro text." }),
  email: z.string().min(5).max(80).default("info@nature.com").meta({ description: "Email address." }),
  phone: z.string().min(5).max(40).default("098 45 136").meta({ description: "Phone number." }),
  address: z.string().min(5).max(80).default("Address Name").meta({ description: "Address text." }),
  image: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1000&q=80",
    __image_prompt__: "leaf and branch minimal composition",
  }).meta({ description: "Supporting botanical image." }),
});

type SchemaType = z.infer<typeof Schema>;

const SalviaNatureContactLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden p-8" style={{ background: "#5E9A8C", fontFamily: "var(--heading-font-family, 'Inter, sans-serif')" }}>
      <div className="absolute inset-8 rounded-sm shadow-2xl p-8 grid grid-cols-[40%_60%] gap-8" style={{ background: "#F3F1EC" }}>
        <div className="rounded-md overflow-hidden bg-[#DFE9E5] border" style={{ borderColor: "#D8D4CE" }}>
          {data?.image?.__image_url__ ? <img src={data.image.__image_url__} alt={data.image.__image_prompt__} className="w-full h-full object-cover" /> : null}
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-6xl uppercase mb-4" style={{ color: "#363535" }}>{data?.title || "Contact"}</h2>
          <p className="text-2xl mb-5" style={{ color: "#4D4A48" }}>{data?.text || "Connect with us to collaborate on climate-positive projects."}</p>
          <p className="text-2xl" style={{ color: "#4D4A48" }}>• {data?.email || "info@nature.com"}</p>
          <p className="text-2xl" style={{ color: "#4D4A48" }}>• {data?.phone || "098 45 136"}</p>
          <p className="text-2xl" style={{ color: "#4D4A48" }}>• {data?.address || "Address Name"}</p>
        </div>
      </div>
    </div>
  );
};

export default SalviaNatureContactLayout;
