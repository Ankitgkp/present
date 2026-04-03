import React from "react";
import { PresentationCard } from "./PresentationCard";
import { useRouter } from "next/navigation";
import { PresentationResponse } from "@/app/(presentation-generator)/services/api/dashboard";
import { ArrowRight, Plus } from "lucide-react";

interface PresentationGridProps {
  presentations: PresentationResponse[];
  type: "slide" | "video";
  isLoading?: boolean;
  error?: string | null;
  onPresentationDeleted?: (presentationId: string) => void;
}

export const PresentationGrid = ({ presentations, type, isLoading = false, error = null, onPresentationDeleted }: PresentationGridProps) => {
  const router = useRouter();
  const handleCreateNew = () => { router.push(type === "slide" ? "/upload" : "/editor"); };

  const ShimmerCard = () => (
    <div className="flex flex-col gap-4 min-h-[200px] glass-card p-4">
      <div className="w-full h-24 skeleton-dark"></div>
      <div className="space-y-3"><div className="h-4 skeleton-dark w-3/4"></div><div className="h-3 skeleton-dark w-1/2"></div></div>
    </div>
  );

  const CreateNewCard = () => (
    <div onClick={handleCreateNew} className="flex flex-col cursor-pointer group glass-card glass-card-hover overflow-hidden transition-all duration-300 font-syne">
      <div className="relative w-full aspect-[16/11] bg-gradient-to-br from-[#FEF2F2] via-white to-[#FEF2F2] flex items-center justify-center">
        <div className="w-16 h-16 rounded-2xl bg-[#FEF2F2] border border-[#F25D6B]/15 flex items-center justify-center group-hover:bg-[#F25D6B]/10 group-hover:border-[#F25D6B]/25 transition-all duration-300 group-hover:scale-110">
          <Plus className="w-7 h-7 text-[#F25D6B]" />
        </div>
      </div>
      <div className="flex items-center gap-3 p-3 mt-auto border-t border-gray-100">
        <div className="flex-shrink-0 w-[45px] h-[46px] rounded-lg bg-[#F25D6B] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
            <polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/>
          </svg>
        </div>
        <div>
          <h4 className="text-sm text-gray-800 font-semibold tracking-wide">Create New Presentation</h4>
          <p className="text-sm text-gray-400 font-medium flex items-center gap-2 group-hover:text-[#F25D6B] transition-colors">Get Started <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></p>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 px-6 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full">
        <div className="flex flex-col gap-4 min-h-[200px] cursor-pointer group glass-card items-center justify-center">
          <div className="rounded-full bg-gray-100 p-4"><div className="w-8 h-8" /></div>
          <div className="text-center space-y-2"><div className="h-4 skeleton-dark w-32 mx-auto"></div><div className="h-3 skeleton-dark w-48 mx-auto"></div></div>
        </div>
        {[...Array(15)].map((_, i) => <ShimmerCard key={i} />)}
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CreateNewCard />
        <div className="col-span-3 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <p className="mb-2">{error}</p>
            <button onClick={() => window.location.reload()} className="text-[#F25D6B] hover:text-[#E04A58] underline">Try again</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <CreateNewCard />
      {presentations && presentations.length > 0 && presentations.map((p: any) => (
        <PresentationCard key={p.id} id={p.id} title={p.title} presentation={p} onDeleted={onPresentationDeleted} />
      ))}
    </div>
  );
};
