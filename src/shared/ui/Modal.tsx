import { createPortal } from "react-dom";
import { MAILLIST_VARIANTS as VARIANTS } from "@features/mail/constants/variant";
import type { Variant } from "@features/mail/constants/variant";
import CloseIcon from "@assets/icons/icon_close.svg?react";
import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  title: string;
  children?: ReactNode;
  onClose: () => void;
  variant?: Variant;
}

export default function Modal({
  open,
  title,
  children,
  onClose,
  variant,
}: ModalProps) {
  if (!open) return null;

  return createPortal(
    <aside className="overflow-hidden fixed w-[520px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-black rounded-2xl window z-50">
      <div
        className={`flex items-center justify-between pl-7.5 pr-5 py-2.5 border-b-4 ${
          VARIANTS[variant || "orange"].bg
        }`}
      >
        <h2 className="font-bold text-2xl">{title}</h2>
        <button
          type="button"
          className="cursor-pointer"
          aria-label="Close Modal"
          onClick={onClose}
        >
          <CloseIcon />
        </button>
      </div>
      <div className="overflow-y-auto bg-white h-[450px] py-3.5 px-7.5 scrollbar-hide">
        {children}
      </div>
    </aside>,
    document.body
  );
}
