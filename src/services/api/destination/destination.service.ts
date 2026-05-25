import { destinationMock } from "../../../features/destination/mocks/destination.mock";

import type { Destination } from "../../../features/destination/type/destination.types";

export const destinationService = {
  async getAll(skip = 0, take = 5): Promise<Destination[]> {
    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    return destinationMock.slice(skip, skip + take);
  },
};
