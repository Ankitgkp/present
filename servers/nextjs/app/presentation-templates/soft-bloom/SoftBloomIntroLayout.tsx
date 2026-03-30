import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "soft-bloom-intro";
export const layoutName = "Soft Bloom Intro";
export const layoutDescription = "A gentle, feminine intro slide with pastel gradients, rounded shapes, and elegant serif typography.";

export const Schema = z.object({
  titleLine1: z.string().min(2).max(50).default("Elevate Your").meta({
    description: "First line of the title. Keep it elegant and short. Max 5 words.",
  }),
  titleLine2: z.string().min(2).max(50).default("Creative Vision").meta({
    description: "Second line of the title, displayed in accent color. Max 5 words.",
  }),
  subtitle: z.string().min(5).max(120).default("Beautifully crafted tools to inspire your next masterpiece and bring your ideas to life.").meta({
    description: "Subtitle or tagline. Max 20 words.",
  }),
  image: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",
    __image_prompt__: "Soft pastel flowers, dreamy aesthetic, light pink and lavender tones",
  }).meta({
    description: "A soft, aesthetic image with pastel tones.",
  }),
});

type SchemaType = z.infer<typeof Schema>;

const SoftBloomIntroLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FDF2F8 0%, #FAF5FF 50%, #FDF2F8 100%)",
        fontFamily: "var(--heading-font-family, 'Georgia, serif')",
      }}
    >
      {/* Soft decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, #F9A8D4 0%, transparent 70%)" }}
      ></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #C4B5FD 0%, transparent 70%)" }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #FDE68A 0%, transparent 60%)" }}
      ></div>

      <div className="relative h-full flex items-center justify-between px-16 lg:px-24 py-12">

        {/* Left Content */}
        <div className="flex-1 max-w-[55%] flex flex-col justify-center gap-8 relative z-10">

          {/* Title */}
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-none m-0"
              style={{ color: "#4C1D95" }}
            >
              {data?.titleLine1 || "Elevate Your"}
            </h1>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold italic tracking-tight leading-none m-0"
              style={{ color: "#D946EF" }}
            >
              {data?.titleLine2 || "Creative Vision"}
            </h2>
          </div>

          {/* Decorative line */}
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-16 rounded-full" style={{ background: "linear-gradient(90deg, #F9A8D4, #C4B5FD)" }}></div>
            <div className="w-2 h-2 rounded-full bg-pink-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-purple-300"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl font-normal leading-relaxed max-w-lg"
            style={{ color: "#6B7280" }}
          >
            {data?.subtitle || "Beautifully crafted tools to inspire your next masterpiece and bring your ideas to life."}
          </p>

          {/* Soft pill badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full w-fit"
            style={{ background: "rgba(249, 168, 212, 0.2)", border: "1px solid rgba(249, 168, 212, 0.4)" }}
          >
            <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></div>
            <span className="text-sm font-medium tracking-wide" style={{ color: "#BE185D" }}>
              ✨ Designed with love
            </span>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative h-full flex items-center justify-center p-4 z-0">
          <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-3xl overflow-hidden"
            style={{ boxShadow: "0 20px 60px rgba(196, 181, 253, 0.4), 0 8px 20px rgba(249, 168, 212, 0.2)" }}
          >
            {data?.image?.__image_url__ ? (
              <img
                src={data.image.__image_url__}
                alt={data.image.__image_prompt__}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center"
                style={{ background: "linear-gradient(180deg, #FBCFE8 0%, #DDD6FE 100%)" }}
              >
                <span className="text-8xl opacity-40">🌸</span>
              </div>
            )}
            {/* Soft overlay border */}
            <div className="absolute inset-0 rounded-3xl"
              style={{ border: "2px solid rgba(255,255,255,0.6)" }}
            ></div>
          </div>
          {/* Floating decorative dots */}
          <div className="absolute top-8 right-8 w-4 h-4 rounded-full bg-pink-300 opacity-50"></div>
          <div className="absolute bottom-12 right-20 w-3 h-3 rounded-full bg-purple-300 opacity-40"></div>
          <div className="absolute top-1/3 right-4 w-2 h-2 rounded-full bg-yellow-300 opacity-60"></div>
        </div>

      </div>
    </div>
  );
};

export default SoftBloomIntroLayout;
