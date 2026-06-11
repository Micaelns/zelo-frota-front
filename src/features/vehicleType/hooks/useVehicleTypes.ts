import { useCallback, useEffect, useState } from "react";
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

  const loadVehicleTypes = useCallback(async () => {
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
      } else {
        setVehicleTypes(response.value ?? []);
        setTotalItems(response.pagination.totalItems);
      }
    } finally {
      setIsLoading(false);
    }
  }, [
    navigation.currentPage,
    navigation.itemPerPage,
    setTotalItems,
  ]);
  useEffect(() => {
    loadVehicleTypes();
  }, [loadVehicleTypes]);

  const columnsMap: ElementProps<VehicleType>[] = [
    {
      field: "id",
      label: "Id",
      format: (row) =>
        "..." + row.id?.substring(row.id?.length - 5),
    },
    {
      field: "name",
      label: "Nome",
      format: (row) => row.name,
    },
  ];

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
