import type { LucideIcon } from "lucide-react";
import { IMaskInput } from "react-imask";

type FormMaskProps = {
  labelName: string;
  mask: string;
  placeholder?: string;
  icon?: LucideIcon;
};

export function FormMaskInput({
  labelName,
  mask,
  placeholder,
  icon: Icon,
}: FormMaskProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="
          text-sm
          font-medium
          text-slate-700
        "
      >
        {labelName}
      </label>

      <div
        className="
          h-12
          border
          border-slate-200
          rounded-xl
          px-3
          flex
          items-center
          gap-2
          focus-within:border-blue-400
          transition-colors
        "
      >
        {Icon && (
          <Icon size={18} className="text-slate-400" />
        )}
        <IMaskInput
          mask={mask}
          placeholder={placeholder}
          definitions={{
            l: /[A-Za-z]/, //letra
            a: /[A-Za-z0-9]/, //alfanumerico
          }}
          prepare={(str) => str.toUpperCase()}
          className="
            flex-1
            border-none
            outline-none
            bg-transparent
          "
        />
      </div>
    </div>
  );
}
