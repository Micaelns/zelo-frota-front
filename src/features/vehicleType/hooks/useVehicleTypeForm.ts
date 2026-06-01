import { useState } from "react";
import type { VehicleType } from "../types/vehicleType.types";
import { vehicleTypeService } from "../../../services/api/vehicleType/vehicleType.service";
import { useToast } from "../../../context/toast/useToast";

export function useVehicleTypesForm() {
  const { show } = useToast();
  const [form, setForm] = useState<VehicleType>({
    id: "",
    name: "",
  });

  function changeField(field: string, value: unknown) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function submitForm() {
    await vehicleTypeService.create(form);
    show({
      type: "success",
      message:
        "Cadastro de Tipo de Veículo feito com sucesso!",
    });
  }

  return {
    form,
    changeField,
    submitForm,
  };
}
