import BaseLayout, { Schema as BaseSchema } from "../neo-standard/TitleKpiGrid";
import { withTechAIRedTheme } from "./withTechAIRedTheme";

export const Schema = BaseSchema;
export const layoutId = "tech-ai-red-metrics";
export const layoutName = "AI Metrics";
export const layoutDescription = "Performance KPI grid for latency, accuracy, adoption, and reliability benchmarks.";

export default withTechAIRedTheme(BaseLayout);
