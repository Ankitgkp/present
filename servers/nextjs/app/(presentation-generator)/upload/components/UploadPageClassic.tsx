/**
 * UploadPageClassic — Single-page form (Classic UI)
 */

"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { clearOutlines, setPresentationId } from "@/store/slices/presentationGeneration";
import { PromptInput } from "./PromptInput";
import { LanguageType, PresentationConfig, ToneType, VerbosityType } from "../type";
import SupportingDoc from "./SupportingDoc";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { PresentationGenerationApi } from "../../services/api/presentation-generation";
import { OverlayLoader } from "@/components/ui/overlay-loader";
import Wrapper from "@/components/Wrapper";
import { setPptGenUploadState } from "@/store/slices/presentationGenUpload";
import { trackEvent, MixpanelEvent } from "@/utils/mixpanel";
import { ConfigurationSelects } from "./ConfigurationSelects";

interface LoadingState {
  isLoading: boolean;
  message: string;
  duration?: number;
  showProgress?: boolean;
  extra_info?: string;
}

const UploadPageClassic = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

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

  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: false, message: "", duration: 4, showProgress: false, extra_info: "",
  });

  const handleConfigChange = (key: keyof PresentationConfig, value: string) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const validateConfiguration = (): boolean => {
    if (!config.language || !config.slides) { toast.error("Please select number of Slides & Language"); return false; }
    if (!config.prompt.trim() && files.length === 0) { toast.error("No Prompt or Document Provided"); return false; }
    return true;
  };

  const handleGeneratePresentation = async () => {
    if (!validateConfiguration()) return;
    try {
      if (files.length > 0) { await handleDocumentProcessing(); } else { await handleDirectPresentationGeneration(); }
    } catch (error) { handleGenerationError(error); }
  };

  const handleDocumentProcessing = async () => {
    setLoadingState({ isLoading: true, message: "Processing documents...", showProgress: true, duration: 90,
      extra_info: files.length > 0 ? "It might take a few minutes for large documents." : "" });
    let documents = [];
    if (files.length > 0) { trackEvent(MixpanelEvent.Upload_Upload_Documents_API_Call); documents = await PresentationGenerationApi.uploadDoc(files); }
    const promises: Promise<any>[] = [];
    if (documents.length > 0) { trackEvent(MixpanelEvent.Upload_Decompose_Documents_API_Call); promises.push(PresentationGenerationApi.decomposeDocuments(documents)); }
    const responses = await Promise.all(promises);
    dispatch(setPptGenUploadState({ config, files: responses }));
    dispatch(clearOutlines());
    trackEvent(MixpanelEvent.Navigation, { from: pathname, to: "/documents-preview" });
    router.push("/documents-preview");
  };

  const handleDirectPresentationGeneration = async () => {
    setLoadingState({ isLoading: true, message: "Generating outlines...", showProgress: true, duration: 30 });
    trackEvent(MixpanelEvent.Upload_Create_Presentation_API_Call);
    const createResponse = await PresentationGenerationApi.createPresentation({
      content: config?.prompt ?? "", n_slides: config?.slides ? parseInt(config.slides) : null, file_paths: [],
      language: config?.language ?? "", tone: config?.tone, verbosity: config?.verbosity,
      instructions: config?.instructions || null, include_table_of_contents: !!config?.includeTableOfContents,
      include_title_slide: !!config?.includeTitleSlide, web_search: !!config?.webSearch, auto_theme: !!config?.autoTheme,
    });
    dispatch(setPresentationId(createResponse.id));
    dispatch(setPptGenUploadState({ config, files: [] }));
    dispatch(clearOutlines());
    trackEvent(MixpanelEvent.Navigation, { from: pathname, to: "/outline" });
    router.push("/outline");
  };

  const handleGenerationError = (error: any) => {
    console.error("Error in upload page", error);
    setLoadingState({ isLoading: false, message: "", duration: 0, showProgress: false });
    toast.error("Error", { description: error.message || "Error in upload page." });
  };

  return (
    <Wrapper className="upload-neo pb-10 lg:max-w-[70%] xl:max-w-[65%] relative z-10">
      <OverlayLoader show={loadingState.isLoading} text={loadingState.message}
        showProgress={loadingState.showProgress} duration={loadingState.duration} extra_info={loadingState.extra_info} />
      <div className="glass-card glow-border">
        <div className="flex flex-col gap-4 md:items-center md:flex-row justify-between p-4 md:p-5">
          <div>
            <h2 className="text-lg font-unbounded tracking-tight text-gray-900">Configuration</h2>
            <p className="text-sm text-gray-400 font-syne">Choose slides, tone, and language preferences.</p>
          </div>
          <ConfigurationSelects config={config} onConfigChange={handleConfigChange} />
        </div>
        <div className="border-t border-gray-100" />

        <div className="p-4 md:p-6">
          <h3 className="text-base font-normal font-unbounded text-gray-800 mb-2">Content</h3>
          <PromptInput value={config.prompt} onChange={(value) => handleConfigChange("prompt", value)} data-testid="prompt-input" />
        </div>
        <div className="border-t border-gray-100" />
        <div className="p-4 md:p-6">
          <h3 className="text-base font-normal font-unbounded text-gray-800 mb-2">Attachments (optional)</h3>
          <SupportingDoc files={[...files]} onFilesChange={setFiles} data-testid="file-upload-input" />
        </div>
        <div className="border-t border-gray-100" />

        <div className="p-4 md:p-6">
          <Button onClick={handleGeneratePresentation}
            className="w-full rounded-full flex items-center justify-center py-5 bg-[#F25D6B] text-white font-syne font-semibold text-lg hover:bg-[#E04A58] transition-all duration-300 btn-glow group"
            data-testid="next-button">
            <Sparkles className="!w-5 !h-5 mr-2" />
            <span>Generate Presentation</span>
            <ChevronRight className="!w-5 !h-5 ml-1.5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default UploadPageClassic;