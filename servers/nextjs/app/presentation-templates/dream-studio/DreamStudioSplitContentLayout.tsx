import React from 'react';
import * as z from "zod";

export const layoutId = "dream-studio-split-content";
export const layoutName = "Dream Studio Split Content";
export const layoutDescription = "A two-column split layout with a title, extended paragraph, and secondary text block on soft pastel gradients. Perfect for deep-dive content.";

export const Schema = z.object({
  title: z.string().min(2).max(60).default("Our Approach to Creative Excellence").meta({
    description: "Main title displayed at top. Max 8 words.",
  }),
  leftContent: z.string().min(10).max(500).default("We believe great design starts with deep understanding. Every project begins with immersive research into your brand identity, market positioning, and audience psychology. This foundation informs every creative decision, ensuring our work resonates authentically with the people who matter to your business.").meta({
    description: "Left column body text. Max 60 words.",
  }),
  rightContent: z.string().min(10).max(500).default("Our creative process is iterative and collaborative. We present concepts early, gather feedback often, and refine continuously. This ensures the final deliverable isn't just beautiful—it's strategically aligned with your objectives and tested against real-world scenarios for maximum impact.").meta({
    description: "Right column body text. Max 60 words.",
  }),
  footnote: z.string().min(2).max(100).default("Design with purpose. Create with passion.").meta({
    description: "Small footnote or tagline at the bottom. Max 12 words.",
  }),
});

type SchemaType = z.infer<typeof Schema>;

const DreamStudioSplitContentLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #E0D4F0 0%, #DCD0EC 20%, #E8DCF0 40%, #F0E8F8 55%, #E8D8F0 70%, #D4C4E4 85%, #E0D4F0 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      {/* Soft radial overlays */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[400px] opacity-[0.3]"
        style={{ background: "radial-gradient(ellipse at 50% 20%, #F5D0E0 0%, transparent 55%)" }}
      ></div>
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] opacity-[0.2]"
        style={{ background: "radial-gradient(ellipse at 50% 80%, #C8D8F8 0%, transparent 55%)" }}
      ></div>

      {/* Subtle border */}
      <div className="absolute inset-4 rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.5)" }}></div>

      <div className="relative h-full flex flex-col justify-center px-14 lg:px-20 py-12 gap-8 z-10">

        {/* Title */}
        <div className="flex items-center gap-4">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="rgba(90, 60, 120, 0.4)" />
          </svg>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight m-0"
            style={{ color: "#2D1B4E" }}
          >
            {data?.title || "Our Approach to Creative Excellence"}
          </h1>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px]" style={{ background: "rgba(45, 27, 78, 0.12)" }}></div>

        {/* Two-column content */}
        <div className="flex gap-10 lg:gap-14">
          <div className="flex-1">
            <p className="text-sm lg:text-base font-normal leading-[1.9] m-0"
              style={{ color: "rgba(60, 40, 80, 0.6)" }}
            >
              {data?.leftContent || "We believe great design starts with deep understanding. Every project begins with immersive research into your brand identity, market positioning, and audience psychology. This foundation informs every creative decision, ensuring our work resonates authentically with the people who matter to your business."}
            </p>
          </div>
          <div className="flex-1">
            <p className="text-sm lg:text-base font-normal leading-[1.9] m-0"
              style={{ color: "rgba(60, 40, 80, 0.6)" }}
            >
              {data?.rightContent || "Our creative process is iterative and collaborative. We present concepts early, gather feedback often, and refine continuously. This ensures the final deliverable isn't just beautiful—it's strategically aligned with your objectives and tested against real-world scenarios for maximum impact."}
            </p>
          </div>
        </div>

        {/* Footnote */}
        <div className="flex items-center gap-3 mt-auto">
          <div className="w-12 h-[1px]" style={{ background: "rgba(45, 27, 78, 0.15)" }}></div>
          <span className="text-xs lg:text-sm tracking-wider"
            style={{ color: "rgba(45, 27, 78, 0.4)", fontStyle: "italic" }}
          >
            {data?.footnote || "Design with purpose. Create with passion."}
          </span>
        </div>

      </div>
    </div>
  );
};

export default DreamStudioSplitContentLayout;
