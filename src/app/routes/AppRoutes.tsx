import { Navigate, Route, Routes } from "react-router-dom";

import { PrivateRoute } from "../guards/PrivateRoute";
import { PublicRoute } from "../guards/PublicRoute";

import { DefaultLayout } from "../layouts/DefaultLayout";

//import { DashboardPage } from "@/features/dashboard/pages/DashboardPage";
import { DashboardPage } from "../../pages/Dashboard/DashboardPage";

// import { LoginPage } from "@/features/auth/pages/LoginPage";
import { LoginPage } from "../../pages/LoginPage";

// import { VehicleListPage } from "@/features/vehicle/pages/VehicleListPage";
import { VehicleListPage } from "../../features/vehicle/pages/VehicleListPage";

export function AppRoutes() {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* PRIVATE */}
      <Route element={<PrivateRoute />}>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<DashboardPage />} />

          <Route
            path="/vehicles"
            element={<VehicleListPage />}
          />
        </Route>
      </Route>

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
