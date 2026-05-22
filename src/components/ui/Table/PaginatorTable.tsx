import { ChevronLeft, ChevronRight } from "lucide-react";
import type { NavigationData } from "../../../services/types/navigatorData.types";

type PaginatorTableProps = {
  navigation: NavigationData;
};

export default function PaginatorTable({
  navigation,
}: PaginatorTableProps) {
  const {
    currentPage,
    totalItens,
    totalPages,
    itemPerPage,
    changePerPage,
    changePage,
  } = navigation;

  const lastItemPage = currentPage * itemPerPage;
  const firstItemPage = lastItemPage - itemPerPage;

  if (totalItens == 0) {
    return;
  }

  const nextPage = () => {
    changePage(currentPage + 1);
  };

  const beforePage = () => {
    changePage(currentPage - 1);
  };

  const generateItemPaginate = () => {
    const paginas = [];
    const limiteAbas = 1;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - limiteAbas &&
          i <= currentPage + limiteAbas)
      ) {
        paginas.push(i);
      } else if (paginas[paginas.length - 1] !== "...") {
        paginas.push("...");
      }
    }
    return paginas;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 pt-2 border-t border-gray-200 text-sm text-zinc-600">
      <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
        <span>Itens por página:</span>
        <select
          value={itemPerPage}
          onChange={changePerPage}
          className="border border-gray-300 rounded px-2 py-1 bg-white outline-none focus:border-zinc-500 cursor-pointer"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>

      <div className="flex items-center justify-center gap-1 w-full sm:w-auto">
        <button
          onClick={beforePage}
          disabled={currentPage === 1}
          className="p-1.5 rounded border border-gray-200 hover:bg-zinc-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <ChevronLeft size={16} />
        </button>

        {generateItemPaginate().map((numberPage, index) => {
          if (numberPage === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-2 text-zinc-400 select-none"
              >
                ...
              </span>
            );
          }

          return (
            <button
              key={numberPage}
              onClick={() => changePage(Number(numberPage))}
              className={`min-w-8 h-8 px-2 rounded border transition-colors cursor-pointer ${
                currentPage === numberPage
                  ? "bg-zinc-900 border-zinc-900 text-white font-medium"
                  : "border-gray-300 hover:bg-zinc-50 text-zinc-700"
              }`}
            >
              {numberPage}
            </button>
          );
        })}

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="p-1.5 rounded border border-gray-200 hover:bg-zinc-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <ChevronRight size={16} />
        </button>
      </div>
      <span className="hidden sm:inline">
        {firstItemPage + 1} -{" "}
        {Math.min(lastItemPage, totalItens)} de {totalItens}
      </span>
    </div>
  );
}
