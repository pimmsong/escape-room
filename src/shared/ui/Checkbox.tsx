import type { InputHTMLAttributes } from "react";
import type { Variant } from "@features/mail/constants/variant";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  variant?: Variant;
}

const variantStyles: Record<Variant, string> = {
  orange: "bg-secondary peer-checked:bg-primary",
  blue: "bg-blue-secondary peer-checked:bg-blue-primary",
};

export default function Checkbox({
  id,
  label,
  variant = "orange",
  className = "",
  ...props
}: CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" id={id} className="peer hidden" {...props} />
      <label
        htmlFor={id}
        className={`flex items-center justify-center w-5 h-5 border-2 border-black cursor-pointer 
          ${variantStyles[variant]} ${className}
          after:content-['✓'] after:opacity-0 peer-checked:after:opacity-100`}
      ></label>
      {label && <span className="select-none">{label}</span>}
    </div>
  );
}
