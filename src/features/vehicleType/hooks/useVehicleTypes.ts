import { useEffect, useState } from "react";
import { vehicleTypeService } from "../../../services/api/vehicleType/vehicleType.service";
import type { VehicleType } from "../types/vehicleType.types";
import type { ElementProps } from "../../../services/types/elementProps.type";
import { UsePagination } from "../../../hooks/usePagination";
import { useToast } from "../../../context/toast/useToast";
import type { OptionsSelect } from "../../../services/types/optionsSelect.type";

export function useVehicleTypes() {
  const { show } = useToast();
  const [vehicleTypes, setVehicleTypes] = useState<
    VehicleType[]
  >([]);
  const { setTotalItems, navigation } = UsePagination();

  const [isLoading, setIsLoading] = useState(false);
  const optionsVehicleType: OptionsSelect[] =
    vehicleTypes.map((item) => {
      return {
        value: item.id,
        label: item.name,
      };
    });

  useEffect(() => {
    loadVehicleTypes();
  }, [navigation.currentPage, navigation.itemPerPage]);

  const columnsMap: ElementProps[] = [
    {
      field: "id",
      label: "Id",
      format: (data: any) =>
        "..." + data.substring(data.length - 5),
    },
    {
      field: "name",
      label: "Nome",
      format: (data: any) => data,
    },
  ];

  async function loadVehicleTypes() {
    try {
      setIsLoading(true);

      const response = await vehicleTypeService.getAll(
        navigation.currentPage,
        navigation.itemPerPage
      );
      if (response.error != null && response.error != "") {
        show({
          type: "error",
          message: response.error,
        });
      }
      setVehicleTypes(response.value ?? []);
      setTotalItems(response.pagination.totalItems);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    vehicleTypes,
    optionsVehicleType,
    reloadData: () => {
      loadVehicleTypes();
    },
    isLoading,
    columnsMap,
    navigation,
  };
}
