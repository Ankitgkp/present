import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';
import { ArrowRight, Star } from "lucide-react";

export const layoutId = "neo-brutalist-intro";
export const layoutName = "Neo Brutalist Intro";
export const layoutDescription = "A striking, neo-brutalist intro slide with overlapping blocks, thick borders, solid shadows, and a dotted background pattern.";

export const Schema = z.object({
  titlePart1: z.string().min(2).max(40).default("TRANSFORM").meta({
    description: "First part of the main title (top block). Keep it short and impactful. Max 6 words.",
  }),
  titlePart2: z.string().min(3).max(60).default("THE WAY YOUR TEAM WORKS").meta({
    description: "Second part of the main title (bottom block). Max 10 words.",
  }),
  description: z.string().min(10).max(300).default("Acme Platform brings your team together with powerful tools designed to streamline workflows, boost productivity, and drive results. We offer scalable solutions for every modern business challenge.").meta({
    description: "Supporting description text for the slide. Provide detailed points. Max 50 words.",
  }),
  image: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    __image_prompt__: "Abstract pop art stylized illustration of teamwork or fast moving graph",
  }).meta({
    description: "Supporting image for the slide. Should fit a neo-brutalist/modern vibe.",
  }),
});

type SchemaType = z.infer<typeof Schema>;

const NeoBrutalistIntroLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-[#FDFDF7] relative z-20 mx-auto overflow-hidden font-sans border-4 border-black"
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

      {/* Decorative Geometric Shapes */}
      <div className="absolute top-8 left-8 w-12 h-12 bg-red-400 border-4 border-black rotate-[-12deg] shadow-[4px_4px_0px_rgba(0,0,0,1)]"></div>
      <div className="absolute top-16 right-16 w-16 h-16 bg-yellow-300 border-4 border-black rounded-full shadow-[4px_4px_0px_rgba(0,0,0,1)]"></div>

      <div className="relative h-full flex items-center justify-between px-12 lg:px-20 py-8">
        
        {/* Left Content Area */}
        <div className="flex-1 max-w-[60%] flex flex-col justify-center gap-6 relative z-10">
          
          {/* Dynamic Titles */}
          <div className="flex flex-col items-start gap-4">
            <div className="inline-block bg-white border-4 border-black px-5 py-2 rotate-[-2deg] shadow-[6px_6px_0px_rgba(0,0,0,1)] relative z-20">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase tracking-tight text-black leading-none m-0">
                {data?.titlePart1 || "TRANSFORM"}
              </h1>
            </div>
            
            <div className="inline-block bg-yellow-300 border-4 border-black px-5 py-2 mx-4 rotate-[1deg] shadow-[6px_6px_0px_rgba(0,0,0,1)] relative z-10 -mt-2">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold uppercase tracking-tighter text-black leading-tight m-0">
                {data?.titlePart2 || "THE WAY YOUR TEAM WORKS"}
              </h2>
            </div>
          </div>

          {/* Description Block */}
          <div className="bg-white border-4 border-black px-6 py-5 mt-4 shadow-[6px_6px_0px_rgba(0,0,0,1)] relative w-full flex items-start">
            <div className="absolute top-0 left-0 w-[6px] h-full bg-red-400"></div>
            
            {/* Cute Star Decoration */}
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-400 border-[2px] border-black flex items-center justify-center rotate-12 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              <Star className="w-4 h-4 text-white fill-white" />
            </div>

            <p className="text-lg lg:text-xl font-semibold text-black leading-relaxed line-clamp-5">
              {data?.description || "Acme Platform brings your team together with powerful tools designed to streamline workflows, boost productivity, and drive results. We offer scalable solutions for every modern business challenge."}
            </p>
          </div>

        </div>

        {/* Right Content Area (Image/Graphic) */}
        <div className="flex-1 relative h-full flex items-center justify-center p-8 z-0">
          <div className="relative w-full max-w-[500px] aspect-[4/3] bg-purple-300 border-4 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] rotate-2 overflow-hidden mx-auto">
            
            {data?.image?.__image_url__ ? (
              <img 
                src={data.image.__image_url__} 
                alt={data.image.__image_prompt__} 
                className="w-full h-full object-cover" 
              />
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center relative">
                   {/* Watermark text */}
                   <span className="absolute text-[150px] font-black opacity-20 rotate-[-10deg]">#1</span>
                   <div className="bg-black text-white px-6 py-2 border-r-4 border-red-400 font-bold text-3xl rotate-[-2deg] flex items-center shadow-[4px_4px_0px_rgba(240,100,100,1)]">
                     SUPER <span className="bg-red-400 text-black px-2 ml-2">FAST</span>
                   </div>
                </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default NeoBrutalistIntroLayout;
