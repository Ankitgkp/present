import React from 'react';
import * as z from "zod";
import { ImageSchema } from '../defaultSchemes';

export const layoutId = "blush-company-team";
export const layoutName = "Blush Company Team";
export const layoutDescription = "Three-person team profile row with circular portraits and compact bios.";

export const Schema = z.object({
  title: z.string().min(2).max(40).default("Team").meta({ description: "Section heading." }),
  members: z.array(z.object({
    name: z.string().min(2).max(40),
    role: z.string().min(2).max(70),
    bio: z.string().min(20).max(220),
    image: ImageSchema,
  })).min(3).max(3).default([
    {
      name: "Alice Zimmerman",
      role: "Founder & CEO",
      bio: "Alice leads product direction and client partnerships with a focus on thoughtful growth.",
      image: { __image_url__: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80", __image_prompt__: "female professional portrait" },
    },
    {
      name: "Barbara York",
      role: "COO",
      bio: "Barbara keeps operations seamless and aligns teams around quality delivery at scale.",
      image: { __image_url__: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=700&q=80", __image_prompt__: "woman executive portrait" },
    },
    {
      name: "Hugo Saver",
      role: "VP Marketing",
      bio: "Hugo drives narrative and campaign strategy to build consistent brand momentum.",
      image: { __image_url__: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80", __image_prompt__: "male creative professional portrait" },
    },
  ]).meta({ description: "Exactly three team members." }),
});

type SchemaType = z.infer<typeof Schema>;

const BlushCompanyTeamLayout = ({ data }: { data: Partial<SchemaType> }) => {
  const members = data?.members || [];

  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden p-10"
      style={{ background: "#F2ECE7", fontFamily: "var(--heading-font-family, 'Georgia, serif')" }}
    >
      <div className="h-full rounded-md p-10" style={{ background: "#F9F5F2", border: "1px solid rgba(87, 65, 53, 0.12)" }}>
        <h2 className="text-5xl uppercase tracking-[0.1em] text-center mb-8" style={{ color: "#2E221B" }}>{data?.title || "Team"}</h2>
        <div className="grid grid-cols-3 gap-6 h-[80%]">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col items-center text-center p-4 rounded-md" style={{ background: "#F3EBE5" }}>
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2" style={{ borderColor: "#DDC9BC" }}>
                {members[i]?.image?.__image_url__ ? (
                  <img src={members[i].image.__image_url__} alt={members[i].image.__image_prompt__} className="w-full h-full object-cover" />
                ) : null}
              </div>
              <h3 className="text-2xl" style={{ color: "#3A2B23" }}>{members[i]?.name || "Name"}</h3>
              <p className="text-sm uppercase tracking-[0.12em] mb-3" style={{ color: "#8A6E5D" }}>{members[i]?.role || "Role"}</p>
              <p className="text-base leading-relaxed" style={{ color: "#5A473C" }}>{members[i]?.bio || "Bio"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlushCompanyTeamLayout;
