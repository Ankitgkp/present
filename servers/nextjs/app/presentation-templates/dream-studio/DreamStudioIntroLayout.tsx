import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "dream-studio-intro";
export const layoutName = "Dream Studio Intro";
export const layoutDescription = "A dreamy intro slide with soft pastel gradients, decorative star elements, and elegant left-aligned typography for a creative studio look.";

export const Schema = z.object({
  titleLine1: z.string().min(2).max(50).default("design").meta({
    description: "First line of the title in italic serif style. Max 3 words.",
  }),
  titleLine2: z.string().min(2).max(50).default("studio.").meta({
    description: "Second line of the title, bold and large. Max 3 words.",
  }),
  description: z.string().min(10).max(200).default("Experiment with our creative design resources to design your brand").meta({
    description: "Supporting description text below title. Max 25 words.",
  }),
  websiteUrl: z.string().min(3).max(60).default("www.example.com").meta({
    description: "Website URL or tagline displayed at bottom.",
  }),
  image: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=800&q=80",
    __image_prompt__: "Pink tropical leaf on soft gradient background",
  }).meta({
    description: "Decorative circular image element. Nature or abstract recommended.",
  }),
});

type SchemaType = z.infer<typeof Schema>;

const DreamStudioIntroLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #E8E0F0 0%, #D4C8E8 15%, #C9B8E0 30%, #E0D4F0 45%, #F0E8F8 60%, #E8D8F0 80%, #D8C8E8 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      {/* Soft radial overlays */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.4]"
        style={{ background: "radial-gradient(ellipse at 80% 20%, #F5D0E0 0%, transparent 60%)" }}
      ></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.3]"
        style={{ background: "radial-gradient(ellipse at 20% 80%, #C8D8F8 0%, transparent 60%)" }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-[0.2]"
        style={{ background: "radial-gradient(ellipse, #F0D4E8 0%, transparent 50%)" }}
      ></div>

      {/* Subtle border */}
      <div className="absolute inset-4 rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.5)" }}></div>

      <div className="relative h-full flex items-center px-16 py-12">

        {/* Left Content */}
        <div className="flex-1 max-w-[55%] flex flex-col justify-center gap-5 relative z-10">

          {/* Decorative star */}
          <div className="flex items-center gap-2 mb-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="rgba(90, 60, 120, 0.5)" />
            </svg>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-0">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl leading-[1.05] m-0"
              style={{ color: "#2D1B4E", fontStyle: "italic", fontWeight: 300 }}
            >
              {data?.titleLine1 || "design"}
            </h1>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] m-0"
              style={{ color: "#2D1B4E" }}
            >
              {data?.titleLine2 || "studio."}
            </h2>
          </div>

          {/* Description */}
          <p className="text-sm lg:text-base font-normal leading-relaxed max-w-sm"
            style={{ color: "rgba(60, 40, 80, 0.7)" }}
          >
            {data?.description || "Experiment with our creative design resources to design your brand"}
          </p>

          {/* Website URL */}
          <span className="text-xs tracking-widest uppercase mt-4"
            style={{ color: "rgba(60, 40, 80, 0.5)" }}
          >
            {data?.websiteUrl || "www.example.com"}
          </span>
        </div>

        {/* Right Circular Image */}
        <div className="flex-1 relative h-full flex items-center justify-center z-0">
          <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden"
            style={{
              boxShadow: "0 20px 60px rgba(180, 140, 200, 0.3), 0 0 0 1px rgba(255,255,255,0.3)",
            }}
          >
            {data?.image?.__image_url__ ? (
              <img
                src={data.image.__image_url__}
                alt={data.image.__image_prompt__}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #E8C8D8, #D8B8D0)" }}
              >
                <span className="text-6xl opacity-30">✦</span>
              </div>
            )}
          </div>
          {/* Decorative stars */}
          <svg className="absolute top-20 right-16 opacity-40" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#5A3C78" />
          </svg>
          <svg className="absolute bottom-24 left-12 opacity-25" width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#7A5CA0" />
          </svg>
        </div>

      </div>
    </div>
  );
};

export default DreamStudioIntroLayout;
