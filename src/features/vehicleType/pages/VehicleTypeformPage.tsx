import { TextCursorInput } from "lucide-react";
import { FormInput } from "../../../components/ui/FormInput";
import { ButtonsForm } from "../../../components/ui/ButtonsForm";
import { SimplePageLayout } from "../../../app/layouts/SimplePageLayout";
import { FormElement } from "../../../components/ui/FormElement";
import { useNavigate } from "react-router-dom";
import { useVehicleTypesForm } from "../hooks/useVehicleTypeForm";
import type { ElementButtonsForm } from "../../../services/types/elementButtonsForm.type";
import { useParams } from "react-router-dom";

export function VehicleTypeFormPage() {
  const { id } = useParams();
  const { form, changeField, save } =
    useVehicleTypesForm(id);

  const navigate = useNavigate();

  const buttons: ElementButtonsForm = {
    confirm: {
      text: "Salvar",
      type: "submit",
      action: () => {},
    },
    cancel: {
      text: "Cancelar",
      action: () => {
        navigate("/vehicle-types");
      },
    },
  };

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    await save();
    navigate("/vehicle-types");
  }

  return (
    <SimplePageLayout
      isLoading={false}
      isEmpty={false}
      title="Formulário tipo de veículos"
      titleEmpty="Tipo de veículo não encontrado"
      descriptionEmpty="Não foi possível localizar o tipo de veículom informada."
    >
      <FormElement handleSubmit={handleSubmit}>
        <FormInput
          labelName="Nome"
          typeField="text"
          value={form.name}
          onChange={(e) => {
            changeField("name", e.target.value);
          }}
          icon={TextCursorInput}
          placeholder="Digite o nome"
        />
        <ButtonsForm buttonsGroup={buttons} />
      </FormElement>
    </SimplePageLayout>
  );
}
