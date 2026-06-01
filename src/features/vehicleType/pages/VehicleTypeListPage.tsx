import { useVehicleTypes } from "../hooks/useVehicleTypes";
import { DataListLayout } from "../../../app/layouts/DataListLayout";
import type { ElementButtonForm } from "../../../services/types/elementButtonsForm.type";
import { useNavigate } from "react-router-dom";

export function VehicleTypeListPage() {
  const navigate = useNavigate();

  const {
    vehicleTypes,
    isLoading,
    columnsMap,
    navigation,
  } = useVehicleTypes();

  const buttonDefault: ElementButtonForm = {
    text: "Novo",
    action: () => {
      navigate("/vehicle-types/create");
    },
  };

  return (
    <DataListLayout
      title="Lista Tipo de Veículos"
      isLoading={isLoading}
      columns={columnsMap}
      data={vehicleTypes}
      navigation={navigation}
      buttonDefault={buttonDefault}
    />
  );
}
