import MailMenu from "./MailMenu";
import MailList from "./MailList";
import ArrowIcon from "@assets/icons/icon_arrow.svg?react";
import { MAILLIST_VARIANTS as VARIANTS } from "../constants/variant";
import type { Variant } from "../constants/variant";
import TabImage from "@assets/images/tab.svg?react";
import BrowserBackground from "@assets/images/browser_bg.svg?react";
import CloseIcon from "@assets/icons/icon_close.svg?react";

interface MailContainerProps {
  variant?: Variant;
}

export default function MailContainer({
  variant = "orange",
}: MailContainerProps) {
  return (
    <div className="relative w-[960px] h-[80vh] mx-auto mt-10 box-border">
      {/* 배경 */}
      <BrowserBackground className="absolute inset-0 translate-x-2 translate-y-3 w-full h-full z-0 " />
      {/* 실제 컨텐츠 */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="relative">
          <TabImage className="relative left-[-1px] w-[calc(100%+2px)]" />
          <div
            className={`absolute top-4 z-2 flex items-center justify-between gap-2 w-[350px] pl-6 pr-3`}
          >
            <div className="flex items-center gap-2">
              {VARIANTS[variant].logoIcon}
              <h3 className="font-bold text-[23px]">LOTTECAST_EMAIL</h3>
            </div>
            <button type="button">
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute bottom-3 left-0 h-[36px] pl-4 pr-2 w-full flex items-center gap-3">
            <div className="flex items-center gap-3">
              <ArrowIcon className="rotate-180" />
              <ArrowIcon />
            </div>
            <div className="flex items-center gap-3 flex-1 pr-1">
              <div
                className={`px-4 w-full py-1 border-2 rounded-[14px] text-[15px] ${VARIANTS[variant].contentBg} `}
              >
                www.lottecastemail.com
              </div>
              {VARIANTS[variant].startIcon}
            </div>
          </div>
        </div>

        {/* 본문 */}
        <div
          className={`flex-1 overflow-hidden border-l-[4px] border-r-[4px] border-b-[4px] rounded-b-[10px] ${VARIANTS[variant].bg}`}
        >
          {/* 컨텐츠 */}
          <div className={`flex ${VARIANTS[variant].contentBg} h-full`}>
            <MailMenu />
            <MailList />
          </div>

          {/* 하단 */}
          <div className="h-10 border-t-4" />
        </div>
      </div>
    </div>
  );
}
