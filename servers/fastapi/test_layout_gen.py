"""Quick test of the layout generation pipeline."""
import asyncio
import sys
import os
import traceback

# Ensure the package is on the path
sys.path.insert(0, os.path.dirname(__file__))

from models.presentation_outline_model import SlideOutlineModel
from utils.llm_calls.generate_slide_layouts import (
    categorize_outlines,
    generate_layout_tsx,
    generate_all_layouts,
    LAYOUT_TYPES,
)

OUTLINES = [
    SlideOutlineModel(content="Title: Benefits of Renewable Energy - An overview of why renewable energy matters"),
    SlideOutlineModel(content="Solar Power: Cost savings, environmental benefits, and growing adoption worldwide"),
    SlideOutlineModel(content="Wind Energy: Offshore and onshore wind farms generating clean electricity"),
]

async def test_categorize():
    print("=== Testing categorize_outlines ===")
    try:
        result = await categorize_outlines(OUTLINES, "Benefits of Renewable Energy")
        print(f"Result: {result}")
        return result
    except Exception as e:
        print(f"ERROR: {e}")
        traceback.print_exc()
        return None

async def test_generate_tsx():
    print("\n=== Testing generate_layout_tsx ===")
    try:
        tsx = await generate_layout_tsx(
            LAYOUT_TYPES[0],  # title-intro
            "Benefits of Renewable Energy",
            "Title: Benefits of Renewable Energy",
        )
        print(f"Generated TSX ({len(tsx)} chars):")
        print(tsx[:500])
        return tsx
    except Exception as e:
        print(f"ERROR: {e}")
        traceback.print_exc()
        return None

async def main():
    cat_result = await test_categorize()
    tsx_result = await test_generate_tsx()
    
    if cat_result and tsx_result:
        print("\n=== Both tests passed ===")
    else:
        print("\n=== Some tests FAILED ===")

asyncio.run(main())
