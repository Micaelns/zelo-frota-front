import { useVehicleTypes } from "../hooks/useVehicleTypes";
import { VehicleTypeCreatePage } from "./VehicleTypeCreatePage";
import { DataListLayout } from "../../../app/layouts/DataListLayout";

export function VehicleTypeListPage() {
  const {
    vehicleTypes,
    isLoading,
    columnsMap,
    navigation,
  } = useVehicleTypes();

  return (
    <DataListLayout
      title="Lista Tipo de Veículos"
      modalTitle="Formulário Tipo Veículo"
      isLoading={isLoading}
      columns={columnsMap}
      data={vehicleTypes}
      navigation={navigation}
      formModal={<VehicleTypeCreatePage />}
    />
  );
}
