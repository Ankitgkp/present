import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Upload, FileText, X, Loader2 } from "lucide-react";
import { ProcessedSlide } from "../types";
import Timer from "./Timer";

interface FileUploadSectionProps {
  selectedFile: File | null;
  handleFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  removeFile: () => void;
  processFile: () => void;
  isProcessingPptx: boolean;
  slides: ProcessedSlide[];
  completedSlides: number;
}

export const FileUploadSection: React.FC<FileUploadSectionProps> = ({
  selectedFile,
  handleFileSelect,
  removeFile,
  processFile,
  isProcessingPptx,
  slides,
  completedSlides,
}) => {
  return (
    <Card className="glass-card w-full border-white/[0.12] bg-[#0b1426]/80 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="w-5 h-5 text-[#78b5ff]" />
          Upload PDF or PPTX File
        </CardTitle>
        <CardDescription className="text-white/[0.65]">
          Select a PDF or PowerPoint file (.pdf or .pptx) to process. Maximum file size: 100MB
        </CardDescription>
        {slides.length > 0 && (
          <div className="flex items-center justify-end gap-2 text-sm text-white/70">
            {slides.some((s) => s.processing) && (
              <Loader2 className="w-6 h-6 animate-spin text-[#78b5ff]" />
            )}
            {completedSlides}/{slides.length} slides completed
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {!selectedFile ? (
          <div className="relative rounded-2xl border border-dashed border-white/[0.18] bg-white/[0.03] p-8 text-center transition-colors hover:border-[#69adff]/50 hover:bg-white/[0.05]">
            <Upload className="mx-auto mb-4 h-12 w-12 text-[#78b5ff]" />
            <Label htmlFor="file-upload" className="cursor-pointer">
              <span className="text-lg font-medium text-white">
                Click to upload a PDF or PPTX file
              </span>
              <input
                id="file-upload"
                type="file"
                accept=".pdf,.pptx"
                onChange={handleFileSelect}
                className="opacity-0 w-full h-full cursor-pointer absolute top-0 left-0 z-10"
              />
            </Label>
            <p className="mt-2 text-sm text-white/60">
              Drag and drop your file here or click to browse
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-between rounded-2xl border border-[#4f7fc0]/35 bg-[#10203d]/78 p-4">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-[#78b5ff]" />
              <div>
                <p className="font-medium text-white">
                  {selectedFile.name}
                </p>
                <p className="text-sm text-white/60">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={removeFile}
              disabled={
                isProcessingPptx || slides.some((s) => s.processing)
              }
              className="rounded-full text-white/70 hover:bg-white/10 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        )}

        <div className="flex flex-col gap-1 ">
          <Button
            onClick={processFile}
            disabled={isProcessingPptx || slides.some((s) => s.processing)}
            className="btn-border-sweep btn-glow flex-1 rounded-xl border border-[#6aaeff]/40 bg-[#2c6cff] text-white shadow-[0_16px_38px_rgba(44,108,255,0.28)] hover:bg-[#3777ff]"
          >
            {isProcessingPptx
              ? "Extracting Slides..."
              : !selectedFile
              ? "Select a PDF or PPTX file"
              : "Process File"}
          </Button>
          {isProcessingPptx && <Timer duration={90} />}
        </div>
      </CardContent>
    </Card>
  );
}; 
