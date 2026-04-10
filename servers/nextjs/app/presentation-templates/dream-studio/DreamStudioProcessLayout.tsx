import React from 'react';
import * as z from "zod";

export const layoutId = "dream-studio-process";
export const layoutName = "Dream Studio Process";
export const layoutDescription = "A step-by-step process slide with numbered steps, descriptions, and large heading on soft pastel gradients. Ideal for workflows.";

export const Schema = z.object({
  heading: z.string().min(2).max(50).default("create your own design.").meta({
    description: "Large heading text. Max 5 words.",
  }),
  steps: z.array(
    z.object({
      number: z.string().min(1).max(5).meta({ description: "Step number (e.g. 01, 02)." }),
      title: z.string().min(2).max(40).meta({ description: "Step title. Max 5 words." }),
      description: z.string().min(10).max(200).meta({ description: "Step description. Max 30 words." }),
    })
  ).min(3).max(5).default([
    { number: "01", title: "Research & Discover", description: "We begin by understanding your brand, goals, and audience to lay the groundwork for creative direction." },
    { number: "02", title: "Concept & Design", description: "Our team crafts multiple design concepts, iterating on ideas until we find the perfect visual solution." },
    { number: "03", title: "Refine & Deliver", description: "We polish every detail and deliver production-ready assets that exceed expectations and inspire action." },
  ]).meta({ description: "Array of process steps. 3 to 5 items." })
});

type SchemaType = z.infer<typeof Schema>;

const DreamStudioProcessLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const defaultSteps = [
    { number: "01", title: "Research & Discover", description: "We begin by understanding your brand, goals, and audience to lay the groundwork for creative direction." },
    { number: "02", title: "Concept & Design", description: "Our team crafts multiple design concepts, iterating on ideas until we find the perfect visual solution." },
    { number: "03", title: "Refine & Deliver", description: "We polish every detail and deliver production-ready assets that exceed expectations and inspire action." },
  ];
  const steps = data?.steps || defaultSteps;

  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #E8E0F0 0%, #D8CCE8 20%, #E4D8F0 40%, #F0E8F8 55%, #EAD8EC 70%, #D8C8E8 85%, #E0D0EC 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      {/* Soft radial overlays */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] opacity-[0.3]"
        style={{ background: "radial-gradient(ellipse at 20% 20%, #C8D8F8 0%, transparent 55%)" }}
      ></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.3]"
        style={{ background: "radial-gradient(ellipse at 80% 80%, #F5D0E0 0%, transparent 55%)" }}
      ></div>

      {/* Subtle border */}
      <div className="absolute inset-4 rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.5)" }}></div>

      <div className="relative h-full flex flex-col justify-center px-14 lg:px-20 py-12 gap-8 z-10">

        {/* Large Heading */}
        <h1 className="text-4xl lg:text-5xl xl:text-6xl m-0 leading-[1.1]"
          style={{ color: "#2D1B4E", fontStyle: "italic", fontWeight: 300 }}
        >
          {data?.heading || "create your own design."}
        </h1>

        {/* Steps */}
        <div className="flex gap-6 lg:gap-8 mt-4">
          {steps.map((step: any, idx: number) => (
            <div key={idx} className="flex-1 flex flex-col gap-3">
              {/* Step number */}
              <div className="flex items-center gap-3">
                <span className="text-3xl lg:text-4xl font-bold"
                  style={{ color: "rgba(45, 27, 78, 0.2)" }}
                >
                  {step.number}
                </span>
                <div className="flex-1 h-[1px]" style={{ background: "rgba(45, 27, 78, 0.12)" }}></div>
              </div>

              {/* Title */}
              <h3 className="text-sm lg:text-base font-bold tracking-wide uppercase m-0"
                style={{ color: "#2D1B4E" }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs lg:text-sm font-normal leading-relaxed m-0"
                style={{ color: "rgba(60, 40, 80, 0.55)" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DreamStudioProcessLayout;
