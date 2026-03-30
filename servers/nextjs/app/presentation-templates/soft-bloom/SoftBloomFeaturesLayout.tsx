import React from 'react';
import * as z from "zod";

export const layoutId = "soft-bloom-features";
export const layoutName = "Soft Bloom Features";
export const layoutDescription = "A pastel grid of feature cards with rounded corners, soft shadows, and lavender accents.";

export const Schema = z.object({
  title: z.string().min(2).max(40).default("What We Offer").meta({
    description: "Main title. Max 4 words.",
  }),
  subtitle: z.string().min(5).max(80).default("Thoughtfully designed features to make every step feel effortless.").meta({
    description: "Subtitle. Max 12 words.",
  }),
  features: z.array(
    z.object({
      emoji: z.string().min(1).max(4).meta({ description: "A single emoji icon representing the feature." }),
      title: z.string().min(2).max(40).meta({ description: "Feature title." }),
      description: z.string().min(10).max(150).meta({ description: "Feature description." }),
    })
  ).min(3).max(6).default([
    { emoji: "🎨", title: "Creative Tools", description: "Express yourself with intuitive design tools that feel natural and inspiring." },
    { emoji: "💬", title: "Seamless Chat", description: "Stay connected with your team through beautiful, real-time messaging." },
    { emoji: "📊", title: "Smart Insights", description: "Understand your audience with elegant analytics and visual dashboards." },
    { emoji: "🔒", title: "Privacy First", description: "Your data stays yours. Built with industry-leading security standards." },
    { emoji: "🌐", title: "Global Reach", description: "Connect with people everywhere through our worldwide infrastructure." },
    { emoji: "💖", title: "Made with Love", description: "Every detail is handcrafted to deliver the most delightful experience." },
  ]).meta({ description: "Array of features. 3 to 6 items." })
});

type SchemaType = z.infer<typeof Schema>;

const SoftBloomFeaturesLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const defaultFeatures = [
    { emoji: "🎨", title: "Creative Tools", description: "Express yourself with intuitive design tools that feel natural and inspiring." },
    { emoji: "💬", title: "Seamless Chat", description: "Stay connected with your team through beautiful, real-time messaging." },
    { emoji: "📊", title: "Smart Insights", description: "Understand your audience with elegant analytics and visual dashboards." },
    { emoji: "🔒", title: "Privacy First", description: "Your data stays yours. Built with industry-leading security standards." },
    { emoji: "🌐", title: "Global Reach", description: "Connect with people everywhere through our worldwide infrastructure." },
    { emoji: "💖", title: "Made with Love", description: "Every detail is handcrafted to deliver the most delightful experience." },
  ];
  const features = data?.features || defaultFeatures;

  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex flex-col items-center"
      style={{
        background: "linear-gradient(180deg, #FAF5FF 0%, #FDF2F8 100%)",
        fontFamily: "var(--heading-font-family, 'Georgia, serif')",
      }}
    >
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #F9A8D4, transparent 70%)" }}
      ></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #C4B5FD, transparent 70%)" }}
      ></div>

      {/* Header */}
      <div className="w-full pt-12 pb-4 flex flex-col items-center z-10 px-8">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-none m-0 text-center"
          style={{ color: "#4C1D95" }}
        >
          {data?.title || "What We Offer"}
        </h1>
        <div className="flex items-center gap-2 mt-4 mb-2">
          <div className="h-[1.5px] w-10 rounded-full bg-pink-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-purple-300"></div>
          <div className="h-[1.5px] w-10 rounded-full bg-purple-300"></div>
        </div>
        <p className="text-lg lg:text-xl font-normal text-center max-w-2xl"
          style={{ color: "#9CA3AF" }}
        >
          {data?.subtitle || "Thoughtfully designed features to make every step feel effortless."}
        </p>
      </div>

      {/* Feature Grid */}
      <div className="w-full flex-1 px-12 lg:px-20 flex items-center justify-center pb-10 z-10 overflow-hidden">
        <div className={`grid gap-5 w-full ${features.length <= 4 ? "grid-cols-2 max-w-4xl" : "grid-cols-3 max-w-6xl"}`}>
          {features.map((feature: any, idx: number) => (
            <div
              key={idx}
              className="rounded-2xl p-5 lg:p-6 flex flex-col gap-3 transition-all hover:-translate-y-1"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(196, 181, 253, 0.3)",
                boxShadow: "0 4px 20px rgba(196, 181, 253, 0.15)",
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: "linear-gradient(135deg, #FBCFE8, #DDD6FE)" }}
              >
                {feature.emoji}
              </div>
              <h3 className="text-lg lg:text-xl font-semibold leading-tight"
                style={{ color: "#4C1D95" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm lg:text-base leading-relaxed line-clamp-3"
                style={{ color: "#6B7280" }}
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

export default SoftBloomFeaturesLayout;
