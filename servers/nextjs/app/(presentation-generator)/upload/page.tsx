"use client";

import React, { useState } from "react";
import UploadPage from "./components/UploadPage";
import UploadPageClassic from "./components/UploadPageClassic";
import { Layers, Zap } from "lucide-react";

const Page = () => {
  const [isClassicUI, setIsClassicUI] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060A15] text-white">
      {/* Main background glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 24%, rgba(44,123,255,0.34) 0%, rgba(27,88,190,0.18) 40%, rgba(6,10,21,0) 72%)",
        }}
      />

      {/* Top subtle vignette */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[55vh] z-0 bg-gradient-to-b from-black/45 via-transparent to-transparent" />

      {/* Eclipse rings */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-0 origin-bottom scale-y-[1.13] md:scale-y-[1.09] translate-y-[calc(-10vw+0.5in)] md:translate-y-[calc(-3.5vw+0.5in)]">
        {/* soft glow above horizon */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[14vw] md:bottom-[8.5vw] h-[26vw] w-[92vw] rounded-[50%] blur-3xl"
          style={{ background: "radial-gradient(60% 80% at 50% 100%, rgba(74,144,255,0.45) 0%, rgba(74,144,255,0.18) 45%, rgba(0,0,0,0) 100%)" }}
        />

        {/* layered rings for depth */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-23vw] md:bottom-[-34vw] h-[58vw] w-[182vw] rounded-[50%] border-[24px] border-white/95" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-22.4vw] md:bottom-[-33.4vw] h-[57.2vw] w-[179.5vw] rounded-[50%] border-[6px] border-[#e8f2ff]/90" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-21.9vw] md:bottom-[-32.9vw] h-[56.4vw] w-[177vw] rounded-[50%] border-[9px] border-[#b5d8ff]/85" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-21.3vw] md:bottom-[-32.3vw] h-[55.6vw] w-[174.5vw] rounded-[50%] border-[8px] border-[#8fc3ff]/80" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-20.8vw] md:bottom-[-31.8vw] h-[54.8vw] w-[172vw] rounded-[50%] border-[7px] border-[#66adff]/85" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-20.2vw] md:bottom-[-31.2vw] h-[54vw] w-[169.5vw] rounded-[50%] border-[6px] border-[#3994ff]/88" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-19.7vw] md:bottom-[-30.7vw] h-[53.2vw] w-[167vw] rounded-[50%] border-[7px] border-[#1f7df0]/90" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-19vw] md:bottom-[-30vw] h-[52.4vw] w-[164.5vw] rounded-[50%] border-[18px] border-[#1b65d9]/30 blur-[1px]" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-18vw] md:bottom-[-29vw] h-[50vw] w-[160vw] rounded-[50%] border-[20px] border-[#1b65d9]/16 blur-xl" />
      </div>

      {/* UI toggle button — top right */}
      <div className="fixed top-6 right-5 z-50">
        <button
          onClick={() => setIsClassicUI(!isClassicUI)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold font-syne border border-white/20 bg-[#111827]/70 backdrop-blur-md text-white/80 hover:text-white hover:bg-[#1a2338]/75 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          title={isClassicUI ? "Switch to Wizard UI" : "Switch to Classic UI"}
        >
          {isClassicUI ? (
            <>
              <Zap className="w-3.5 h-3.5 text-[#66b0ff]" />
              <span>Wizard UI</span>
            </>
          ) : (
            <>
              <Layers className="w-3.5 h-3.5 text-white/65" />
              <span>Classic UI</span>
            </>
          )}
        </button>
      </div>

      {/* Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-10 md:pt-14 mb-3 md:mb-4 px-4">
        <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-[13px] text-white/90 font-syne font-semibold mb-5">
          Introducing Design Systems in Presenton
        </div>
        <h1 className="text-center leading-tight font-unbounded font-semibold text-[38px] md:text-[58px] tracking-tight">
          What will you <span className="text-[#61aefc] italic">build</span> today?
        </h1>
        <p className="text-sm md:text-base font-syne text-white/65 mt-2 text-center max-w-3xl">
          {isClassicUI
            ? "Choose a design, set preferences, and generate polished slides with AI."
            : "Create stunning presentations by chatting with AI."}
        </p>
      </div>

      {/* Page content — no fade-in animation */}
      <div className="relative z-10 pb-16">
        {isClassicUI ? <UploadPageClassic /> : <UploadPage />}
      </div>
    </div>
  );
};

export default Page;
