import React from "react";

const techAIRedThemeVars: Record<string, string> = {
  "--primary-color": "#DC2626",
  "--primary-text": "#FEE2E2",
  "--background-color": "#05070D",
  "--background-text": "#F3F4F6",
  "--card-color": "#0B0F18",
  "--stroke": "#1F2937",
  "--graph-0": "#DC2626",
  "--graph-1": "#B91C1C",
  "--graph-2": "#991B1B",
  "--graph-3": "#7F1D1D",
  "--graph-4": "#111111",
};

export function withTechAIRedTheme<T extends { data: any }>(Component: React.ComponentType<T>) {
  const WrappedLayout = (props: T) => (
    <div style={techAIRedThemeVars as React.CSSProperties}>
      <Component {...props} />
    </div>
  );

  WrappedLayout.displayName = `WithTechAIRedTheme(${Component.displayName || Component.name || "Component"})`;

  return WrappedLayout;
}
