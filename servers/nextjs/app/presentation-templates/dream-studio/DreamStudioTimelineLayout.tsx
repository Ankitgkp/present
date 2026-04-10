import React from 'react';
import * as z from "zod";

export const layoutId = "dream-studio-timeline";
export const layoutName = "Dream Studio Timeline";
export const layoutDescription = "A horizontal timeline slide with year markers, descriptions, and soft pastel gradients for a clean creative timeline.";

export const Schema = z.object({
  titleLeft: z.string().min(2).max(20).default("time").meta({
    description: "Left side label for the timeline header. Max 2 words.",
  }),
  titleRight: z.string().min(2).max(20).default("line").meta({
    description: "Right side label for the timeline header. Max 2 words.",
  }),
  heading: z.string().min(2).max(60).default("design studio.").meta({
    description: "Large heading below the timeline bar. Max 5 words.",
  }),
  milestones: z.array(
    z.object({
      year: z.string().min(2).max(10).meta({ description: "Year or date label." }),
      description: z.string().min(10).max(150).meta({ description: "Description of this milestone. Max 20 words." }),
    })
  ).min(3).max(5).default([
    { year: "2019", description: "We are a group of artists, designers, and pioneers in London." },
    { year: "2020", description: "We use our expertise to provide creative solutions." },
    { year: "2021", description: "We are truly the one-stop shop for all creative endeavours." },
    { year: "2022", description: "We collaborate and help our clients define gaps and seize opportunities." },
  ]).meta({ description: "Array of timeline milestones. 3 to 5 items." })
});

type SchemaType = z.infer<typeof Schema>;

const DreamStudioTimelineLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const defaultMilestones = [
    { year: "2019", description: "We are a group of artists, designers, and pioneers in London." },
    { year: "2020", description: "We use our expertise to provide creative solutions." },
    { year: "2021", description: "We are truly the one-stop shop for all creative endeavours." },
    { year: "2022", description: "We collaborate and help our clients define gaps and seize opportunities." },
  ];
  const milestones = data?.milestones || defaultMilestones;

  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #E8E0F0 0%, #DCD0EC 20%, #E4D8F0 40%, #F0E8F8 60%, #E8D8F0 80%, #D8C8E8 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      {/* Soft radial overlays */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[400px] opacity-[0.3]"
        style={{ background: "radial-gradient(ellipse at 40% 20%, #F5D0E0 0%, transparent 60%)" }}
      ></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] opacity-[0.2]"
        style={{ background: "radial-gradient(ellipse at 60% 80%, #C8D8F8 0%, transparent 60%)" }}
      ></div>

      {/* Subtle border */}
      <div className="absolute inset-4 rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.5)" }}></div>

      <div className="relative h-full flex flex-col justify-center px-14 lg:px-20 py-12 gap-6 z-10">

        {/* Timeline Header Bar */}
        <div className="flex items-center gap-4 w-full max-w-4xl mx-auto">
          <span className="text-xs tracking-[0.2em] uppercase font-medium"
            style={{ color: "rgba(45, 27, 78, 0.5)" }}
          >
            {data?.titleLeft || "time"}
          </span>
          <div className="flex-1 h-[1px]" style={{ background: "rgba(45, 27, 78, 0.2)" }}></div>
          <span className="text-xs tracking-[0.2em] uppercase font-medium"
            style={{ color: "rgba(45, 27, 78, 0.5)" }}
          >
            {data?.titleRight || "line"}
          </span>
        </div>

        {/* Large Heading */}
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.0] m-0 text-center"
          style={{ color: "#2D1B4E" }}
        >
          {data?.heading || "design studio."}
        </h1>

        {/* Timeline milestones */}
        <div className="flex items-start justify-center gap-4 lg:gap-6 mt-6 w-full max-w-5xl mx-auto">
          {milestones.map((milestone: any, idx: number) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center text-center flex-1">
                {/* Year badge */}
                <div className="px-5 py-2 rounded-full mb-3"
                  style={{
                    background: "rgba(255, 255, 255, 0.4)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.5)",
                    boxShadow: "0 2px 12px rgba(160, 120, 180, 0.1)",
                  }}
                >
                  <span className="text-sm font-bold tracking-wider" style={{ color: "#2D1B4E" }}>
                    {milestone.year}
                  </span>
                </div>
                {/* Description */}
                <p className="text-xs lg:text-sm font-normal leading-relaxed max-w-[200px]"
                  style={{ color: "rgba(60, 40, 80, 0.6)" }}
                >
                  {milestone.description}
                </p>
              </div>
              {/* Connector dot */}
              {idx < milestones.length - 1 && (
                <div className="flex items-center pt-5">
                  <div className="w-6 h-[1px]" style={{ background: "rgba(45, 27, 78, 0.2)" }}></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DreamStudioTimelineLayout;
