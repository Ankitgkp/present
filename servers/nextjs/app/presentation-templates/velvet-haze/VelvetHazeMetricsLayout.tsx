import React from 'react';
import * as z from "zod";

export const layoutId = "velvet-haze-metrics";
export const layoutName = "Velvet Haze Metrics";
export const layoutDescription = "A refined metrics slide with frosted glass stat cards on a soft purple-to-white gradient.";

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

  const accentColors = [
    { bg: "rgba(139, 92, 246, 0.08)", border: "rgba(139, 92, 246, 0.15)", accent: "#7C3AED" },
    { bg: "rgba(168, 85, 247, 0.08)", border: "rgba(168, 85, 247, 0.15)", accent: "#9333EA" },
    { bg: "rgba(124, 58, 237, 0.08)", border: "rgba(124, 58, 237, 0.15)", accent: "#6D28D9" },
    { bg: "rgba(196, 181, 253, 0.12)", border: "rgba(196, 181, 253, 0.25)", accent: "#5B21B6" },
  ];

  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex flex-col"
      style={{
        background: "linear-gradient(180deg, #F5F3FF 0%, #FFFFFF 60%, #EDE9FE 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      {/* Decorative gradients */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-[0.1]"
        style={{ background: "radial-gradient(circle, #8B5CF6, transparent 70%)" }}
      ></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #A78BFA, transparent 70%)" }}
      ></div>

      {/* Thin decorative top bar */}
      <div className="absolute top-0 left-0 w-full h-1"
        style={{ background: "linear-gradient(90deg, #8B5CF6, #A78BFA, #C4B5FD, #DDD6FE)" }}
      ></div>

      {/* Header */}
      <div className="w-full pt-16 lg:pt-20 pb-6 flex flex-col items-center z-10 px-12">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-none m-0 text-center"
          style={{ color: "#1E1B4B" }}
        >
          {data?.title || "Key Metrics"}
        </h1>
        <div className="flex items-center gap-2 mt-5">
          <div className="h-[2px] w-10 rounded-full" style={{ background: "linear-gradient(90deg, #8B5CF6, transparent)" }}></div>
          <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
          <div className="h-[2px] w-10 rounded-full" style={{ background: "linear-gradient(270deg, #A78BFA, transparent)" }}></div>
        </div>
        <p className="text-lg lg:text-xl font-normal text-center max-w-2xl mt-4"
          style={{ color: "#6B7280" }}
        >
          {data?.subtitle || "Numbers that showcase our commitment to delivering excellence at every level."}
        </p>
      </div>

      {/* Metric Cards */}
      <div className="w-full flex-1 px-12 lg:px-20 flex items-center justify-center pb-16 z-10">
        <div className="flex gap-6 w-full justify-center">
          {metrics.map((metric: any, idx: number) => {
            const color = accentColors[idx % accentColors.length];
            return (
              <div
                key={idx}
                className="flex-1 max-w-[270px] rounded-2xl p-6 lg:p-8 flex flex-col items-center text-center gap-3 transition-all hover:-translate-y-1"
                style={{
                  background: "rgba(255, 255, 255, 0.6)",
                  backdropFilter: "blur(12px)",
                  border: `1px solid ${color.border}`,
                  boxShadow: "0 4px 24px rgba(139, 92, 246, 0.06)",
                }}
              >
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-none tracking-tight"
                  style={{ color: color.accent }}
                >
                  {metric.value}
                </h2>
                <div className="h-[1.5px] w-8 rounded-full" style={{ background: color.border }}></div>
                <p className="text-base lg:text-lg font-semibold leading-tight uppercase tracking-wider"
                  style={{ color: "#4B5563" }}
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
