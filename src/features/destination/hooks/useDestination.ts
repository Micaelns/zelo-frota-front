import { useEffect, useState } from "react";
import { destinationService } from "../../../services/api/destination/destination.service";
import type { Destination } from "../type/destination.types";
import type { ElementProps } from "../../../services/types/elementProps.type";
import { UsePagination } from "../../../hooks/usePagination";

export function useDestinations() {
  const [destinations, setDestinations] = useState<
    Destination[]
  >([]);
  const { setTotalItems, navigation } = UsePagination();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadDestinations();
  }, [navigation.currentPage, navigation.itemPerPage]);

  const columnsMap: ElementProps[] = [
    {
      field: "id",
      label: "Id",
      format: (data: any) => data,
    },
    {
      field: "zipCode",
      label: "CEP",
      format: (data: any) => data,
    },
    {
      field: "address",
      label: "Rua",
      format: (data: any) => data,
    },
    {
      field: "neighborhood",
      label: "Bairro",
      format: (data: any) => data,
    },
    {
      field: "city",
      label: "Cidade",
      format: (data: any) => data,
    },
    {
      field: "uf",
      label: "UF",
      format: (data: any) => data,
    },
  ];

  async function loadDestinations() {
    try {
      setIsLoading(true);
      const skip =
        navigation.currentPage * navigation.itemPerPage -
        navigation.itemPerPage;

      const response = await destinationService.getAll(
        skip,
        navigation.itemPerPage
      );
      setDestinations(response);
      setTotalItems(6);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    destinations,
    isLoading,
    columnsMap,
    navigation,
  };
}
