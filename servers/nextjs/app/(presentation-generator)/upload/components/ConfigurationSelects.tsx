import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { LanguageType, PresentationConfig, ToneType, VerbosityType } from "../type";
import { useState } from "react";
import { Check, ChevronsUpDown, GalleryVertical, Languages, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ToolTip from "@/components/ToolTip";

interface ConfigurationSelectsProps {
    config: PresentationConfig;
    onConfigChange: (key: keyof PresentationConfig, value: any) => void;
}

type SlideOption = "5" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20";
const SLIDE_OPTIONS: SlideOption[] = ["5", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

const SlideCountSelect: React.FC<{ value: string | null; onValueChange: (value: string) => void }> = ({ value, onValueChange }) => {
    const [customInput, setCustomInput] = useState(value && !SLIDE_OPTIONS.includes(value as SlideOption) ? value : "");
    const sanitize = (raw: string): string => { const d = raw.replace(/\D+/g, ""); return d ? d.replace(/^0+/, "") : ""; };
    const applyCustom = () => { const s = sanitize(customInput); if (s && Number(s) > 0) onValueChange(s); };

    return (
        <Select value={value || ""} onValueChange={onValueChange} name="slides">
            <SelectTrigger className="w-[140px] font-instrument_sans font-medium bg-gray-50 text-gray-600 hover:bg-gray-100 border-gray-200 focus-visible:ring-[#F25D6B]/20 flex items-center gap-2 h-10 rounded-xl px-3 shadow-none transition-colors" data-testid="slides-select">
                <div className="flex items-center gap-2.5"><GalleryVertical className="w-4 h-4 text-gray-400" /> <SelectValue placeholder="Select Slides" /></div>
            </SelectTrigger>
            <SelectContent className="font-instrument_sans bg-white border-gray-200 text-gray-700">
                <div className="sticky top-0 z-10 bg-white p-2 border-b border-gray-100" onMouseDown={(e) => e.stopPropagation()} onPointerDown={(e) => e.stopPropagation()} onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center gap-2">
                        <Input inputMode="numeric" pattern="[0-9]*" value={customInput}
                            onMouseDown={(e) => e.stopPropagation()} onPointerDown={(e) => e.stopPropagation()} onClick={(e) => e.stopPropagation()}
                            onChange={(e) => setCustomInput(sanitize(e.target.value))}
                            onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); applyCustom(); } }}
                            onBlur={applyCustom} placeholder="--"
                            className="h-8 w-16 px-2 text-sm bg-gray-50 border-gray-200 text-gray-600 placeholder:text-gray-300" />
                        <span className="text-sm font-medium text-gray-400">slides</span>
                    </div>
                </div>
                {value && !SLIDE_OPTIONS.includes(value as SlideOption) && <SelectItem value={value} className="hidden">{value} slides</SelectItem>}
                {SLIDE_OPTIONS.map((opt) => (
                    <SelectItem key={opt} value={opt} className="font-instrument_sans text-sm font-medium text-gray-600 focus:bg-gray-50" role="option">{opt} slides</SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

const LanguageSelect: React.FC<{ value: string | null; onValueChange: (value: string) => void; open: boolean; onOpenChange: (open: boolean) => void }> = ({ value, onValueChange, open, onOpenChange }) => (
    <Popover open={open} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" name="language" data-testid="language-select" aria-expanded={open}
                className="w-[180px] flex justify-between items-center gap-2 font-instrument_sans font-semibold overflow-hidden bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-700 border-gray-200 h-10 rounded-xl px-3 shadow-none transition-colors">
                <span className="flex justify-center items-center gap-2.5">
                    <span className="border border-gray-200 rounded-md p-1"><Languages className="w-4 h-4 text-gray-400" /></span>
                    <span className="text-sm font-medium truncate">{value || "Select language"}</span>
                </span>
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0 bg-white border-gray-200" align="end">
            <Command className="bg-transparent">
                <CommandInput placeholder="Search language..." className="font-instrument_sans text-gray-700 placeholder:text-gray-300" />
                <CommandList>
                    <CommandEmpty className="text-gray-400">No language found.</CommandEmpty>
                    <CommandGroup>
                        {Object.values(LanguageType).map((lang) => (
                            <CommandItem key={lang} value={lang} role="option"
                                onSelect={(v) => { onValueChange(v); onOpenChange(false); }}
                                className="font-instrument_sans text-gray-600 aria-selected:bg-gray-50">
                                <Check className={cn("mr-2 h-4 w-4", value === lang ? "opacity-100 text-[#F25D6B]" : "opacity-0")} />
                                {lang}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </Command>
        </PopoverContent>
    </Popover>
);

export function ConfigurationSelects({ config, onConfigChange }: ConfigurationSelectsProps) {
    const [openLanguage, setOpenLanguage] = useState(false);
    const [openAdvanced, setOpenAdvanced] = useState(false);
    const [advancedDraft, setAdvancedDraft] = useState({
        tone: config.tone, verbosity: config.verbosity, instructions: config.instructions,
        includeTableOfContents: config.includeTableOfContents, includeTitleSlide: config.includeTitleSlide, webSearch: config.webSearch,
    });

    const handleOpenAdvancedChange = (open: boolean) => {
        if (open) setAdvancedDraft({ tone: config.tone, verbosity: config.verbosity, instructions: config.instructions,
            includeTableOfContents: config.includeTableOfContents, includeTitleSlide: config.includeTitleSlide, webSearch: config.webSearch });
        setOpenAdvanced(open);
    };

    const handleSaveAdvanced = () => {
        onConfigChange("tone", advancedDraft.tone); onConfigChange("verbosity", advancedDraft.verbosity);
        onConfigChange("instructions", advancedDraft.instructions); onConfigChange("includeTableOfContents", advancedDraft.includeTableOfContents);
        onConfigChange("includeTitleSlide", advancedDraft.includeTitleSlide); onConfigChange("webSearch", advancedDraft.webSearch);
        setOpenAdvanced(false);
    };

    return (
        <div className="flex flex-wrap order-1 gap-4 items-center">
            <SlideCountSelect value={config.slides} onValueChange={(v) => onConfigChange("slides", v)} />
            <LanguageSelect value={config.language} onValueChange={(v) => onConfigChange("language", v)} open={openLanguage} onOpenChange={setOpenLanguage} />
            <ToolTip content="Advanced settings">
                <button aria-label="Advanced settings" title="Advanced settings" type="button" onClick={() => handleOpenAdvancedChange(true)}
                    className="ml-auto flex items-center gap-2 text-sm bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600 border border-gray-200 h-10 rounded-xl px-3 font-instrument_sans font-medium transition-colors"
                    data-testid="advanced-settings-button">
                    <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
                </button>
            </ToolTip>

            <Dialog open={openAdvanced} onOpenChange={handleOpenAdvancedChange}>
                <DialogContent className="max-w-2xl font-instrument_sans bg-white border-gray-200 text-gray-700">
                    <DialogHeader><DialogTitle className="text-gray-900">Advanced settings</DialogTitle></DialogHeader>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-600">Tone</label>
                            <p className="text-xs text-gray-400">Controls the writing style.</p>
                            <Select value={advancedDraft.tone} onValueChange={(v) => setAdvancedDraft((p) => ({ ...p, tone: v as ToneType }))}>
                                <SelectTrigger className="w-full font-instrument_sans capitalize font-medium bg-gray-50 border-gray-200 text-gray-600"><SelectValue /></SelectTrigger>
                                <SelectContent className="font-instrument_sans bg-white border-gray-200">
                                    {Object.values(ToneType).map((t) => (<SelectItem key={t} value={t} className="text-sm font-medium capitalize text-gray-600 focus:bg-gray-50">{t}</SelectItem>))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-600">Verbosity</label>
                            <p className="text-xs text-gray-400">Controls how detailed slides are.</p>
                            <Select value={advancedDraft.verbosity} onValueChange={(v) => setAdvancedDraft((p) => ({ ...p, verbosity: v as VerbosityType }))}>
                                <SelectTrigger className="w-full font-instrument_sans capitalize font-medium bg-gray-50 border-gray-200 text-gray-600"><SelectValue /></SelectTrigger>
                                <SelectContent className="font-instrument_sans bg-white border-gray-200">
                                    {Object.values(VerbosityType).map((v) => (<SelectItem key={v} value={v} className="text-sm font-medium capitalize text-gray-600 focus:bg-gray-50">{v}</SelectItem>))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-full flex flex-col gap-2 p-3 rounded-xl bg-gray-50 border border-gray-100">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-semibold text-gray-600">Table of contents</label>
                                <Switch checked={advancedDraft.includeTableOfContents} onCheckedChange={(c) => setAdvancedDraft((p) => ({ ...p, includeTableOfContents: c }))} />
                            </div>
                            <p className="text-xs text-gray-400">Index slide summarizing sections.</p>
                        </div>
                        <div className="w-full flex flex-col gap-2 p-3 rounded-xl bg-gray-50 border border-gray-100">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-semibold text-gray-600">Title slide</label>
                                <Switch checked={advancedDraft.includeTitleSlide} onCheckedChange={(c) => setAdvancedDraft((p) => ({ ...p, includeTitleSlide: c }))} />
                            </div>
                            <p className="text-xs text-gray-400">Include title as the first slide.</p>
                        </div>
                        <div className="w-full flex flex-col gap-2 p-3 rounded-xl bg-gray-50 border border-gray-100">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-semibold text-gray-600">Web search</label>
                                <Switch checked={advancedDraft.webSearch} onCheckedChange={(c) => setAdvancedDraft((p) => ({ ...p, webSearch: c }))} />
                            </div>
                            <p className="text-xs text-gray-400">Consult the web for fresher facts.</p>
                        </div>
                        <div className="w-full sm:col-span-2 flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-600">Instructions</label>
                            <Textarea value={advancedDraft.instructions} rows={4}
                                onChange={(e) => setAdvancedDraft((p) => ({ ...p, instructions: e.target.value }))}
                                placeholder="Example: Focus on enterprise buyers, emphasize ROI…"
                                className="py-2 px-3 border border-gray-200 bg-gray-50 text-gray-600 placeholder:text-gray-300 font-medium text-sm min-h-[100px] max-h-[200px] focus:border-[#F25D6B]/40 focus-visible:ring-[#F25D6B]/15 focus-visible:ring-offset-0 rounded-xl" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => handleOpenAdvancedChange(false)} className="bg-gray-50 border-gray-200 text-gray-500 hover:bg-gray-100">Cancel</Button>
                        <Button onClick={handleSaveAdvanced} className="bg-[#F25D6B] text-white hover:bg-[#E04A58]">Save</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}