import { vehiclesMock } from "../../../features/vehicle/mocks/vehicle.mock";

import type { Vehicle } from "../../../features/vehicle/types/vehicle.types";

export const vehicleService = {
  async getAll(skip = 0, take = 5): Promise<Vehicle[]> {
    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    return vehiclesMock.slice(skip, take);
  },
};
