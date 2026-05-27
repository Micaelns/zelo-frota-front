import { TextCursorInput } from "lucide-react";
import { FormInput } from "../../../components/ui/FormInput";
import { ButtonsForm } from "../../../components/ui/ButtonsForm";
import { SimplePageLayout } from "../../../app/layouts/SimplePageLayout";
import { FormElement } from "../../../components/ui/FormElement";
import { useNavigate } from "react-router-dom";

export function VehicleTypeCreatePage() {
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
        navigate("/vehicle-types");
      },
    },
  };

  return (
    <SimplePageLayout
      isLoading={false}
      isEmpty={false}
      title="Formulário tipo de veículos"
      titleEmpty="Tipo de veículo não encontrado"
      descriptionEmpty="Não foi possível localizar o tipo de veículom informada."
    >
      <FormElement>
        <FormInput
          labelName="Nome"
          typeField="text"
          icon={TextCursorInput}
          placeholder="Digite o nome"
        />
        <ButtonsForm buttonsGroup={buttons} />
      </FormElement>
    </SimplePageLayout>
  );
}
