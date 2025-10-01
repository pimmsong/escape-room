import { useState } from "react";
import { useScrollbar } from "@features/mail/hooks/useScrollbar";
import MailListItem from "@features/mail/components/MailListItem";
import Scrollbar from "@features/mail/components/ScrollBar";
import Modal from "@shared/ui/Modal";
import type { Variant } from "@features/mail/constants/variant";
import type { Mail } from "@features/mail/type";

interface MailListProps {
  variant: Variant;
  mails: Mail[];
}

export interface MailModalState extends Mail {
  open: boolean;
}

const INITIAL_MODAL_STATE: MailModalState = {
  open: false,
  subject: "",
  sender: "",
  date: "",
  content: "",
  image: "",
};

export default function MailList({ variant, mails }: MailListProps) {
  const { listRef, trackRef, thumbTop, thumbHeight, scrollBy, onMouseDown } =
    useScrollbar();
  const [openModal, setOpenModal] =
    useState<MailModalState>(INITIAL_MODAL_STATE);
  const { open, subject, sender, content, image } = openModal;

  return (
    <>
      <div className="relative flex flex-1">
        <ul
          ref={listRef}
          className="flex flex-col flex-1 overflow-y-auto scrollbar-hide"
        >
          {mails.map((mail, i) => (
            <MailListItem
              key={i}
              variant={variant}
              mail={mail}
              setIsOpenModal={setOpenModal}
            />
          ))}
        </ul>

        <Scrollbar
          trackRef={trackRef}
          thumbTop={thumbTop}
          thumbHeight={thumbHeight}
          onThumbMouseDown={onMouseDown}
          onScrollUp={() => scrollBy(-100)}
          onScrollDown={() => scrollBy(100)}
          variant={variant}
        />
      </div>
      <Modal
        open={open}
        title={sender}
        onClose={() => setOpenModal(INITIAL_MODAL_STATE)}
        variant={variant}
      >
        <h3 className="font-bold pretendard text-2xl">{subject}</h3>
        <div className="mt-3.5 pretendard text-base leading-6">
          {image && (
            <div className="h-[278px] flex items-center justify-center">
              <img
                src={image}
                alt={`${subject} 이미지`}
                className="w-full h-full object-contain"
              />
            </div>
          )}
          <p className="mt-1.5 pretendard text-xl whitespace-pre-line">
            {content}
          </p>
        </div>
      </Modal>
    </>
  );
}
