import { TextCursorInput } from "lucide-react";
import { FormInput } from "../../../components/ui/FormInput";
import { FormSelectInput } from "../../../components/ui/FormSelectInput";
import { FormElement } from "../../../components/ui/FormElement";
import { useNavigate } from "react-router-dom";
import { type SubmitEvent } from "react";
import { SimplePageLayout } from "../../../app/layouts/SimplePageLayout";
import { ButtonsForm } from "../../../components/ui/ButtonsForm";
import { useToast } from "../../../context/toast/useToast";

export function DestinationFormPage() {
  const options = [
    { value: "AC", label: "Acre" },
    { value: "AL", label: "Alagoas" },
    { value: "AP", label: "Amapá" },
    { value: "AM", label: "Amazonas" },
    { value: "BA", label: "Bahia" },
    { value: "CE", label: "Ceará" },
    { value: "DF", label: "Distrito Federal" },
    { value: "ES", label: "Espírito Santo" },
    { value: "GO", label: "Goiás" },
    { value: "MA", label: "Maranhão" },
    { value: "MT", label: "Mato Grosso" },
    { value: "MS", label: "Mato Grosso do Sul" },
    { value: "MG", label: "Minas Gerais" },
    { value: "PA", label: "Pará" },
    { value: "PB", label: "Paraíba" },
    { value: "PR", label: "Paraná" },
    { value: "PE", label: "Pernambuco" },
    { value: "PI", label: "Piauí" },
    { value: "RJ", label: "Rio de Janeiro" },
    { value: "RN", label: "Rio Grande do Norte" },
    { value: "RS", label: "Rio Grande do Sul" },
    { value: "RO", label: "Rondônia" },
    { value: "RR", label: "Roraima" },
    { value: "SC", label: "Santa Catarina" },
    { value: "SP", label: "São Paulo" },
    { value: "SE", label: "Sergipe" },
    { value: "TO", label: "Tocantins" },
  ];
  const navigate = useNavigate();
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
        navigate("/destinations");
      },
    },
  };

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    navigate("/vehicle-types");
  }

  return (
    <SimplePageLayout
      isLoading={false}
      isEmpty={false}
      title="Formulário de destinos"
      titleEmpty="Destino não encontrado"
      descriptionEmpty="Não foi possível localizar o destino informada."
    >
      <FormElement handleSubmit={handleSubmit}>
        <FormInput
          labelName="Cep"
          typeField="text"
          icon={TextCursorInput}
          placeholder="Digite o cep"
        />
        <FormInput
          labelName="Rua"
          typeField="text"
          icon={TextCursorInput}
          placeholder="Digite a rua"
        />
        <FormInput
          labelName="Bairro"
          typeField="text"
          icon={TextCursorInput}
          placeholder="Digite o bairro"
        />
        <FormInput
          labelName="Localidade/Lugarejo"
          typeField="text"
          icon={TextCursorInput}
          placeholder="Digite o local"
        />
        <FormInput
          labelName="Cidade"
          typeField="text"
          icon={TextCursorInput}
          placeholder="Digite a cidade"
        />
        <FormSelectInput
          labelName="Estado"
          options={options}
          placeholder="Selecione o estado"
        />
        <ButtonsForm buttonsGroup={buttons} />
      </FormElement>
    </SimplePageLayout>
  );
}
