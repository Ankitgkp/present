import BaseLayout, { Schema as BaseSchema } from "../dark-space/DarkSpaceUseCasesLayout";
import { withTechAIRedTheme } from "./withTechAIRedTheme";

export const Schema = BaseSchema;
export const layoutId = "tech-ai-red-roadmap";
export const layoutName = "AI Roadmap";
export const layoutDescription = "Numbered roadmap layout for phased implementation and release planning.";

export default withTechAIRedTheme(BaseLayout);
