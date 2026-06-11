import { ArrowLeft } from "lucide-react";
import type { ElementButtonForm } from "../../services/types/elementButtonsForm.type";

export function ButtonDefault({
  text,
  type = "button",
  action,
  showIcon = false,
}: ElementButtonForm) {
  return (
    <button
      onClick={() => action()}
      type={type}
      className="flex flex-row gap-1 items-center px-4 py-2 text-zinc-600 border border-zinc-300 rounded-lg bg-zinc-50 hover:bg-zinc-100 text-sm font-medium transition-colors cursor-pointer"
    >
      {showIcon && <ArrowLeft data-testid="back-icon" />}
      {text}
    </button>
  );
}
