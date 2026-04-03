'use client'
import React from "react";
import { Card } from "@/components/ui/card";
import { DashboardApi } from "@/app/(presentation-generator)/services/api/dashboard";
import { EllipsisVertical, Trash } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useFontLoader } from "@/app/(presentation-generator)/hooks/useFontLoader";
import SlideScale from "@/app/(presentation-generator)/components/PresentationRender";
import MarkdownRenderer from "@/components/MarkDownRender";

export const PresentationCard = ({ id, title, presentation, onDeleted }: {
  id: string; title: string; presentation: any; onDeleted?: (presentationId: string) => void;
}) => {
  const router = useRouter();
  useFontLoader(presentation.fonts || []);

  const handlePreview = (e: React.MouseEvent) => { e.preventDefault(); router.push(`/presentation?id=${id}&type=standard`); };
  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation();
    const response = await DashboardApi.deletePresentation(id);
    if (response) { toast.success("Presentation deleted"); if (onDeleted) onDeleted(id); } else { toast.error("Error deleting presentation"); }
  };

  const firstSlide = presentation?.slides?.[0];
  return (
    <Card suppressHydrationWarning={true} onClick={handlePreview}
      className="glass-card glass-card-hover font-syne shadow-none p-0 group cursor-pointer overflow-hidden flex flex-col">
      <div suppressHydrationWarning={true} className="flex flex-col flex-1 relative z-40">
        <div className="scale-[0.75] mt-4 border border-gray-100 rounded-lg overflow-hidden">
          <SlideScale slide={firstSlide} />
        </div>
        <div className="w-full py-3 px-5 mt-auto z-40 relative bg-gray-50/50 border-t border-gray-100">
          <div className="flex items-center justify-between gap-7 w-full">
            <div className="flex flex-col items-start gap-1">
              <div className="text-sm text-gray-800 font-semibold overflow-hidden line-clamp-1">
                <MarkdownRenderer content={title} className="text-sm mb-0 text-gray-800 font-semibold overflow-hidden line-clamp-1" />
              </div>
              <p className="text-gray-400 text-sm font-syne">{new Date(presentation?.created_at).toLocaleDateString()}</p>
            </div>
            <Popover>
              <PopoverTrigger className="w-6 h-6 hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-300 hover:text-gray-500 transition-colors" onClick={(e) => e.stopPropagation()}>
                <EllipsisVertical className="w-6 h-6" />
              </PopoverTrigger>
              <PopoverContent align="end" className="bg-white border-gray-200 w-[200px] shadow-lg">
                <button className="flex items-center justify-between w-full px-2 py-1 hover:bg-gray-50 rounded-md text-gray-600 transition-colors" onClick={handleDelete}>
                  <p>Delete</p><Trash className="w-4 h-4 text-red-400" />
                </button>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </Card>
  );
};
