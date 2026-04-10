import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "dream-studio-experience";
export const layoutName = "Dream Studio Experience";
export const layoutDescription = "A creative experience slide with large typography, bullet list, decorative image, and extended description on soft pastel gradients.";

export const Schema = z.object({
  preTitle: z.string().min(2).max(40).default("We design the best").meta({
    description: "Small text above the main title. Max 6 words.",
  }),
  title: z.string().min(2).max(30).default("experience").meta({
    description: "Large highlighted title word. Max 2 words.",
  }),
  subtitle: z.string().min(2).max(40).default("for our clients.").meta({
    description: "Text below the title. Max 6 words.",
  }),
  bodyText: z.string().min(10).max(400).default("Our team will help you create and connect with your audience through visuals, offering both graphic designs, art direction, copywriting, and all things submission.").meta({
    description: "Extended body text paragraph. Max 40 words.",
  }),
  bulletPoints: z.array(
    z.string().min(2).max(40)
  ).min(2).max(5).default([
    "templates",
    "web design",
    "branding",
  ]).meta({ description: "Array of bullet point items. 2 to 5 items." }),
  image: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80",
    __image_prompt__: "Ice cream cones on pastel gradient background",
  }).meta({
    description: "Decorative image. Playful or creative items recommended.",
  }),
});

type SchemaType = z.infer<typeof Schema>;

const DreamStudioExperienceLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const defaultBullets = ["templates", "web design", "branding"];
  const bullets = data?.bulletPoints || defaultBullets;

  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #D8D0F0 0%, #E0D4EC 15%, #E8DCF0 30%, #F0E8F8 50%, #E8D8F0 70%, #D8CCE8 85%, #E0D4F0 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      {/* Soft radial overlays */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] opacity-[0.35]"
        style={{ background: "radial-gradient(ellipse at 20% 80%, #F5D0E0 0%, transparent 55%)" }}
      ></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.25]"
        style={{ background: "radial-gradient(ellipse at 80% 20%, #C8D8F8 0%, transparent 55%)" }}
      ></div>

      {/* Subtle border */}
      <div className="absolute inset-4 rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.5)" }}></div>

      <div className="relative h-full flex items-stretch px-14 lg:px-20 py-12 gap-8 z-10">

        {/* Left: Image + Bullet points */}
        <div className="flex flex-col justify-end gap-6 min-w-[280px]">
          {/* Image */}
          <div className="w-[240px] h-[200px] rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0 15px 40px rgba(160, 120, 180, 0.2), 0 0 0 1px rgba(255,255,255,0.3)",
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

          {/* Bullets */}
          <div className="flex flex-col gap-1">
            {bullets.map((bullet: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-xs" style={{ color: "rgba(45, 27, 78, 0.4)" }}>•</span>
                <span className="text-sm font-medium"
                  style={{ color: "rgba(45, 27, 78, 0.55)", fontStyle: "italic" }}
                >
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Center + Right: Large Text */}
        <div className="flex-1 flex flex-col justify-center gap-4">
          {/* Pre-title */}
          <span className="text-base lg:text-lg font-normal"
            style={{ color: "rgba(45, 27, 78, 0.55)" }}
          >
            {data?.preTitle || "We design the best"}
          </span>

          {/* Title */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl m-0 leading-[1.0]"
            style={{ color: "#2D1B4E", fontStyle: "italic", fontWeight: 300 }}
          >
            {data?.title || "experience"}
          </h1>

          {/* Subtitle */}
          <span className="text-xl lg:text-2xl font-medium"
            style={{ color: "#2D1B4E" }}
          >
            {data?.subtitle || "for our clients."}
          </span>

          {/* Divider */}
          <div className="w-16 h-[1px] mt-2" style={{ background: "rgba(45, 27, 78, 0.2)" }}></div>

          {/* Body Text */}
          <p className="text-sm lg:text-base font-normal leading-[1.8] max-w-lg mt-2"
            style={{ color: "rgba(60, 40, 80, 0.55)" }}
          >
            {data?.bodyText || "Our team will help you create and connect with your audience through visuals, offering both graphic designs, art direction, copywriting, and all things submission."}
          </p>
        </div>

      </div>
    </div>
  );
};

export default DreamStudioExperienceLayout;
