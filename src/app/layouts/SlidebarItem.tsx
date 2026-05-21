import { Link } from "react-router-dom";

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  route: string;
  collapsed: boolean;
};

export function SidebarItem({
  icon,
  label,
  route,
  collapsed,
}: SidebarItemProps) {
  return (
    <Link to={route}>
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
    </Link>
  );
}
