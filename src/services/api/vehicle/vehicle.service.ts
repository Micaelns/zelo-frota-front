import { api } from "../../../services/api/api";
import type { Vehicle } from "../../../features/vehicle/types/vehicle.types";
import type { ApiResult } from "../../types/apiResult.type";

function getDefaultError(
  perPage?: number
): ApiResult<Vehicle[]> {
  return {
    error:
      "Ocorreu um erro interno tente novamente mais tarde",
    pagination: {
      currentPage: 1,
      perPage: perPage,
      totalItems: 0,
      totalPages: 0,
    },
    isSuccess: false,
    value: [],
  };
}

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
      return getDefaultError(take);
    }
  },
};
