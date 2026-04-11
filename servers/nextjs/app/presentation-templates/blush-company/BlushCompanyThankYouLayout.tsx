import React from 'react';
import * as z from "zod";

export const layoutId = "blush-company-thank-you";
export const layoutName = "Blush Company Thank You";
export const layoutDescription = "Minimal closing slide with oversized thank-you typography and circular accent.";

export const Schema = z.object({
  line1: z.string().min(2).max(30).default("Thank").meta({ description: "First line." }),
  line2: z.string().min(2).max(30).default("You").meta({ description: "Second line." }),
  footer: z.string().min(2).max(80).default("Let’s build something meaningful together.").meta({ description: "Footer caption." }),
});

type SchemaType = z.infer<typeof Schema>;

const BlushCompanyThankYouLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
      style={{
        background: "linear-gradient(120deg, #F6EFEA 0%, #F0E4DC 45%, #F8F4F1 100%)",
        fontFamily: "var(--heading-font-family, 'Georgia, serif')",
      }}
    >
      <div className="absolute right-16 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-70" style={{ background: "#EFE2D8" }}></div>
      <div className="absolute inset-8 rounded-md border" style={{ borderColor: "rgba(80, 58, 46, 0.12)" }}></div>

      <div className="relative h-full flex flex-col items-center justify-center text-center gap-4">
        <h2 className="text-8xl uppercase tracking-[0.2em] leading-none m-0" style={{ color: "#2E221B" }}>{data?.line1 || "Thank"}</h2>
        <h2 className="text-8xl uppercase tracking-[0.2em] leading-none m-0" style={{ color: "#2E221B" }}>{data?.line2 || "You"}</h2>
        <p className="mt-6 text-xl" style={{ color: "#6B5548" }}>{data?.footer || "Let’s build something meaningful together."}</p>
      </div>
    </div>
  );
};

export default BlushCompanyThankYouLayout;
