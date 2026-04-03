import React from 'react';
import * as z from "zod";

export const layoutId = "velvet-haze-metrics";
export const layoutName = "Velvet Haze Metrics";
export const layoutDescription = "A dark, premium metrics slide with glowing neon stat cards on a deep indigo gradient.";

export const Schema = z.object({
  title: z.string().min(2).max(60).default("Key Metrics").meta({
    description: "Main title of the slide.",
  }),
  subtitle: z.string().min(10).max(150).default("Numbers that showcase our commitment to delivering excellence at every level.").meta({
    description: "Supporting subtitle.",
  }),
  metrics: z.array(
    z.object({
      label: z.string().min(2).max(30).meta({ description: "Label for the metric. Max 3 words." }),
      value: z.string().min(1).max(15).meta({ description: "The metric value (e.g. 500k+)." }),
    })
  ).min(2).max(4).default([
      { label: "Active Users", value: "500k+" },
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Support", value: "24/7" },
      { label: "Saved Annually", value: "$10M+" },
  ]).meta({ description: "Array of key metrics. 2 to 4 items." })
});

type SchemaType = z.infer<typeof Schema>;

const VelvetHazeMetricsLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const defaultMetrics = [
      { label: "Active Users", value: "500k+" },
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Support", value: "24/7" },
      { label: "Saved Annually", value: "$10M+" },
  ];
  const metrics = data?.metrics || defaultMetrics;

  const glowColors = [
    { glow: "rgba(168, 85, 247, 0.15)", border: "rgba(168, 85, 247, 0.3)", text: "#A855F7" },
    { glow: "rgba(192, 132, 252, 0.15)", border: "rgba(192, 132, 252, 0.3)", text: "#C084FC" },
    { glow: "rgba(139, 92, 246, 0.15)", border: "rgba(139, 92, 246, 0.3)", text: "#8B5CF6" },
    { glow: "rgba(233, 213, 255, 0.1)", border: "rgba(233, 213, 255, 0.2)", text: "#E9D5FF" },
  ];

  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex flex-col"
      style={{
        background: "linear-gradient(180deg, #0F0A1E 0%, #1A1035 50%, #130D25 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      {/* Mesh gradient overlays */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-[0.12]"
        style={{ background: "radial-gradient(circle, #A855F7, transparent 70%)" }}
      ></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }}
      ></div>

      {/* Neon top accent */}
      <div className="absolute top-0 left-0 w-full h-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent 5%, #A855F7 30%, #C084FC 50%, #A855F7 70%, transparent 95%)",
          boxShadow: "0 0 15px rgba(168, 85, 247, 0.4)",
        }}
      ></div>

      {/* Header */}
      <div className="w-full pt-16 lg:pt-20 pb-6 flex flex-col items-center z-10 px-12">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-none m-0 text-center"
          style={{ color: "#F1E8FF" }}
        >
          {data?.title || "Key Metrics"}
        </h1>
        <div className="flex items-center gap-2 mt-5">
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
        <p className="text-lg lg:text-xl font-normal text-center max-w-2xl mt-4"
          style={{ color: "rgba(203, 195, 227, 0.7)" }}
        >
          {data?.subtitle || "Numbers that showcase our commitment to delivering excellence at every level."}
        </p>
      </div>

      {/* Metric Cards */}
      <div className="w-full flex-1 px-12 lg:px-20 flex items-center justify-center pb-16 z-10">
        <div className="flex gap-6 w-full justify-center">
          {metrics.map((metric: any, idx: number) => {
            const color = glowColors[idx % glowColors.length];
            return (
              <div
                key={idx}
                className="flex-1 max-w-[270px] rounded-2xl p-6 lg:p-8 flex flex-col items-center text-center gap-3 transition-all hover:-translate-y-1"
                style={{
                  background: "rgba(26, 16, 53, 0.8)",
                  backdropFilter: "blur(12px)",
                  border: `1px solid ${color.border}`,
                  boxShadow: `0 0 30px ${color.glow}, 0 4px 24px rgba(0, 0, 0, 0.3)`,
                }}
              >
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-none tracking-tight"
                  style={{
                    color: color.text,
                    textShadow: `0 0 30px ${color.glow}`,
                  }}
                >
                  {metric.value}
                </h2>
                <div className="h-[1.5px] w-8 rounded-full" style={{ background: color.border }}></div>
                <p className="text-base lg:text-lg font-semibold leading-tight uppercase tracking-wider"
                  style={{ color: "rgba(203, 195, 227, 0.8)" }}
                >
                  {metric.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VelvetHazeMetricsLayout;
