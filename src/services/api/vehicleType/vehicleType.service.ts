import { api } from "../../../services/api/api";

import type { VehicleType } from "../../../features/vehicleType/types/vehicleType.types";
import type { ApiResult } from "../../types/apiResult.type";

export const vehicleTypeService = {
  async getAll(
    page = 1,
    take = 5
  ): Promise<ApiResult<VehicleType>> {
    try {
      var result = await api.get("/VehicleType", {
        params: {
          page,
          take,
        },
      });
      return result.data;
    } catch (e) {
      const result: ApiResult<VehicleType> = {
        error:
          "Servidor ou serviço VehicleType indisponível no momento",
        pagination: {
          currentPage: 1,
          perPage: take,
          totalItems: 0,
          totalPages: 0,
        },
        value: [],
      };
      return result;
    }
  },

  async create(form: VehicleType) {
    try {
      await api.post("/VehicleType", {
        ...form,
      });
    } catch (e) {
      return;
    }
  },
};
