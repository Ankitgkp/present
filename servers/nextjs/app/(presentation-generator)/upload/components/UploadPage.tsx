/**
 * UploadPage — Multi-Step Wizard
 *
 * Step 1: Topic + attachments
 * Step 2: Slides count + language
 * Step 3: Advanced settings
 * → Generate
 */

"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import {
  clearOutlines,
  setPresentationId,
} from "@/store/slices/presentationGeneration";
import {
  LanguageType,
  PresentationConfig,
  ToneType,
  VerbosityType,
} from "../type";
import SupportingDoc from "./SupportingDoc";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ArrowRight,
  Globe,
} from "lucide-react";
import { toast } from "sonner";
import { PresentationGenerationApi } from "../../services/api/presentation-generation";
import { setPptGenUploadState } from "@/store/slices/presentationGenUpload";
import { trackEvent, MixpanelEvent } from "@/utils/mixpanel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

// ─── Constants ─────────────────────────────────────
const PLACEHOLDER_TOPICS = [
  "A pitch deck for an AI startup…",
  "Climate change impact on coastal cities…",
  "Introduction to quantum computing…",
  "Marketing strategy for 2026…",
  "History of space exploration…",
  "Benefits of remote work culture…",
  "Annual business review report…",
];

const SLIDE_PRESETS = [5, 8, 10, 12, 15, 20];

const POPULAR_LANGUAGES = [
  LanguageType.English,
  LanguageType.Hindi,
  LanguageType.Spanish,
  LanguageType.French,
  LanguageType.German,
  LanguageType.ChineseSimplified,
  LanguageType.Japanese,
  LanguageType.Korean,
];

// ─── Loading state type ────────────────────────────
interface LoadingState {
  isLoading: boolean;
  message: string;
  duration?: number;
  showProgress?: boolean;
  extra_info?: string;
}

// ─── Animated placeholder hook ─────────────────────
function useAnimatedPlaceholder(topics: string[], interval = 3000) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const topic = topics[index];
    let charIndex = 0;
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      const typeChar = () => {
        if (charIndex <= topic.length) {
          setDisplayed(topic.slice(0, charIndex));
          charIndex++;
          timeout = setTimeout(typeChar, 30 + Math.random() * 30);
        } else {
          timeout = setTimeout(() => setIsTyping(false), 2000);
        }
      };
      typeChar();
    } else {
      let eraseIndex = topic.length;
      const eraseChar = () => {
        if (eraseIndex >= 0) {
          setDisplayed(topic.slice(0, eraseIndex));
          eraseIndex--;
          timeout = setTimeout(eraseChar, 15);
        } else {
          setIndex((prev) => (prev + 1) % topics.length);
          setIsTyping(true);
        }
      };
      eraseChar();
    }

    return () => clearTimeout(timeout);
  }, [index, isTyping, topics]);

  return displayed;
}

// ─── Main Component ────────────────────────────────
const UploadPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);
  const [files, setFiles] = useState<File[]>([]);
  const [config, setConfig] = useState<PresentationConfig>({
    slides: "5",
    language: LanguageType.English,
    prompt: "",
    tone: ToneType.Default,
    verbosity: VerbosityType.Standard,
    instructions: "",
    includeTableOfContents: false,
    includeTitleSlide: false,
    webSearch: false,
    autoTheme: false,
  });
  const [customSlideInput, setCustomSlideInput] = useState("");

  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: false,
    message: "",
    duration: 4,
    showProgress: false,
    extra_info: "",
  });

  const animatedPlaceholder = useAnimatedPlaceholder(PLACEHOLDER_TOPICS);

  const handleConfigChange = (key: keyof PresentationConfig, value: any) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const goNext = () => {
    setStep((s) => Math.min(s + 1, 3));
  };

  const goBack = () => {
    setStep((s) => Math.max(s - 1, 1));
  };

  const validateStep1 = (): boolean => {
    if (!config.prompt.trim() && files.length === 0) {
      toast.error("Please enter a topic or upload a document");
      return false;
    }
    return true;
  };

  const validateStep2 = (): boolean => {
    if (!config.slides || !config.language) {
      toast.error("Please select slides and language");
      return false;
    }
    return true;
  };

  const handleGenerate = async () => {
    if (!validateStep2()) return;
    try {
      if (files.length > 0) {
        await handleDocumentProcessing();
      } else {
        await handleDirectGeneration();
      }
    } catch (error: any) {
      console.error("Error in upload page", error);
      setLoadingState({ isLoading: false, message: "", duration: 0, showProgress: false });
      toast.error("Error", { description: error.message || "Error generating presentation." });
    }
  };

  const handleDocumentProcessing = async () => {
    setLoadingState({
      isLoading: true, message: "Processing documents...", showProgress: true, duration: 90,
      extra_info: files.length > 0 ? "It might take a few minutes for large documents." : "",
    });
    let documents: any[] = [];
    if (files.length > 0) {
      trackEvent(MixpanelEvent.Upload_Upload_Documents_API_Call);
      documents = await PresentationGenerationApi.uploadDoc(files);
    }
    const promises: Promise<any>[] = [];
    if (documents.length > 0) {
      trackEvent(MixpanelEvent.Upload_Decompose_Documents_API_Call);
      promises.push(PresentationGenerationApi.decomposeDocuments(documents));
    }
    const responses = await Promise.all(promises);
    dispatch(setPptGenUploadState({ config, files: responses }));
    dispatch(clearOutlines());
    trackEvent(MixpanelEvent.Navigation, { from: pathname, to: "/documents-preview" });
    router.push("/documents-preview");
  };

  const handleDirectGeneration = async () => {
    setLoadingState({ isLoading: true, message: "Generating outlines...", showProgress: true, duration: 30 });
    trackEvent(MixpanelEvent.Upload_Create_Presentation_API_Call);
    const createResponse = await PresentationGenerationApi.createPresentation({
      content: config?.prompt ?? "", n_slides: config?.slides ? parseInt(config.slides) : null,
      file_paths: [], language: config?.language ?? "", tone: config?.tone,
      include_table_of_contents: !!config?.includeTableOfContents,
      include_title_slide: !!config?.includeTitleSlide, web_search: !!config?.webSearch,
      auto_theme: !!config?.autoTheme,
    });
    dispatch(setPresentationId(createResponse.id));
    dispatch(setPptGenUploadState({ config, files: [] }));
    dispatch(clearOutlines());
    trackEvent(MixpanelEvent.Navigation, { from: pathname, to: "/outline" });
    router.push("/outline");
  };

  return (
    <div className="upload-neo w-full max-w-2xl mx-auto px-4 pb-6 relative z-10">
      {loadingState.isLoading && (
        <div className="upload-heartbeat-overlay fixed inset-0 z-[1000] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />

          <div className="relative z-10 flex flex-col items-center gap-4 px-6">
            <div className="relative h-32 w-32">
              <span className="heartbeat-star heartbeat-star-1">✦</span>
              <span className="heartbeat-star heartbeat-star-2">✦</span>
              <span className="heartbeat-star heartbeat-star-3">✦</span>
              <span className="heartbeat-star heartbeat-star-4">✦</span>
              <span className="heartbeat-core" />
            </div>

            <div className="text-center">
              <p className="text-white font-semibold font-syne text-base">{loadingState.message || "Preparing your presentation..."}</p>
              {loadingState.extra_info && (
                <p className="text-white/75 font-syne text-xs mt-1">{loadingState.extra_info}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Wizard content */}
      <div className="relative min-h-[380px]">
        {/* ─── STEP 1: Topic & Attachments ─── */}
        {step === 1 && (
          <div className="w-full">
              <div className="text-center mb-4 md:mb-5">
                <h2 className="text-2xl md:text-3xl font-unbounded font-normal text-gray-900 mb-2">
                  What&apos;s your topic?
                </h2>
                <p className="text-gray-400 font-syne text-sm max-w-md mx-auto">
                  Describe your presentation topic or upload reference material to get started.
                </p>
              </div>

              <div className="glass-card p-0 mb-3 overflow-hidden">
                <textarea value={config.prompt} onChange={(e) => handleConfigChange("prompt", e.target.value)}
                  placeholder={animatedPlaceholder + "│"} rows={3} data-testid="prompt-input"
                  className="w-full bg-transparent text-gray-800 placeholder:text-gray-300 font-inter text-base p-4 resize-none focus:outline-none min-h-[120px] max-h-[220px] custom_scrollbar"
                />

                <div className="flex items-center justify-end px-4 pb-3">
                  <Button
                    onClick={() => { if (validateStep1()) goNext(); }}
                    className="rounded-full px-7 py-3 bg-[#2563EB] text-white font-syne font-semibold text-base hover:bg-[#1D4ED8] transition-all duration-300 btn-border-sweep group"
                  >
                    Continue <ArrowRight className="!w-4 !h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>

              <div className="glass-card p-4">
                <SupportingDoc files={[...files]} onFilesChange={setFiles} data-testid="file-upload-input" />
              </div>

          </div>
        )}

        {/* ─── STEP 2: Slides & Language ─── */}
        {step === 2 && (
          <div className="w-full">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-unbounded font-normal text-gray-900 mb-3">
                  Customize your deck
                </h2>
                <p className="text-gray-400 font-syne text-sm max-w-md mx-auto">
                  Choose how many slides you want and the language for your presentation.
                </p>
              </div>

              <div className="glass-card p-6 mb-4">
                <label className="text-sm font-semibold text-gray-500 font-syne mb-3 block">Number of slides</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {SLIDE_PRESETS.map((n) => (
                    <button key={n} onClick={() => handleConfigChange("slides", String(n))}
                      className={`px-4 py-2.5 rounded-xl text-sm font-semibold font-syne transition-all duration-200 ${
                        config.slides === String(n)
                          ? "bg-[#3B82F6] text-white shadow-md shadow-[#3B82F6]/25"
                          : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700 border border-gray-200"
                      }`}>
                      {n}
                    </button>
                  ))}
                  <div className="flex items-center gap-2">
                    <Input inputMode="numeric" pattern="[0-9]*" value={customSlideInput}
                      onChange={(e) => setCustomSlideInput(e.target.value.replace(/\D/g, ""))}
                      onBlur={() => { if (customSlideInput && Number(customSlideInput) > 0) handleConfigChange("slides", customSlideInput); }}
                      onKeyDown={(e) => { if (e.key === "Enter" && customSlideInput && Number(customSlideInput) > 0) handleConfigChange("slides", customSlideInput); }}
                      placeholder="Custom" className="h-10 w-20 px-3 text-sm bg-gray-50 border-gray-200 text-gray-600 placeholder:text-gray-300 rounded-xl font-syne" />
                  </div>
                </div>
                <p className="text-xs text-gray-400 font-syne">
                  Selected: <span className="text-[#60A5FA] font-semibold">{config.slides} slides</span>
                </p>
              </div>

              <div className="glass-card p-6">
                <label className="text-sm font-semibold text-gray-500 font-syne mb-3 flex items-center gap-2">
                  <Globe className="w-4 h-4" /> Language
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {POPULAR_LANGUAGES.map((lang) => (
                    <button key={lang} onClick={() => handleConfigChange("language", lang)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium font-syne transition-all duration-200 ${
                        config.language === lang
                          ? "bg-[#3B82F6] text-white shadow-md shadow-[#3B82F6]/25"
                          : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700 border border-gray-200"
                      }`}>
                      {lang}
                    </button>
                  ))}
                </div>
                <Select value={config.language || undefined} onValueChange={(v) => handleConfigChange("language", v)}>
                  <SelectTrigger className="w-full mt-2 bg-gray-50 border-gray-200 text-gray-500 rounded-xl text-sm font-syne focus:ring-[#3B82F6]/45 focus:border-[#3B82F6]/60 focus-visible:ring-[#3B82F6]/45 focus-visible:border-[#3B82F6]/60 focus-visible:ring-offset-0">
                    <SelectValue placeholder="Or choose another language…" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0f1b33] border-white/15 text-slate-100 max-h-60 rounded-xl shadow-[0_14px_30px_rgba(0,0,0,0.45)]">
                    {Object.values(LanguageType).map((lang) => (
                      <SelectItem key={lang} value={lang} className="text-slate-200 text-sm font-syne focus:bg-blue-500/20 focus:text-white">{lang}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <Button onClick={goBack} variant="ghost" className="rounded-full px-6 py-5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 font-syne group">
                  <ChevronLeft className="!w-4 !h-4 mr-1 transition-transform group-hover:-translate-x-1" /> Back
                </Button>
                <Button onClick={() => { if (validateStep2()) goNext(); }}
                  className="rounded-full px-8 py-5 bg-[#3B82F6] text-white font-syne font-semibold text-base hover:bg-[#2563EB] transition-all duration-300 btn-glow group">
                  Continue <ArrowRight className="!w-4 !h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
          </div>
        )}

        {/* ─── STEP 3: Advanced Settings + Generate ─── */}
        {step === 3 && (
          <div className="w-full">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-unbounded font-normal text-gray-900 mb-3">
                  Fine-tune & generate
                </h2>
                <p className="text-gray-400 font-syne text-sm max-w-md mx-auto">
                  Optionally adjust tone, verbosity, and other settings before generating.
                </p>
              </div>

              <div className="glass-card p-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-500 font-syne">Tone</label>
                    <Select value={config.tone} onValueChange={(v) => handleConfigChange("tone", v)}>
                      <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-600 rounded-xl font-syne text-sm capitalize focus:ring-[#3B82F6]/45 focus:border-[#3B82F6]/60 focus-visible:ring-[#3B82F6]/45 focus-visible:border-[#3B82F6]/60 focus-visible:ring-offset-0">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0f1b33] border-white/15 text-slate-100 rounded-xl shadow-[0_14px_30px_rgba(0,0,0,0.45)]">
                        {Object.values(ToneType).map((t) => (
                          <SelectItem key={t} value={t} className="text-slate-200 text-sm capitalize font-syne focus:bg-blue-500/20 focus:text-white">{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-500 font-syne">Verbosity</label>
                    <Select value={config.verbosity} onValueChange={(v) => handleConfigChange("verbosity", v)}>
                      <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-600 rounded-xl font-syne text-sm capitalize focus:ring-[#3B82F6]/45 focus:border-[#3B82F6]/60 focus-visible:ring-[#3B82F6]/45 focus-visible:border-[#3B82F6]/60 focus-visible:ring-offset-0">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0f1b33] border-white/15 text-slate-100 rounded-xl shadow-[0_14px_30px_rgba(0,0,0,0.45)]">
                        {Object.values(VerbosityType).map((v) => (
                          <SelectItem key={v} value={v} className="text-slate-200 text-sm capitalize font-syne focus:bg-blue-500/20 focus:text-white">{v}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-xs font-medium text-gray-500 font-syne">Table of Contents</span>
                    <Switch checked={config.includeTableOfContents}
                      className="data-[state=checked]:bg-[#3B82F6] data-[state=checked]:border-[#60A5FA] data-[state=unchecked]:bg-slate-700/70 data-[state=unchecked]:border-white/20 focus-visible:ring-[#3B82F6]/45 focus-visible:ring-offset-0"
                      onCheckedChange={(c) => handleConfigChange("includeTableOfContents", c)} />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-xs font-medium text-gray-500 font-syne">Title Slide</span>
                    <Switch checked={config.includeTitleSlide}
                      className="data-[state=checked]:bg-[#3B82F6] data-[state=checked]:border-[#60A5FA] data-[state=unchecked]:bg-slate-700/70 data-[state=unchecked]:border-white/20 focus-visible:ring-[#3B82F6]/45 focus-visible:ring-offset-0"
                      onCheckedChange={(c) => handleConfigChange("includeTitleSlide", c)} />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-xs font-medium text-gray-500 font-syne">Web Search</span>
                    <Switch checked={config.webSearch}
                      className="data-[state=checked]:bg-[#3B82F6] data-[state=checked]:border-[#60A5FA] data-[state=unchecked]:bg-slate-700/70 data-[state=unchecked]:border-white/20 focus-visible:ring-[#3B82F6]/45 focus-visible:ring-offset-0"
                      onCheckedChange={(c) => handleConfigChange("webSearch", c)} />
                  </div>
                  <div
                    className={`flex items-center justify-between p-3 rounded-xl border transition-colors ${
                      config.autoTheme
                        ? "bg-blue-500/12 border-blue-300/55"
                        : "bg-gray-50 border border-gray-100"
                    }`}
                  >
                    <span
                      className={`text-xs font-semibold font-syne flex items-center gap-1.5 ${
                        config.autoTheme ? "text-blue-300" : "text-gray-500"
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" /> AI Color Theme
                    </span>
                    <Switch checked={config.autoTheme}
                      className="data-[state=checked]:bg-[#3B82F6] data-[state=checked]:border-[#60A5FA] data-[state=unchecked]:bg-slate-700/70 data-[state=unchecked]:border-white/20 focus-visible:ring-[#3B82F6]/45 focus-visible:ring-offset-0"
                      onCheckedChange={(c) => handleConfigChange("autoTheme", c)} />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-500 font-syne">
                    Custom instructions <span className="text-gray-300 font-normal">(optional)</span>
                  </label>
                  <Textarea value={config.instructions} onChange={(e) => handleConfigChange("instructions", e.target.value)}
                    rows={3} placeholder="E.g. Focus on data-driven insights, use minimal text per slide…"
                    className="bg-gray-50 border-gray-200 text-gray-600 placeholder:text-gray-300 rounded-xl font-syne text-sm min-h-[80px] max-h-[150px] focus:border-[#3B82F6]/45 focus-visible:ring-[#3B82F6]/20 focus-visible:ring-offset-0" />
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <Button onClick={goBack} variant="ghost" className="rounded-full px-6 py-5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 font-syne group">
                  <ChevronLeft className="!w-4 !h-4 mr-1 transition-transform group-hover:-translate-x-1" /> Back
                </Button>
                <Button onClick={handleGenerate}
                  className="rounded-full px-10 py-5 bg-[#3B82F6] text-white font-syne font-bold text-base hover:bg-[#2563EB] transition-all duration-300 btn-glow group shadow-lg shadow-[#3B82F6]/20"
                  data-testid="next-button">
                  <Sparkles className="!w-5 !h-5 mr-2" /> Generate Presentation
                  <ChevronRight className="!w-5 !h-5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;