import React from "react";

type GradientMeshFrameProps = {
  children: React.ReactNode;
  variant?: "left" | "center" | "right";
};

export const GradientMeshFrame = ({ children, variant = "left" }: GradientMeshFrameProps) => {
  void variant;

  return (
    <div
      className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden p-8"
      style={{
        background: "linear-gradient(135deg, #F2FCFB 0%, #EAF9F7 46%, #DFF4F1 100%)",
        fontFamily: "var(--heading-font-family, 'Inter, sans-serif')",
      }}
    >
      <div className="relative h-full">{children}</div>
    </div>
  );
};
