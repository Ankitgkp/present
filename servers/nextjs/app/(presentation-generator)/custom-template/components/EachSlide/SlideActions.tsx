'use client'
import React from "react";
import { AlertCircle, CheckCircle, Edit, Loader2, Repeat2, Trash, Code } from "lucide-react";
import ToolTip from "@/components/ToolTip";
import { SlideActionsProps } from "../../types";

export const SlideActions: React.FC<SlideActionsProps> = ({
  slide,
  index,
  isProcessing,
  isEditMode,
  isHtmlEditMode,
  onEditClick,
  onHtmlEditClick,
  onRetry,
  onDelete,
}) => {
  return (
    <div className="flex items-center w-full justify-between gap-2">
      <div>
        {slide.processing ? (
          <Loader2 className="w-6 h-6 text-[#78b5ff] animate-spin" />
        ) : slide.processed ? (
          <CheckCircle className="w-6 h-6 text-emerald-400" />
        ) : slide.error ? (
          <AlertCircle className="w-6 h-6 text-rose-400" />
        ) : (
          <div className="w-6 h-6 rounded-full border-2 border-white/20" />
        )}
      </div>

      {slide.processed && (
        <div className="flex gap-6">
          {slide.processed && slide.html && !isEditMode && !isHtmlEditMode && (
            <>
              <div>
                <ToolTip content="Edit slide with AI">
                  <button
                    onClick={onEditClick}
                    disabled={isProcessing || !slide.processed}
                    className={`btn-border-sweep px-6 py-2 flex gap-2 text-sm items-center group-hover:scale-105 rounded-xl border border-[#6aaeff]/40 bg-[#2c6cff] hover:bg-[#3777ff] transition-all duration-300 cursor-pointer shadow-[0_14px_34px_rgba(44,108,255,0.24)] ${
                      isProcessing || !slide.processed
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <Edit className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                    <span className="text-white">Edit Slide</span>
                  </button>
                </ToolTip>
              </div>
              <div>
                <ToolTip content="Edit HTML directly">
                  <button
                    onClick={onHtmlEditClick}
                    disabled={isProcessing || !slide.processed}
                    className={`rounded-xl border border-white/[0.12] bg-white/[0.08] px-6 py-2 flex gap-2 text-sm items-center group-hover:scale-105 hover:bg-white/[0.12] hover:shadow-md transition-all duration-300 cursor-pointer shadow-md ${
                      isProcessing || !slide.processed
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <Code className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                    <span className="text-white">Edit HTML</span>
                  </button>
                </ToolTip>
              </div>
            </>
          )}
          <div>
            <ToolTip content="Re-Design this slide">
              <button
                onClick={onRetry}
                disabled={isProcessing || !slide.processed}
                className={`btn-border-sweep px-6 py-2 flex gap-2 text-sm items-center group-hover:scale-105 rounded-xl border border-[#6aaeff]/40 bg-[#2c6cff] hover:bg-[#3777ff] transition-all duration-300 cursor-pointer shadow-[0_14px_34px_rgba(44,108,255,0.24)] ${
                  isProcessing || !slide.processed
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                <Repeat2 className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                <span className="text-white">Re-Construct</span>
              </button>
            </ToolTip>
          </div>
          <div>
            <ToolTip content="Delete Slide">
              <button
                disabled={isProcessing}
                onClick={onDelete}
                className={`rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-2 flex gap-2 text-sm items-center group-hover:scale-105 hover:bg-white/[0.10] hover:shadow-md transition-all duration-300 cursor-pointer shadow-md ${
                  isProcessing ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <Trash className="w-4 sm:w-5 h-4 sm:h-5 text-rose-300" />
              </button>
            </ToolTip>
          </div>
        </div>
      )}
    </div>
  );
}; 
