import { useToast } from "../../context/toast/useToast";
import { Toast } from "./Toast";

export function ToastContainer() {
  const { toasts, remove } = useToast();

  return (
    <div
      className="
        fixed
        top-4
        right-4
        z-50
        flex
        flex-col
        gap-2
        ml-4
        sm:min-w-60
      "
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          toast={toast}
          onClose={() => remove(toast.id)}
        />
      ))}
    </div>
  );
}
