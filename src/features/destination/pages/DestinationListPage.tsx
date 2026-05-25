import { useDestinations } from "../hooks/useDestination";
import { DestinationCreatePage } from "./DestinationCreatePage";
import { DataListLayout } from "../../../app/layouts/DataListLayout";

export function DestinationListPage() {
  const {
    destinations,
    isLoading,
    columnsMap,
    navigation,
  } = useDestinations();

  return (
    <DataListLayout
      title="Lista Destinos"
      modalTitle="Formulário de destinos"
      isLoading={isLoading}
      columns={columnsMap}
      data={destinations}
      navigation={navigation}
      formModal={<DestinationCreatePage />}
    />
  );
}
