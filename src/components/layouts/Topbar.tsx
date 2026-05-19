import { Bell, LogOut, Menu, Search } from "lucide-react";

type TopbarProps = {
  collapsed: boolean;
  onToggle: () => void;
};

export function Topbar({ onToggle }: TopbarProps) {
  return (
    <header
      className="
        h-16
        bg-white
        border-b
        border-slate-200
        px-6
        flex
        items-center
        justify-between
      "
    >
      <div className="flex items-center gap-4">
        <button
          onClick={onToggle}
          className="
            p-2
            rounded-xl
            hover:bg-slate-100
            transition-colors
            cursor-pointer
          "
        >
          <Menu />
        </button>

        <div
          className="
            flex
            items-center
            gap-2
            bg-slate-100
            px-3
            py-2
            rounded-xl
            min-w-75
          "
        >
          <Search size={18} />

          <input
            className="
              bg-transparent
              outline-none
              w-full
            "
            placeholder="Pesquisar..."
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="
          p-2
          cursor-pointer
          rounded-xl
          hover:bg-slate-100
        "
        >
          <Bell />
        </button>

        <button
          className="
                flex
                items-center
                gap-3
                rounded-xl
                px-3
                py-3
                cursor-pointer
                hover:bg-blue-400
                transition-colors
                mt-auto
            "
        >
          <LogOut size={18} />

          <span className="hidden md:block">Sair</span>
        </button>
      </div>
    </header>
  );
}
