import React from "react";
import { Loader2 } from "lucide-react";
import Header from "@/app/(presentation-generator)/(dashboard)/dashboard/components/Header";

interface LoadingSpinnerProps {
  message: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message }) => {
  return (
    <div className="upload-neo min-h-screen overflow-hidden bg-[#060A15] text-white">
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(58% 42% at 50% 14%, rgba(44,123,255,0.28) 0%, rgba(27,88,190,0.16) 38%, rgba(6,10,21,0) 72%)",
        }}
      />
      <Header />
      <div className="relative z-10 flex items-center justify-center aspect-video mx-auto px-6">
        <div className="glass-card text-center space-y-2 my-6 rounded-2xl border border-white/[0.12] bg-[#0b1426]/80 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.4)]">
          <Loader2 className="mx-auto h-6 w-6 animate-spin text-[#78b5ff]" />
          <p className="text-white/80">{message}</p>
        </div>
      </div>
    </div>
  );
};
