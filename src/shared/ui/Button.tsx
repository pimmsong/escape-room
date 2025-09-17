import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export default function Button({
  label,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type="submit"
      className={`mx-auto bg-white w-[213px] h-[55px] transition window rounded-[10px] text-[34px] font-bold roboto-mono border-[2px] cursor-pointer disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {label}
    </button>
  );
}
