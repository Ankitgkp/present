import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "velvet-haze-intro";
export const layoutName = "Velvet Haze Intro";
export const layoutDescription = "A dark, atmospheric intro slide with deep indigo gradients, neon violet accents, and glowing visual elements.";

export const Schema = z.object({
  titleLine1: z.string().min(2).max(50).default("Reimagine").meta({
    description: "First line of the title. Bold and impactful. Max 4 words.",
  }),
  titleLine2: z.string().min(2).max(50).default("What's Possible").meta({
    description: "Second line of the title, displayed in neon accent color. Max 5 words.",
  }),
  description: z.string().min(10).max(300).default("A modern platform that empowers teams to collaborate seamlessly, make data-driven decisions, and ship products faster than ever.").meta({
    description: "Supporting description text. Max 40 words.",
  }),
  image: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    __image_prompt__: "Abstract purple gradient with flowing organic shapes",
  }).meta({
    description: "Supporting image. Should fit a dark, modern aesthetic.",
  }),
});

type SchemaType = z.infer<typeof Schema>;

const VelvetHazeIntroLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0F0A1E 0%, #1A1035 40%, #130D25 70%, #0D0818 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      {/* Mesh gradient overlays */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.15]"
        style={{ background: "radial-gradient(ellipse at 70% 20%, #A855F7 0%, transparent 60%)" }}
      ></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.1]"
        style={{ background: "radial-gradient(ellipse at 30% 80%, #7C3AED 0%, transparent 60%)" }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-[0.06]"
        style={{ background: "radial-gradient(ellipse, #C084FC 0%, transparent 50%)" }}
      ></div>

      {/* Neon accent line at top */}
      <div className="absolute top-0 left-0 w-full h-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent 5%, #A855F7 30%, #C084FC 50%, #A855F7 70%, transparent 95%)",
          boxShadow: "0 0 15px rgba(168, 85, 247, 0.5), 0 0 30px rgba(168, 85, 247, 0.2)",
        }}
      ></div>

      <div className="relative h-full flex items-center justify-between px-16 lg:px-24 py-12">

        {/* Left Content */}
        <div className="flex-1 max-w-[55%] flex flex-col justify-center gap-7 relative z-10">

          {/* Glowing badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full w-fit"
            style={{
              background: "rgba(168, 85, 247, 0.1)",
              border: "1px solid rgba(168, 85, 247, 0.3)",
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.08)",
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#A855F7", boxShadow: "0 0 6px #A855F7" }}
            ></div>
            <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "#C084FC" }}>
              Welcome
            </span>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-1">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] m-0"
              style={{ color: "#F1E8FF" }}
            >
              {data?.titleLine1 || "Reimagine"}
            </h1>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] m-0"
              style={{
                color: "#A855F7",
                textShadow: "0 0 40px rgba(168, 85, 247, 0.3)",
              }}
            >
              {data?.titleLine2 || "What's Possible"}
            </h2>
          </div>

          {/* Neon divider */}
          <div className="h-[2px] w-16 rounded-full"
            style={{
              background: "linear-gradient(90deg, #A855F7, transparent)",
              boxShadow: "0 0 8px rgba(168, 85, 247, 0.4)",
            }}
          ></div>

          {/* Description */}
          <p className="text-lg lg:text-xl font-normal leading-relaxed max-w-lg line-clamp-4"
            style={{ color: "rgba(203, 195, 227, 0.8)" }}
          >
            {data?.description || "A modern platform that empowers teams to collaborate seamlessly, make data-driven decisions, and ship products faster than ever."}
          </p>

        </div>

        {/* Right Image */}
        <div className="flex-1 relative h-full flex items-center justify-center p-4 z-0">
          <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0 0 40px rgba(168, 85, 247, 0.2), 0 0 80px rgba(168, 85, 247, 0.08), 0 20px 60px rgba(0, 0, 0, 0.4)",
              border: "1px solid rgba(168, 85, 247, 0.25)",
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
                style={{ background: "linear-gradient(135deg, #1A1035 0%, #2D1B69 50%, #1A1035 100%)" }}
              >
                <span className="text-7xl opacity-30">◆</span>
              </div>
            )}
            {/* Glow border overlay */}
            <div className="absolute inset-0 rounded-2xl"
              style={{ border: "1px solid rgba(168, 85, 247, 0.2)" }}
            ></div>
          </div>
          {/* Floating glow dots */}
          <div className="absolute top-12 right-12 w-3 h-3 rounded-full opacity-50"
            style={{ background: "#A855F7", boxShadow: "0 0 10px #A855F7" }}
          ></div>
          <div className="absolute bottom-16 right-20 w-2 h-2 rounded-full opacity-35"
            style={{ background: "#C084FC", boxShadow: "0 0 8px #C084FC" }}
          ></div>
          <div className="absolute top-1/3 left-4 w-1.5 h-1.5 rounded-full opacity-25"
            style={{ background: "#E9D5FF", boxShadow: "0 0 6px #E9D5FF" }}
          ></div>
        </div>

      </div>
    </div>
  );
};

export default VelvetHazeIntroLayout;
