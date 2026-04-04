import React from "react";
import * as z from "zod";

export const layoutId = "educational-science-glossary";
export const layoutName = "Glossary";
export const layoutDescription = "Simple glossary layout for key science terms with concise definitions.";

export const Schema = z.object({
  title: z.string().min(5).max(70).default("Key Terms"),
  terms: z.array(z.object({ term: z.string().min(3).max(30), meaning: z.string().min(12).max(120) })).max(8).default([
    { term: "Atom", meaning: "The basic unit of matter composed of protons, neutrons, and electrons." },
    { term: "Molecule", meaning: "A group of atoms chemically bonded together." },
    { term: "Ecosystem", meaning: "A community of organisms interacting with their physical environment." },
  ]),
});

type SchemaType = z.infer<typeof Schema>;

export default function EduScienceGlossaryLayout({ data }: { data: Partial<SchemaType> }) {
  return (
    <div className="relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-white z-20 mx-auto overflow-hidden p-12"
      style={{ fontFamily: "var(--body-font-family, Inter)" }}>
      <h1 className="text-4xl font-bold text-slate-900">{data.title}</h1>
      <div className="grid grid-cols-2 gap-4 mt-7">
        {(data.terms ?? []).map((t, i) => (
          <div key={i} className="rounded-lg border border-slate-200 p-4 bg-slate-50">
            <p className="text-lg font-semibold text-slate-900">{t.term}</p>
            <p className="text-sm leading-6 text-slate-700 mt-1">{t.meaning}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
