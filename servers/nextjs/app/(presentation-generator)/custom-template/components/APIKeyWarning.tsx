import React from "react";
import Header from "@/app/(presentation-generator)/(dashboard)/dashboard/components/Header";

export const APIKeyWarning: React.FC = () => {
  return (
    <div className="upload-neo min-h-screen overflow-hidden bg-[#060A15] font-roboto text-white">
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(58% 42% at 50% 14%, rgba(44,123,255,0.28) 0%, rgba(27,88,190,0.16) 38%, rgba(6,10,21,0) 72%)",
        }}
      />
      <Header />
      <div className="relative z-10 flex items-center justify-center aspect-video mx-auto px-6">
        <div className="glass-card text-center space-y-2 my-6 rounded-2xl border border-white/[0.12] bg-[#0b1426]/80 p-10 shadow-[0_24px_70px_rgba(0,0,0,0.4)]">
          <h1 className="text-xl font-bold text-white">
            Please add "GOOGLE_API_KEY" to enable template creation via AI.
          </h1>
          <h1 className="text-xl font-bold text-white">Please add your OpenAI API Key to process the layout</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            This feature requires an OpenAI model GPT-5. Configure your key in settings or via environment variables.
          </p>
        </div>
      </div>
    </div>
  );
};
