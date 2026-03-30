import React from 'react';
import * as z from "zod";

export const layoutId = "soft-bloom-stats";
export const layoutName = "Soft Bloom Stats";
export const layoutDescription = "A soft, pastel stats layout highlighting key metrics in rounded, feminine cards.";

export const Schema = z.object({
  title: z.string().min(2).max(50).default("Our Journey So Far").meta({
    description: "Main title above the stats. Max 6 words.",
  }),
  subtitle: z.string().min(5).max(100).default("Numbers that reflect our passion and dedication to excellence.").meta({
    description: "Subtitle. Max 15 words.",
  }),
  stats: z.array(
    z.object({
      value: z.string().min(1).max(12).meta({ description: "The stat value, e.g. 50K+, 99.9%" }),
      label: z.string().min(2).max(30).meta({ description: "Short label for the stat. Max 4 words." }),
      description: z.string().min(5).max(80).meta({ description: "Brief description. Max 12 words." }),
    })
  ).min(3).max(4).default([
    { value: "50K+", label: "Happy Users", description: "People who love what we've built together." },
    { value: "99.9%", label: "Uptime", description: "Reliable service you can always count on." },
    { value: "4.9★", label: "Rating", description: "Consistently rated excellent by our community." },
    { value: "24/7", label: "Support", description: "We're here for you, anytime you need us." },
  ]).meta({ description: "Array of stats. 3 to 4 items." })
});

type SchemaType = z.infer<typeof Schema>;

const SoftBloomStatsLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const defaultStats = [
    { value: "50K+", label: "Happy Users", description: "People who love what we've built together." },
    { value: "99.9%", label: "Uptime", description: "Reliable service you can always count on." },
    { value: "4.9★", label: "Rating", description: "Consistently rated excellent by our community." },
    { value: "24/7", label: "Support", description: "We're here for you, anytime you need us." },
  ];
  const stats = data?.stats || defaultStats;

  const cardGradients = [
    "linear-gradient(135deg, #FBCFE8 0%, #F9A8D4 100%)",
    "linear-gradient(135deg, #DDD6FE 0%, #C4B5FD 100%)",
    "linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)",
    "linear-gradient(135deg, #A7F3D0 0%, #6EE7B7 100%)",
  ];

  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex flex-col"
      style={{
        background: "linear-gradient(135deg, #FDF2F8 0%, #FAF5FF 60%, #EFF6FF 100%)",
        fontFamily: "var(--heading-font-family, 'Georgia, serif')",
      }}
    >
      {/* Decorative */}
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #F9A8D4, transparent 70%)" }}
      ></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #C4B5FD, transparent 70%)" }}
      ></div>

      {/* Header */}
      <div className="w-full pt-16 pb-6 flex flex-col items-center z-10 px-8">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-none m-0 text-center"
          style={{ color: "#4C1D95" }}
        >
          {data?.title || "Our Journey So Far"}
        </h1>
        <div className="flex items-center gap-2 mt-5">
          <div className="h-[1.5px] w-8 rounded-full bg-pink-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
          <div className="h-[1.5px] w-8 rounded-full bg-purple-300"></div>
        </div>
        <p className="text-lg lg:text-xl font-normal text-center max-w-xl mt-4"
          style={{ color: "#9CA3AF" }}
        >
          {data?.subtitle || "Numbers that reflect our passion and dedication to excellence."}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="w-full flex-1 px-12 lg:px-20 flex items-center justify-center pb-16 z-10">
        <div className="flex gap-6 w-full justify-center">
          {stats.map((stat: any, idx: number) => (
            <div
              key={idx}
              className="flex-1 max-w-[260px] rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center gap-3 transition-all hover:-translate-y-2 hover:shadow-xl"
              style={{
                background: cardGradients[idx % cardGradients.length],
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
              }}
            >
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-none tracking-tight"
                style={{ color: "#1F2937" }}
              >
                {stat.value}
              </h2>
              {/* Gold accent line */}
              <div className="h-[2px] w-10 rounded-full" style={{ background: "rgba(255,255,255,0.6)" }}></div>
              <h3 className="text-lg lg:text-xl font-bold leading-tight"
                style={{ color: "#1F2937" }}
              >
                {stat.label}
              </h3>
              <p className="text-sm font-medium leading-relaxed"
                style={{ color: "rgba(31, 41, 55, 0.7)" }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftBloomStatsLayout;
