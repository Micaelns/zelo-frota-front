import { vehicleTypesMock } from "../../../features/vehicleType/mocks/vehicleType.mock";

import type { VehicleType } from "../../../features/vehicleType/types/vehicleType.types";

export const vehicleTypeService = {
  async getAll(skip = 0, take = 5): Promise<VehicleType[]> {
    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    return vehicleTypesMock.slice(skip, skip + take);
  },
};
