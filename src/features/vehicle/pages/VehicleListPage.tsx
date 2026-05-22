import { VehicleCreatePage } from "./VehicleCreatePage";
import { useVehicles } from "../hooks/useVehicles";
import { DataListLayout } from "../../../app/layouts/DataListLayout";

export function VehicleListPage() {
  const { vehicles, isLoading, columnsMap, navigation } =
    useVehicles();

  return (
    <DataListLayout
      title="Lista Veículos"
      modalTitle="Formulário Veículo"
      isLoading={isLoading}
      columns={columnsMap}
      data={vehicles}
      navigation={navigation}
      formModal={<VehicleCreatePage />}
    />
  );
}
