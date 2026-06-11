import { useVehicles } from "../hooks/useVehicles";
import { DataListLayout } from "../../../app/layouts/DataListLayout";
import type { ElementButtonForm } from "../../../services/types/elementButtonsForm.type";
import { useToast } from "../../../context/toast/useToast";
import { useNavigate } from "react-router-dom";
import type { Vehicle } from "../types/vehicle.types";

export function VehicleListPage() {
  const navigate = useNavigate();
  const { show } = useToast();
  const { vehicles, isLoading, columnsMap, navigation } =
    useVehicles();

  const actionDelete = async (row: Vehicle) => {
    show({
      type: "warning",
      message: "Não implementado [" + row.id + "]",
    });
  };

  const actionUpdate = async (row: Vehicle) => {
    show({
      type: "warning",
      message: "Não implementado [" + row.id + "]",
    });
  };

  const buttonDefault: ElementButtonForm = {
    text: "Novo",
    action: () => {
      navigate("/vehicles/create");
    },
  };
  return (
    <DataListLayout
      title="Lista Veículos"
      isLoading={isLoading}
      columns={columnsMap}
      data={vehicles}
      navigation={navigation}
      buttonDefault={buttonDefault}
      actionUpdate={actionUpdate}
      actionDelete={actionDelete}
    />
  );
}
