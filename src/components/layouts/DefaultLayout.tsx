import { useState } from "react";

import { Sidebar } from "./Slidebar";
import { Topbar } from "./Topbar";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export function DefaultLayout({
  children,
}: DefaultLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar collapsed={collapsed} />

      <div className="flex-1 flex flex-col">
        <Topbar
          collapsed={collapsed}
          onToggle={() => setCollapsed(!collapsed)}
        />

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
