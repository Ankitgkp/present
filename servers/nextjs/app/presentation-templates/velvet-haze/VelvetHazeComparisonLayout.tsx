import React from 'react';
import * as z from "zod";

export const layoutId = "velvet-haze-comparison";
export const layoutName = "Velvet Haze Comparison";
export const layoutDescription = "A side-by-side comparison slide with contrasting neon-accented cards and a glowing VS divider.";

export const Schema = z.object({
  title: z.string().min(2).max(50).default("Compare Options").meta({
    description: "Main title. Max 5 words.",
  }),
  leftCard: z.object({
    label: z.string().min(2).max(20).default("Before").meta({ description: "Card label (e.g. Before, Option A, Free)." }),
    points: z.array(z.string().min(5).max(80)).min(3).max(5).default([
      "Manual workflow processes",
      "Limited data visibility",
      "Slow decision-making cycles",
      "Fragmented team communication",
    ]).meta({ description: "Array of bullet points. 3 to 5 items." }),
  }).meta({ description: "Left comparison card." }),
  rightCard: z.object({
    label: z.string().min(2).max(20).default("After").meta({ description: "Card label (e.g. After, Option B, Pro)." }),
    points: z.array(z.string().min(5).max(80)).min(3).max(5).default([
      "Fully automated pipelines",
      "Real-time analytics dashboard",
      "Instant data-driven decisions",
      "Unified team collaboration hub",
    ]).meta({ description: "Array of bullet points. 3 to 5 items." }),
  }).meta({ description: "Right comparison card." }),
});

type SchemaType = z.infer<typeof Schema>;

const VelvetHazeComparisonLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const leftCard = data?.leftCard || {
    label: "Before",
    points: [
      "Manual workflow processes",
      "Limited data visibility",
      "Slow decision-making cycles",
      "Fragmented team communication",
    ],
  };
  const rightCard = data?.rightCard || {
    label: "After",
    points: [
      "Fully automated pipelines",
      "Real-time analytics dashboard",
      "Instant data-driven decisions",
      "Unified team collaboration hub",
    ],
  };

  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex flex-col items-center"
      style={{
        background: "linear-gradient(180deg, #0F0A1E 0%, #1A1035 50%, #130D25 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      {/* Mesh gradient overlays */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-[0.1]"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }}
      ></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-[0.1]"
        style={{ background: "radial-gradient(circle, #A855F7, transparent 70%)" }}
      ></div>

      {/* Neon top accent */}
      <div className="absolute top-0 left-0 w-full h-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent 5%, #A855F7 30%, #C084FC 50%, #A855F7 70%, transparent 95%)",
          boxShadow: "0 0 15px rgba(168, 85, 247, 0.4)",
        }}
      ></div>

      {/* Header */}
      <div className="w-full pt-12 pb-6 flex flex-col items-center z-10 px-12">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-none m-0 text-center"
          style={{ color: "#F1E8FF" }}
        >
          {data?.title || "Compare Options"}
        </h1>
        <div className="flex items-center gap-2 mt-4">
          <div className="h-[2px] w-10 rounded-full"
            style={{ background: "linear-gradient(90deg, #A855F7, transparent)", boxShadow: "0 0 6px rgba(168,85,247,0.4)" }}
          ></div>
          <div className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#A855F7", boxShadow: "0 0 6px #A855F7" }}
          ></div>
          <div className="h-[2px] w-10 rounded-full"
            style={{ background: "linear-gradient(270deg, #C084FC, transparent)", boxShadow: "0 0 6px rgba(192,132,252,0.4)" }}
          ></div>
        </div>
      </div>

      {/* Comparison */}
      <div className="w-full flex-1 px-12 lg:px-20 flex items-center justify-center pb-14 z-10">
        <div className="flex items-stretch gap-0 w-full max-w-5xl">

          {/* Left Card */}
          <div className="flex-1 rounded-2xl rounded-r-none p-6 lg:p-8 flex flex-col"
            style={{
              background: "rgba(26, 16, 53, 0.7)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(139, 92, 246, 0.2)",
              borderRight: "none",
              boxShadow: "0 0 25px rgba(139, 92, 246, 0.06), 0 4px 24px rgba(0, 0, 0, 0.3)",
            }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center"
              style={{ color: "rgba(203, 195, 227, 0.7)" }}
            >
              {leftCard.label}
            </h2>
            <div className="flex flex-col gap-4">
              {leftCard.points.map((point: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{
                      background: "rgba(139, 92, 246, 0.15)",
                      border: "1px solid rgba(139, 92, 246, 0.3)",
                    }}
                  >
                    <span className="text-xs" style={{ color: "rgba(203, 195, 227, 0.6)" }}>—</span>
                  </div>
                  <p className="text-base lg:text-lg leading-relaxed"
                    style={{ color: "rgba(203, 195, 227, 0.65)" }}
                  >
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* VS Divider */}
          <div className="flex flex-col items-center justify-center px-4 relative z-20">
            <div className="w-[2px] flex-1"
              style={{ background: "linear-gradient(180deg, transparent, #A855F7 30%, #A855F7 70%, transparent)" }}
            ></div>
            <div className="w-14 h-14 rounded-full flex items-center justify-center my-3"
              style={{
                background: "linear-gradient(135deg, #2D1B69, #1A1035)",
                border: "2px solid #A855F7",
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(168, 85, 247, 0.15)",
              }}
            >
              <span className="text-sm font-black tracking-wider"
                style={{ color: "#C084FC", textShadow: "0 0 10px rgba(192,132,252,0.4)" }}
              >VS</span>
            </div>
            <div className="w-[2px] flex-1"
              style={{ background: "linear-gradient(180deg, transparent, #A855F7 30%, #A855F7 70%, transparent)" }}
            ></div>
          </div>

          {/* Right Card */}
          <div className="flex-1 rounded-2xl rounded-l-none p-6 lg:p-8 flex flex-col"
            style={{
              background: "rgba(26, 16, 53, 0.7)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(168, 85, 247, 0.25)",
              borderLeft: "none",
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.08), 0 4px 24px rgba(0, 0, 0, 0.3)",
            }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center"
              style={{
                color: "#A855F7",
                textShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
              }}
            >
              {rightCard.label}
            </h2>
            <div className="flex flex-col gap-4">
              {rightCard.points.map((point: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{
                      background: "rgba(168, 85, 247, 0.2)",
                      border: "1px solid rgba(168, 85, 247, 0.4)",
                      boxShadow: "0 0 8px rgba(168, 85, 247, 0.15)",
                    }}
                  >
                    <span className="text-xs" style={{ color: "#A855F7" }}>✓</span>
                  </div>
                  <p className="text-base lg:text-lg leading-relaxed"
                    style={{ color: "#F1E8FF" }}
                  >
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VelvetHazeComparisonLayout;
