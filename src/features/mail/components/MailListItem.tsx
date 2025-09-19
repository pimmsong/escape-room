import Checkbox from "@shared/ui/Checkbox";
import type { Variant } from "../constants/variant";
import type { Mail } from "@features/mail/type";
import type { MailModalState } from "./MailList";

interface MailListItemProps {
  variant: Variant;
  mail: Mail;
  setIsOpenModal: (state: MailModalState) => void;
}

export default function MailListItem({
  variant,
  mail,
  setIsOpenModal,
}: MailListItemProps) {
  return (
    <li className="px-5 py-3 border-b-2">
      <button
        type="button"
        onClick={() =>
          setIsOpenModal({
            open: true,
            ...mail,
          })
        }
        className="flex items-center justify-between w-full cursor-pointer"
      >
        <div className="flex items-center">
          <div className="relative inline-block top-0.5">
            <Checkbox id="custom-check" variant={variant} />
          </div>
          <span className="w-[80px] ml-5 text-[21px] text-left">
            {mail.sender}
          </span>
          <h4
            className="ml-10 text-[21px] pretendard 
               max-w-[400px] text-left
               whitespace-nowrap overflow-hidden text-ellipsis"
          >
            {mail.subject}
          </h4>
        </div>
        <span className="pretendard text-brown">{mail.date}</span>
      </button>
    </li>
  );
}
