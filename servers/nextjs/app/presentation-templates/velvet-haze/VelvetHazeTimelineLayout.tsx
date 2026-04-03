import React from 'react';
import * as z from "zod";

export const layoutId = "velvet-haze-timeline";
export const layoutName = "Velvet Haze Timeline";
export const layoutDescription = "A horizontal timeline slide with glowing neon node connectors on a deep indigo gradient.";

export const Schema = z.object({
  title: z.string().min(2).max(50).default("Our Journey").meta({
    description: "Main title above the timeline. Max 5 words.",
  }),
  subtitle: z.string().min(5).max(120).default("Key milestones that shaped our story and defined our path forward.").meta({
    description: "Subtitle below the title. Max 20 words.",
  }),
  milestones: z.array(
    z.object({
      year: z.string().min(2).max(10).meta({ description: "Year or date label (e.g. 2020, Q1 2023)." }),
      title: z.string().min(2).max(40).meta({ description: "Milestone title. Max 5 words." }),
      description: z.string().min(5).max(100).meta({ description: "Brief description. Max 15 words." }),
    })
  ).min(3).max(5).default([
    { year: "2020", title: "Founded", description: "Started with a small team and a big vision for change." },
    { year: "2021", title: "First 1K Users", description: "Reached our first thousand users within eight months of launch." },
    { year: "2022", title: "Series A", description: "Raised $12M to scale operations and expand our product offerings." },
    { year: "2023", title: "Global Expansion", description: "Launched in 15 countries across three continents worldwide." },
  ]).meta({ description: "Array of timeline milestones. 3 to 5 items." })
});

type SchemaType = z.infer<typeof Schema>;

const VelvetHazeTimelineLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const defaultMilestones = [
    { year: "2020", title: "Founded", description: "Started with a small team and a big vision for change." },
    { year: "2021", title: "First 1K Users", description: "Reached our first thousand users within eight months of launch." },
    { year: "2022", title: "Series A", description: "Raised $12M to scale operations and expand our product offerings." },
    { year: "2023", title: "Global Expansion", description: "Launched in 15 countries across three continents worldwide." },
  ];
  const milestones = data?.milestones || defaultMilestones;

  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex flex-col"
      style={{
        background: "linear-gradient(180deg, #0F0A1E 0%, #1A1035 50%, #0D0818 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      {/* Mesh gradient overlays */}
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle, #A855F7, transparent 70%)" }}
      ></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #C084FC, transparent 70%)" }}
      ></div>

      {/* Neon top accent */}
      <div className="absolute top-0 left-0 w-full h-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent 5%, #A855F7 30%, #C084FC 50%, #A855F7 70%, transparent 95%)",
          boxShadow: "0 0 15px rgba(168, 85, 247, 0.4)",
        }}
      ></div>

      {/* Header */}
      <div className="w-full pt-14 pb-6 flex flex-col items-center z-10 px-12">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-none m-0 text-center"
          style={{ color: "#F1E8FF" }}
        >
          {data?.title || "Our Journey"}
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
        <p className="text-lg lg:text-xl font-normal text-center max-w-2xl mt-3"
          style={{ color: "rgba(203, 195, 227, 0.7)" }}
        >
          {data?.subtitle || "Key milestones that shaped our story and defined our path forward."}
        </p>
      </div>

      {/* Timeline */}
      <div className="w-full flex-1 px-12 lg:px-16 flex items-center justify-center pb-14 z-10">
        <div className="relative w-full max-w-5xl">
          {/* Neon connecting line */}
          <div className="absolute top-8 left-0 right-0 h-[2px]"
            style={{
              background: "linear-gradient(90deg, transparent, #A855F7 15%, #C084FC 50%, #A855F7 85%, transparent)",
              boxShadow: "0 0 12px rgba(168, 85, 247, 0.4), 0 0 24px rgba(168, 85, 247, 0.15)",
            }}
          ></div>

          <div className="flex justify-between relative">
            {milestones.map((milestone: any, idx: number) => (
              <div key={idx} className="flex flex-col items-center text-center" style={{ flex: 1, maxWidth: `${100 / milestones.length}%` }}>
                {/* Glowing node */}
                <div className="w-4 h-4 rounded-full relative z-10 mb-6"
                  style={{
                    background: "#A855F7",
                    boxShadow: "0 0 12px #A855F7, 0 0 24px rgba(168, 85, 247, 0.4), 0 0 48px rgba(168, 85, 247, 0.15)",
                    border: "2px solid #C084FC",
                  }}
                ></div>

                {/* Content card */}
                <div className="rounded-xl p-4 lg:p-5 mx-2"
                  style={{
                    background: "rgba(26, 16, 53, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(168, 85, 247, 0.2)",
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.05), 0 4px 16px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <span className="text-sm font-bold tracking-wider uppercase block mb-2"
                    style={{
                      color: "#A855F7",
                      textShadow: "0 0 15px rgba(168, 85, 247, 0.3)",
                    }}
                  >
                    {milestone.year}
                  </span>
                  <h3 className="text-base lg:text-lg font-semibold leading-tight mb-2"
                    style={{ color: "#F1E8FF" }}
                  >
                    {milestone.title}
                  </h3>
                  <p className="text-xs lg:text-sm leading-relaxed line-clamp-3"
                    style={{ color: "rgba(203, 195, 227, 0.6)" }}
                  >
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VelvetHazeTimelineLayout;
