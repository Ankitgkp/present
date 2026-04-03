import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "velvet-haze-intro";
export const layoutName = "Velvet Haze Intro";
export const layoutDescription = "A clean, minimal intro slide with soft purple-to-white gradients, frosted glass panels, and subtle accents.";

export const Schema = z.object({
  titleLine1: z.string().min(2).max(50).default("Reimagine").meta({
    description: "First line of the title. Bold and impactful. Max 4 words.",
  }),
  titleLine2: z.string().min(2).max(50).default("What's Possible").meta({
    description: "Second line of the title, displayed in accent color. Max 5 words.",
  }),
  description: z.string().min(10).max(300).default("A modern platform that empowers teams to collaborate seamlessly, make data-driven decisions, and ship products faster than ever.").meta({
    description: "Supporting description text. Max 40 words.",
  }),
  image: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    __image_prompt__: "Abstract purple gradient with flowing organic shapes",
  }).meta({
    description: "Supporting image. Should fit a clean, modern aesthetic.",
  }),
});

type SchemaType = z.infer<typeof Schema>;

const VelvetHazeIntroLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #F5F3FF 0%, #FFFFFF 40%, #EDE9FE 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      {/* Subtle decorative gradients */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.12]"
        style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)" }}
      ></div>
      <div className="absolute -bottom-40 -left-40 w-[550px] h-[550px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle, #A78BFA 0%, transparent 70%)" }}
      ></div>

      {/* Thin decorative top bar */}
      <div className="absolute top-0 left-0 w-full h-1"
        style={{ background: "linear-gradient(90deg, #8B5CF6, #A78BFA, #C4B5FD, #DDD6FE)" }}
      ></div>

      <div className="relative h-full flex items-center justify-between px-16 lg:px-24 py-12">

        {/* Left Content */}
        <div className="flex-1 max-w-[55%] flex flex-col justify-center gap-7 relative z-10">

          {/* Small badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full w-fit"
            style={{ background: "rgba(139, 92, 246, 0.08)", border: "1px solid rgba(139, 92, 246, 0.15)" }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
            <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "#7C3AED" }}>
              Welcome
            </span>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-1">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] m-0"
              style={{ color: "#1E1B4B" }}
            >
              {data?.titleLine1 || "Reimagine"}
            </h1>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] m-0"
              style={{ color: "#7C3AED" }}
            >
              {data?.titleLine2 || "What's Possible"}
            </h2>
          </div>

          {/* Subtle divider */}
          <div className="h-[2px] w-16 rounded-full" style={{ background: "linear-gradient(90deg, #8B5CF6, transparent)" }}></div>

          {/* Description */}
          <p className="text-lg lg:text-xl font-normal leading-relaxed max-w-lg line-clamp-4"
            style={{ color: "#6B7280" }}
          >
            {data?.description || "A modern platform that empowers teams to collaborate seamlessly, make data-driven decisions, and ship products faster than ever."}
          </p>

        </div>

        {/* Right Image */}
        <div className="flex-1 relative h-full flex items-center justify-center p-4 z-0">
          <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 20px 60px rgba(139, 92, 246, 0.15), 0 8px 20px rgba(139, 92, 246, 0.08)" }}
          >
            {data?.image?.__image_url__ ? (
              <img
                src={data.image.__image_url__}
                alt={data.image.__image_prompt__}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 50%, #C4B5FD 100%)" }}
              >
                <span className="text-7xl opacity-30">◆</span>
              </div>
            )}
            {/* Glass overlay border */}
            <div className="absolute inset-0 rounded-2xl"
              style={{ border: "1px solid rgba(255,255,255,0.5)" }}
            ></div>
          </div>
          {/* Floating accent dots */}
          <div className="absolute top-12 right-12 w-3 h-3 rounded-full bg-violet-400 opacity-30"></div>
          <div className="absolute bottom-16 right-20 w-2 h-2 rounded-full bg-purple-300 opacity-25"></div>
        </div>

      </div>
    </div>
  );
};

export default VelvetHazeIntroLayout;
