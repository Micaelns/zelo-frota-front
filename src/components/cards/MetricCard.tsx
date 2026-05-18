type MetricCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
};

export function MetricCard({
  title,
  value,
  icon,
}: MetricCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-sm
        p-5
        flex
        items-start
        justify-between
        gap-4
        border
        border-slate-100
        min-w-45
      "
    >
      <div className="min-w-0">
        <p className="text-slate-500 text-sm ">{title}</p>

        <h2 className="text-4xl font-bold text-slate-800">
          {value}
        </h2>
      </div>

      <div
        className="
          bg-blue-100
          text-blue-500
          p-3
          rounded-xl
          shrink-0
        "
      >
        {icon}
      </div>
    </div>
  );
}
