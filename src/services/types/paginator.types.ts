export interface Paginatorn {
  currentPage: number;
  itensPerPage: number;
  totalItens: number;
  changePage: (page: number) => void;
  changeItemPerPage: (e: any) => void;
}
