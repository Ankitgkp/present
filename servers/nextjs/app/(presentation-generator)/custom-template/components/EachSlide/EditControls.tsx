'use client'

import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Pencil, Eraser, RotateCcw, SendHorizontal, X } from "lucide-react";
import { EditControlsProps } from "../../types";

export const EditControls: React.FC<EditControlsProps> = ({
  isEditMode,
  prompt,
  isUpdating,
  strokeWidth,
  strokeColor,
  eraserMode,
  onPromptChange,
  onSave,
  onCancel,
  onStrokeWidthChange,
  onStrokeColorChange,
  onEraserModeChange,
  onClearCanvas,
}) => {
  const colors = [
    "#000000",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FFA500",
  ];

  const strokeWidths = [1, 3, 5, 8, 12];

  if (!isEditMode) return null;

  return (
    <div className="max-w-[1280px] mx-auto space-y-4 rounded-2xl border border-white/[0.12] bg-[#10203d]/78 p-4 text-white shadow-[0_14px_40px_rgba(0,0,0,0.25)]">
      {/* Drawing Tools */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          {/* Drawing Tools */}
          <div className="flex items-center gap-2">
            <Button
              variant={!eraserMode ? "default" : "outline"}
              size="sm"
              onClick={() => onEraserModeChange(false)}
              className={`flex items-center gap-1 ${!eraserMode ? "border border-[#6aaeff]/40 bg-[#2c6cff] text-white hover:bg-[#3777ff]" : "border-white/[0.12] bg-white/[0.05] text-white hover:bg-white/[0.10] hover:text-white"}`}
            >
              <Pencil size={14} />
              Draw
            </Button>

            <Button
              variant={eraserMode ? "default" : "outline"}
              size="sm"
              onClick={() => onEraserModeChange(true)}
              className={`flex items-center gap-1 ${eraserMode ? "border border-[#6aaeff]/40 bg-[#2c6cff] text-white hover:bg-[#3777ff]" : "border-white/[0.12] bg-white/[0.05] text-white hover:bg-white/[0.10] hover:text-white"}`}
            >
              <Eraser size={14} />
              Erase
            </Button>
          </div>

          {/* Color Picker */}
          {!eraserMode && (
            <div className="flex items-center gap-1">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-5 h-5 rounded-full border-2 ${
                    strokeColor === color
                      ? "border-white"
                      : "border-white/30"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => onStrokeColorChange(color)}
                />
              ))}
            </div>
          )}

          {/* Stroke Width */}
          <div className="flex items-center gap-1">
            {strokeWidths.map((width) => (
              <button
                key={width}
                className={`flex h-7 w-7 items-center justify-center rounded border ${
                  strokeWidth === width
                    ? "border-[#6aaeff] bg-[#2c6cff]/20"
                    : "border-white/20 bg-white/[0.05]"
                }`}
                onClick={() => onStrokeWidthChange(width)}
              >
                <div
                  className="rounded-full bg-white"
                  style={{
                    width: `${width + 1}px`,
                    height: `${width + 1}px`,
                  }}
                />
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={onClearCanvas}
            className="flex items-center gap-1 border-white/[0.12] bg-white/[0.05] text-white hover:bg-white/[0.10] hover:text-white"
          >
            <RotateCcw size={14} />
            Clear
          </Button>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={onCancel}
          className="flex items-center gap-1 border-white/[0.12] bg-white/[0.05] text-white hover:bg-white/[0.10] hover:text-white"
        >
          <X size={14} />
          Cancel
        </Button>
      </div>

      {/* Prompt Section */}
      <div className="space-y-2 mt-2">
        <label
          htmlFor="edit-prompt"
          className="text-sm font-medium font-inter text-white/[0.80]"
        >
          Describe the changes you want to make:
        </label>
        <div className="flex gap-2">
          <Textarea
            id="edit-prompt"
            placeholder="Enter your prompt here... (e.g., 'Change the title color to blue', 'Add a border to the image', etc.)"
            value={prompt}
            onChange={(e) => onPromptChange(e.target.value)}
            className="h-[70px] max-h-[70px] flex-1 resize-none rounded-xl border border-white/[0.12] bg-white/[0.05] font-inter text-white outline-none duration-300 placeholder:text-white/[0.35] focus:border-[#6aaeff] focus:ring-0"
            disabled={isUpdating}
          />
          <div>
            <Button
              onClick={onSave}
              disabled={isUpdating || !prompt.trim()}
              className="flex h-full w-28 flex-col items-center gap-1 border border-[#6aaeff]/40 bg-[#2c6cff] px-4 font-inter font-semibold text-white hover:bg-[#3777ff]"
            >
              {isUpdating ? (
                "Updating..."
              ) : (
                <>
                  <SendHorizontal size={14} />
                  Update
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}; 
