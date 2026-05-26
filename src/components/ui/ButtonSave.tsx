import { Save } from "lucide-react";
import type { ElementButtonForm } from "../../services/types/elementButtonsForm.type";

export function ButtonSave({
  text,
  type = "button",
  action,
  showIcon = true,
}: ElementButtonForm) {
  return (
    <div>
      <button
        type={type}
        onClick={() => action()}
        className="flex flex-row gap-1 items-center px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 text-sm font-medium transition-colors cursor-pointer"
      >
        {showIcon && <Save />}
        {text}
      </button>
    </div>
  );
}
