import { useEffect, useState } from "react";

import { vehicleTypeService } from "../../../services/api/vehicleType/vehicleType.service";

import type { VehicleType } from "../types/vehicleType.types";
import type { NavigationData } from "../../../services/types/navigatorData.types";
import type { ElementProps } from "../../../services/types/ElementProps.type";

export function useVehicleTypes() {
  const [vehicleTypes, setVehicleTypes] = useState<
    VehicleType[]
  >([]);
  const [totalItens, setTotalItens] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(5);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadVehicleTypes();
  }, [currentPage, perPage]);

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

  async function loadVehicleTypes() {
    try {
      setIsLoading(true);
      const skip = currentPage * perPage - perPage;

      const response = await vehicleTypeService.getAll(
        skip,
        perPage
      );
      setTotalItens(response.length);
      setVehicleTypes(response);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    vehicleTypes,
    isLoading,
    columnsMap,
    navigation,
    loadVehicleTypes,
  };
}
