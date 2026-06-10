import { api } from "../../../services/api/api";

import type { VehicleType } from "../../../features/vehicleType/types/vehicleType.types";
import type { ApiResult } from "../../types/apiResult.type";
import {
  getDefaultPagedError,
  getFormatedError,
} from "../../api/helpers/apiResponse";

export const vehicleTypeService = {
  async getAll(
    page = 1,
    take = 5
  ): Promise<ApiResult<VehicleType[]>> {
    try {
      const result = await api.get("/VehicleType", {
        params: {
          page,
          take,
        },
      });
      return result.data;
    } catch {
      return getDefaultPagedError<VehicleType[]>(take);
    }
  },

  async create(form: VehicleType) {
    try {
      await api.post("/VehicleType", {
        ...form,
      });
    } catch {
      return;
    }
  },

  async update(form: VehicleType) {
    try {
      await api.put("/VehicleType/" + form.id, {
        ...form,
      });
    } catch (e) {
      return getFormatedError<VehicleType>(e);
    }
  },

  async Find(id: string): Promise<ApiResult<VehicleType>> {
    try {
      const result = await api.get("/VehicleType/" + id);
      return result.data;
    } catch (e) {
      return getFormatedError<VehicleType>(e);
    }
  },

  async Delete(id: string) {
    try {
      await api.delete("/VehicleType/" + id);
    } catch {
      return getDefaultPagedError<VehicleType>();
    }
  },
};
