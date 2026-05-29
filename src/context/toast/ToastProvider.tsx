import { useState } from "react";
import { ToastContext } from "./ToastContext";
import type { ToastData } from "../../services/types/ToastData.type";

interface ToastProviderProps {
  children: React.ReactNode;
}

export function ToastProvider({
  children,
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  function show(toast: Omit<ToastData, "id">) {
    const newToast: ToastData = {
      ...toast,
      id: crypto.randomUUID(),
    };

    setToasts((old) => [...old, newToast]);

    setTimeout(() => {
      remove(newToast.id);
    }, newToast.duration ?? 5000);
  }

  function remove(id: string) {
    setToasts((old) => old.filter((x) => x.id !== id));
  }

  return (
    <ToastContext.Provider
      value={{
        toasts,
        show,
        remove,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}
