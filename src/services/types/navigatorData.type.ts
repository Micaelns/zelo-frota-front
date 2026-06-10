export interface NavigationData {
  currentPage: number;
  totalItens: number;
  totalPages: number;
  itemPerPage: number;
  changePerPage: (perPage: number) => void;
  changePage: (page: number) => void;
}
