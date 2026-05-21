type ButtonDefaultProps = {
  label: string;
  action: () => void;
};

export function ButtonDefault({
  label,
  action,
}: ButtonDefaultProps) {
  return (
    <button
      onClick={() => action()}
      className="px-4 py-2 text-zinc-600 border border-zinc-300 rounded-lg bg-zinc-50 hover:bg-zinc-100 text-sm font-medium transition-colors cursor-pointer"
    >
      {label}
    </button>
  );
}
