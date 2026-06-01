export interface ToastData {
  id: string;
  type: "success" | "error" | "warning";
  title?: string;
  message: string;
  duration?: number;
}
