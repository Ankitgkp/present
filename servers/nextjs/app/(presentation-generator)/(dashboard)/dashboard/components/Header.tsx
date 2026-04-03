"use client";

import Wrapper from "@/components/Wrapper";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackEvent, MixpanelEvent } from "@/utils/mixpanel";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="w-full sticky top-0 z-50 py-7">
      <Wrapper className="px-5 sm:px-10 lg:px-20">
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" onClick={() => trackEvent(MixpanelEvent.Navigation, { from: pathname, to: "/dashboard" })}>
              <div className="p-[2px] rounded-xl bg-gradient-to-br from-[#F25D6B]/15 to-transparent transition-all duration-300 hover:from-[#F25D6B]/25">
                <div className="bg-white rounded-[10px] p-1 shadow-sm">
                  <img src="/logo-with-bg.png" alt="Presentation logo" className="h-[36px] w-[36px]" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
