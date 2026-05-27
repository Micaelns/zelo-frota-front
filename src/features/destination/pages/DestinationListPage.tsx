import { useDestinations } from "../hooks/useDestination";
import { DataListLayout } from "../../../app/layouts/DataListLayout";
import type { ElementButtonForm } from "../../../services/types/elementButtonsForm.type";
import { useNavigate } from "react-router-dom";

export function DestinationListPage() {
  const navigate = useNavigate();
  const {
    destinations,
    isLoading,
    columnsMap,
    navigation,
  } = useDestinations();

  const buttonDefault: ElementButtonForm = {
    text: "Novo",
    action: () => {
      navigate("/destinations/create");
    },
  };

  return (
    <DataListLayout
      title="Lista Destinos"
      isLoading={isLoading}
      columns={columnsMap}
      data={destinations}
      buttonDefault={buttonDefault}
      navigation={navigation}
    />
  );
}
