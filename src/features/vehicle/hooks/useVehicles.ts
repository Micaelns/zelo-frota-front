import { useEffect, useState } from "react";

import { vehicleService } from "../../../services/api/vehicle/vehicle.service";

import type { Vehicle } from "../types/vehicle.types";
import type { NavigationData } from "../../../services/types/navigatorData.types";
import type { ElementProps } from "../../../services/types/ElementProps.type";

export function useVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [totalItens, setTotalItens] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(5);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadVehicles();
  }, [currentPage, perPage]);

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

  const changePerPage = (e: any) => {
    setPerPage(e.target.value);
    setCurrentPage(1);
  };

  const changePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalItens) {
      setCurrentPage(newPage);
    }
  };

  const navigation: NavigationData = {
    totalItens: totalItens,
    totalPages: Math.ceil(totalItens / perPage),
    currentPage: currentPage,
    itemPerPage: perPage,
    changePage: changePage,
    changePerPage: changePerPage,
  };

  async function loadVehicles() {
    try {
      setIsLoading(true);
      const skip = currentPage * perPage - perPage;

      const response = await vehicleService.getAll(
        skip,
        perPage
      );
      setTotalItens(8);
      setVehicles(response);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    vehicles,
    isLoading,
    columnsMap,
    navigation,
    loadVehicles,
  };
}
