import type { ElementButtonsForm } from "../../services/types/elementButtonsForm.type";
import { ButtonDefault } from "./ButtonDefault";
import { ButtonSave } from "./ButtonSave";

interface ButtonsGroupProps {
  buttonsGroup: ElementButtonsForm;
}

export function ButtonsForm({
  buttonsGroup,
}: ButtonsGroupProps) {
  return (
    <div className="flex justify-end gap-2">
      <ButtonDefault
        action={buttonsGroup.cancel.action}
        text={buttonsGroup.cancel.text}
      />
      <ButtonSave
        action={() => {
          buttonsGroup.confirm.action();
        }}
        text={buttonsGroup.confirm.text}
      />
    </div>
  );
}
