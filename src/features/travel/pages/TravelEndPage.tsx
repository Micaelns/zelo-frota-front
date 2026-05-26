import {
  MapPinned,
  Gauge,
  Truck,
  LoaderCircle,
} from "lucide-react";
import { FormInput } from "../../../components/ui/FormInput";
import { FormSelectInput } from "../../../components/ui/FormSelectInput";
import { useParams, useNavigate } from "react-router-dom";
import { useTravels } from "../hooks/useTravels";
import { useEffect } from "react";
import { ButtonsForm } from "../../../components/ui/ButtonsForm";
import { EmptyState } from "../../../components/ui/EmptyState";

export function TravelEndPage() {
  const navigate = useNavigate();
  const { loadTravel, travel, isLoading } = useTravels();
  const { id } = useParams<string>();
  const buttons = {
    confirm: {
      text: "Salvar",
      action: () => {
        console.log("clicou salvar");
      },
    },
    cancel: {
      text: "Cancelar",
      action: () => navigate(-1),
    },
  };

  useEffect(() => {
    if (!id) return;

    loadTravel(id);
  }, [id]);

  const optionVehicle = [
    {
      value: "c99a4424-d852-437d-91d9-a00d305ccac6",
      label: "Carreta QWD 5A12",
    },
    {
      value: "c99a4424-d852-437d-91d9-a00d305cc333",
      label: "Carreta QWD 5A13",
    },
    {
      value: "ebca1815-7639-4249-aaf8-c6c95cfaa94a",
      label: "Carreta QKS 1C57",
    },
  ];

  const optionDestination = [
    {
      value: "f7ad1bfe-3e19-4f4c-b9bb-ab845905ff8c",
      label: "Acajutiba,BA CEP: 48360000",
    },
    {
      value: "c99b2e4a-de9b-491e-b154-b4ea7a9fb03d",
      label: "Nossa Senhora do Socorro,SE CEP: 49156790",
    },
    {
      value: "f7ad1bfe-3e19-4f4c-b9bb-ab845905f332",
      label: "Acajutiba,BA CEP: 48360000",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center bg-white p-4 gap-2 rounded-2xl shadow-sm w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-zinc-700">
          Finalizar viagem
        </h2>
        <div className="flex flex-col w-full">
          {isLoading ? (
            <div className="flex justify-center">
              <LoaderCircle className="animate-spin" />
            </div>
          ) : travel == null ? (
            <EmptyState
              title="Viagem não encontrada"
              description="Não foi possível localizar a viagem informada."
            />
          ) : (
            <form className="flex flex-col gap-4">
              <FormSelectInput
                labelName="Destino"
                icon={MapPinned}
                options={optionDestination}
                value={travel.destinationId}
                disabled={true}
                placeholder="Selecione o destino"
              />
              <FormSelectInput
                labelName="Veiculo"
                icon={Truck}
                options={optionVehicle}
                value={travel.vehicleId}
                disabled={true}
                placeholder="Selecione o veiculo"
              />
              <FormInput
                labelName="Quilometragem Inicial"
                typeField="text"
                icon={Gauge}
                value={travel.startedMileage?.toString()}
                disabled={true}
                placeholder="Digite a quilometragem"
              />
              <FormInput
                labelName="Quilometragem Final"
                typeField="text"
                icon={Gauge}
                placeholder="Digite a quilometragem"
              />
              <ButtonsForm buttonsGroup={buttons} />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
