import { DataListLayout } from "../../../app/layouts/DataListLayout";
import type { ElementButtonForm } from "../../../services/types/elementButtonsForm.type";
import { useTravels } from "../hooks/useTravels";
import { useNavigate } from "react-router-dom";

export function TravelListPage() {
  const navigate = useNavigate();
  const { travels, isLoading, columnsMap, navigation } =
    useTravels();

  const buttonDefault: ElementButtonForm = {
    text: "Novo",
    action: () => {
      navigate("/travels/create");
    },
  };

  return (
    <DataListLayout
      title="Lista Viagens"
      isLoading={isLoading}
      columns={columnsMap}
      data={travels}
      buttonDefault={buttonDefault}
      navigation={navigation}
    />
  );
}
