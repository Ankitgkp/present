import React from 'react';
import * as z from "zod";

export const layoutId = "blush-company-process";
export const layoutName = "Blush Company Process";
export const layoutDescription = "Three-step process columns with large section numerals and concise body copy.";

export const Schema = z.object({
  heading: z.string().min(2).max(60).default("Growth Plan").meta({ description: "Main heading." }),
  steps: z.array(z.object({
    number: z.string().min(1).max(3),
    title: z.string().min(3).max(60),
    description: z.string().min(20).max(220),
  })).min(3).max(3).default([
    { number: "1", title: "SEO & Paid Advertising", description: "Capture high-intent traffic with search campaigns optimized for visibility and conversion." },
    { number: "2", title: "Social Media", description: "Build active brand communities and turn content touchpoints into recurring demand." },
    { number: "3", title: "Offline Activation", description: "Extend digital momentum with retail events, print moments, and experiential campaigns." },
  ]).meta({ description: "Exactly three process steps." }),
});

type SchemaType = z.infer<typeof Schema>;

const BlushCompanyProcessLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const steps = data?.steps || [];

  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden p-10"
      style={{ background: "#F3EDE8", fontFamily: "var(--heading-font-family, 'Georgia, serif')" }}
    >
      <div className="h-full rounded-md px-12 py-10" style={{ background: "#FAF6F2", border: "1px solid rgba(87, 65, 53, 0.12)" }}>
        <h2 className="text-4xl uppercase tracking-[0.16em] text-center mb-8" style={{ color: "#2E221B" }}>{data?.heading || "Growth Plan"}</h2>
        <div className="grid grid-cols-3 gap-8 h-[78%]">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-full flex flex-col items-center text-center rounded-md p-6" style={{ background: "#F2E9E2" }}>
              <div className="text-7xl leading-none mb-5" style={{ color: "#D1B7A8" }}>{steps[i]?.number || `${i + 1}`}</div>
              <h3 className="text-2xl leading-tight mb-4" style={{ color: "#3A2B23" }}>{steps[i]?.title || "Step title"}</h3>
              <p className="text-base leading-relaxed" style={{ color: "#5A473C" }}>{steps[i]?.description || "Step description"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlushCompanyProcessLayout;
