"use client";

import React from "react";
import { LayoutDashboard, Star, Brain, Settings, Palette } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const defaultNavItems = [
    { key: "dashboard" as const, label: "Dashboard", icon: LayoutDashboard },
    { key: "templates" as const, label: "Standard", icon: Star },
    { key: "designs" as const, label: "Smart", icon: Brain },
];
export const BelongingNavItems = [
    { key: "settings" as const, label: "Settings", icon: Settings },
]

const DashboardSidebar = () => {
    const pathname = usePathname();
    const activeTab = pathname.split("?")[0].split("/").pop();
    const router = useRouter();

    return (
        <aside className="sticky top-0 h-screen w-[80px] flex flex-col justify-between bg-white border-r border-gray-100 px-3 py-6" aria-label="Dashboard sidebar">
            <div>
                <div onClick={() => router.push("/dashboard")} className="flex items-center pb-5 border-b border-gray-100 gap-2">
                    <div className="cursor-pointer p-[2px] rounded-xl bg-gradient-to-br from-[#F25D6B]/20 to-[#F25D6B]/5 flex justify-center items-center mx-auto transition-all duration-300 hover:from-[#F25D6B]/30 hover:to-[#F25D6B]/10">
                        <div className="bg-white rounded-[10px] p-1.5 flex justify-center items-center">
                            <img src="/logo-with-bg.png" alt="Presenton logo" className="h-[32px] w-[32px] object-contain" />
                        </div>
                    </div>
                </div>
                <nav className="pt-5 font-syne" aria-label="Dashboard sections">
                    <div className="space-y-1">
                        <Link prefetch={false} href="/dashboard"
                            className={["flex flex-col items-center gap-1.5 py-2.5 rounded-xl transition-all duration-200 group",
                                pathname === "/dashboard" ? "bg-[#FEF2F2] text-[#F25D6B]" : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                            ].join(" ")} aria-label="Dashboard" title="Dashboard">
                            <LayoutDashboard className={`h-[18px] w-[18px] transition-all duration-200 ${pathname === "/dashboard" ? "text-[#F25D6B]" : "group-hover:text-gray-600"}`} />
                            <span className={`text-[10px] font-medium tracking-wide ${pathname === "/dashboard" ? "text-[#F25D6B]" : ""}`}>Dashboard</span>
                        </Link>
                        <Link prefetch={false} href="/templates"
                            className={["flex flex-col items-center gap-1.5 py-2.5 rounded-xl transition-all duration-200 group",
                                pathname === "/templates" ? "bg-[#FEF2F2] text-[#F25D6B]" : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                            ].join(" ")} aria-label="Templates" title="Templates">
                            <Star className={`h-[18px] w-[18px] transition-all duration-200 ${pathname === "/templates" ? "text-[#F25D6B]" : "group-hover:text-gray-600"}`} />
                            <span className={`text-[10px] font-medium tracking-wide ${pathname === "/templates" ? "text-[#F25D6B]" : ""}`}>Templates</span>
                        </Link>
                        <Link prefetch={false} href="/theme"
                            className={["flex flex-col items-center gap-1.5 py-2.5 rounded-xl transition-all duration-200 group",
                                pathname === "/theme" ? "bg-[#FEF2F2] text-[#F25D6B]" : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                            ].join(" ")} aria-label="Theme" title="Theme">
                            <Palette className={`h-[18px] w-[18px] transition-all duration-200 ${pathname === "/theme" ? "text-[#F25D6B]" : "group-hover:text-gray-600"}`} />
                            <span className={`text-[10px] font-medium tracking-wide ${pathname === "/theme" ? "text-[#F25D6B]" : ""}`}>Themes</span>
                        </Link>
                    </div>
                </nav>
            </div>
            <div className="pt-4 border-t border-gray-100">
                {BelongingNavItems.map(({ key, label: itemLabel, icon: Icon }) => {
                    const isActive = activeTab === key;
                    return (
                        <Link prefetch={false} key={key} href={`/${key}`}
                            className={["flex flex-col items-center gap-1.5 py-2.5 rounded-xl transition-all duration-200 group",
                                isActive ? "bg-[#FEF2F2] text-[#F25D6B]" : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                            ].join(" ")} aria-label={itemLabel} title={itemLabel}>
                            <Icon className={`h-[18px] w-[18px] transition-all duration-200 ${isActive ? "text-[#F25D6B]" : "group-hover:text-gray-600"}`} />
                            <span className={`text-[10px] font-medium tracking-wide ${isActive ? "text-[#F25D6B]" : ""}`}>{itemLabel}</span>
                        </Link>
                    );
                })}
            </div>
        </aside>
    );
};

export default DashboardSidebar;
