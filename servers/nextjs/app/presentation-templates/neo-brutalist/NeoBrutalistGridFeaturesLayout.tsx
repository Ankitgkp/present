import React from 'react';
import * as z from "zod";

export const layoutId = "neo-brutalist-grid-features";
export const layoutName = "Neo Brutalist Grid Features";
export const layoutDescription = "A grid of feature cards with a pop-art, neo-brutalist feel.";

export const Schema = z.object({
  title: z.string().min(2).max(40).default("CAPABILITIES").meta({
    description: "Main title of the slide. Max 3 words.",
  }),
  subtitle: z.string().min(5).max(60).default("NO FLUFF. JUST RAW FUNCTION.").meta({
    description: "Short subtitle or tagline. Max 8 words.",
  }),
  features: z.array(
    z.object({
      title: z.string().min(2).max(50).meta({ description: "Feature title." }),
      description: z.string().min(10).max(180).meta({ description: "Feature description." }),
    })
  ).min(3).max(6).default([
      { title: "REAL-TIME COLLABORATION", description: "Work together seamlessly with your entire team. Share updates and stay aligned." },
      { title: "SMART AUTOMATION", description: "Automate repetitive tasks and workflows. Save hours every week." },
      { title: "ADVANCED ANALYTICS", description: "Get actionable insights with powerful reporting tools for data-driven decisions." },
      { title: "SEAMLESS INTEGRATIONS", description: "Connect with your favorite tools. Works perfectly with your existing stack." },
      { title: "ENTERPRISE SECURITY", description: "Bank-level encryption and security protocols. Your data is protected." },
      { title: "24/7 SUPPORT", description: "Get help whenever you need it. Our expert support team is always ready." }
  ]).meta({ description: "Array of features or capabilities. Generates exactly 3 to 6 items." })
});

type SchemaType = z.infer<typeof Schema>;

const NeoBrutalistGridFeaturesLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const defaultFeatures = [
      { title: "REAL-TIME COLLABORATION", description: "Work together seamlessly with your entire team. Share updates and stay aligned." },
      { title: "SMART AUTOMATION", description: "Automate repetitive tasks and workflows. Save hours every week." },
      { title: "ADVANCED ANALYTICS", description: "Get actionable insights with powerful reporting tools for data-driven decisions." },
      { title: "SEAMLESS INTEGRATIONS", description: "Connect with your favorite tools. Works perfectly with your existing stack." },
      { title: "ENTERPRISE SECURITY", description: "Bank-level encryption and security protocols. Your data is protected." },
      { title: "24/7 SUPPORT", description: "Get help whenever you need it. Our expert support team is always ready." }
  ];
  const features = data?.features || defaultFeatures;
  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden font-sans border-4 border-black flex flex-col items-center"
      style={{
        backgroundColor: "#C4B5FD",
        fontFamily: "var(--heading-font-family, Poppins)",
      }}
    >
      <div className="w-full pt-10 pb-6 flex flex-col items-center z-10">
         <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none m-0 relative"
             style={{ 
                 WebkitTextStroke: "2px black", 
                 textShadow: "6px 6px 0px rgba(0,0,0,1)" 
             }}
         >
            {data?.title || "CAPABILITIES"}
         </h1>
         
         <div className="mt-6 bg-black px-6 py-2 border-2 border-white shadow-[6px_6px_0px_rgba(255,255,255,1)] rotate-[-1deg] inline-block">
             <p className="text-xl font-bold text-white uppercase tracking-widest m-0 leading-none">
                {data?.subtitle || "NO FLUFF. JUST RAW FUNCTION."}
             </p>
         </div>
      </div>

      <div className="w-full flex-1 px-12 lg:px-20 flex items-center justify-center pb-8 z-10 max-h-min overflow-hidden">
         <div className={`grid gap-6 w-full ${features.length <= 4 ? "grid-cols-2 max-w-4xl" : "grid-cols-3 max-w-6xl"}`}>
            {features.map((feature: any, idx: number) => (
                <div key={idx} className="bg-white border-4 border-black p-5 lg:p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all relative flex flex-col">
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-yellow-300 border-4 border-black flex items-center justify-center font-black text-lg">
                        {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div className="w-10 h-10 bg-red-400 border-4 border-black mb-4 flex items-center justify-center">
                        <div className="w-3 h-3 bg-black rounded-full"></div>
                    </div>
                    <h3 className="text-lg lg:text-xl font-black uppercase text-black leading-tight mb-3">
                        {feature.title}
                    </h3>
                    <p className="text-sm lg:text-base font-semibold text-zinc-800 leading-snug line-clamp-4">
                        {feature.description}
                    </p>
                </div>
            ))}
         </div>
      </div>
      
    </div>
  );
};

export default NeoBrutalistGridFeaturesLayout;
