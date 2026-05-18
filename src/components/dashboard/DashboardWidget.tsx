type DashboardWidgetProps = {
  title: string;
  cols?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
};

export function DashboardWidget({
  title,
  cols = 1,
  children,
}: DashboardWidgetProps) {
  const colsStyle = {
    1: "xl:col-span-1",
    2: "xl:col-span-2",
    3: "xl:col-span-3",
    4: "xl:col-span-4",
  };

  return (
    <div
      className={`
        bg-white
        rounded-2xl
        shadow-sm
        border
        border-slate-100
        p-6
        min-h-75
        ${colsStyle[cols]}
      `}
    >
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-800">
          {title}
        </h2>
      </div>

      {children}
    </div>
  );
}
