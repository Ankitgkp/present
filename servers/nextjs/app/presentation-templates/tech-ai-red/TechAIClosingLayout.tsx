import BaseLayout, { Schema as BaseSchema } from "../dark-space/DarkSpaceClosingLayout";
import { withTechAIRedTheme } from "./withTechAIRedTheme";

export const Schema = BaseSchema;
export const layoutId = "tech-ai-red-closing";
export const layoutName = "Closing / CTA";
export const layoutDescription = "Final call-to-action slide for demos, adoption plans, and next technical milestones.";

export default withTechAIRedTheme(BaseLayout);
