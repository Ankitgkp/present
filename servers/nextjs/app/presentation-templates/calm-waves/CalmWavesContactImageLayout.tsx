import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "calm-waves-contact-image";
export const layoutName = "Calm Waves Contact";
export const layoutDescription = "Simple contact slide with image block and minimal text details.";

export const Schema = z.object({
  title: z.string().min(2).max(40).default("Contact").meta({ description: "Title text." }),
  line1: z.string().min(5).max(80).default("123 Street Name, City, Country").meta({ description: "Address line." }),
  line2: z.string().min(5).max(80).default("hello@example.com").meta({ description: "Email line." }),
  line3: z.string().min(5).max(80).default("www.example.com").meta({ description: "Website line." }),
  image: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80",
    __image_prompt__: "minimal workspace texture",
  }).meta({ description: "Image panel." }),
});

type SchemaType = z.infer<typeof Schema>;

const CalmWavesContactImageLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden p-10" style={{ background: "#A8BCC3", fontFamily: "var(--heading-font-family, 'Inter, sans-serif')" }}>
      <div className="h-full rounded-md p-8 grid grid-cols-[42%_58%] gap-8" style={{ background: "#F2EEE8" }}>
        <div className="rounded-md overflow-hidden border" style={{ borderColor: "rgba(38, 52, 67, 0.2)", background: "#D9E2EA" }}>
          {data?.image?.__image_url__ ? <img src={data.image.__image_url__} alt={data.image.__image_prompt__} className="w-full h-full object-cover" /> : null}
        </div>
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-6xl leading-none mb-2" style={{ color: "#474747" }}>{data?.title || "Contact"}</h2>
          <p className="text-xl" style={{ color: "#66605B" }}>• {data?.line1 || "123 Street Name, City, Country"}</p>
          <p className="text-xl" style={{ color: "#66605B" }}>• {data?.line2 || "hello@example.com"}</p>
          <p className="text-xl" style={{ color: "#66605B" }}>• {data?.line3 || "www.example.com"}</p>
        </div>
      </div>
    </div>
  );
};

export default CalmWavesContactImageLayout;
