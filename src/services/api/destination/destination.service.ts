import { api } from "../../../services/api/api";
import type { Destination } from "../../../features/destination/type/destination.types";
import type { ApiResult } from "../../types/apiResult.type";

function getDefaultError(
  perPage?: number
): ApiResult<Destination[]> {
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

export const destinationService = {
  async getAll(
    page = 1,
    take = 5
  ): Promise<ApiResult<Destination[]>> {
    try {
      var result = await api.get("/Destination", {
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
