interface paginate {
  currentPage: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}

export interface ApiResult<T> {
  error: string;
  value: T;
  pagination: paginate;
}
