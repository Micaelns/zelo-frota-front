import { DataListLayout } from "../../../app/layouts/DataListLayout";
import { TravelCreatePage } from "./TravelCreatePage";
import { useTravels } from "../hooks/useTravels";

export function TravelListPage() {
  const { travels, isLoading, columnsMap, navigation } =
    useTravels();

  return (
    <DataListLayout
      title="Lista Viagens"
      modalTitle="Formulário Viagem"
      isLoading={isLoading}
      columns={columnsMap}
      data={travels}
      navigation={navigation}
      formModal={<TravelCreatePage />}
    />
  );
}
