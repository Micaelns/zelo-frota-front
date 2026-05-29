import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Slidebar";
import { Topbar } from "./Topbar";
import { ToastContainer } from "../../components/feedback/ToastContainer";

export function DefaultLayout() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar collapsed={collapsed} />

      <div className="flex-1 flex flex-col">
        <Topbar
          collapsed={collapsed}
          onToggle={() => setCollapsed(!collapsed)}
        />

        <main className="flex-1 p-6">
          <ToastContainer />
          <Outlet />
        </main>
      </div>
    </div>
  );
}
