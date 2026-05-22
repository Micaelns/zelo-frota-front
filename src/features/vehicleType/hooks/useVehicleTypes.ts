import { useEffect, useState } from "react";
import { vehicleTypeService } from "../../../services/api/vehicleType/vehicleType.service";
import type { VehicleType } from "../types/vehicleType.types";
import type { ElementProps } from "../../../services/types/elementProps.type";
import { UsePagination } from "../../../hooks/usePagination";

export function useVehicleTypes() {
  const [vehicleTypes, setVehicleTypes] = useState<
    VehicleType[]
  >([]);
  const { setTotalItems, navigation } = UsePagination();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadVehicleTypes();
  }, [navigation.currentPage, navigation.itemPerPage]);

  const columnsMap: ElementProps[] = [
    {
      field: "id",
      label: "Id",
      format: (data: any) => data,
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
      const skip =
        navigation.currentPage * navigation.itemPerPage -
        navigation.itemPerPage;

      const response = await vehicleTypeService.getAll(
        skip,
        navigation.itemPerPage
      );
      setVehicleTypes(response);
      setTotalItems(6);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    vehicleTypes,
    isLoading,
    columnsMap,
    navigation,
  };
}
