import type { Travel } from "../../../features/travel/types/travel.types";
import type { ApiResult } from "../../types/apiResult.type";
import { api } from "../api";

function getDefaultError(
  perPage?: number
): ApiResult<Travel[]> {
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

export const travelService = {
  async getAll(
    vehicleId: string,
    page = 1,
    take = 5
  ): Promise<ApiResult<Travel[]>> {
    try {
      var result = await api.get(
        "/Vehicle/" + vehicleId + "/travels",
        {
          params: {
            page,
            take,
          },
        }
      );
      return result.data;
    } catch (e) {
      return getDefaultError(take);
    }
  },
  async find(travelId: string): Promise<ApiResult<Travel>> {
    var result = await api.get(
      "/Vehicle/travels/" + travelId
    );
    return result;
  },
};
