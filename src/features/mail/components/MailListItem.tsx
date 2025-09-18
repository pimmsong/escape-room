import Checkbox from "@shared/ui/Checkbox";
import type { Variant } from "../constants/variant";
import type { Mail } from "@features/mail/type";

interface MailListItemProps {
  variant: Variant;
  mail: Mail;
}

export default function MailListItem({ variant, mail }: MailListItemProps) {
  return (
    <li className="px-5 py-3 border-b-2">
      {/* TODO: 팝업 오픈 */}
      <button
        type="button"
        className="flex items-center justify-between w-full cursor-pointer"
      >
        <div className="flex items-center">
          <div className="relative inline-block top-0.5">
            <Checkbox id="custom-check" variant={variant} />
          </div>
          <span className="ml-5 text-[21px]">{mail.sender}</span>
          <h4 className="ml-14 text-[21px] pretendard">{mail.subject}</h4>
        </div>
        <span className="pretendard text-brown">{mail.date}</span>
      </button>
    </li>
  );
}
