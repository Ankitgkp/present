from typing import Optional
from models.llm_message import LLMSystemMessage, LLMUserMessage
from services.llm_client import LLMClient
from utils.llm_client_error_handler import handle_llm_client_exceptions
from utils.llm_provider import get_model


THEME_GENERATION_SCHEMA = {
    "type": "object",
    "properties": {
        "primary": {
            "type": "string",
            "description": "Primary brand/accent color as hex (e.g. #2563EB). Should be vibrant and represent the topic's industry or mood.",
        },
        "background": {
            "type": "string",
            "description": "Background color as hex. Either very light (#F8FAFC) or very dark (#0F172A) depending on context.",
        },
        "accent_1": {
            "type": "string",
            "description": "First accent color as hex. Complementary to primary, used for secondary elements.",
        },
        "accent_2": {
            "type": "string",
            "description": "Second accent color as hex. Used for highlights and tertiary elements.",
        },
        "text_1": {
            "type": "string",
            "description": "Main text color as hex. Must have high contrast against background (dark text on light bg, light text on dark bg).",
        },
        "text_2": {
            "type": "string",
            "description": "Secondary/accent text color as hex. Must have high contrast against primary color.",
        },
    },
    "required": ["primary", "background", "accent_1", "accent_2", "text_1", "text_2"],
    "additionalProperties": False,
}


def _get_theme_generation_messages(
    topic: str,
    mood: Optional[str] = None,
    variation_seed: Optional[str] = None,
):
    mood_instruction = ""
    if mood:
        mood_instruction = f"\nThe user wants a '{mood}' mood/style for the theme."

    variation_instruction = ""
    if variation_seed:
        variation_instruction = (
            "\nDesign a fresh variant for this request and avoid reusing your most common default palette patterns."
            f"\nVariation token: {variation_seed}"
        )

    return [
        LLMSystemMessage(
            content=f"""You are a professional presentation designer and color theory expert.
Your task is to generate a harmonious color palette for a presentation based on the given topic.

Follow these guidelines:
1. **Industry awareness**: Consider the topic's industry conventions:
   - Finance/Business → blues, navy, dark greens
   - Technology → vibrant blues, teals, electric purples
   - Healthcare → calming blues, greens, clean whites
   - Education → warm blues, friendly greens, yellows
   - Food/Lifestyle → warm oranges, reds, earthy tones
   - Environment → natural greens, earth tones
   - Creative/Art → bold purples, magentas, creative combinations
   - Corporate → professional navy, slate, conservative palettes
    - Space/Astronomy/Black holes → dark navy, deep blue, charcoal, starlight accents (avoid default purple-heavy palettes)

2. **Color harmony**: Use complementary, analogous, or triadic color relationships.

3. **Contrast**: Ensure text colors have WCAG AA contrast (4.5:1 minimum) against their backgrounds:
   - If background is light (close to white), text_1 should be very dark (close to black).
   - If background is dark (close to black), text_1 should be very light (close to white).
   - text_2 should contrast well against the primary color.

4. **Professionalism**: Avoid overly saturated or clashing colors. Aim for a polished, premium look.
4.1 **Restrained palette first**: Keep the visual system focused and calm by default (one dominant, one support, one accent). Avoid rainbow-like palettes unless explicitly requested.

5. **Background choice**: Default to light backgrounds (#F8FAFC to #FFFFFF range) unless the topic strongly suggests a dark theme (e.g., night photography, space, cybersecurity, gaming).
6. **Topic match priority**: Prioritize topic relevance over generic trendy palettes. If topic implies ocean/space/night, use blue-dark families first.
{mood_instruction}
{variation_instruction}

Return exactly 6 hex color values.""",
        ),
        LLMUserMessage(
            content=f"Generate a color palette for a presentation about: {topic}",
        ),
    ]


async def generate_theme_from_topic(
    topic: str,
    mood: Optional[str] = None,
    variation_seed: Optional[str] = None,
) -> dict:
    """
    Uses the LLM to generate a color palette based on the presentation topic.
    Returns a dict with keys: primary, background, accent_1, accent_2, text_1, text_2.
    """
    client = LLMClient()
    model = get_model()

    try:
        response = await client.generate_structured(
            model=model,
            messages=_get_theme_generation_messages(topic, mood, variation_seed),
            response_format=THEME_GENERATION_SCHEMA,
            strict=True,
        )
        return response
    except Exception as e:
        raise handle_llm_client_exceptions(e)
