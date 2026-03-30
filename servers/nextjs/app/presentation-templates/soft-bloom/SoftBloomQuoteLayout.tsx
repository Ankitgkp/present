import React from 'react';
import * as z from "zod";

export const layoutId = "soft-bloom-quote";
export const layoutName = "Soft Bloom Quote";
export const layoutDescription = "An elegant full-width quote slide with decorative quotation marks, italic serif text, and a floral gradient.";

export const Schema = z.object({
  quote: z.string().min(10).max(250).default("The best way to predict the future is to create it — with grace, intention, and a little bit of sparkle.").meta({
    description: "The quote text. Max 40 words.",
  }),
  authorName: z.string().min(2).max(40).default("Sophia Laurent").meta({
    description: "Name of the person being quoted.",
  }),
  authorRole: z.string().min(2).max(60).default("Chief Creative Officer, Bloom Studio").meta({
    description: "Role or title of the person.",
  }),
});

type SchemaType = z.infer<typeof Schema>;

const SoftBloomQuoteLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #FDF2F8 0%, #FAF5FF 40%, #FDF2F8 70%, #FEF3C7 100%)",
        fontFamily: "var(--heading-font-family, 'Georgia, serif')",
      }}
    >
      {/* Decorative blurs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, #F9A8D4, transparent 70%)" }}
      ></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #C4B5FD, transparent 70%)" }}
      ></div>
      <div className="absolute top-1/4 right-1/3 w-40 h-40 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #FDE68A, transparent 60%)" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-16 lg:px-24 flex flex-col items-center text-center gap-8">

        {/* Decorative quote mark */}
        <span className="text-[120px] lg:text-[160px] leading-none font-serif select-none -mb-16"
          style={{ color: "rgba(249, 168, 212, 0.35)" }}
        >
          "
        </span>

        {/* Quote text */}
        <blockquote className="text-2xl lg:text-3xl xl:text-4xl font-normal italic leading-relaxed"
          style={{ color: "#4C1D95" }}
        >
          {data?.quote || "The best way to predict the future is to create it — with grace, intention, and a little bit of sparkle."}
        </blockquote>

        {/* Decorative divider */}
        <div className="flex items-center gap-3">
          <div className="h-[1.5px] w-12 rounded-full bg-pink-300"></div>
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "linear-gradient(135deg, #F9A8D4, #C4B5FD)" }}></div>
          <div className="h-[1.5px] w-12 rounded-full bg-purple-300"></div>
        </div>

        {/* Author */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-xl lg:text-2xl font-bold tracking-tight"
            style={{ color: "#7C3AED" }}
          >
            {data?.authorName || "Sophia Laurent"}
          </span>
          <span className="text-base font-normal tracking-wide"
            style={{ color: "#9CA3AF" }}
          >
            {data?.authorRole || "Chief Creative Officer, Bloom Studio"}
          </span>
        </div>

        {/* Closing decorative mark */}
        <span className="text-[80px] leading-none font-serif select-none -mt-8 rotate-180"
          style={{ color: "rgba(196, 181, 253, 0.3)" }}
        >
          "
        </span>
      </div>
    </div>
  );
};

export default SoftBloomQuoteLayout;
