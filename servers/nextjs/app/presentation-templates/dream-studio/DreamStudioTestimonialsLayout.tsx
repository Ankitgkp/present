import React from 'react';
import * as z from "zod";

export const layoutId = "dream-studio-testimonials";
export const layoutName = "Dream Studio Testimonials";
export const layoutDescription = "A testimonials slide with stacked quote cards, speech bubble styling, and a bold label on soft pastel gradients.";

export const Schema = z.object({
  label: z.string().min(2).max(30).default("testimonials.").meta({
    description: "Section label in italic style. Max 2 words.",
  }),
  testimonials: z.array(
    z.object({
      quote: z.string().min(10).max(200).meta({ description: "The customer quote text. Max 30 words." }),
    })
  ).min(2).max(4).default([
    { quote: "Very professional and quality work by the Design Studio." },
    { quote: "They have created minimal yet extremely unique branding strategies and corporate identity kits for our business." },
    { quote: "I am very happy with the final results. All in all, highly recommended!" },
  ]).meta({ description: "Array of testimonials. 2 to 4 items." })
});

type SchemaType = z.infer<typeof Schema>;

const DreamStudioTestimonialsLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const defaultTestimonials = [
    { quote: "Very professional and quality work by the Design Studio." },
    { quote: "They have created minimal yet extremely unique branding strategies and corporate identity kits for our business." },
    { quote: "I am very happy with the final results. All in all, highly recommended!" },
  ];
  const testimonials = data?.testimonials || defaultTestimonials;

  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #E4DCF0 0%, #DCD0EC 20%, #E8D8F0 40%, #F0E8F8 55%, #E8D8F0 70%, #D8C8E8 85%, #E4DCF0 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      {/* Soft radial overlays */}
      <div className="absolute top-0 left-0 w-[500px] h-[400px] opacity-[0.35]"
        style={{ background: "radial-gradient(ellipse at 20% 20%, #F5D0E0 0%, transparent 55%)" }}
      ></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-[0.25]"
        style={{ background: "radial-gradient(ellipse at 80% 80%, #C8D8F8 0%, transparent 55%)" }}
      ></div>

      {/* Subtle border */}
      <div className="absolute inset-4 rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.5)" }}></div>

      <div className="relative h-full flex items-center justify-end px-14 lg:px-20 py-12 gap-12 z-10">

        {/* Quote cards stacked */}
        <div className="flex-1 flex flex-col gap-5 max-w-[500px]">
          {testimonials.map((t: any, idx: number) => (
            <div key={idx} className="flex items-start gap-3">
              {/* Quote mark */}
              <span className="text-2xl lg:text-3xl leading-none mt-1 flex-shrink-0"
                style={{ color: "rgba(45, 27, 78, 0.3)", fontFamily: "Georgia, serif" }}
              >
                ❝
              </span>

              {/* Quote bubble */}
              <div className="rounded-xl px-5 py-4"
                style={{
                  background: "rgba(255, 255, 255, 0.4)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.5)",
                  boxShadow: "0 4px 20px rgba(160, 120, 180, 0.1)",
                }}
              >
                <p className="text-sm lg:text-base font-normal leading-relaxed m-0"
                  style={{ color: "rgba(45, 27, 78, 0.7)" }}
                >
                  {t.quote}
                </p>
              </div>

              {/* Closing quote */}
              <span className="text-xl lg:text-2xl leading-none mt-auto mb-1 flex-shrink-0"
                style={{ color: "rgba(45, 27, 78, 0.2)", fontFamily: "Georgia, serif" }}
              >
                ❞
              </span>
            </div>
          ))}
        </div>

        {/* Label */}
        <div className="flex flex-col items-end justify-end h-full">
          <span className="text-lg lg:text-xl font-medium"
            style={{ color: "rgba(45, 27, 78, 0.5)", fontStyle: "italic" }}
          >
            {data?.label || "testimonials."}
          </span>
          <div className="w-24 h-[1px] mt-2" style={{ background: "rgba(45, 27, 78, 0.2)" }}></div>
        </div>

      </div>
    </div>
  );
};

export default DreamStudioTestimonialsLayout;
