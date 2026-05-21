import {
  LayoutDashboard,
  Truck,
  Calendar,
  Users,
} from "lucide-react";
import { SidebarItem } from "./SlidebarItem";

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
          route="/"
          collapsed={collapsed}
        />

        <SidebarItem
          icon={<Truck />}
          label="Viagens"
          route="/"
          collapsed={collapsed}
        />

        <SidebarItem
          icon={<Truck />}
          label="Veiculos"
          route="/vehicles"
          collapsed={collapsed}
        />

        <SidebarItem
          icon={<Users />}
          label="Motoristas"
          route="/"
          collapsed={collapsed}
        />

        <SidebarItem
          icon={<Calendar />}
          label="Agenda"
          route="/"
          collapsed={collapsed}
        />
      </nav>
    </aside>
  );
}
