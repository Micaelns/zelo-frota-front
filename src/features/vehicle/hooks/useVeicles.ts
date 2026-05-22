import { useEffect, useState } from "react";

import { vehicleService } from "../../../services/api/vehicle/vehicle.service";

import type { Vehicle } from "../types/vehicle.types";

export function useVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadVehicles();
  }, []);

  async function loadVehicles(skip = 0, take = 5) {
    try {
      setIsLoading(true);

      const response = await vehicleService.getAll(
        skip,
        take
      );

      setVehicles(response);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    vehicles,
    isLoading,
    loadVehicles,
  };
}
