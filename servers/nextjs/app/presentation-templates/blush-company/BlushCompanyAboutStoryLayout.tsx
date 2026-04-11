import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "blush-company-about-story";
export const layoutName = "Blush Company About & Story";
export const layoutDescription = "Two-column About and Story layout with soft cards and editorial image blocks.";

export const Schema = z.object({
  aboutTitle: z.string().min(2).max(40).default("About Us").meta({ description: "Left section title." }),
  aboutText: z.string().min(20).max(260).default("We design thoughtful products and experiences for modern teams, blending strategy with warm, human-centered execution.").meta({ description: "About paragraph." }),
  storyTitle: z.string().min(2).max(40).default("Story").meta({ description: "Right section title." }),
  storyText: z.string().min(20).max(260).default("From a small studio to a trusted partner, our journey is built on collaboration, curiosity, and consistent quality.").meta({ description: "Story paragraph." }),
  aboutImage: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80",
    __image_prompt__: "minimal editorial desk scene in warm neutral tones",
  }).meta({ description: "Image for About section." }),
  storyImage: ImageSchema.default({
    __image_url__: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
    __image_prompt__: "clean interior scene with warm beige and blush palette",
  }).meta({ description: "Image for Story section." }),
});

type SchemaType = z.infer<typeof Schema>;

const BlushCompanyAboutStoryLayout = ({ data }: { data: Partial<SchemaType> }) => {
  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden p-10"
      style={{ background: "#F4EFEB", fontFamily: "var(--heading-font-family, 'Georgia, serif')" }}
    >
      <div className="grid grid-cols-2 gap-8 h-full">
        <div className="rounded-md p-8 flex flex-col gap-5" style={{ background: "#F8F4F1", border: "1px solid rgba(87, 65, 53, 0.12)" }}>
          <h2 className="text-4xl font-semibold tracking-wide" style={{ color: "#2E221B" }}>{data?.aboutTitle || "About Us"}</h2>
          <p className="text-lg leading-relaxed" style={{ color: "#5A473C" }}>{data?.aboutText || "We design thoughtful products and experiences for modern teams, blending strategy with warm, human-centered execution."}</p>
          <div className="flex-1 rounded-md overflow-hidden" style={{ background: "#EDE3DB" }}>
            {data?.aboutImage?.__image_url__ ? (
              <img src={data.aboutImage.__image_url__} alt={data.aboutImage.__image_prompt__} className="w-full h-full object-cover" />
            ) : null}
          </div>
        </div>

        <div className="rounded-md p-8 flex flex-col gap-5" style={{ background: "#FBF8F5", border: "1px solid rgba(87, 65, 53, 0.12)" }}>
          <div className="h-[42%] rounded-md overflow-hidden" style={{ background: "#ECE2DB" }}>
            {data?.storyImage?.__image_url__ ? (
              <img src={data.storyImage.__image_url__} alt={data.storyImage.__image_prompt__} className="w-full h-full object-cover" />
            ) : null}
          </div>
          <h2 className="text-4xl font-semibold tracking-wide" style={{ color: "#2E221B" }}>{data?.storyTitle || "Story"}</h2>
          <p className="text-lg leading-relaxed" style={{ color: "#5A473C" }}>{data?.storyText || "From a small studio to a trusted partner, our journey is built on collaboration, curiosity, and consistent quality."}</p>
          <div className="flex gap-2 mt-auto">
            <span className="w-7 h-1 rounded-full" style={{ background: "#CCB7AA" }}></span>
            <span className="w-7 h-1 rounded-full" style={{ background: "#DCCBC0" }}></span>
            <span className="w-7 h-1 rounded-full" style={{ background: "#E6DBD4" }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlushCompanyAboutStoryLayout;
