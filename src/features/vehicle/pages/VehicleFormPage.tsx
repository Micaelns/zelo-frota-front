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
import { useToast } from "../../../context/toast/useToast";
import { useVehicleTypes } from "../../vehicleType/hooks/useVehicleTypes";

export function VehicleFormPage() {
  const navigate = useNavigate();
  const { vehicleTypes } = useVehicleTypes();
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
        navigate("/vehicles");
      },
    },
  };

  const options = vehicleTypes.map((item) => {
    return { value: item.id, label: item.name };
  });

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
