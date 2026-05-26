import { travelsMock } from "../../../features/travel/mocks/travel.mocks";

import type { Travel } from "../../../features/travel/types/travel.types";

export const travelService = {
  async getAll(skip = 0, take = 5): Promise<Travel[]> {
    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    return travelsMock.slice(skip, skip + take);
  },
  async find(id: string): Promise<Travel | null> {
    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );
    const travel = travelsMock.find(
      (item) => item.idTravel === id
    );

    if (!travel) {
      return null;
    }
    return travel;
  },
};
