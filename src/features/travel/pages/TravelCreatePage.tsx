import { MapPinned, Gauge, Truck } from "lucide-react";
import { FormInput } from "../../../components/ui/FormInput";
import { FormSelectInput } from "../../../components/ui/FormSelectInput";
import { ButtonsForm } from "../../../components/ui/ButtonsForm";
import { FormElement } from "../../../components/ui/FormElement";
import { SimplePageLayout } from "../../../app/layouts/SimplePageLayout";
import { useNavigate } from "react-router-dom";

export function TravelCreatePage() {
  const navigate = useNavigate();
  const buttons = {
    confirm: {
      text: "Salvar",
      action: () => {
        console.log("clicou salvar");
      },
    },
    cancel: {
      text: "Cancelar",
      action: () => {
        navigate("/travels");
      },
    },
  };
  const optionVehicle = [
    { value: "1", label: "Carreta ASD 5D89" },
    { value: "2", label: "Carreta ASD 5D90" },
    { value: "3", label: "Carreta ASD 5D91" },
    { value: "4", label: "Carreta ASD 5D92" },
  ];
  const optionDestination = [
    { value: "1", label: "Acajutiba-Ba" },
    { value: "2", label: "Aracaju-Se" },
    {
      value: "3",
      label: "Nossa senhora do Socorro-Se CEP:49160-000",
    },
    {
      value: "4",
      label:
        "São Bras, Nossa Senhora do Socorro-Se CEP: 49156-790",
    },
    {
      value: "5",
      label: "Rua Bahia, Acajutiba - Ba CEP: 49360-000",
    },
  ];
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
          options={optionDestination}
          placeholder="Selecione o destino"
        />
        <FormSelectInput
          labelName="Veiculo"
          icon={Truck}
          options={optionVehicle}
          placeholder="Selecione o veiculo"
        />
        <FormInput
          labelName="Quilometragem Inicial"
          typeField="number"
          icon={Gauge}
          placeholder="Digite a quilometragem"
        />
        <ButtonsForm buttonsGroup={buttons} />
      </FormElement>
    </SimplePageLayout>
  );
}
