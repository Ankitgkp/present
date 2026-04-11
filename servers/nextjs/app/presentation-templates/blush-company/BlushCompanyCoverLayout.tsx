import React from 'react';
import * as z from "zod";

export const layoutId = "blush-company-cover";
export const layoutName = "Blush Company Cover";
export const layoutDescription = "Editorial-style title cover with soft blush gradients and centered serif headline.";

export const Schema = z.object({
  title: z.string().min(2).max(70).default("Company").meta({
    description: "Main title.",
  }),
  subtitle: z.string().min(2).max(80).default("Presentation").meta({
    description: "Subtitle under title.",
  }),
  tagline: z.string().min(5).max(120).default("An elegant overview of who we are and what we build.").meta({
    description: "Small supporting sentence.",
  }),
});

type SchemaType = z.infer<typeof Schema>;

const BlushCompanyCoverLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
      style={{
        background: "linear-gradient(120deg, #F6EEE9 0%, #EFE5DF 35%, #F8F3EF 65%, #EDE2DA 100%)",
        fontFamily: "var(--heading-font-family, 'Georgia, serif')",
      }}
    >
      <div className="absolute inset-8 rounded-md border" style={{ borderColor: "rgba(80, 58, 46, 0.12)" }}></div>
      <div className="absolute top-0 right-0 w-[520px] h-[420px] opacity-30" style={{ background: "radial-gradient(circle at 30% 40%, #EAD8CD 0%, transparent 65%)" }}></div>
      <div className="absolute bottom-0 left-0 w-[460px] h-[360px] opacity-30" style={{ background: "radial-gradient(circle at 60% 60%, #DCC8BA 0%, transparent 70%)" }}></div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-20 gap-6">
        <h1 className="text-7xl lg:text-8xl font-semibold uppercase tracking-[0.14em] leading-none m-0" style={{ color: "#2E221B" }}>
          {data?.title || "Company"}
        </h1>
        <h2 className="text-3xl lg:text-4xl uppercase tracking-[0.35em] leading-none m-0" style={{ color: "#8B6B5A" }}>
          {data?.subtitle || "Presentation"}
        </h2>
        <div className="h-[1px] w-44" style={{ background: "rgba(93, 68, 53, 0.35)" }}></div>
        <p className="text-lg max-w-2xl" style={{ color: "#6D5648" }}>
          {data?.tagline || "An elegant overview of who we are and what we build."}
        </p>
      </div>
    </div>
  );
};

export default BlushCompanyCoverLayout;
