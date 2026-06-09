import { useEffect, useState } from "react";
import { vehicleService } from "../../../services/api/vehicle/vehicle.service";
import type { Vehicle } from "../types/vehicle.types";
import type { ElementProps } from "../../../services/types/elementProps.type";
import { UsePagination } from "../../../hooks/usePagination";
import { useToast } from "../../../context/toast/useToast";
import { Link } from "react-router-dom";
import { Route } from "lucide-react";
import type { OptionsSelect } from "../../../services/types/optionsSelect.type";

export function useVehicles() {
  const { show } = useToast();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const { setTotalItems, navigation } = UsePagination();
  const optionsVehicle: OptionsSelect[] = vehicles.map(
    (item) => {
      return {
        value: item.id,
        label:
          item.vehicleType.name +
          " [ " +
          item.plate +
          " ] ",
      };
    }
  );

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
    {
      field: "id",
      label: "Viagens",
      format: (data: any, row: any) => (
        <div
          className="p-2 rounded-xl cursor-pointer"
          title="Viagens"
        >
          <Link
            to={`/vehicles/${data}/travels?plate=${row.plate}&type=${row.vehicleType.name}`}
          >
            <Route size={14} />
          </Link>
        </div>
      ),
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
    optionsVehicle,
    isLoading,
    columnsMap,
    navigation,
  };
}
