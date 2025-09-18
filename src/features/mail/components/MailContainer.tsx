import MailMenu from "./MailMenu";
import MailList from "./MailList";
import ArrowIcon from "@assets/icons/icon_arrow.svg?react";
import { MAILLIST_VARIANTS as VARIANTS } from "../constants/variant";
import type { Variant } from "../constants/variant";

interface MailContainerProps {
  variant?: Variant;
}

export default function MailContainer({
  variant = "orange",
}: MailContainerProps) {
  return (
    <div className={`relative w-[80%] max-w-[1024px] h-[80%] mx-auto mt-10`}>
      <div
        className={`relative top-[4px] z-2 flex items-center gap-2 py-2.5 px-6 w-[350px] ${VARIANTS[variant].bg}`}
      >
        {VARIANTS[variant].logoIcon}
        <h3 className="font-bold text-[23px]">LOTTECAST_EMAIL</h3>
      </div>
      <div
        className={`overflow-hidden window-lg border-[4px] rounded-b-[10px] rounded-r-[10px] ${VARIANTS[variant].bg}`}
      >
        {/* 주소창  */}
        <div className="flex items-center gap-4 py-2.5 px-4 border-b-[4px]">
          <div className="flex items-center gap-2">
            <ArrowIcon className="rotate-180" />
            <ArrowIcon />
          </div>
          <div className="flex items-center gap-2 flex-1">
            <div
              className={`px-4 w-full py-1 border-2 rounded-[14px] text-[15px] ${VARIANTS[variant].contentBg} `}
            >
              www.lottecastemail.com
            </div>
            {VARIANTS[variant].startIcon}
          </div>
        </div>
        <div className={`flex ${VARIANTS[variant].contentBg} min-h-[550px]`}>
          <MailMenu />
          <MailList />
        </div>
        <div className="h-10 border-t-4" />
      </div>
    </div>
  );
}
