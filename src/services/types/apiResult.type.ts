interface paginate {
  currentPage: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}

export interface ApiResult<T> {
  isSuccess: boolean;
  error: string;
  value?: T;
  pagination: paginate;
}
