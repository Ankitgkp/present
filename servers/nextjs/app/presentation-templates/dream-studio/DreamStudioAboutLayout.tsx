import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "dream-studio-about";
export const layoutName = "Dream Studio About";
export const layoutDescription = "A text-heavy about slide with soft pastel gradients, a rounded image, and two-column text layout for detailed descriptions.";

export const Schema = z.object({
  badge: z.string().min(2).max(30).default("about us.").meta({
    description: "Badge/label text at the top. Max 3 words.",
  }),
  heading: z.string().min(5).max(100).default("We are a group of artists, designers and creatives in London.").meta({
    description: "Main heading text. Max 15 words.",
  }),
  paragraph1: z.string().min(10).max(300).default("We use our expertise to create brands, products and experiences that deliver creative solutions to our clients.").meta({
    description: "First paragraph of body text. Max 40 words.",
  }),
  paragraph2: z.string().min(10).max(300).default("Our team combines strategic thinking with world-class design to help businesses stand out in today's competitive landscape.").meta({
    description: "Second paragraph of body text. Max 40 words.",
  }),
  image: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=800&q=80",
    __image_prompt__: "Tropical plant leaf on soft pink background",
  }).meta({
    description: "Supporting image. Nature, abstract, or studio-related recommended.",
  }),
});

type SchemaType = z.infer<typeof Schema>;

const DreamStudioAboutLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #E0D4F0 0%, #D8CCE8 20%, #EAD8E8 40%, #F0E0F0 60%, #E8D8F0 80%, #D8C8E8 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      {/* Soft radial overlays */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[400px] opacity-[0.35]"
        style={{ background: "radial-gradient(ellipse at 50% 30%, #F5D0E0 0%, transparent 60%)" }}
      ></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-[0.25]"
        style={{ background: "radial-gradient(ellipse at 70% 80%, #C8D8F8 0%, transparent 60%)" }}
      ></div>

      {/* Subtle border */}
      <div className="absolute inset-4 rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.5)" }}></div>

      <div className="relative h-full flex items-center px-14 lg:px-20 py-12 gap-10">

        {/* Left: Image + Badge */}
        <div className="flex flex-col items-center gap-4 min-w-[280px] relative z-10">
          {/* Badge */}
          <div className="px-6 py-2 rounded-full"
            style={{
              background: "rgba(220, 180, 200, 0.4)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.4)",
            }}
          >
            <span className="text-lg font-medium" style={{ color: "#3D2060", fontStyle: "italic" }}>
              {data?.badge || "about us."}
            </span>
          </div>

          {/* Rounded Image */}
          <div className="w-[220px] h-[220px] rounded-3xl overflow-hidden"
            style={{
              boxShadow: "0 15px 40px rgba(160, 120, 180, 0.25), 0 0 0 1px rgba(255,255,255,0.3)",
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
                <span className="text-5xl opacity-30">✦</span>
              </div>
            )}
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 flex flex-col gap-6 relative z-10">
          {/* Decorative star */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mb-1">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="rgba(90, 60, 120, 0.4)" />
          </svg>

          {/* Heading */}
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug m-0 max-w-lg"
            style={{ color: "#2D1B4E" }}
          >
            {data?.heading || "We are a group of artists, designers and creatives in London."}
          </h1>

          {/* Two-column text */}
          <div className="flex gap-6 mt-2">
            <p className="flex-1 text-sm lg:text-base font-normal leading-relaxed"
              style={{ color: "rgba(60, 40, 80, 0.65)" }}
            >
              {data?.paragraph1 || "We use our expertise to create brands, products and experiences that deliver creative solutions to our clients."}
            </p>
            <p className="flex-1 text-sm lg:text-base font-normal leading-relaxed"
              style={{ color: "rgba(60, 40, 80, 0.65)" }}
            >
              {data?.paragraph2 || "Our team combines strategic thinking with world-class design to help businesses stand out in today's competitive landscape."}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DreamStudioAboutLayout;
