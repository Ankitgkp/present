from typing import Optional
import uuid

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from models.theme_data import ThemeData
from utils.theme_utils import (
    IS_DARK_BELOW,
    generate_color_palette,
    get_lightness_key_at_distance,
)
from utils.llm_calls.generate_theme_from_topic import generate_theme_from_topic

THEME_ROUTER = APIRouter(prefix="/theme", tags=["V3 Theme"])


class GenerateThemeRequestV3(BaseModel):
    primary: Optional[str] = None
    background: Optional[str] = None
    accent_1: Optional[str] = None
    accent_2: Optional[str] = None
    text_1: Optional[str] = None
    text_2: Optional[str] = None


class GenerateThemeFromTopicRequest(BaseModel):
    topic: str
    mood: Optional[str] = None


@THEME_ROUTER.post("/generate-from-topic", response_model=ThemeData)
async def generate_theme_from_topic_endpoint(
    request: GenerateThemeFromTopicRequest,
) -> ThemeData:
    """Generate a theme color palette using AI based on the presentation topic."""
    try:
        ai_colors = await generate_theme_from_topic(
            request.topic,
            request.mood,
            variation_seed=uuid.uuid4().hex[:8],
        )
    except Exception:
        raise HTTPException(
            status_code=500,
            detail="Failed to generate theme from topic. Please try again.",
        )

    color_palette = generate_color_palette(
        ai_colors.get("primary"),
        ai_colors.get("background"),
        ai_colors.get("accent_1"),
        ai_colors.get("accent_2"),
        ai_colors.get("text_1"),
        ai_colors.get("text_2"),
    )

    is_dark_theme = color_palette.background_lightness < IS_DARK_BELOW
    graph_colors = list(color_palette.primary_variations.values())

    if not is_dark_theme:
        graph_colors.reverse()

    return ThemeData(
        primary=color_palette.primary,
        background=color_palette.background,
        card=color_palette.background_variations[
            get_lightness_key_at_distance(
                color_palette.background_lightness,
                min_distance=1,
                max_distance=1,
                prefer_dark=not is_dark_theme,
            )
        ],
        stroke=color_palette.background_variations[
            get_lightness_key_at_distance(
                color_palette.background_lightness,
                min_distance=2,
                max_distance=2,
                prefer_dark=not is_dark_theme,
            )
        ],
        background_text=color_palette.text_1,
        primary_text=color_palette.text_2,
        graph_0=graph_colors[0],
        graph_1=graph_colors[1],
        graph_2=graph_colors[2],
        graph_3=graph_colors[3],
        graph_4=graph_colors[4],
        graph_5=graph_colors[5],
        graph_6=graph_colors[6],
        graph_7=graph_colors[7],
        graph_8=graph_colors[8],
        graph_9=graph_colors[9],
    )


@THEME_ROUTER.post("/generate", response_model=ThemeData)
async def generate_theme_v3(request: GenerateThemeRequestV3) -> ThemeData:
    color_palette = generate_color_palette(
        request.primary,
        request.background,
        request.accent_1,
        request.accent_2,
        request.text_1,
        request.text_2,
    )

    is_dark_theme = color_palette.background_lightness < IS_DARK_BELOW
    graph_colors = list(color_palette.primary_variations.values())

    if not is_dark_theme:
        graph_colors.reverse()

    theme_data = ThemeData(
        primary=color_palette.primary,
        background=color_palette.background,
        card=color_palette.background_variations[
            get_lightness_key_at_distance(
                color_palette.background_lightness,
                min_distance=1,
                max_distance=1,
                prefer_dark=not is_dark_theme,
            )
        ],
        stroke=color_palette.background_variations[
            get_lightness_key_at_distance(
                color_palette.background_lightness,
                min_distance=2,
                max_distance=2,
                prefer_dark=not is_dark_theme,
            )
        ],
        background_text=color_palette.text_1,
        primary_text=color_palette.text_2,
        graph_0=graph_colors[0],
        graph_1=graph_colors[1],
        graph_2=graph_colors[2],
        graph_3=graph_colors[3],
        graph_4=graph_colors[4],
        graph_5=graph_colors[5],
        graph_6=graph_colors[6],
        graph_7=graph_colors[7],
        graph_8=graph_colors[8],
        graph_9=graph_colors[9],
    )
    return theme_data

