import { api } from "../../../services/api/api";
import type { Destination } from "../../../features/destination/type/destination.types";
import type { ApiResult } from "../../types/apiResult.type";
import { getDefaultPagedError } from "../../api/helpers/apiResponse";

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
      return getDefaultPagedError(take);
    }
  },
};
