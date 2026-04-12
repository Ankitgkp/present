'use client'

import React from "react";

import SlideContent from "../SlideContent";
import { SlideContentDisplayProps } from "../../types";
import { Repeat2 } from "lucide-react";
import Timer from "../Timer";

export const SlideContentDisplay: React.FC<SlideContentDisplayProps> = ({
  slide,
  isEditMode,
  isHtmlEditMode,
  slideContentRef,
  slideDisplayRef,
  canvasRef,
  canvasDimensions,
  eraserMode,
  strokeWidth,
  strokeColor,
  isDrawing,
  didYourDraw,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  retrySlide,
}) => {
  // Don't show slide content when in HTML edit mode
  if (isHtmlEditMode) {
    return null;
  }

  if (slide.processing) {
    return (
      <div className="space-y-4">
        <p className="text-base font-medium text-[#8bc0ff]">🔄 Converting to HTML...</p>
        <div className="space-y-3">
          <Timer duration={160} />
        </div>
         <div className="animate-pulse space-y-3">
        <div className="h-6 w-2/3 rounded bg-white/[0.09]"></div>
        <div className="h-6 w-1/2 rounded bg-white/[0.09]"></div>
        <div className="h-64 rounded bg-white/[0.07]"></div>
      </div>
      </div>
    );
  }

  if (slide.processed && slide.html) {
    return (
      <div className="relative">
        {slide.convertingToReact && (
          <div className="mb-4">
            <p className="mb-1 text-sm font-medium text-[#d3e6ff]">⚙️ Converting HTML to React...</p>
            <Timer duration={90} />
          </div>
        )}
        <div ref={slideDisplayRef} className="relative mx-auto w-full">
          <div ref={slideContentRef}>
            <SlideContent slide={slide} />
          </div>
          {isEditMode && (
            <canvas
              ref={canvasRef}
              width={canvasDimensions.width}
              height={canvasDimensions.height}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 30,
                cursor: eraserMode ? "grab" : "crosshair",
                pointerEvents: "auto",
                touchAction: "none",
              }}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onContextMenu={(e) => e.preventDefault()}
            />
          )}
        </div>
      </div>
    );
  }

  if (slide.error) {
    return (
      <div className="space-y-4">
        <p className="text-base font-medium text-rose-300">✗ Conversion failed</p>
        <div className="rounded-xl border border-rose-300/20 bg-rose-300/[0.08] p-4 text-sm text-rose-50/90">
          {slide.error.includes("image exceeds 5 MB maximum") ? (
            <div>
              <p className="mb-2 font-medium text-rose-100">Image too large for processing</p>
              <p>This slide's image exceeds the 5MB limit. Try using a smaller resolution PPTX file.</p>
            </div>
          ) : (
            slide.error
          )}
        </div>
        <div className="flex justify-center">
          <button className="flex items-center gap-2 rounded-xl border border-[#6aaeff]/40 bg-[#2c6cff] px-4 py-2 text-white shadow-[0_14px_34px_rgba(44,108,255,0.24)] transition-colors hover:bg-[#3777ff]" onClick={() => retrySlide(slide.slide_number)}>
            <Repeat2 className="w-4 h-4" />Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-base text-white/[0.62]">⏳ Waiting in queue to process...</p>
      <div className="animate-pulse space-y-3">
        <div className="h-6 w-2/3 rounded bg-white/[0.09]"></div>
        <div className="h-6 w-1/2 rounded bg-white/[0.09]"></div>
        <div className="h-64 rounded bg-white/[0.07]"></div>
      </div>
    </div>
  );
};
