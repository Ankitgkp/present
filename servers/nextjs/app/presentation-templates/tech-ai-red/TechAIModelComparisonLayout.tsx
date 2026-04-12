import BaseLayout, { Schema as BaseSchema } from "../neo-standard/TitleDualComparisonCards";
import { withTechAIRedTheme } from "./withTechAIRedTheme";

export const Schema = BaseSchema;
export const layoutId = "tech-ai-red-model-comparison";
export const layoutName = "Model Comparison";
export const layoutDescription = "Side-by-side comparison slide for models, approaches, or vendor options.";

export default withTechAIRedTheme(BaseLayout);
