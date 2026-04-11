import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "blush-company-project";
export const layoutName = "Blush Company Project";
export const layoutDescription = "Project showcase with title block and a balanced 2x2 image grid.";

export const Schema = z.object({
  title: z.string().min(2).max(40).default("Project").meta({ description: "Section title." }),
  description: z.string().min(20).max(200).default("Walk your clients through your process and the visual direction of this project.").meta({ description: "Project summary text." }),
  images: z.array(ImageSchema).min(4).max(4).default([
    { __image_url__: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80", __image_prompt__: "beauty product bottle on neutral background" },
    { __image_url__: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=700&q=80", __image_prompt__: "minimal modern chair in studio" },
    { __image_url__: "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=700&q=80", __image_prompt__: "soft fabric and texture in blush tones" },
    { __image_url__: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&q=80", __image_prompt__: "makeup brushes and stationery flatlay" },
  ]).meta({ description: "Four images for project collage." }),
});

type SchemaType = z.infer<typeof Schema>;

const BlushCompanyProjectLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const images = data?.images || [];

  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden p-10"
      style={{ background: "#F3EEEA", fontFamily: "var(--heading-font-family, 'Georgia, serif')" }}
    >
      <div className="h-full rounded-md p-8" style={{ background: "#F8F5F2", border: "1px solid rgba(87, 65, 53, 0.12)" }}>
        <div className="grid grid-cols-2 gap-8 h-full">
          <div className="flex flex-col justify-center">
            <h2 className="text-6xl uppercase tracking-wide mb-6" style={{ color: "#2E221B" }}>{data?.title || "Project"}</h2>
            <p className="text-xl leading-relaxed max-w-md" style={{ color: "#5A473C" }}>
              {data?.description || "Walk your clients through your process and the visual direction of this project."}
            </p>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="rounded-md overflow-hidden" style={{ background: "#E9DFD8" }}>
                {images[i]?.__image_url__ ? (
                  <img src={images[i].__image_url__} alt={images[i].__image_prompt__} className="w-full h-full object-cover" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlushCompanyProjectLayout;
