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
  Layers,
  Settings2,
  FileText,
  Globe,
  Check,
} from "lucide-react";
import { toast } from "sonner";
import { PresentationGenerationApi } from "../../services/api/presentation-generation";
import { OverlayLoader } from "@/components/ui/overlay-loader";
import { setPptGenUploadState } from "@/store/slices/presentationGenUpload";
import { trackEvent, MixpanelEvent } from "@/utils/mixpanel";
import { motion, AnimatePresence } from "framer-motion";
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

// ─── Step indicator ────────────────────────────────
const StepIndicator = ({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) => (
  <div className="flex items-center gap-2">
    {Array.from({ length: totalSteps }, (_, i) => (
      <React.Fragment key={i}>
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-semibold transition-all duration-500 ${
            i + 1 < currentStep
              ? "bg-[#F25D6B] text-white scale-90"
              : i + 1 === currentStep
              ? "bg-[#F25D6B] text-white ring-4 ring-[#F25D6B]/15 scale-100"
              : "bg-gray-100 text-gray-400 scale-90"
          }`}
        >
          {i + 1 < currentStep ? (
            <Check className="w-3.5 h-3.5" />
          ) : (
            i + 1
          )}
        </div>
        {i < totalSteps - 1 && (
          <div
            className={`h-[2px] w-8 rounded-full transition-all duration-500 ${
              i + 1 < currentStep ? "bg-[#F25D6B]" : "bg-gray-200"
            }`}
          />
        )}
      </React.Fragment>
    ))}
  </div>
);

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

// ─── Step transition (kept minimal, no fade-in) ────
const pageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 40 : -40,
    opacity: 0,
  }),
};

const pageTransition: any = {
  type: "spring",
  stiffness: 350,
  damping: 35,
};

// ─── Main Component ────────────────────────────────
const UploadPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
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
    setDirection(1);
    setStep((s) => Math.min(s + 1, 3));
  };

  const goBack = () => {
    setDirection(-1);
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
    <div className="w-full max-w-2xl mx-auto px-4 pb-16 relative z-10">
      <OverlayLoader show={loadingState.isLoading} text={loadingState.message}
        showProgress={loadingState.showProgress} duration={loadingState.duration} extra_info={loadingState.extra_info} />

      {/* Step indicator */}
      <div className="flex justify-center mb-10">
        <StepIndicator currentStep={step} totalSteps={3} />
      </div>

      {/* Wizard content */}
      <div className="relative min-h-[420px]">
        <AnimatePresence mode="wait" custom={direction}>
          {/* ─── STEP 1: Topic & Attachments ─── */}
          {step === 1 && (
            <motion.div key="step1" custom={direction} variants={pageVariants}
              initial="enter" animate="center" exit="exit" transition={pageTransition} className="w-full">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FEF2F2] border border-[#F25D6B]/15 text-[#F25D6B] text-xs font-semibold font-syne mb-4">
                  <FileText className="w-3.5 h-3.5" /> Step 1 of 3
                </div>
                <h2 className="text-3xl md:text-4xl font-unbounded font-normal text-gray-900 mb-3">
                  What&apos;s your topic?
                </h2>
                <p className="text-gray-400 font-syne text-sm max-w-md mx-auto">
                  Describe your presentation topic or upload reference material to get started.
                </p>
              </div>

              <div className="glass-card p-1 mb-4">
                <textarea value={config.prompt} onChange={(e) => handleConfigChange("prompt", e.target.value)}
                  placeholder={animatedPlaceholder + "│"} rows={4} data-testid="prompt-input"
                  className="w-full bg-transparent text-gray-800 placeholder:text-gray-300 font-inter text-base p-5 resize-none focus:outline-none min-h-[140px] max-h-[240px] custom_scrollbar rounded-2xl"
                />
              </div>

              <div className="glass-card p-5">
                <SupportingDoc files={[...files]} onFilesChange={setFiles} data-testid="file-upload-input" />
              </div>

              <div className="mt-8 flex justify-end">
                <Button onClick={() => { if (validateStep1()) goNext(); }}
                  className="rounded-full px-8 py-5 bg-[#F25D6B] text-white font-syne font-semibold text-base hover:bg-[#E04A58] transition-all duration-300 btn-glow group">
                  Continue <ArrowRight className="!w-4 !h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* ─── STEP 2: Slides & Language ─── */}
          {step === 2 && (
            <motion.div key="step2" custom={direction} variants={pageVariants}
              initial="enter" animate="center" exit="exit" transition={pageTransition} className="w-full">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FEF2F2] border border-[#F25D6B]/15 text-[#F25D6B] text-xs font-semibold font-syne mb-4">
                  <Layers className="w-3.5 h-3.5" /> Step 2 of 3
                </div>
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
                          ? "bg-[#F25D6B] text-white shadow-md shadow-[#F25D6B]/20"
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
                  Selected: <span className="text-[#F25D6B] font-semibold">{config.slides} slides</span>
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
                          ? "bg-[#F25D6B] text-white shadow-md shadow-[#F25D6B]/20"
                          : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700 border border-gray-200"
                      }`}>
                      {lang}
                    </button>
                  ))}
                </div>
                <Select value={config.language || undefined} onValueChange={(v) => handleConfigChange("language", v)}>
                  <SelectTrigger className="w-full mt-2 bg-gray-50 border-gray-200 text-gray-500 rounded-xl text-sm font-syne">
                    <SelectValue placeholder="Or choose another language…" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200 max-h-60">
                    {Object.values(LanguageType).map((lang) => (
                      <SelectItem key={lang} value={lang} className="text-gray-600 text-sm font-syne focus:bg-gray-50">{lang}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <Button onClick={goBack} variant="ghost" className="rounded-full px-6 py-5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 font-syne group">
                  <ChevronLeft className="!w-4 !h-4 mr-1 transition-transform group-hover:-translate-x-1" /> Back
                </Button>
                <Button onClick={() => { if (validateStep2()) goNext(); }}
                  className="rounded-full px-8 py-5 bg-[#F25D6B] text-white font-syne font-semibold text-base hover:bg-[#E04A58] transition-all duration-300 btn-glow group">
                  Continue <ArrowRight className="!w-4 !h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* ─── STEP 3: Advanced Settings + Generate ─── */}
          {step === 3 && (
            <motion.div key="step3" custom={direction} variants={pageVariants}
              initial="enter" animate="center" exit="exit" transition={pageTransition} className="w-full">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FEF2F2] border border-[#F25D6B]/15 text-[#F25D6B] text-xs font-semibold font-syne mb-4">
                  <Settings2 className="w-3.5 h-3.5" /> Step 3 of 3
                </div>
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
                      <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-600 rounded-xl font-syne text-sm capitalize">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-200">
                        {Object.values(ToneType).map((t) => (
                          <SelectItem key={t} value={t} className="text-gray-600 text-sm capitalize font-syne focus:bg-gray-50">{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-500 font-syne">Verbosity</label>
                    <Select value={config.verbosity} onValueChange={(v) => handleConfigChange("verbosity", v)}>
                      <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-600 rounded-xl font-syne text-sm capitalize">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-200">
                        {Object.values(VerbosityType).map((v) => (
                          <SelectItem key={v} value={v} className="text-gray-600 text-sm capitalize font-syne focus:bg-gray-50">{v}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-xs font-medium text-gray-500 font-syne">Table of Contents</span>
                    <Switch checked={config.includeTableOfContents}
                      onCheckedChange={(c) => handleConfigChange("includeTableOfContents", c)} />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-xs font-medium text-gray-500 font-syne">Title Slide</span>
                    <Switch checked={config.includeTitleSlide}
                      onCheckedChange={(c) => handleConfigChange("includeTitleSlide", c)} />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-xs font-medium text-gray-500 font-syne">Web Search</span>
                    <Switch checked={config.webSearch}
                      onCheckedChange={(c) => handleConfigChange("webSearch", c)} />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-purple-50/50 border border-purple-100">
                    <span className="text-xs font-semibold text-purple-600 font-syne flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" /> AI Color Theme</span>
                    <Switch checked={config.autoTheme}
                      onCheckedChange={(c) => handleConfigChange("autoTheme", c)} />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-500 font-syne">
                    Custom instructions <span className="text-gray-300 font-normal">(optional)</span>
                  </label>
                  <Textarea value={config.instructions} onChange={(e) => handleConfigChange("instructions", e.target.value)}
                    rows={3} placeholder="E.g. Focus on data-driven insights, use minimal text per slide…"
                    className="bg-gray-50 border-gray-200 text-gray-600 placeholder:text-gray-300 rounded-xl font-syne text-sm min-h-[80px] max-h-[150px] focus:border-[#F25D6B]/40 focus-visible:ring-[#F25D6B]/15 focus-visible:ring-offset-0" />
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <Button onClick={goBack} variant="ghost" className="rounded-full px-6 py-5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 font-syne group">
                  <ChevronLeft className="!w-4 !h-4 mr-1 transition-transform group-hover:-translate-x-1" /> Back
                </Button>
                <Button onClick={handleGenerate}
                  className="rounded-full px-10 py-5 bg-[#F25D6B] text-white font-syne font-bold text-base hover:bg-[#E04A58] transition-all duration-300 btn-glow group shadow-lg shadow-[#F25D6B]/15"
                  data-testid="next-button">
                  <Sparkles className="!w-5 !h-5 mr-2" /> Generate Presentation
                  <ChevronRight className="!w-5 !h-5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UploadPage;