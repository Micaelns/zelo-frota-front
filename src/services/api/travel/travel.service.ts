import type { Travel } from "../../../features/travel/types/travel.types";
import type { ApiResult } from "../../types/apiResult.type";
import { api } from "../api";
import { getDefaultPagedError } from "../../api/helpers/apiResponse";

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
      return getDefaultPagedError(take);
    }
  },
  async find(travelId: string): Promise<ApiResult<Travel>> {
    var result = await api.get(
      "/Vehicle/travels/" + travelId
    );
    return result.data;
  },
};
