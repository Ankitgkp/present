import BaseLayout, { Schema as BaseSchema } from "../neo-standard/TitleDescriptionTable";
import { withTechAIRedTheme } from "./withTechAIRedTheme";

export const Schema = BaseSchema;
export const layoutId = "tech-ai-red-architecture";
export const layoutName = "System Architecture";
export const layoutDescription = "Structured architecture overview for AI stack components, data flow, and integrations.";

export default withTechAIRedTheme(BaseLayout);
