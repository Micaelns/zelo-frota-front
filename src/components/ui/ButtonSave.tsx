type ButtonSaveProps = {
  label: string;
  action: () => void;
};

export function ButtonSave({
  label,
  action,
}: ButtonSaveProps) {
  return (
    <button
      onClick={() => action()}
      className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 text-sm font-medium transition-colors cursor-pointer"
    >
      {label}
    </button>
  );
}
