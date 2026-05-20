import React, { useRef } from "react";
import { X } from "lucide-react";

interface ButtonConfirm {
  text: string;
  action: () => void;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  buttonConfirm?: ButtonConfirm;
  children: React.ReactNode;
}

export default function DefaultModal({
  isOpen,
  onClose,
  title,
  children,
  buttonConfirm = { text: "Confirmar", action: () => "" },
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className=" 
        fixed 
        inset-0 
        m-auto 
        w-[calc(100%-2rem)] 
        max-w-md 
        rounded-xl 
        p-0 
        shadow-2xl 
        backdrop:bg-black/50 
        outline-none"
    >
      <div className="flex flex-col bg-white p-6 gap-4">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
          <h3 className="text-lg font-bold text-zinc-800">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <div className="text-zinc-600 text-sm">
          {children}
        </div>

        <div className="flex justify-end gap-2 mt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-zinc-600 border border-zinc-300 rounded-lg bg-zinc-50 hover:bg-zinc-100 text-sm font-medium transition-colors cursor-pointer"
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              buttonConfirm.action();
              onClose();
            }}
            className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 text-sm font-medium transition-colors cursor-pointer"
          >
            {buttonConfirm.text}
          </button>
        </div>
      </div>
    </dialog>
  );
}
