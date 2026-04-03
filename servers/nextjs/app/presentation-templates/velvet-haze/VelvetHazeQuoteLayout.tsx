import React from 'react';
import * as z from "zod";

export const layoutId = "velvet-haze-quote";
export const layoutName = "Velvet Haze Quote";
export const layoutDescription = "A dramatic full-width quote slide with neon glow quote marks on a deep indigo gradient.";

export const Schema = z.object({
  quote: z.string().min(10).max(250).default("Innovation distinguishes between a leader and a follower. The ones who are crazy enough to think they can change the world are the ones who do.").meta({
    description: "The quote text. Max 40 words.",
  }),
  authorName: z.string().min(2).max(40).default("Marcus Sterling").meta({
    description: "Name of the person being quoted.",
  }),
  authorRole: z.string().min(2).max(60).default("Chief Innovation Officer, Nexus Labs").meta({
    description: "Role or title of the person.",
  }),
});

type SchemaType = z.infer<typeof Schema>;

const VelvetHazeQuoteLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #0F0A1E 0%, #1A1035 35%, #1E1245 65%, #0D0818 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      {/* Mesh gradient overlays */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-[0.15]"
        style={{ background: "radial-gradient(circle, #A855F7, transparent 70%)" }}
      ></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-[0.1]"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }}
      ></div>
      <div className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #C084FC, transparent 60%)" }}
      ></div>

      {/* Neon top accent */}
      <div className="absolute top-0 left-0 w-full h-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent 5%, #A855F7 30%, #C084FC 50%, #A855F7 70%, transparent 95%)",
          boxShadow: "0 0 15px rgba(168, 85, 247, 0.4)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-16 lg:px-24 flex flex-col items-center text-center gap-8">

        {/* Decorative neon quote mark */}
        <span className="text-[120px] lg:text-[160px] leading-none font-serif select-none -mb-16"
          style={{
            color: "rgba(168, 85, 247, 0.25)",
            textShadow: "0 0 60px rgba(168, 85, 247, 0.3), 0 0 120px rgba(168, 85, 247, 0.1)",
          }}
        >
          "
        </span>

        {/* Quote text */}
        <blockquote className="text-2xl lg:text-3xl xl:text-4xl font-light leading-relaxed"
          style={{ color: "#F1E8FF" }}
        >
          {data?.quote || "Innovation distinguishes between a leader and a follower. The ones who are crazy enough to think they can change the world are the ones who do."}
        </blockquote>

        {/* Neon divider */}
        <div className="flex items-center gap-3">
          <div className="h-[2px] w-12 rounded-full"
            style={{ background: "linear-gradient(90deg, transparent, #A855F7)", boxShadow: "0 0 8px rgba(168,85,247,0.4)" }}
          ></div>
          <div className="w-2.5 h-2.5 rounded-full"
            style={{ background: "#A855F7", boxShadow: "0 0 10px #A855F7, 0 0 20px rgba(168,85,247,0.4)" }}
          ></div>
          <div className="h-[2px] w-12 rounded-full"
            style={{ background: "linear-gradient(270deg, transparent, #C084FC)", boxShadow: "0 0 8px rgba(192,132,252,0.4)" }}
          ></div>
        </div>

        {/* Author */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-xl lg:text-2xl font-bold tracking-tight"
            style={{
              color: "#A855F7",
              textShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
            }}
          >
            {data?.authorName || "Marcus Sterling"}
          </span>
          <span className="text-base font-normal tracking-wide"
            style={{ color: "rgba(203, 195, 227, 0.6)" }}
          >
            {data?.authorRole || "Chief Innovation Officer, Nexus Labs"}
          </span>
        </div>

        {/* Closing decorative mark */}
        <span className="text-[80px] leading-none font-serif select-none -mt-8 rotate-180"
          style={{
            color: "rgba(192, 132, 252, 0.15)",
            textShadow: "0 0 40px rgba(192, 132, 252, 0.2)",
          }}
        >
          "
        </span>
      </div>
    </div>
  );
};

export default VelvetHazeQuoteLayout;
