import { Navigate, Route, Routes } from "react-router-dom";

import { PrivateRoute } from "../guards/PrivateRoute";
import { PublicRoute } from "../guards/PublicRoute";

import { DefaultLayout } from "../layouts/DefaultLayout";

import { LoginPage } from "../../pages/LoginPage";

import { VehicleListPage } from "../../features/vehicle/pages/VehicleListPage";
import { VehicleTypeListPage } from "../../features/vehicleType/pages/VehicleTypeListPage";
import { DestinationListPage } from "../../features/destination/pages/DestinationListPage";
import { TravelListPage } from "../../features/travel/pages/TravelListPage";
import { TravelEndPage } from "../../features/travel/pages/TravelEndPage";
import { VehicleTypeFormPage } from "../../features/vehicleType/pages/VehicleTypeFormPage";
import { VehicleFormPage } from "../../features/vehicle/pages/VehicleFormPage";
import { DestinationFormPage } from "../../features/destination/pages/DestinationFormPage";
import { TravelCreatePage } from "../../features/travel/pages/TravelCreatePage";

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
          <Route
            path="/"
            element={<DestinationListPage />}
          />
          <Route
            path="/destinations"
            element={<DestinationListPage />}
          />
          <Route
            path="/destinations/create"
            element={<DestinationFormPage />}
          />
          <Route
            path="/travels"
            element={<TravelListPage />}
          />
          <Route
            path="/travels/create"
            element={<TravelCreatePage />}
          />
          <Route
            path="/travels/:id/finish"
            element={<TravelEndPage />}
          />
          <Route
            path="/vehicles"
            element={<VehicleListPage />}
          />
          <Route
            path="/vehicles/create"
            element={<VehicleFormPage />}
          />
          <Route
            path="/vehicle-types"
            element={<VehicleTypeListPage />}
          />
          <Route
            path="/vehicle-types/create"
            element={<VehicleTypeFormPage />}
          />
          <Route
            path="/vehicle-types/edit/:id"
            element={<VehicleTypeFormPage />}
          />
        </Route>
      </Route>

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
