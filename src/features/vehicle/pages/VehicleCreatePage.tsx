import {
  TextCursorInput,
  Gauge,
  Truck,
} from "lucide-react";
import { FormMaskInput } from "../../../components/ui/FormMaskInput";
import { FormInput } from "../../../components/ui/FormInput";
import { FormSelectInput } from "../../../components/ui/FormSelectInput";

export function VehicleCreatePage() {
  const options = [
    { value: "1", label: "Cavalinho" },
    { value: "2", label: "Cavalinho traçado" },
    { value: "3", label: "Carreta" },
    { value: "4", label: "Carreta truck" },
    { value: "5", label: "Caminhão" },
  ];
  return (
    <div className="flex flex-col gap-6">
      <form className="flex flex-col gap-4">
        <FormMaskInput
          labelName="Placa"
          mask="lll 0a00"
          icon={TextCursorInput}
          placeholder="Digite sua placa"
        />
        <FormSelectInput
          labelName="Tipo de Veículo"
          icon={Truck}
          options={options}
          placeholder="Selecione o tipo"
        />
        <FormInput
          labelName="Quilometragem"
          typeField="number"
          icon={Gauge}
          placeholder="Digite seu email"
        />
      </form>
    </div>
  );
}
