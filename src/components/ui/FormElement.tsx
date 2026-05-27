interface FormProps {
  children: React.ReactNode;
}
export function FormElement({ children }: FormProps) {
  return (
    <form className="flex flex-col gap-4">{children}</form>
  );
}
