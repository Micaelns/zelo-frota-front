import { useEffect, useState } from "react";
import { vehicleService } from "../../../services/api/vehicle/vehicle.service";
import type { Vehicle } from "../types/vehicle.types";
import type { ElementProps } from "../../../services/types/elementProps.type";
import { UsePagination } from "../../../hooks/usePagination";

export function useVehicles() {
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
      format: (data: any) => data,
    },
    {
      field: "plate",
      label: "Placa",
      format: (data: any) => data,
    },
    {
      field: "vehicleType",
      label: "Tipo de veiculo",
      format: (data: any) => data,
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
      const skip =
        navigation.currentPage * navigation.itemPerPage -
        navigation.itemPerPage;

      const response = await vehicleService.getAll(
        skip,
        navigation.itemPerPage
      );
      setVehicles(response);
      setTotalItems(8);
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
