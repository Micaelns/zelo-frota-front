import { DataListLayout } from "../../../app/layouts/DataListLayout";
import type { ElementButtonForm } from "../../../services/types/elementButtonsForm.type";
import { useTravels } from "../hooks/useTravels";
import { useToast } from "../../../context/toast/useToast";
import {
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

export function TravelListPage() {
  const { vehicleId } = useParams<string>();
  const [searchParams] = useSearchParams();
  const titlePage =
    "Lista Viagens " +
    searchParams.get("type") +
    " [ " +
    searchParams.get("plate") +
    " ] ";
  const navigate = useNavigate();
  const { show } = useToast();

  const { travels, isLoading, columnsMap, navigation } =
    useTravels({ vehicleId: vehicleId ?? "" });

  if (!vehicleId) {
    return "Veículo não informado";
  }
  const actionDelete = async (id: string) => {
    show({
      type: "warning",
      message: "Não implementado [" + id + "]",
    });
  };

  const actionUpdate = async (id: string) => {
    show({
      type: "warning",
      message: "Não implementado [" + id + "]",
    });
  };

  const buttonDefault: ElementButtonForm = {
    text: "Novo",
    action: () => {
      navigate("/travels/create");
    },
  };

  return (
    <DataListLayout
      title={titlePage}
      isLoading={isLoading}
      columns={columnsMap}
      data={travels}
      navigation={navigation}
      buttonDefault={buttonDefault}
      actionUpdate={actionUpdate}
      actionDelete={actionDelete}
    />
  );
}
