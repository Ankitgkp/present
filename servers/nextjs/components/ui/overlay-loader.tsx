import { cn } from "@/lib/utils"
import { ProgressBar } from "./progress-bar"
import { useEffect, useState } from "react"

interface OverlayLoaderProps {
    text?: string
    className?: string
    show: boolean
    showProgress?: boolean
    duration?: number
    extra_info?: string
    onProgressComplete?: () => void
}

export const OverlayLoader = ({
    text,
    className,
    show,
    showProgress = false,
    duration = 10,
    onProgressComplete,
    extra_info
}: OverlayLoaderProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (show) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [show]);

    if (!show) return null;

    return (
        <div
            style={{
                zIndex: 1000
            }}
            className={cn(
                "upload-heartbeat-overlay fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
                isVisible ? "opacity-100" : "opacity-0"
            )}
        >
            <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />

            <div
                className={cn(
                    "relative z-10 flex flex-col items-center justify-center px-6 pt-1 pb-4",
                    "min-w-[280px] sm:min-w-[330px] transition-all duration-400 ease-out",
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90",
                    className
                )}

            >
                <div className="relative h-32 w-32 mb-2">
                    <span className="heartbeat-star heartbeat-star-1">✦</span>
                    <span className="heartbeat-star heartbeat-star-2">✦</span>
                    <span className="heartbeat-star heartbeat-star-3">✦</span>
                    <span className="heartbeat-star heartbeat-star-4">✦</span>
                    <span className="heartbeat-core" />
                </div>

                {showProgress ? (
                    <div className="w-full space-y-4 pt-1">
                        <ProgressBar
                            duration={duration}
                            onComplete={onProgressComplete}
                        />
                        {text && (
                            <div className="space-y-1">
                                <p className="text-white text-base text-center font-semibold font-inter drop-shadow-[0_2px_10px_rgba(37,99,235,0.35)]">
                                    {text}
                                </p>
                                {extra_info && <p className="text-white/80 text-xs text-center font-semibold font-inter">{extra_info}</p>}
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <p className="text-white text-base text-center font-semibold font-inter drop-shadow-[0_2px_10px_rgba(37,99,235,0.35)]">
                            {text}
                        </p>
                        {extra_info && <p className="text-white/80 text-xs text-center font-semibold font-inter">{extra_info}</p>}
                    </>

                )}
            </div>
        </div>
    )
} 