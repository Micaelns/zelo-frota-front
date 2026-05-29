import { AlertCircle, CheckCircle, X } from "lucide-react";
import type { ToastData } from "../../services/types/ToastData.type";

interface ToastProps {
  toast: ToastData;
  onClose: () => void;
}

export function Toast({ toast, onClose }: ToastProps) {
  return (
    <div
      className={`
        flex
        gap-2
        shadow-lg
        rounded-xl
        p-4
        ${
          toast.type === "success"
            ? `
              bg-green-50
              border-green-200
              text-green-700
            `
            : `
              bg-red-50
              border-red-200
              text-red-700
            `
        }
      `}
    >
      {toast.type === "success" ? (
        <CheckCircle size={20} />
      ) : (
        <AlertCircle size={20} />
      )}

      <div className="flex-1">
        <p className="text-sm font-medium">
          {toast.message}
        </p>
      </div>

      <button
        onClick={onClose}
        className="
          opacity-50
          hover:opacity-100
          transition-opacity
          cursor-pointer
        "
      >
        <X size={18} />
      </button>
    </div>
  );
}
