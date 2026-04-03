"use client";

import { ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { defaultNavItems } from './DashboardSidebar';
import { usePathname } from 'next/navigation';

const DashboardNav = () => {
    const pathname = usePathname();
    const activeTab = pathname.split("?")[0].split("/").pop();
    const activeItem = defaultNavItems.find((i: any) => i.key === activeTab);

    return (
        <div className="sticky top-0 right-0 z-50 py-[28px] backdrop-blur-md bg-[#FAFAFA]/80">
            <div className="flex xl:flex-row flex-col gap-6 xl:gap-0 items-center justify-between">
                <h3 className="text-[28px] tracking-[-0.84px] font-unbounded font-normal text-gray-900 flex items-center gap-2">
                    {activeItem?.label ?? (activeTab && activeTab?.charAt(0).toUpperCase() + activeTab?.slice(1))}
                </h3>
                <div className="flex gap-2.5 max-sm:w-full max-md:justify-center max-sm:flex-wrap">
                    {activeTab !== "playground" && activeTab !== "theme" && <Link href="/generate"
                        className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-white text-sm font-semibold font-syne bg-[#F25D6B] hover:bg-[#E04A58] transition-all duration-300 btn-glow"
                        aria-label="Create new presentation">
                        <Sparkles className="w-4 h-4" />
                        <span className="hidden md:inline">New presentation</span><span className="md:hidden">New</span>
                        <ChevronRight className="w-4 h-4" />
                    </Link>}
                    {activeTab === "theme" && <Link href="/theme?tab=new-theme"
                        className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-white text-sm font-semibold font-syne bg-[#F25D6B] hover:bg-[#E04A58] transition-all duration-300 btn-glow"
                        aria-label="Create new themes">
                        <Sparkles className="w-4 h-4" />
                        <span className="hidden md:inline">New Themes</span><span className="md:hidden">New</span>
                        <ChevronRight className="w-4 h-4" />
                    </Link>}
                </div>
            </div>
        </div>
    )
}

export default DashboardNav
