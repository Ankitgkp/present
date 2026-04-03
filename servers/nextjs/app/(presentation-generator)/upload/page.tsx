"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UploadPage from "./components/UploadPage";
import UploadPageClassic from "./components/UploadPageClassic";
import { Layers, Zap } from "lucide-react";

const Page = () => {
  const [isClassicUI, setIsClassicUI] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] overflow-x-hidden">
      {/* Soft ambient glow at top */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(242, 93, 107, 0.06) 0%, transparent 70%)",
        }}
      />

      {/* UI toggle button — top right */}
      <div className="fixed top-7 right-6 z-50">
        <button
          onClick={() => setIsClassicUI(!isClassicUI)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold font-syne bg-white hover:bg-gray-50 border border-gray-200 text-gray-500 hover:text-gray-700 transition-all duration-300 shadow-sm"
          title={isClassicUI ? "Switch to Wizard UI" : "Switch to Classic UI"}
        >
          {isClassicUI ? (
            <>
              <Zap className="w-3.5 h-3.5 text-[#F25D6B]" />
              <span>Wizard UI</span>
            </>
          ) : (
            <>
              <Layers className="w-3.5 h-3.5 text-gray-400" />
              <span>Classic UI</span>
            </>
          )}
        </button>
      </div>

      {/* Hero */}
      <div className="flex flex-col items-center justify-center pt-8 md:pt-10 mb-4 md:mb-5 relative z-10">
        <h1 className="text-[38px] md:text-[48px] leading-tight font-normal font-unbounded gradient-text text-center px-4">
          {isClassicUI ? "AI Presentation" : "Create a Presentation"}
        </h1>
        <p className="text-sm md:text-base font-syne text-gray-400 mt-1 text-center px-4">
          {isClassicUI
            ? "Choose a design, set preferences, and generate polished slides."
            : "Three quick steps to a polished deck."}
        </p>
      </div>

      {/* Page content — no fade-in animation */}
      {isClassicUI ? <UploadPageClassic /> : <UploadPage />}

      {/* Soft ambient bottom glow */}
      <div
        className="fixed bottom-[-10rem] left-1/2 -translate-x-1/2 w-[1000px] h-[300px] pointer-events-none z-0"
        style={{
          borderRadius: "1440px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(242, 93, 107, 0.08) 0%, transparent 100%)",
        }}
      />
    </div>
  );
};

export default Page;
