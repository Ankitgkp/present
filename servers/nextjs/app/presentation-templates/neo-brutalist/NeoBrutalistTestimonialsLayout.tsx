import React from 'react';
import * as z from "zod";
import { Star } from "lucide-react";

export const layoutId = "neo-brutalist-testimonials";
export const layoutName = "Neo Brutalist Testimonials";
export const layoutDescription = "A vibrant layout displaying customer testimonials or quotes in neo-brutalist cards.";

export const Schema = z.object({
  title: z.string().min(2).max(50).default("TRUSTED BY INNOVATIVE TEAMS").meta({
    description: "Main title of the slide. Max 5 words.",
  }),
  testimonials: z.array(
    z.object({
      quote: z.string().min(10).max(180).meta({ description: "The customer quote or testimonial text." }),
      authorName: z.string().min(2).max(30).meta({ description: "Name of the person." }),
      authorRole: z.string().min(2).max(40).meta({ description: "Role and company." }),
    })
  ).min(3).max(4).default([
      { quote: "\"Acme has completely transformed how our team operates. We've seen a 40% increase in productivity since day one.\"", authorName: "SARAH CHEN", authorRole: "PRODUCT DIRECTOR AT TECHFLOW" },
      { quote: "\"The analytics are a game changer. We finally have clear visibility into our team's performance.\"", authorName: "ALEX THOMPSON", authorRole: "PRODUCT MANAGER AT ENTERPRISE CORP" },
      { quote: "\"Scaled with us from day one. From 10 users to 10,000, Acme never skipped a beat.\"", authorName: "JESSICA WU", authorRole: "FOUNDER AT STARTUP X" },
      { quote: "\"The automation features alone are worth the price. It's like having an extra team member working 24/7.\"", authorName: "MARCUS RODRIGUEZ", authorRole: "CTO AT INNOVATELAB" }
  ]).meta({ description: "Array of testimonials. Generates exactly 3 to 4 items." })
});

type SchemaType = z.infer<typeof Schema>;

const NeoBrutalistTestimonialsLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const defaultTestimonials = [
      { quote: "\"Acme has completely transformed how our team operates. We've seen a 40% increase in productivity since day one.\"", authorName: "SARAH CHEN", authorRole: "PRODUCT DIRECTOR AT TECHFLOW" },
      { quote: "\"The analytics are a game changer. We finally have clear visibility into our team's performance.\"", authorName: "ALEX THOMPSON", authorRole: "PRODUCT MANAGER AT ENTERPRISE CORP" },
      { quote: "\"Scaled with us from day one. From 10 users to 10,000, Acme never skipped a beat.\"", authorName: "JESSICA WU", authorRole: "FOUNDER AT STARTUP X" },
      { quote: "\"The automation features alone are worth the price. It's like having an extra team member working 24/7.\"", authorName: "MARCUS RODRIGUEZ", authorRole: "CTO AT INNOVATELAB" }
  ];
  const testimonials = data?.testimonials || defaultTestimonials;
  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden font-sans border-4 border-black flex flex-col items-center justify-start pt-16"
      style={{
        backgroundColor: "#FDE047",
        fontFamily: "var(--heading-font-family, Poppins)",
      }}
    >
       {/* Decorative diagonal stripe bottom border */}
       <div className="absolute bottom-0 left-0 w-full h-8 border-t-4 border-black bg-white z-0 overflow-hidden">
           <div className="w-full h-full opacity-30" style={{ background: "repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)"}}></div>
       </div>

       <div className="w-full px-12 z-10 text-center mb-10">
           <div className="inline-block bg-black px-10 py-5 rotate-[-2deg] shadow-[8px_8px_0px_rgba(255,255,255,1)] border-2 border-white max-w-4xl">
               <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight text-white leading-none m-0">
                  {data?.title || "TRUSTED BY INNOVATIVE TEAMS"}
               </h1>
           </div>
       </div>

       <div className="w-full flex-1 px-8 lg:px-12 flex items-center justify-center pb-16 z-10">
           <div className="flex gap-6 w-full justify-center">
              {testimonials.map((t: any, idx: number) => (
                 <div key={idx} className="flex-1 max-w-[280px] bg-white border-4 border-black text-left flex flex-col shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-all relative">
                    
                    <div className="p-6 pb-8 flex-1 flex flex-col relative z-10">
                       <div className="flex items-center justify-between mb-4">
                           <div className="flex gap-1">
                               {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 text-red-500 fill-red-500" />)}
                           </div>
                           <div className="bg-black text-white text-[10px] uppercase font-bold px-2 py-1 tracking-wider">
                               VERIFIED
                           </div>
                       </div>
                       
                       <p className="text-base lg:text-lg font-bold text-black leading-snug flex-1 italic">
                           {t.quote}
                       </p>
                    </div>

                    <div className="border-t-4 border-black bg-indigo-100 p-4 flex items-center gap-4 mt-auto">
                       <div className="w-12 h-12 rounded-full border-2 border-black bg-white flex-shrink-0 overflow-hidden flex items-center justify-center">
                           <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${t.authorName.replace(/\s+/g, '')}&backgroundColor=ffffff`} alt={t.authorName} className="w-10 h-10 object-cover" />
                       </div>
                       <div className="flex flex-col overflow-hidden max-w-[150px]">
                           <span className="text-sm font-black text-black uppercase truncate">{t.authorName}</span>
                           <span className="text-[10px] font-semibold text-zinc-600 uppercase truncate">{t.authorRole}</span>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
       </div>

    </div>
  );
};

export default NeoBrutalistTestimonialsLayout;
