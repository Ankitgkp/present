import { Textarea } from "@/components/ui/textarea";

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function PromptInput({ value, onChange }: PromptInputProps) {
  return (
    <div className="space-y-2 font-syne">
      <div className="relative">
        <Textarea
          value={value}
          rows={5}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Tell us about your presentation"
          data-testid="prompt-input"
          className="py-4 px-5 border border-gray-200 bg-gray-50/50 text-gray-800 placeholder:text-gray-300 font-medium font-instrument_sans text-base min-h-[150px] max-h-[300px] focus:border-[#F25D6B]/40 focus-visible:ring-[#F25D6B]/15 focus-visible:ring-offset-0 overflow-y-auto custom_scrollbar rounded-xl transition-colors duration-200"
        />
      </div>
    </div>
  );
}