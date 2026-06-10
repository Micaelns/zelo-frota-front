import axios from "axios";
import type { ApiResult } from "../../types/apiResult.type";

export function getDefaultPagedError<T>(
  perPage?: number
): ApiResult<T> {
  return {
    error:
      "Ocorreu um erro interno tente novamente mais tarde",
    pagination: {
      currentPage: 1,
      perPage: perPage ?? 5,
      totalItems: 0,
      totalPages: 0,
    },
    isSuccess: false,
  };
}

export function getFormatedError<T>(e: unknown) {
  if (axios.isAxiosError(e)) {
    if (e.response?.data?.error) {
      return e.response.data;
    }
  }

  return getDefaultPagedError<T>();
}
