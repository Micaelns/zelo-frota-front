import { useEffect, useState } from "react";
import { destinationService } from "../../../services/api/destination/destination.service";
import type { Destination } from "../type/destination.types";
import type { ElementProps } from "../../../services/types/elementProps.type";
import { UsePagination } from "../../../hooks/usePagination";
import { useToast } from "../../../context/toast/useToast";
import type { OptionsSelect } from "../../../services/types/optionsSelect.type";

export function useDestinations() {
  const { show } = useToast();
  const [destinations, setDestinations] = useState<
    Destination[]
  >([]);
  const optionsDestination: OptionsSelect[] =
    destinations.map((item) => {
      return {
        value: item.id,
        label: item.city + " " + item.uf,
      };
    });
  const { setTotalItems, navigation } = UsePagination();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadDestinations();
  }, [navigation.currentPage, navigation.itemPerPage]);

  const columnsMap: ElementProps[] = [
    {
      field: "id",
      label: "Id",
      format: (data: any) =>
        "..." + data.substring(data.length - 5),
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

      const response = await destinationService.getAll(
        navigation.currentPage,
        navigation.itemPerPage
      );
      if (response.error != null && response.error != "") {
        show({
          type: "error",
          message: response.error,
        });
      }

      if (response.value) {
        setDestinations(response.value);
        setTotalItems(response.pagination.totalItems);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return {
    destinations,
    optionsDestination,
    isLoading,
    columnsMap,
    navigation,
  };
}
