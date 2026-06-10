export interface NavigationData {
  currentPage: number;
  totalItens: number;
  totalPages: number;
  itemPerPage: number;
  changePerPage: (e: any) => void;
  changePage: (page: number) => void;
}
