import { TextCursorInput } from "lucide-react";
import { FormInput } from "../../../components/ui/FormInput";

export function VehicleTypeCreatePage() {
  return (
    <div className="flex flex-col gap-6">
      <form className="flex flex-col gap-4">
        <FormInput
          labelName="Nome"
          typeField="text"
          icon={TextCursorInput}
          placeholder="Digite o nome"
        />
      </form>
    </div>
  );
}
