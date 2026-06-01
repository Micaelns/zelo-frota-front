import type { SubmitEvent } from "react";

interface FormProps {
  handleSubmit: (e: SubmitEvent) => void;
  children: React.ReactNode;
}
export function FormElement({
  handleSubmit,
  children,
}: FormProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      {children}
    </form>
  );
}
