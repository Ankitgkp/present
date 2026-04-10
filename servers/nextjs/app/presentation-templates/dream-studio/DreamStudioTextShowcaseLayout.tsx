import React from 'react';
import * as z from "zod";

export const layoutId = "dream-studio-text-showcase";
export const layoutName = "Dream Studio Text Showcase";
export const layoutDescription = "A large text-focused showcase slide with prominent heading, supporting text, and a brief tagline on soft pastel gradients. Ideal for key messages.";

export const Schema = z.object({
  tagline: z.string().min(2).max(60).default("Experiment with").meta({
    description: "Small tagline text above the main heading. Max 8 words.",
  }),
  headingLine1: z.string().min(2).max(60).default("our creative design resources").meta({
    description: "First line of the main heading. Max 6 words.",
  }),
  headingLine2: z.string().min(2).max(60).default("to design your brand.").meta({
    description: "Second line of the main heading. Max 6 words.",
  }),
  bodyText: z.string().min(10).max(400).default("Our team will help you create and connect with your audience through visuals, offering both graphic designs, art direction, copywriting, and all things submission. We transform ideas into compelling visual stories that captivate and inspire action.").meta({
    description: "Extended body text paragraph. Max 50 words.",
  }),
});

type SchemaType = z.infer<typeof Schema>;

const DreamStudioTextShowcaseLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #E0D4F0 0%, #D8CCE8 20%, #E8DCF0 40%, #F0E8F8 55%, #E4D0E8 70%, #D8C8E8 85%, #E0D4F0 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      {/* Soft radial overlays */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] opacity-[0.3]"
        style={{ background: "radial-gradient(ellipse at 70% 20%, #F5D0E0 0%, transparent 55%)" }}
      ></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.25]"
        style={{ background: "radial-gradient(ellipse at 30% 80%, #C8D8F8 0%, transparent 55%)" }}
      ></div>

      {/* Subtle border */}
      <div className="absolute inset-4 rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.5)" }}></div>

      <div className="relative h-full flex items-center px-14 lg:px-20 py-12 gap-12 z-10">

        {/* Left: Large Text Area */}
        <div className="flex-1 flex flex-col gap-4 max-w-[55%]">
          {/* Tagline */}
          <span className="text-base lg:text-lg font-normal"
            style={{ color: "rgba(45, 27, 78, 0.55)" }}
          >
            {data?.tagline || "Experiment with"}
          </span>

          {/* Large Heading */}
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] m-0"
            style={{ color: "#2D1B4E" }}
          >
            {data?.headingLine1 || "our creative design resources"}
            <br />
            {data?.headingLine2 || "to design your brand."}
          </h1>
        </div>

        {/* Right: Body Text */}
        <div className="flex-1 flex flex-col justify-center max-w-[40%]">
          <p className="text-sm lg:text-base font-normal leading-[1.8]"
            style={{ color: "rgba(60, 40, 80, 0.6)" }}
          >
            {data?.bodyText || "Our team will help you create and connect with your audience through visuals, offering both graphic designs, art direction, copywriting, and all things submission. We transform ideas into compelling visual stories that captivate and inspire action."}
          </p>
        </div>

      </div>
    </div>
  );
};

export default DreamStudioTextShowcaseLayout;
