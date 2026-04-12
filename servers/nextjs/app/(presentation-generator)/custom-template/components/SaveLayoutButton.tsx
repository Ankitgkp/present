import React from "react";
import { Button } from "@/components/ui/button";
import { FileText, Loader2 } from "lucide-react";

interface SaveLayoutButtonProps {
  onSave: () => void;
  isSaving: boolean;
  isProcessing: boolean;
}

export const SaveLayoutButton: React.FC<SaveLayoutButtonProps> = ({
  onSave,
  isSaving,
  isProcessing,
}) => {
  
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <Button
        onClick={onSave}
        disabled={isSaving || isProcessing}
        className="btn-border-sweep rounded-full border border-[#6aaeff]/40 bg-[#2c6cff] px-10 py-3 text-lg text-white shadow-[0_18px_44px_rgba(44,108,255,0.32)] transition-all duration-200 hover:bg-[#3777ff] hover:shadow-[0_22px_50px_rgba(44,108,255,0.4)]"
        size="lg"
      >
        {isSaving ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Saving Template...
          </>
        ) : (
          <>
            <FileText className="w-5 h-5 mr-2" />
            Save as Template
          </>
        )}
      </Button>
    </div>
  );
}; 
