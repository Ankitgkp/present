"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { OverlayLoader } from "@/components/ui/overlay-loader";
import Wrapper from "@/components/Wrapper";
import OutlineContent from "./OutlineContent";
import EmptyStateView from "./EmptyStateView";
import GenerateButton from "./GenerateButton";

import { TABS, Template } from "../types/index";
import { useOutlineStreaming } from "../hooks/useOutlineStreaming";
import { useOutlineManagement } from "../hooks/useOutlineManagement";
import { usePresentationGeneration } from "../hooks/usePresentationGeneration";
import TemplateSelection from "./TemplateSelection";
import { TemplateLayoutsWithSettings } from "@/app/presentation-templates/utils";
import { Separator } from "@/components/ui/separator";

const OutlinePage: React.FC = () => {
  const { presentation_id, outlines } = useSelector(
    (state: RootState) => state.presentationGeneration
  );
  
  const { config } = useSelector(
    (state: RootState) => state.pptGenUpload
  );
  const isAutoTheme = !!config?.autoTheme;

  const [activeTab, setActiveTab] = useState<string>(TABS.OUTLINE);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateLayoutsWithSettings | string | null>(null);
  // Custom hooks
  const streamState = useOutlineStreaming(presentation_id);
  const { handleDragEnd, handleAddSlide } = useOutlineManagement(outlines);
  const { loadingState, handleSubmit } = usePresentationGeneration(
    presentation_id,
    outlines,
    selectedTemplate,
    setActiveTab,
    isAutoTheme
  );
  if (!presentation_id) {
    return <EmptyStateView />;
  }


  return (
    <div className="font-syne pb-24 relative z-10">

      <OverlayLoader
        show={loadingState.isLoading}
        text={loadingState.message}
        showProgress={loadingState.showProgress}
        duration={loadingState.duration}
      />

      <Wrapper className="h-full flex flex-col w-full relative px-5 sm:px-8 lg:px-12 max-w-[1280px] mx-auto">
        <div className="w-full mx-auto">
          <div className="mt-5 mb-4 flex flex-col gap-1">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Presentation Outline</h1>
            <p className="text-sm text-slate-600">Review and refine your slides before generating the final deck.</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
            <TabsList className="my-2 h-auto w-fit rounded-xl border border-blue-100 bg-[#f4f8ff] p-1">
              <TabsTrigger
                value={TABS.OUTLINE}
                className="rounded-lg px-4 py-2 text-xs font-medium text-slate-600 shadow-none data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm"
              >
                Outline & Content
              </TabsTrigger>
              {!isAutoTheme && (
                <>
                  <Separator orientation="vertical" className="h-6 mx-1" />
                  <TabsTrigger
                    value={TABS.LAYOUTS}
                    className="relative rounded-lg px-4 py-2 text-xs font-medium text-slate-600 shadow-none data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm"
                  >
                    Select Template
                  </TabsTrigger>
                </>
              )}
            </TabsList>

            <div className="flex-grow w-full mx-auto mt-3 rounded-2xl border border-blue-100 bg-[#f7faff]/90 p-3 sm:p-4 shadow-[0_8px_24px_rgba(37,99,235,0.08)]">
              <TabsContent value={TABS.OUTLINE} className="h-[calc(100vh-16.5rem)] overflow-y-auto hide-scrollbar"
              >
                <div>
                  <OutlineContent
                    outlines={outlines}
                    isLoading={streamState.isLoading}
                    isStreaming={streamState.isStreaming}
                    activeSlideIndex={streamState.activeSlideIndex}
                    highestActiveIndex={streamState.highestActiveIndex}
                    onDragEnd={handleDragEnd}
                    onAddSlide={handleAddSlide}
                  />
                </div>
              </TabsContent>

              {!isAutoTheme && (
                <TabsContent value={TABS.LAYOUTS} className="h-[calc(100vh-16.5rem)] overflow-y-auto hide-scrollbar">
                  <div>
                    <TemplateSelection
                      selectedTemplate={selectedTemplate}
                      onSelectTemplate={setSelectedTemplate}
                    />
                  </div>
                </TabsContent>
              )}
            </div>
          </Tabs>

          <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
            <GenerateButton
              outlineCount={outlines.length}
              loadingState={loadingState}
              streamState={streamState}
              selectedTemplate={selectedTemplate}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default OutlinePage;