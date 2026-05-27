import { useVehicles } from "../hooks/useVehicles";
import { DataListLayout } from "../../../app/layouts/DataListLayout";
import type { ElementButtonForm } from "../../../services/types/elementButtonsForm.type";
import { useNavigate } from "react-router-dom";

export function VehicleListPage() {
  const navigate = useNavigate();
  const { vehicles, isLoading, columnsMap, navigation } =
    useVehicles();

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
      buttonDefault={buttonDefault}
      navigation={navigation}
    />
  );
}
