import BaseLayout, { Schema as BaseSchema } from "../neo-swift/TitleSubtitleTeamMemberCards";
import { withTechAIRedTheme } from "./withTechAIRedTheme";

export const Schema = BaseSchema;
export const layoutId = "tech-ai-red-team";
export const layoutName = "AI Team";
export const layoutDescription = "Team slide for AI leadership, engineering, and research roles with concise bios.";

export default withTechAIRedTheme(BaseLayout);
