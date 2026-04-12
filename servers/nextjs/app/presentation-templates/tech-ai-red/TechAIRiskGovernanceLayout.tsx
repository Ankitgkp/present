import BaseLayout, { Schema as BaseSchema } from "../dark-space/DarkSpaceComparisonLayout";
import { withTechAIRedTheme } from "./withTechAIRedTheme";

export const Schema = BaseSchema;
export const layoutId = "tech-ai-red-risk-governance";
export const layoutName = "Risk & Governance";
export const layoutDescription = "Governance slide for responsible AI, privacy, compliance, and mitigation actions.";

export default withTechAIRedTheme(BaseLayout);
