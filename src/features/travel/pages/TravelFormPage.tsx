import { MapPinned, Gauge, Truck } from "lucide-react";
import { FormInput } from "../../../components/ui/FormInput";
import { FormSelectInput } from "../../../components/ui/FormSelectInput";
import { ButtonsForm } from "../../../components/ui/ButtonsForm";
import { FormElement } from "../../../components/ui/FormElement";
import { SimplePageLayout } from "../../../app/layouts/SimplePageLayout";
import { useToast } from "../../../context/toast/useToast";
import { useNavigate } from "react-router-dom";
import { useDestinations } from "../../destination/hooks/useDestination";
import { useVehicles } from "../../vehicle/hooks/useVehicles";

export function TravelFormPage() {
  const navigate = useNavigate();
  const { optionsDestination } = useDestinations();
  const { optionsVehicle } = useVehicles();
  const { show } = useToast();
  const buttons = {
    confirm: {
      text: "Salvar",
      action: () => {
        show({
          type: "warning",
          message: "Não implementado",
        });
      },
    },
    cancel: {
      text: "Cancelar",
      action: () => {
        navigate(-1);
      },
    },
  };

  return (
    <SimplePageLayout
      isLoading={false}
      isEmpty={false}
      title="Formulário Viagem"
      titleEmpty="Viagem não encontrada"
      descriptionEmpty="Não foi possível localizar o viagem informada."
    >
      <FormElement>
        <FormSelectInput
          labelName="Destino"
          icon={MapPinned}
          options={optionsDestination}
          placeholder="Selecione o destino"
        />
        <FormSelectInput
          labelName="Veiculo"
          icon={Truck}
          options={optionsVehicle}
          placeholder="Selecione o veiculo"
        />
        <FormInput
          labelName="Quilometragem Inicial"
          typeField="number"
          icon={Gauge}
          placeholder="Digite a quilometragem"
        />
        <FormInput
          labelName="Quilometragem Final"
          typeField="text"
          icon={Gauge}
          placeholder="Digite a quilometragem"
        />
        <ButtonsForm buttonsGroup={buttons} />
      </FormElement>
    </SimplePageLayout>
  );
}
