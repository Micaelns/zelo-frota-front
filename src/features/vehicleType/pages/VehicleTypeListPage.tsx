import { useVehicleTypes } from "../hooks/useVehicleTypes";
import { DataListLayout } from "../../../app/layouts/DataListLayout";
import type { ElementButtonForm } from "../../../services/types/elementButtonsForm.type";
import { useNavigate } from "react-router-dom";
import { useVehicleTypesForm } from "../hooks/useVehicleTypeForm";
import type { VehicleType } from "../types/vehicleType.types";

export function VehicleTypeListPage() {
  const navigate = useNavigate();
  const { remove } = useVehicleTypesForm();
  const {
    vehicleTypes,
    reloadData,
    isLoading,
    columnsMap,
    navigation,
  } = useVehicleTypes();

  const actionDelete = async (row: VehicleType) => {
    await remove(row.id);
    reloadData();
  };

  const actionUpdate = async (row: VehicleType) => {
    navigate("/vehicle-types/edit/" + row.id);
  };

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
      actionUpdate={actionUpdate}
      actionDelete={actionDelete}
    />
  );
}
