import React from 'react';
import * as z from "zod";

export const layoutId = "dream-studio-core-values";
export const layoutName = "Dream Studio Core Values";
export const layoutDescription = "A core values slide with decorative star icons and a clean label-description layout on soft pastel gradients.";

export const Schema = z.object({
  title: z.string().min(2).max(40).default("core values.").meta({
    description: "Main title. Max 3 words.",
  }),
  tagline: z.string().min(5).max(80).default("experience first.").meta({
    description: "Secondary tagline below the values, in italic style. Max 10 words.",
  }),
  values: z.array(
    z.object({
      label: z.string().min(2).max(30).meta({ description: "Value name in uppercase bold." }),
    })
  ).min(3).max(5).default([
    { label: "CREATIVITY" },
    { label: "BOLDNESS" },
    { label: "HONESTY" },
    { label: "INTEGRITY" },
  ]).meta({ description: "Array of core values. 3 to 5 items." })
});

type SchemaType = z.infer<typeof Schema>;

const DreamStudioCoreValuesLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const defaultValues = [
    { label: "CREATIVITY" },
    { label: "BOLDNESS" },
    { label: "HONESTY" },
    { label: "INTEGRITY" },
  ];
  const values = data?.values || defaultValues;

  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #E4DCF0 0%, #DCD0EC 25%, #E8D8F0 50%, #F0E4F4 75%, #E8DCF0 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      {/* Soft radial overlays */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[400px] opacity-[0.3]"
        style={{ background: "radial-gradient(ellipse at 50% 20%, #F5D0E0 0%, transparent 60%)" }}
      ></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] opacity-[0.2]"
        style={{ background: "radial-gradient(ellipse at 40% 80%, #C8D8F8 0%, transparent 60%)" }}
      ></div>

      {/* Subtle border */}
      <div className="absolute inset-4 rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.5)" }}></div>

      <div className="relative h-full flex flex-col justify-center px-16 lg:px-24 py-12 gap-8">

        {/* Title */}
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.0] m-0"
          style={{ color: "#2D1B4E" }}
        >
          {data?.title || "core values."}
        </h1>

        {/* Values row with star icons */}
        <div className="flex items-end gap-8 lg:gap-12">
          {values.map((value: any, idx: number) => (
            <div key={idx} className="flex flex-col items-center gap-3">
              {/* Star icon */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(255, 255, 255, 0.35)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.5)",
                  boxShadow: "0 4px 20px rgba(160, 120, 180, 0.15)",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="rgba(60, 40, 100, 0.5)" />
                </svg>
              </div>
              {/* Label */}
              <span className="text-xs lg:text-sm font-bold tracking-[0.12em] text-center"
                style={{ color: "#2D1B4E" }}
              >
                {value.label}
              </span>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-xl lg:text-2xl mt-4 m-0"
          style={{ color: "rgba(45, 27, 78, 0.6)", fontStyle: "italic", fontWeight: 300 }}
        >
          {data?.tagline || "experience first."}
        </p>

      </div>
    </div>
  );
};

export default DreamStudioCoreValuesLayout;
