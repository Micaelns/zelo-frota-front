import { createContext } from "react";
import type { ToastData } from "../../services/types/ToastData.type";

interface ToastContextData {
  toasts: ToastData[];

  show: (toast: Omit<ToastData, "id">) => void;

  remove: (id: string) => void;
}

export const ToastContext = createContext(
  {} as ToastContextData
);
