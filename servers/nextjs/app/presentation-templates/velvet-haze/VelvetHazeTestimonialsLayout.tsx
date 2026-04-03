import React from 'react';
import * as z from "zod";
import { Star } from "lucide-react";

export const layoutId = "velvet-haze-testimonials";
export const layoutName = "Velvet Haze Testimonials";
export const layoutDescription = "A dark, atmospheric testimonial layout with glowing quote cards on a deep indigo gradient.";

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
        background: "linear-gradient(135deg, #0F0A1E 0%, #1A1035 50%, #130D25 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      {/* Mesh gradient overlays */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-[0.12]"
        style={{ background: "radial-gradient(circle, #A855F7, transparent 70%)" }}
      ></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full opacity-[0.08]"
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
      <div className="w-full px-12 z-10 text-center mb-10">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-none m-0"
          style={{ color: "#F1E8FF" }}
        >
          {data?.title || "What Our Clients Say"}
        </h1>
        <div className="flex items-center justify-center gap-2 mt-5">
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
      </div>

      {/* Testimonial Cards */}
      <div className="w-full flex-1 px-8 lg:px-12 flex items-center justify-center pb-16 z-10">
        <div className="flex gap-6 w-full justify-center">
          {testimonials.map((t: any, idx: number) => (
            <div
              key={idx}
              className="flex-1 max-w-[340px] rounded-xl text-left flex flex-col transition-all hover:-translate-y-1"
              style={{
                background: "rgba(26, 16, 53, 0.8)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(168, 85, 247, 0.2)",
                boxShadow: "0 0 25px rgba(168, 85, 247, 0.06), 0 4px 24px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="p-6 pb-5 flex-1 flex flex-col relative z-10">
                {/* Quote mark */}
                <span className="text-5xl leading-none font-serif select-none -mb-2"
                  style={{ color: "rgba(168, 85, 247, 0.3)", textShadow: "0 0 20px rgba(168, 85, 247, 0.15)" }}
                >
                  "
                </span>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className="w-3.5 h-3.5" style={{ color: "#A855F7", fill: "#A855F7", filter: "drop-shadow(0 0 3px rgba(168,85,247,0.4))" }} />
                  ))}
                </div>

                <p className="text-base lg:text-lg font-normal leading-relaxed flex-1 line-clamp-5"
                  style={{ color: "rgba(203, 195, 227, 0.85)" }}
                >
                  {t.quote}
                </p>
              </div>

              <div className="px-6 pb-6 pt-3 flex items-center gap-3 mt-auto"
                style={{ borderTop: "1px solid rgba(168, 85, 247, 0.12)" }}
              >
                <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #2D1B69, #1A1035)",
                    border: "1px solid rgba(168, 85, 247, 0.3)",
                  }}
                >
                  <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${t.authorName.replace(/\s+/g, '')}&backgroundColor=ffffff`} alt={t.authorName} className="w-8 h-8 object-cover rounded-full" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-semibold truncate" style={{ color: "#F1E8FF" }}>{t.authorName}</span>
                  <span className="text-xs font-normal truncate" style={{ color: "rgba(203, 195, 227, 0.5)" }}>{t.authorRole}</span>
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
