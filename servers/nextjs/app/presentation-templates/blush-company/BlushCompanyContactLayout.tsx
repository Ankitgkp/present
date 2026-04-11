import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "blush-company-contact";
export const layoutName = "Blush Company Contact";
export const layoutDescription = "Simple contact slide with texture/image panel and concise details list.";

export const Schema = z.object({
  title: z.string().min(2).max(40).default("Contact").meta({ description: "Section title." }),
  address: z.string().min(10).max(120).default("123 Street Name, City Name, State, Country").meta({ description: "Address line." }),
  phone: z.string().min(6).max(40).default("+1 (000) 000-0000").meta({ description: "Phone number." }),
  email: z.string().min(5).max(100).default("hello@example.com").meta({ description: "Contact email." }),
  website: z.string().min(5).max(100).default("www.example.com").meta({ description: "Website." }),
  sideImage: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=900&q=80",
    __image_prompt__: "neutral texture panel in pastel beige",
  }).meta({ description: "Left side image block." }),
});

type SchemaType = z.infer<typeof Schema>;

const BlushCompanyContactLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden p-10"
      style={{ background: "#F3EDE8", fontFamily: "var(--heading-font-family, 'Georgia, serif')" }}
    >
      <div className="h-full rounded-md p-8 grid grid-cols-[44%_56%] gap-8" style={{ background: "#FAF7F4", border: "1px solid rgba(87, 65, 53, 0.12)" }}>
        <div className="rounded-md overflow-hidden" style={{ background: "#EDE4DD" }}>
          {data?.sideImage?.__image_url__ ? (
            <img src={data.sideImage.__image_url__} alt={data.sideImage.__image_prompt__} className="w-full h-full object-cover" />
          ) : null}
        </div>

        <div className="flex flex-col justify-center gap-5">
          <h2 className="text-6xl uppercase" style={{ color: "#2E221B" }}>{data?.title || "Contact"}</h2>
          <p className="text-xl" style={{ color: "#5A473C" }}>{data?.address || "123 Street Name, City Name, State, Country"}</p>
          <div className="h-[1px] w-40" style={{ background: "rgba(93, 68, 53, 0.35)" }}></div>
          <p className="text-lg" style={{ color: "#6A5447" }}>• {data?.phone || "+1 (000) 000-0000"}</p>
          <p className="text-lg" style={{ color: "#6A5447" }}>• {data?.email || "hello@example.com"}</p>
          <p className="text-lg" style={{ color: "#6A5447" }}>• {data?.website || "www.example.com"}</p>
        </div>
      </div>
    </div>
  );
};

export default BlushCompanyContactLayout;
