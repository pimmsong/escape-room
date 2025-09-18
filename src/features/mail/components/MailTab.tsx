import ArrowIcon from "@assets/icons/icon_arrow.svg?react";
import { MAILLIST_VARIANTS as VARIANTS } from "../constants/variant";
import TabImage from "@assets/images/browser_tab.svg?react";
import CloseIcon from "@assets/icons/icon_close.svg?react";
import type { Variant } from "../constants/variant";

interface MailTabProps {
  variant: Variant;
}

export default function MailTab({ variant }: MailTabProps) {
  return (
    <div className="relative">
      <TabImage
        className={`relative left-[-1px] w-[calc(100%+2px)] ${VARIANTS[variant].text}`}
      />
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
  );
}
