import React from 'react';
import * as z from "zod";

export const layoutId = "dream-studio-services";
export const layoutName = "Dream Studio Services";
export const layoutDescription = "A text-heavy services slide with large headline question and detailed service descriptions in a sidebar layout with soft pastel gradients.";

export const Schema = z.object({
  headlineLarge: z.string().min(2).max(40).default("what we do?").meta({
    description: "Large headline text displayed prominently. Max 5 words.",
  }),
  services: z.array(
    z.object({
      title: z.string().min(2).max(40).meta({ description: "Service title in bold uppercase." }),
      description: z.string().min(10).max(200).meta({ description: "Detailed service description. Max 30 words." }),
    })
  ).min(2).max(4).default([
    { title: "COLLABORATING", description: "We collaborate and help our clients to define gaps and create opportunities, then deliver the best solutions." },
    { title: "BUILDING TOGETHER", description: "Instead of treating you as a client, we're a part of your team and integrate your business to our process." },
    { title: "SERVICES", description: "We design the best experiences for our clients. Our team will help you create and connect with your audience." },
  ]).meta({ description: "Array of service items. 2 to 4 items." })
});

type SchemaType = z.infer<typeof Schema>;

const DreamStudioServicesLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const defaultServices = [
    { title: "COLLABORATING", description: "We collaborate and help our clients to define gaps and create opportunities, then deliver the best solutions." },
    { title: "BUILDING TOGETHER", description: "Instead of treating you as a client, we're a part of your team and integrate your business to our process." },
    { title: "SERVICES", description: "We design the best experiences for our clients. Our team will help you create and connect with your audience." },
  ];
  const services = data?.services || defaultServices;

  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #E8E0F0 0%, #D8CCE8 20%, #E0D4F0 40%, #F0E8F8 60%, #E8D8F0 80%, #D4C4E4 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      {/* Soft radial overlays */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.35]"
        style={{ background: "radial-gradient(ellipse at 80% 20%, #C8D8F8 0%, transparent 60%)" }}
      ></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.25]"
        style={{ background: "radial-gradient(ellipse at 20% 80%, #F5D0E0 0%, transparent 60%)" }}
      ></div>

      {/* Subtle border */}
      <div className="absolute inset-4 rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.5)" }}></div>

      <div className="relative h-full flex items-center px-14 lg:px-20 py-12 gap-8">

        {/* Left: Large Headline */}
        <div className="flex-1 flex flex-col justify-center relative z-10">
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.0] m-0"
            style={{ color: "#2D1B4E" }}
          >
            {(data?.headlineLarge || "what we do?").split(" ").map((word, idx, arr) => (
              <span key={idx}>
                {word}
                {idx < arr.length - 1 && <br />}
              </span>
            ))}
          </h1>
        </div>

        {/* Right: Service Descriptions */}
        <div className="flex-1 flex flex-col gap-6 relative z-10 max-w-[450px]">
          {services.map((service: any, idx: number) => (
            <div key={idx} className="flex flex-col gap-2">
              <h3 className="text-xs lg:text-sm font-bold tracking-[0.15em] uppercase m-0"
                style={{ color: "#2D1B4E" }}
              >
                {service.title}
              </h3>
              <p className="text-sm lg:text-base font-normal leading-relaxed m-0"
                style={{ color: "rgba(60, 40, 80, 0.6)" }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DreamStudioServicesLayout;
