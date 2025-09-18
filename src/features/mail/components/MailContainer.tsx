import MailMenu from "@features/mail/components/MailMenu";
import MailList from "@features/mail/components/MailList";
import { MAILLIST_VARIANTS as VARIANTS } from "@features/mail/constants/variant";
import type { Variant } from "@features/mail/constants/variant";
import BrowserBackground from "@assets/images/browser_bg.svg?react";
import MailTab from "@features/mail/components/MailTab";
import type { Mail } from "@features/mail/type";

interface MailContainerProps {
  variant?: Variant;
  mails: Mail[];
}

export default function MailContainer({
  variant = "orange",
  mails,
}: MailContainerProps) {
  return (
    <div className="relative w-[960px] h-[80vh] mx-auto mt-10 box-border">
      <BrowserBackground className="absolute inset-0 translate-x-2 translate-y-3 w-full h-full z-0 " />

      <div className="relative z-10 flex flex-col h-full">
        <MailTab variant={variant} />
        <div
          className={`flex-1 overflow-hidden border-l-[4px] border-r-[4px] border-b-[4px] rounded-b-[10px] ${VARIANTS[variant].bg}`}
        >
          <div className={`flex ${VARIANTS[variant].contentBg} h-full`}>
            <MailMenu />
            <MailList variant={variant} mails={mails} />
          </div>

          <div className="h-10 border-t-4" />
        </div>
      </div>
    </div>
  );
}
