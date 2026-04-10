import React from 'react';
import * as z from "zod";

export const layoutId = "dream-studio-features-grid";
export const layoutName = "Dream Studio Features Grid";
export const layoutDescription = "A features grid slide with frosted glass cards, titles, and descriptions on soft pastel gradients. Good for showcasing capabilities.";

export const Schema = z.object({
  title: z.string().min(2).max(50).default("What We Offer").meta({
    description: "Main title. Max 5 words.",
  }),
  subtitle: z.string().min(5).max(100).default("Our suite of creative services designed to elevate your brand presence.").meta({
    description: "Subtitle text. Max 15 words.",
  }),
  features: z.array(
    z.object({
      title: z.string().min(2).max(40).meta({ description: "Feature title. Max 5 words." }),
      description: z.string().min(10).max(200).meta({ description: "Feature description. Max 30 words." }),
    })
  ).min(3).max(6).default([
    { title: "Brand Identity", description: "Complete visual identity systems including logos, color palettes, and brand guidelines that tell your unique story." },
    { title: "Web Design", description: "Responsive, modern websites that combine stunning aesthetics with intuitive user experience and performance." },
    { title: "Print Design", description: "From business cards to large-format prints, we create tangible materials that leave lasting impressions." },
    { title: "Art Direction", description: "Strategic creative vision that unifies campaigns and ensures every visual element aligns with your message." },
    { title: "Packaging Design", description: "Shelf-ready packaging that captures attention, communicates value, and drives purchase decisions." },
    { title: "Social Content", description: "Scroll-stopping social media content and templates that build community and amplify your brand voice." },
  ]).meta({ description: "Array of features. 3 to 6 items." })
});

type SchemaType = z.infer<typeof Schema>;

const DreamStudioFeaturesGridLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const defaultFeatures = [
    { title: "Brand Identity", description: "Complete visual identity systems including logos, color palettes, and brand guidelines that tell your unique story." },
    { title: "Web Design", description: "Responsive, modern websites that combine stunning aesthetics with intuitive user experience and performance." },
    { title: "Print Design", description: "From business cards to large-format prints, we create tangible materials that leave lasting impressions." },
    { title: "Art Direction", description: "Strategic creative vision that unifies campaigns and ensures every visual element aligns with your message." },
    { title: "Packaging Design", description: "Shelf-ready packaging that captures attention, communicates value, and drives purchase decisions." },
    { title: "Social Content", description: "Scroll-stopping social media content and templates that build community and amplify your brand voice." },
  ];
  const features = data?.features || defaultFeatures;

  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex flex-col"
      style={{
        background: "linear-gradient(135deg, #E8E0F0 0%, #DCD0EC 20%, #E4D8F0 40%, #F0E8F8 55%, #E8D8F0 70%, #D8C8E8 85%, #E0D0EC 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      {/* Soft radial overlays */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] opacity-[0.3]"
        style={{ background: "radial-gradient(ellipse at 80% 20%, #C8D8F8 0%, transparent 55%)" }}
      ></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.3]"
        style={{ background: "radial-gradient(ellipse at 20% 80%, #F5D0E0 0%, transparent 55%)" }}
      ></div>

      {/* Subtle border */}
      <div className="absolute inset-4 rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.5)" }}></div>

      {/* Header */}
      <div className="w-full pt-10 pb-4 flex flex-col items-center z-10 px-8">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-none m-0 text-center"
          style={{ color: "#2D1B4E" }}
        >
          {data?.title || "What We Offer"}
        </h1>
        <div className="flex items-center gap-3 mt-4 mb-2">
          <div className="h-[1px] w-10 rounded-full" style={{ background: "rgba(45, 27, 78, 0.15)" }}></div>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="rgba(90, 60, 120, 0.35)" />
          </svg>
          <div className="h-[1px] w-10 rounded-full" style={{ background: "rgba(45, 27, 78, 0.15)" }}></div>
        </div>
        <p className="text-sm lg:text-base font-normal text-center max-w-xl"
          style={{ color: "rgba(60, 40, 80, 0.55)" }}
        >
          {data?.subtitle || "Our suite of creative services designed to elevate your brand presence."}
        </p>
      </div>

      {/* Feature Grid */}
      <div className="w-full flex-1 px-10 lg:px-16 flex items-center justify-center pb-8 z-10 overflow-hidden">
        <div className={`grid gap-4 w-full ${features.length <= 4 ? "grid-cols-2 max-w-4xl" : "grid-cols-3 max-w-6xl"}`}>
          {features.map((feature: any, idx: number) => (
            <div
              key={idx}
              className="rounded-xl p-5 flex flex-col gap-2"
              style={{
                background: "rgba(255, 255, 255, 0.35)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.5)",
                boxShadow: "0 4px 20px rgba(160, 120, 180, 0.08)",
              }}
            >
              {/* Number */}
              <span className="text-xs font-bold tracking-wider"
                style={{ color: "rgba(45, 27, 78, 0.3)" }}
              >
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className="text-base lg:text-lg font-semibold leading-tight m-0"
                style={{ color: "#2D1B4E" }}
              >
                {feature.title}
              </h3>
              <p className="text-xs lg:text-sm leading-relaxed line-clamp-3 m-0"
                style={{ color: "rgba(60, 40, 80, 0.55)" }}
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

export default DreamStudioFeaturesGridLayout;
