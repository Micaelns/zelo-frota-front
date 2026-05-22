import { Save } from "lucide-react";

type ButtonSaveProps = {
  label: string;
  showIcon?: boolean;
  action: () => void;
};

export function ButtonSave({
  label,
  showIcon = true,
  action,
}: ButtonSaveProps) {
  return (
    <div>
      <button
        onClick={() => action()}
        className="flex flex-row gap-1 items-center px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 text-sm font-medium transition-colors cursor-pointer"
      >
        {showIcon && <Save />}
        {label}
      </button>
    </div>
  );
}
