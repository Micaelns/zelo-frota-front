import { MapPinned, Gauge, Truck } from "lucide-react";
import { FormInput } from "../../../components/ui/FormInput";
import { FormSelectInput } from "../../../components/ui/FormSelectInput";
import { ButtonsForm } from "../../../components/ui/ButtonsForm";

export function TravelCreatePage() {
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
        console.log("clicou cancelar");
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
    <div className="flex flex-col gap-6">
      <form className="flex flex-col gap-4">
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
      </form>
    </div>
  );
}
