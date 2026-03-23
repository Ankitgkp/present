import React from 'react';
import * as z from "zod";

export const layoutId = "neo-brutalist-metrics";
export const layoutName = "Neo Brutalist Metrics";
export const layoutDescription = "A striking slide highlighting 3 or 4 key statistics in bold, neo-brutalist style blocks.";

export const Schema = z.object({
  title: z.string().min(2).max(60).default("OUR IMPACT BY THE NUMBERS").meta({
    description: "Main title of the slide.",
  }),
  subtitle: z.string().min(10).max(150).default("Delivering raw performance and reliability at global scale.").meta({
    description: "Supporting subtitle.",
  }),
  metrics: z.array(
    z.object({
      label: z.string().min(2).max(30).meta({ description: "Label for the metric (e.g. ACTIVE USERS). Max 3 words." }),
      value: z.string().min(1).max(15).meta({ description: "The actual metric value (e.g. 500k+)." }),
    })
  ).min(2).max(4).default([
      { label: "ACTIVE USERS", value: "500k+" },
      { label: "UPTIME SLA", value: "99.99%" },
      { label: "SUPPORT ACCESS", value: "24/7" },
      { label: "CUSTOMER SAVINGS", value: "$10M+" },
  ]).meta({ description: "Array of key metrics to display. Recommended exactly 3 to 4 metrics." })
});

type SchemaType = z.infer<typeof Schema>;

const NeoBrutalistMetricsLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const defaultMetrics = [
      { label: "ACTIVE USERS", value: "500k+" },
      { label: "UPTIME SLA", value: "99.99%" },
      { label: "SUPPORT ACCESS", value: "24/7" },
      { label: "CUSTOMER SAVINGS", value: "$10M+" },
  ];
  const metrics = data?.metrics || defaultMetrics;
  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-[#FDFDF7] relative z-20 mx-auto overflow-hidden font-sans border-4 border-black flex flex-col justify-end"
      style={{
        background: "var(--background-color, #FDFDF7)",
        fontFamily: "var(--heading-font-family, Poppins)",
      }}
    >
      {/* Decorative Dotted Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: "radial-gradient(#000 2px, transparent 2px)",
          backgroundSize: "24px 24px"
        }}
      ></div>

      <div className="flex-1 w-full px-16 lg:px-24 pt-16 lg:pt-20 pb-12 z-10 flex flex-col items-start justify-start">
         <div className="inline-block bg-white border-4 border-black px-8 py-3 rotate-[-2deg] shadow-[8px_8px_0px_rgba(0,0,0,1)] max-w-full">
             <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight text-black leading-none m-0 break-words">
                {data?.title || "OUR IMPACT BY THE NUMBERS"}
             </h1>
         </div>
         <div className="mt-8 bg-yellow-300 border-4 border-black px-6 py-4 shadow-[6px_6px_0px_rgba(0,0,0,1)] max-w-3xl rotate-[1deg]">
             <p className="text-xl lg:text-2xl font-bold text-black leading-snug m-0 break-words">
                {data?.subtitle || "Delivering raw performance and reliability at a massively scalable, global enterprise level."}
             </p>
         </div>
      </div>

      <div className="w-full bg-black border-t-8 border-black flex relative z-20" style={{ minHeight: "220px" }}>
        {metrics.map((metric: any, idx: number) => (
           <div 
             key={idx} 
             className={`flex-1 flex flex-col items-start justify-center px-6 py-8 lg:px-10 ${idx === 0 ? "bg-red-400 border-r-4 border-black" : "bg-black border-r-2 border-zinc-800"}`}
           >
              <p className={`text-xs lg:text-sm tracking-widest font-bold mb-2 lg:mb-4 ${idx === 0 ? "text-black" : "text-zinc-500"}`}>
                 {metric.label.toUpperCase()}
              </p>
              <h2 className={`text-4xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tighter tabular-nums leading-none break-word whitespace-pre-wrap ${idx === 0 ? "text-black" : "text-white"}`}>
                 {metric.value}
              </h2>
              <div className={`mt-4 lg:mt-6 h-3 w-1/2 ${idx === 0 ? "bg-black" : "bg-zinc-800"}`}></div>
           </div>
        ))}
      </div>

    </div>
  );
};

export default NeoBrutalistMetricsLayout;
