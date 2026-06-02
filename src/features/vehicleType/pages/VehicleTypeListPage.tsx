import { useVehicleTypes } from "../hooks/useVehicleTypes";
import { DataListLayout } from "../../../app/layouts/DataListLayout";
import type { ElementButtonForm } from "../../../services/types/elementButtonsForm.type";
import { useNavigate } from "react-router-dom";
import { useVehicleTypesForm } from "../hooks/useVehicleTypeForm";

export function VehicleTypeListPage() {
  const navigate = useNavigate();
  const { submitDelete } = useVehicleTypesForm();
  const {
    vehicleTypes,
    reloadData,
    isLoading,
    columnsMap,
    navigation,
  } = useVehicleTypes();

  const actionDelete = async (id: string) => {
    await submitDelete(id);
    reloadData();
  };

  const actionUpdate = async (id: string) => {
    navigate("/vehicle-types/edit/" + id);
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
