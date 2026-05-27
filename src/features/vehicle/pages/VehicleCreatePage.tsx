import {
  TextCursorInput,
  Gauge,
  Truck,
} from "lucide-react";
import { FormMaskInput } from "../../../components/ui/FormMaskInput";
import { FormInput } from "../../../components/ui/FormInput";
import { FormSelectInput } from "../../../components/ui/FormSelectInput";
import { FormElement } from "../../../components/ui/FormElement";
import { useNavigate } from "react-router-dom";
import { SimplePageLayout } from "../../../app/layouts/SimplePageLayout";
import { ButtonsForm } from "../../../components/ui/ButtonsForm";

export function VehicleCreatePage() {
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
        navigate("/vehicles");
      },
    },
  };

  const options = [
    { value: "1", label: "Cavalinho" },
    { value: "2", label: "Cavalinho traçado" },
    { value: "3", label: "Carreta" },
    { value: "4", label: "Carreta truck" },
    { value: "5", label: "Caminhão" },
  ];
  return (
    <SimplePageLayout
      isLoading={false}
      isEmpty={false}
      title="Formulário veículo"
      titleEmpty="Veículo não encontrado"
      descriptionEmpty="Não foi possível localizar o veículo informado."
    >
      <FormElement>
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
        <ButtonsForm buttonsGroup={buttons} />
      </FormElement>
    </SimplePageLayout>
  );
}
