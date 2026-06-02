import { useEffect, useState } from "react";
import { vehicleService } from "../../../services/api/vehicle/vehicle.service";
import type { Vehicle } from "../types/vehicle.types";
import type { ElementProps } from "../../../services/types/elementProps.type";
import { UsePagination } from "../../../hooks/usePagination";
import { useToast } from "../../../context/toast/useToast";

export function useVehicles() {
  const { show } = useToast();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const { setTotalItems, navigation } = UsePagination();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadVehicles();
  }, [navigation.currentPage, navigation.itemPerPage]);

  const columnsMap: ElementProps[] = [
    {
      field: "id",
      label: "Id",
      format: (data: any) =>
        "..." + data.substring(data.length - 5),
    },
    {
      field: "plate",
      label: "Placa",
      format: (data: any) => data,
    },
    {
      field: "vehicleType",
      label: "Tipo de veiculo",
      format: (data: any) => data.name,
    },
    {
      field: "mileage",
      label: "Quilometragem",
      format: (data: any) => data.toFixed(1) + " Km",
    },
  ];

  async function loadVehicles() {
    try {
      setIsLoading(true);

      const response = await vehicleService.getAll(
        navigation.currentPage,
        navigation.itemPerPage
      );
      if (response.error != null && response.error != "") {
        show({
          type: "error",
          message: response.error,
        });
      }
      setVehicles(response.value);
      setTotalItems(response.pagination.totalItems);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    vehicles,
    isLoading,
    columnsMap,
    navigation,
  };
}
