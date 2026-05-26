import { useEffect, useState } from "react";
import { travelService } from "../../../services/api/travel/travel.service";
import type { ElementProps } from "../../../services/types/elementProps.type";
import { UsePagination } from "../../../hooks/usePagination";
import type { Travel } from "../types/travel.types";
import { BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

export function useTravels() {
  const [travels, setTravels] = useState<Travel[]>([]);
  const [travel, setTravel] = useState<Travel | null>();
  const { setTotalItems, navigation } = UsePagination();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadTravels();
  }, [navigation.currentPage, navigation.itemPerPage]);

  const columnsMap: ElementProps[] = [
    {
      field: "idTravel",
      label: "IdTravel",
      format: (data: any) =>
        "..." + data.substring(data.length - 5),
    },
    {
      field: "vehiclePlate",
      label: "Placa",
      format: (data: any) => data,
    },
    {
      field: "vehicle",
      label: "Tipo de veiculo",
      format: (data: any) => data,
    },
    {
      field: "destination",
      label: "Destino",
      format: (data: any) => data,
    },
    {
      field: "startedMileage",
      label: "Inicio Km",
      format: (data: any) => data.toFixed(1) + " Km",
    },
    {
      field: "finishedMileage",
      label: "Fim Km",
      format: (data: any) =>
        data == undefined ? "" : data.toFixed(1) + " Km",
    },
    {
      field: "start",
      label: "Inicio",
      format: (data: any) => data,
    },
    {
      field: "end",
      label: "Fim",
      format: (data: any) =>
        data == undefined ? "" : data,
    },
    {
      field: "autonomy",
      label: "Autonomia",
      format: (data: any) =>
        data == undefined ? "" : data.toFixed(1) + " Km/L",
    },
    {
      field: "autonomy",
      label: "",
      format: (data: string, row: any) =>
        data != undefined ? (
          ""
        ) : (
          <div
            className="p-2 rounded-xl cursor-pointer"
            title="Finalizar viagem"
          >
            <Link to={`/viagens/${row.idTravel}/finalizar`}>
              <BadgeCheck size={14} />
            </Link>
          </div>
        ),
    },
  ];

  async function loadTravels() {
    try {
      setIsLoading(true);
      const skip =
        navigation.currentPage * navigation.itemPerPage -
        navigation.itemPerPage;

      const response = await travelService.getAll(
        skip,
        navigation.itemPerPage
      );
      setTravels(response);
      setTotalItems(6);
    } finally {
      setIsLoading(false);
    }
  }

  async function loadTravel(id: string) {
    try {
      setIsLoading(true);

      const response = await travelService.find(id);
      setTravel(response);
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
