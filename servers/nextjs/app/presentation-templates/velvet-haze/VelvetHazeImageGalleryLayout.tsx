import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "velvet-haze-image-gallery";
export const layoutName = "Velvet Haze Image Gallery";
export const layoutDescription = "A dark image gallery slide with glowing neon-bordered images and captions on a deep indigo gradient.";

export const Schema = z.object({
  title: z.string().min(2).max(50).default("Visual Showcase").meta({
    description: "Main title above the image gallery. Max 5 words.",
  }),
  subtitle: z.string().min(5).max(120).default("A curated collection of our finest moments and achievements.").meta({
    description: "Subtitle below the title. Max 20 words.",
  }),
  images: z.array(
    z.object({
      image: ImageSchema.meta({ description: "Gallery image." }),
      caption: z.string().min(2).max(60).meta({ description: "Short caption for the image. Max 8 words." }),
    })
  ).min(2).max(4).default([
    {
      image: { __image_url__: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80", __image_prompt__: "Modern office workspace with laptop and design tools" },
      caption: "Modern Workspace Design",
    },
    {
      image: { __image_url__: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80", __image_prompt__: "Team collaboration in a creative meeting room" },
      caption: "Team Collaboration",
    },
    {
      image: { __image_url__: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80", __image_prompt__: "Data analytics dashboard on screen" },
      caption: "Analytics Dashboard",
    },
  ]).meta({ description: "Array of gallery images with captions. 2 to 4 items." })
});

type SchemaType = z.infer<typeof Schema>;

const VelvetHazeImageGalleryLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const defaultImages = [
    {
      image: { __image_url__: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80", __image_prompt__: "Modern office workspace" },
      caption: "Modern Workspace Design",
    },
    {
      image: { __image_url__: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80", __image_prompt__: "Team collaboration" },
      caption: "Team Collaboration",
    },
    {
      image: { __image_url__: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80", __image_prompt__: "Analytics dashboard" },
      caption: "Analytics Dashboard",
    },
  ];
  const images = data?.images || defaultImages;

  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex flex-col items-center"
      style={{
        background: "linear-gradient(180deg, #0F0A1E 0%, #1A1035 50%, #130D25 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      {/* Mesh gradient overlays */}
      <div className="absolute -top-20 right-1/4 w-80 h-80 rounded-full opacity-[0.1]"
        style={{ background: "radial-gradient(circle, #A855F7, transparent 70%)" }}
      ></div>
      <div className="absolute -bottom-24 left-1/3 w-96 h-96 rounded-full opacity-[0.07]"
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
      <div className="w-full pt-12 pb-4 flex flex-col items-center z-10 px-12">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-none m-0 text-center"
          style={{ color: "#F1E8FF" }}
        >
          {data?.title || "Visual Showcase"}
        </h1>
        <div className="flex items-center gap-2 mt-4 mb-2">
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
        <p className="text-lg lg:text-xl font-normal text-center max-w-2xl"
          style={{ color: "rgba(203, 195, 227, 0.7)" }}
        >
          {data?.subtitle || "A curated collection of our finest moments and achievements."}
        </p>
      </div>

      {/* Image Gallery */}
      <div className="w-full flex-1 px-12 lg:px-16 flex items-center justify-center pb-12 z-10 overflow-hidden">
        <div className={`grid gap-6 w-full ${images.length <= 2 ? "grid-cols-2 max-w-3xl" : images.length === 3 ? "grid-cols-3 max-w-5xl" : "grid-cols-4 max-w-6xl"}`}>
          {images.map((item: any, idx: number) => (
            <div key={idx} className="flex flex-col gap-3">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]"
                style={{
                  border: "1px solid rgba(168, 85, 247, 0.25)",
                  boxShadow: "0 0 30px rgba(168, 85, 247, 0.1), 0 8px 32px rgba(0, 0, 0, 0.4)",
                }}
              >
                {item.image?.__image_url__ ? (
                  <img
                    src={item.image.__image_url__}
                    alt={item.image.__image_prompt__ || item.caption}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #1A1035, #2D1B69)" }}
                  >
                    <span className="text-5xl opacity-20">◇</span>
                  </div>
                )}
                {/* Glow border overlay */}
                <div className="absolute inset-0 rounded-xl"
                  style={{ border: "1px solid rgba(168, 85, 247, 0.15)" }}
                ></div>
              </div>
              {/* Caption */}
              <p className="text-sm lg:text-base font-medium text-center"
                style={{ color: "rgba(203, 195, 227, 0.75)" }}
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VelvetHazeImageGalleryLayout;
