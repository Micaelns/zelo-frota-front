import { useState } from "react";
import type { VehicleType } from "../types/vehicleType.types";
import { vehicleTypeService } from "../../../services/api/vehicleType/vehicleType.service";
import { useToast } from "../../../context/toast/useToast";
import { useNavigate } from "react-router-dom";

export function useVehicleTypesForm() {
  const navigate = useNavigate();
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

  async function findVehicleType(id: string) {
    const vehicleType = await vehicleTypeService.Find(id);
    if (!vehicleType.isSuccess) {
      show({
        type: "error",
        message: vehicleType.error,
      });
      setTimeout(() => {
        navigate("/vehicle-types");
      }, 1000);
      return;
    }

    setForm({
      id: vehicleType.value.id,
      name: vehicleType.value.name,
    });
  }

  async function submitCreate() {
    await vehicleTypeService.create(form);
    show({
      type: "success",
      message:
        "Cadastro de Tipo de Veículo feito com sucesso!",
    });
  }

  async function submitUpdate() {
    await vehicleTypeService.update(form);
    show({
      type: "success",
      message:
        "Edição do Tipo de Veículo feito com sucesso!",
    });
  }

  async function submitDelete(id: string) {
    await vehicleTypeService.Delete(id);
    show({
      type: "success",
      message:
        "Delete do Tipo de Veículo feito com sucesso!",
    });
  }

  return {
    form,
    changeField,
    findVehicleType,
    submitCreate,
    submitUpdate,
    submitDelete,
  };
}
