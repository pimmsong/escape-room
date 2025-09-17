import CloseIcon from "@assets/icon_close.svg?react";
import Button from "./Button";

interface AlertProps {
  open: boolean;
  title: string;
  message?: string;
  content?: React.ReactNode;
  onClose: () => void;
  isCancelable?: boolean;
}

export default function Alert({
  open,
  title,
  message,
  content,
  onClose,
  isCancelable = true,
}: AlertProps) {
  if (!open) return null;
  return (
    <div className="overflow-hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[10px] w-[442px] z-10 border-[4px] window bg-amber-500">
      <div className="flex items-center justify-between py-2.5 px-5 bg-primary">
        <h2 className="text-3xl font-bold roboto-mono">{title}</h2>
        <button className="text-white cursor-pointer" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
      <div className="grid place-content-center bg-secondary px-4 py-6">
        {message && (
          <p className="text-2xl text-center roboto-mono">{message}</p>
        )}
        {content && <div>{content}</div>}
        {isCancelable && (
          <Button label="Cancel" className="mt-6" onClick={onClose} />
        )}
      </div>
    </div>
  );
}
