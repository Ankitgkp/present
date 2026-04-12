import BaseLayout, { Schema as BaseSchema } from "../neo-standard/TitleDescriptionBulletList";
import { withTechAIRedTheme } from "./withTechAIRedTheme";

export const Schema = BaseSchema;
export const layoutId = "tech-ai-red-use-cases";
export const layoutName = "AI Use Cases";
export const layoutDescription = "Text-first use case layout for product scenarios, automation opportunities, and impact notes.";

export default withTechAIRedTheme(BaseLayout);
