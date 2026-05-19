import type { HTMLInputTypeAttribute } from "react";
import type { LucideIcon } from "lucide-react";

type FormInputProps = {
  labelName: string;
  typeField?: HTMLInputTypeAttribute;
  placeholder?: string;
  icon?: LucideIcon;
};

export function FormInput({
  labelName,
  typeField = "text",
  placeholder,
  icon: Icon,
}: FormInputProps) {
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

        <input
          type={typeField}
          placeholder={placeholder}
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
