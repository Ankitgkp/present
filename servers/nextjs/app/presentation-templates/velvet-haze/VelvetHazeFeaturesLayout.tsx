import React from 'react';
import * as z from "zod";

export const layoutId = "velvet-haze-features";
export const layoutName = "Velvet Haze Features";
export const layoutDescription = "A dark, premium feature grid with glowing neon-bordered cards on a deep indigo gradient.";

export const Schema = z.object({
  title: z.string().min(2).max(40).default("Core Features").meta({
    description: "Main title. Max 3 words.",
  }),
  subtitle: z.string().min(5).max(60).default("Everything you need, nothing you don't.").meta({
    description: "Short subtitle. Max 8 words.",
  }),
  features: z.array(
    z.object({
      title: z.string().min(2).max(50).meta({ description: "Feature title." }),
      description: z.string().min(10).max(180).meta({ description: "Feature description." }),
    })
  ).min(3).max(6).default([
      { title: "Real-Time Collaboration", description: "Work together seamlessly with your entire team in real time." },
      { title: "Smart Automation", description: "Automate repetitive tasks and reclaim hours every week." },
      { title: "Advanced Analytics", description: "Get actionable insights with powerful visual reporting tools." },
      { title: "Seamless Integrations", description: "Connect with your existing tools and workflows effortlessly." },
      { title: "Enterprise Security", description: "Bank-level encryption keeps your data safe and protected." },
      { title: "24/7 Support", description: "Expert help is always available, whenever you need it." }
  ]).meta({ description: "Array of features. 3 to 6 items." })
});

type SchemaType = z.infer<typeof Schema>;

const VelvetHazeFeaturesLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const defaultFeatures = [
      { title: "Real-Time Collaboration", description: "Work together seamlessly with your entire team in real time." },
      { title: "Smart Automation", description: "Automate repetitive tasks and reclaim hours every week." },
      { title: "Advanced Analytics", description: "Get actionable insights with powerful visual reporting tools." },
      { title: "Seamless Integrations", description: "Connect with your existing tools and workflows effortlessly." },
      { title: "Enterprise Security", description: "Bank-level encryption keeps your data safe and protected." },
      { title: "24/7 Support", description: "Expert help is always available, whenever you need it." }
  ];
  const features = data?.features || defaultFeatures;

  const cardAccents = [
    "rgba(168, 85, 247, 0.25)",
    "rgba(192, 132, 252, 0.25)",
    "rgba(139, 92, 246, 0.25)",
    "rgba(124, 58, 237, 0.25)",
    "rgba(233, 213, 255, 0.2)",
    "rgba(167, 139, 250, 0.25)",
  ];

  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex flex-col items-center"
      style={{
        background: "linear-gradient(180deg, #0D0818 0%, #1A1035 50%, #0F0A1E 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      {/* Mesh gradient overlays */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-[0.1]"
        style={{ background: "radial-gradient(circle, #A855F7, transparent 70%)" }}
      ></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-[0.08]"
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
      <div className="w-full pt-10 pb-4 flex flex-col items-center z-10 px-8">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-none m-0 text-center"
          style={{ color: "#F1E8FF" }}
        >
          {data?.title || "Core Features"}
        </h1>
        <div className="flex items-center gap-2 mt-4 mb-2">
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
        <p className="text-lg lg:text-xl font-normal text-center max-w-2xl"
          style={{ color: "rgba(203, 195, 227, 0.7)" }}
        >
          {data?.subtitle || "Everything you need, nothing you don't."}
        </p>
      </div>

      {/* Feature Grid */}
      <div className="w-full flex-1 px-12 lg:px-20 flex items-center justify-center pb-8 z-10 overflow-hidden">
        <div className={`grid gap-5 w-full ${features.length <= 4 ? "grid-cols-2 max-w-4xl" : "grid-cols-3 max-w-6xl"}`}>
          {features.map((feature: any, idx: number) => (
            <div
              key={idx}
              className="rounded-xl p-5 lg:p-6 flex flex-col gap-3 transition-all hover:-translate-y-1"
              style={{
                background: "rgba(26, 16, 53, 0.7)",
                backdropFilter: "blur(10px)",
                border: `1px solid ${cardAccents[idx % cardAccents.length]}`,
                boxShadow: `0 0 20px rgba(168, 85, 247, 0.05), 0 4px 16px rgba(0, 0, 0, 0.3)`,
              }}
            >
              {/* Number badge */}
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{
                  background: "rgba(168, 85, 247, 0.15)",
                  color: "#C084FC",
                  border: "1px solid rgba(168, 85, 247, 0.25)",
                  boxShadow: "0 0 10px rgba(168, 85, 247, 0.1)",
                }}
              >
                {String(idx + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg lg:text-xl font-semibold leading-tight"
                style={{ color: "#F1E8FF" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm lg:text-base leading-relaxed line-clamp-3"
                style={{ color: "rgba(203, 195, 227, 0.65)" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VelvetHazeFeaturesLayout;
