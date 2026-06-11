import { useState } from "react";
import type { NavigationData } from "../services/types/navigationData.type";

export function UsePagination() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(5);
  const [totalItems, setTotalItems] = useState<number>(0);

  const changePerPage = (perPage: number) => {
    setPerPage(perPage);
    setCurrentPage(1);
  };

  const changePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalItems) {
      setCurrentPage(newPage);
    }
  };

  const navigation: NavigationData = {
    totalItens: totalItems,
    totalPages: Math.ceil(totalItems / perPage),
    currentPage: currentPage,
    itemPerPage: perPage,
    changePage: changePage,
    changePerPage: changePerPage,
  };

  return {
    setTotalItems,
    navigation,
  };
}
