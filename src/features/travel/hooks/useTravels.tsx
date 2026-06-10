import { useEffect, useState } from "react";
import { travelService } from "../../../services/api/travel/travel.service";
import type { ElementProps } from "../../../services/types/elementProps.type";
import { UsePagination } from "../../../hooks/usePagination";
import type { Travel } from "../types/travel.types";
import { useToast } from "../../../context/toast/useToast";
import { BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

type TravelsProps = {
  vehicleId: string;
};
export function useTravels({ vehicleId }: TravelsProps) {
  const { show } = useToast();
  const [travels, setTravels] = useState<Travel[]>([]);
  const [travel, setTravel] = useState<Travel | null>();
  const { setTotalItems, navigation } = UsePagination();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (vehicleId != "") loadTravels(vehicleId);
  }, [navigation.currentPage, navigation.itemPerPage]);

  const columnsMap: ElementProps<Travel>[] = [
    {
      field: "idTravel",
      label: "IdTravel",
      format: (row) =>
        "..." +
        row.idTravel.substring(row.idTravel.length - 5),
    },
    {
      field: "destination",
      label: "Destino",
      format: (row) => row.destination,
    },
    {
      field: "startedMileage",
      label: "Inicio Km",
      format: (row) =>
        row.startedMileage?.toFixed(1) + " Km",
    },
    {
      field: "finishedMileage",
      label: "Fim Km",
      format: (row) =>
        row.finishedMileage == undefined
          ? ""
          : row.finishedMileage?.toFixed(1) + " Km",
    },
    {
      field: "start",
      label: "Inicio",
      format: (row) => row.start,
    },
    {
      field: "end",
      label: "Fim",
      format: (row) =>
        row.end == undefined ? "" : row.end,
    },
    {
      field: "autonomy",
      label: "Autonomia",
      format: (row) =>
        row.autonomy == undefined
          ? ""
          : row.autonomy?.toFixed(1) + " Km/L",
    },
    {
      field: "autonomy",
      label: "",
      format: (row) =>
        row.autonomy != undefined ? (
          ""
        ) : (
          <div
            className="p-2 rounded-xl cursor-pointer"
            title="Finalizar viagem"
          >
            <Link to={`/travels/create`}>
              <BadgeCheck size={14} />
            </Link>
          </div>
        ),
    },
  ];

  async function loadTravels(vehicleId: string) {
    try {
      setIsLoading(true);
      const response = await travelService.getAll(
        vehicleId,
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
        setTravels(response.value);
        setTotalItems(response.pagination.totalItems);
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function loadTravel(id: string) {
    try {
      setIsLoading(true);

      const response = await travelService.find(id);

      if (response.value) setTravel(response.value);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    travel,
    travels,
    isLoading,
    columnsMap,
    navigation,
    loadTravel,
  };
}
