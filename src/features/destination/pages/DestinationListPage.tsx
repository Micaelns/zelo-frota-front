import { useDestinations } from "../hooks/useDestination";
import { DataListLayout } from "../../../app/layouts/DataListLayout";
import type { ElementButtonForm } from "../../../services/types/elementButtonsForm.type";
import { useToast } from "../../../context/toast/useToast";
import { useNavigate } from "react-router-dom";
import type { Destination } from "../type/destination.types";

export function DestinationListPage() {
  const navigate = useNavigate();
  const { show } = useToast();
  const {
    destinations,
    isLoading,
    columnsMap,
    navigation,
  } = useDestinations();

  const actionDelete = async (row: Destination) => {
    show({
      type: "warning",
      message: "Não implementado [" + row.id + "]",
    });
  };

  const actionUpdate = async (row: Destination) => {
    show({
      type: "warning",
      message: "Não implementado [" + row.id + "]",
    });
  };

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
      navigation={navigation}
      buttonDefault={buttonDefault}
      actionUpdate={actionUpdate}
      actionDelete={actionDelete}
    />
  );
}
