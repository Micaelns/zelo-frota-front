import { ChevronDown, type LucideIcon } from "lucide-react";

type Option = {
  label: string;
  value: string;
};

type FormSelectProps = {
  labelName: string;
  options: Option[];
  placeholder: string;
  value?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  icon?: LucideIcon;
};

export function FormSelectInput({
  labelName,
  placeholder,
  icon: Icon,
  options,
  value,
  onChange,
}: FormSelectProps) {
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

        <select
          value={value}
          onChange={onChange}
          className="
            flex-1
            border-none
            outline-none
            bg-transparent
            h-full
            cursor-pointer
          "
        >
          <option value="">{placeholder}</option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-black"
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
