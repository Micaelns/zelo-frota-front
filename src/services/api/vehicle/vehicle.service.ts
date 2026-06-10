import { api } from "../../../services/api/api";
import type { Vehicle } from "../../../features/vehicle/types/vehicle.types";
import type { ApiResult } from "../../types/apiResult.type";
import { getDefaultPagedError } from "../../api/helpers/apiResponse";

export const vehicleService = {
  async getAll(
    page = 1,
    take = 5
  ): Promise<ApiResult<Vehicle[]>> {
    try {
      var result = await api.get("/Vehicle", {
        params: {
          page,
          take,
        },
      });
      return result.data;
    } catch (e) {
      return getDefaultPagedError(take);
    }
  },
};
