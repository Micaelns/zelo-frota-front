import {
  LayoutDashboard,
  Truck,
  Calendar,
  Users,
} from "lucide-react";

type SidebarProps = {
  collapsed: boolean;
};

export function Sidebar({ collapsed }: SidebarProps) {
  return (
    <aside
      className={`
        bg-blue-400
        text-white
        transition-all
        duration-300
        shadow-sm
        ${collapsed ? "w-22" : "w-65"}
      `}
    >
      <div className="p-4">
        <h1
          className={`
            text-2xl
            font-bold
            whitespace-nowrap
            overflow-hidden
            transition-all
            ${collapsed ? "opacity-0 w-0" : "opacity-100"}
          `}
        >
          Fleet
        </h1>
      </div>

      <nav className="mt-6 flex flex-col gap-2 px-3">
        <SidebarItem
          icon={<LayoutDashboard />}
          label="Dashboard"
          collapsed={collapsed}
        />

        <SidebarItem
          icon={<Truck />}
          label="Viagens"
          collapsed={collapsed}
        />

        <SidebarItem
          icon={<Users />}
          label="Motoristas"
          collapsed={collapsed}
        />

        <SidebarItem
          icon={<Calendar />}
          label="Agenda"
          collapsed={collapsed}
        />
      </nav>
    </aside>
  );
}

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
};

function SidebarItem({
  icon,
  label,
  collapsed,
}: SidebarItemProps) {
  return (
    <button
      className="
        flex
        items-center
        gap-3
        rounded-xl
        px-3
        py-3
        hover:bg-blue-500
        transition-colors
        cursor-pointer
      "
    >
      <div className="shrink-0">{icon}</div>

      {!collapsed && (
        <span className="font-medium">{label}</span>
      )}
    </button>
  );
}
