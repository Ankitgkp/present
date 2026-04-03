import React from 'react';
import * as z from "zod";
import { Star } from "lucide-react";

export const layoutId = "velvet-haze-testimonials";
export const layoutName = "Velvet Haze Testimonials";
export const layoutDescription = "A clean testimonial layout with frosted glass quote cards on a soft purple-to-white gradient.";

export const Schema = z.object({
  title: z.string().min(2).max(50).default("What Our Clients Say").meta({
    description: "Main title. Max 5 words.",
  }),
  testimonials: z.array(
    z.object({
      quote: z.string().min(10).max(180).meta({ description: "The customer quote text." }),
      authorName: z.string().min(2).max(30).meta({ description: "Name of the person." }),
      authorRole: z.string().min(2).max(40).meta({ description: "Role and company." }),
    })
  ).min(3).max(4).default([
      { quote: "\"This platform completely transformed how our team operates. We saw a 40% boost in productivity from day one.\"", authorName: "Sarah Chen", authorRole: "Product Director at TechFlow" },
      { quote: "\"The analytics are a game changer. We finally have clear visibility into our team's performance.\"", authorName: "Alex Thompson", authorRole: "Product Manager at Enterprise Corp" },
      { quote: "\"Scaled with us from 10 to 10,000 users without a single hiccup. Truly enterprise-ready.\"", authorName: "Jessica Wu", authorRole: "Founder at Startup X" },
  ]).meta({ description: "Array of testimonials. 3 to 4 items." })
});

type SchemaType = z.infer<typeof Schema>;

const VelvetHazeTestimonialsLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const defaultTestimonials = [
      { quote: "\"This platform completely transformed how our team operates. We saw a 40% boost in productivity from day one.\"", authorName: "Sarah Chen", authorRole: "Product Director at TechFlow" },
      { quote: "\"The analytics are a game changer. We finally have clear visibility into our team's performance.\"", authorName: "Alex Thompson", authorRole: "Product Manager at Enterprise Corp" },
      { quote: "\"Scaled with us from 10 to 10,000 users without a single hiccup. Truly enterprise-ready.\"", authorName: "Jessica Wu", authorRole: "Founder at Startup X" },
  ];
  const testimonials = data?.testimonials || defaultTestimonials;

  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex flex-col items-center justify-start pt-16"
      style={{
        background: "linear-gradient(135deg, #F5F3FF 0%, #FFFFFF 50%, #EDE9FE 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      {/* Decorative gradients */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-[0.1]"
        style={{ background: "radial-gradient(circle, #8B5CF6, transparent 70%)" }}
      ></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #A78BFA, transparent 70%)" }}
      ></div>

      {/* Thin decorative top bar */}
      <div className="absolute top-0 left-0 w-full h-1"
        style={{ background: "linear-gradient(90deg, #8B5CF6, #A78BFA, #C4B5FD, #DDD6FE)" }}
      ></div>

      {/* Header */}
      <div className="w-full px-12 z-10 text-center mb-10">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-none m-0"
          style={{ color: "#1E1B4B" }}
        >
          {data?.title || "What Our Clients Say"}
        </h1>
        <div className="flex items-center justify-center gap-2 mt-5">
          <div className="h-[2px] w-10 rounded-full" style={{ background: "linear-gradient(90deg, #8B5CF6, transparent)" }}></div>
          <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
          <div className="h-[2px] w-10 rounded-full" style={{ background: "linear-gradient(270deg, #A78BFA, transparent)" }}></div>
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="w-full flex-1 px-8 lg:px-12 flex items-center justify-center pb-16 z-10">
        <div className="flex gap-6 w-full justify-center">
          {testimonials.map((t: any, idx: number) => (
            <div
              key={idx}
              className="flex-1 max-w-[340px] rounded-xl text-left flex flex-col transition-all hover:-translate-y-1"
              style={{
                background: "rgba(255, 255, 255, 0.65)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(139, 92, 246, 0.12)",
                boxShadow: "0 4px 24px rgba(139, 92, 246, 0.06)",
              }}
            >
              <div className="p-6 pb-5 flex-1 flex flex-col relative z-10">
                {/* Quote mark */}
                <span className="text-5xl leading-none font-serif select-none -mb-2"
                  style={{ color: "rgba(139, 92, 246, 0.15)" }}
                >
                  "
                </span>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-3.5 h-3.5 text-violet-400 fill-violet-400" />)}
                </div>

                <p className="text-base lg:text-lg font-normal leading-relaxed flex-1 line-clamp-5"
                  style={{ color: "#374151" }}
                >
                  {t.quote}
                </p>
              </div>

              <div className="px-6 pb-6 pt-3 flex items-center gap-3 mt-auto"
                style={{ borderTop: "1px solid rgba(139, 92, 246, 0.08)" }}
              >
                <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #EDE9FE, #DDD6FE)" }}
                >
                  <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${t.authorName.replace(/\s+/g, '')}&backgroundColor=ffffff`} alt={t.authorName} className="w-8 h-8 object-cover rounded-full" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-semibold truncate" style={{ color: "#1E1B4B" }}>{t.authorName}</span>
                  <span className="text-xs font-normal truncate" style={{ color: "#9CA3AF" }}>{t.authorRole}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VelvetHazeTestimonialsLayout;
