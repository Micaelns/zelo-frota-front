import { Navigate, Outlet } from "react-router-dom";

export function PublicRoute() {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
