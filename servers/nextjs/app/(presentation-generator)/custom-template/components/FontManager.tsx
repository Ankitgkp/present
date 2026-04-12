import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Upload,
  CheckCircle,
  AlertCircle,
  X,
  Loader2,
  Type,
} from "lucide-react";

interface UploadedFont {
  fontName: string;
  fontUrl: string;
  fontPath: string;
}

interface FontData {
  internally_supported_fonts: {
    name: string;
    google_fonts_url: string;
  }[];
  not_supported_fonts: string[];
}

interface FontManagerProps {
  fontsData: FontData;
  UploadedFonts: UploadedFont[];
  uploadFont: (fontName: string, file: File) => Promise<string | null>;
  removeFont: (fontUrl: string) => void;
  getAllUnsupportedFonts: () => string[];
  processSlideToHtml: () => void;
}

const FontManager: React.FC<FontManagerProps> = ({
  fontsData,
  UploadedFonts,
  uploadFont,
  removeFont,
  getAllUnsupportedFonts,
  processSlideToHtml,
}) => {
  const [uploadingFonts, setUploadingFonts] = useState<Set<string>>(new Set());
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const allUnsupportedFonts = getAllUnsupportedFonts();

  // Filter out fonts that are already uploaded
  const fontsNeedingUpload = allUnsupportedFonts.filter(
    (fontName) =>
      !UploadedFonts.some((uploadedFont) => uploadedFont.fontName === fontName)
  );

  const handleFontUpload = async (fontName: string, file: File) => {
    if (!file) return;

    setUploadingFonts((prev) => new Set(prev).add(fontName));

    try {
      const fontUrl = await uploadFont(fontName, file);

      if (fontUrl) {
        // Clear the file input
        if (fileInputRefs.current[fontName]) {
          fileInputRefs.current[fontName]!.value = "";
        }
      }
    } finally {
      setUploadingFonts((prev) => {
        const newSet = new Set(prev);
        newSet.delete(fontName);
        return newSet;
      });
    }
  };

  const handleFileInputChange = (
    fontName: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFontUpload(fontName, file);
    }
  };

  if (allUnsupportedFonts.length === 0 && UploadedFonts.length === 0) {
    return null;
  }

  return (
    <Card className="glass-card my-6 border-white/[0.12] bg-[#0b1426]/80 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Type className="w-6 h-6 text-[#78b5ff]" />
          Font Management
        </CardTitle>
        <p className="text-sm text-white/[0.65]">
          We couldn't load these fonts automatically. Please upload them manually. Make sure naem of the font should be exactly as shown. 
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Supported Fonts */}
        {fontsData.internally_supported_fonts.length > 0 && (
          <div>
            <h4 className="mb-3 flex items-center gap-1 text-sm font-medium text-[#9fe8b7]">
              <CheckCircle className="w-4 h-4" />
              Supported Fonts ({fontsData.internally_supported_fonts.length})
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {fontsData.internally_supported_fonts.map((font, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.10] p-2 text-sm text-emerald-100"
                >
                  {font.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fonts Needing Upload */}
        {fontsNeedingUpload.length > 0 && (
          <div>
            <h4 className="mb-3 flex items-center gap-1 text-sm font-medium text-[#ffd089]">
              <AlertCircle className="w-4 h-4" />
              Fonts Needing Upload ({fontsNeedingUpload.length})
            </h4>
            <div className="space-y-3">
              {fontsNeedingUpload.map((fontName: string, index: number) => (
                <div
                  key={index}
                  className="rounded-2xl border border-amber-300/20 bg-amber-300/[0.08] p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-amber-100">
                        {fontName}
                      </span>
                      <p className="mt-1 text-xs text-amber-100/70">
                        Required for presentation
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        ref={(el) => {
                          fileInputRefs.current[fontName] = el;
                        }}
                        type="file"
                        accept=".ttf,.otf,.woff,.woff2,.eot"
                        onChange={(e) => handleFileInputChange(fontName, e)}
                        className="hidden"
                        id={`global-font-upload-${index}`}
                      />
                      <Button
                        size="sm"
                        variant="outline"
                        disabled={uploadingFonts.has(fontName)}
                        onClick={() => fileInputRefs.current[fontName]?.click()}
                        className="btn-border-sweep rounded-xl border border-[#6aaeff]/40 bg-[#2c6cff] text-xs text-white hover:bg-[#3777ff] hover:text-white"
                      >
                        {uploadingFonts.has(fontName) ? (
                          <>
                            <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                            Uploading...
                          </>
                        ) : (
                          <>
                            <Upload className="w-3 h-3 mr-1" />
                            Upload Font
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Successfully Uploaded Fonts */}
        {UploadedFonts.length > 0 && (
          <div>
            <h4 className="mb-3 flex items-center gap-1 text-sm font-medium text-[#9fe8b7]">
              <CheckCircle className="w-4 h-4" />
              Uploaded Fonts ({UploadedFonts.length})
            </h4>
            <div className="space-y-2">
              {UploadedFonts.map((font, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.10] p-3"
                >
                  <div>
                    <span className="text-sm font-medium text-emerald-100">
                      {font.fontName}
                    </span>
                    <p className="mt-1 text-xs text-emerald-100/70">
                      Available for all slides
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => removeFont(font.fontUrl)}
                    className="p-1 text-white/[0.65] hover:bg-white/[0.10] hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="flex justify-center mt-4">

        <Button
          size="sm"
          variant="outline"
          onClick={processSlideToHtml}
          className="btn-border-sweep rounded-xl border border-[#6aaeff]/40 bg-[#2c6cff] px-8 py-2 text-xs font-semibold text-white hover:bg-[#3777ff] hover:text-white"
          >
            Extract Template
        </Button>
          </div>
      </CardContent>
    </Card>
  );
};

export default FontManager;
