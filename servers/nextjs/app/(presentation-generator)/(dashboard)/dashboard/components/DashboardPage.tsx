"use client";

import React, { useState, useEffect } from "react";
import { DashboardApi } from "@/app/(presentation-generator)/services/api/dashboard";
import { PresentationGrid } from "@/app/(presentation-generator)/(dashboard)/dashboard/components/PresentationGrid";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";

const DashboardPage: React.FC = () => {
  const [presentations, setPresentations] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { fetchPresentations(); }, []);

  const fetchPresentations = async () => {
    try {
      setIsLoading(true); setError(null);
      const data = await DashboardApi.getPresentations();
      data.sort((a: any, b: any) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
      setPresentations(data);
    } catch (err) { setError(null); setPresentations([]); } finally { setIsLoading(false); }
  };

  const removePresentation = (id: string) => { setPresentations((prev: any) => prev ? prev.filter((p: any) => p.id !== id) : []); };

  return (
    <div className="min-h-screen w-full px-6 pb-10 relative">
      <div className="sticky top-0 right-0 z-50 py-[28px] backdrop-blur-md bg-[#FAFAFA]/80 mb-4">
        <div className="flex xl:flex-row flex-col gap-6 xl:gap-0 items-center justify-between">
          <h3 className="text-[28px] tracking-[-0.84px] font-unbounded font-normal text-gray-900 flex items-center gap-2">
            Slide Presentations
          </h3>
          <div className="flex gap-2.5 max-sm:w-full max-md:justify-center max-sm:flex-wrap">
            <Link href="/generate"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-white text-sm font-semibold font-syne bg-[#F25D6B] hover:bg-[#E04A58] transition-all duration-300 btn-glow"
              aria-label="Create new presentation">
              <Sparkles className="w-4 h-4" /><span className="hidden md:inline">New presentation</span><span className="md:hidden">New</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      <PresentationGrid presentations={presentations} type="slide" isLoading={isLoading} error={error} onPresentationDeleted={removePresentation} />
      {/* Soft bottom ambient glow */}
      <div className='fixed z-0 bottom-[-16.5rem] left-0 w-full pointer-events-none'
        style={{ height: "341px", borderRadius: '1440px', background: 'radial-gradient(50% 50% at 50% 50%, rgba(242, 93, 107, 0.12) 0%, rgba(242, 93, 107, 0.00) 100%)' }} />
    </div>
  );
};

export default DashboardPage;
