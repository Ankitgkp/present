"use client";
import React, { useEffect, useState } from "react";

interface StreamingProgressBarProps {
  streamed: number;
  total: number;
}

const StreamingProgressBar: React.FC<StreamingProgressBarProps> = ({
  streamed,
  total,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Slight delay so it fades in gracefully
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  const pct = total > 0 ? Math.round((streamed / total) * 100) : 0;

  return (
    <div
      className={`sticky bottom-4 z-50 mx-auto mb-2 w-full max-w-[520px] transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col gap-2 rounded-2xl border border-[#E8E4FF] bg-white/90 px-5 py-3 shadow-xl backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Pulsing dot */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5141e5] opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#5141e5]" />
            </span>
            <span className="text-sm font-medium text-gray-700">
              Generating presentation…
            </span>
          </div>
          <span className="text-xs font-semibold text-[#5141e5]">
            {streamed}/{total} slides
          </span>
        </div>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#9034EA] to-[#5141e5] transition-all duration-500 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default StreamingProgressBar;
