import { PencilLine, Trash2 } from "lucide-react";
import { useState } from "react";
import PaginatorTable from "./PaginatorTable";

type colNames = {
  field: string;
  label: string;
  format: (data: any) => any;
};
interface TableProps {
  headerTable: string;
  columnNames: colNames[];
  columnValues: any[];
  messageEmpty?: string;
  colEdit?: boolean;
  colTrash?: boolean;
}

export default function TableSelfManaged({
  headerTable,
  columnNames,
  columnValues,
  messageEmpty,
  colEdit = true,
  colTrash = true,
}: TableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itensPerPage, setItensPerPage] = useState(5);

  const totalItens = columnValues.length;
  const totalPages = Math.ceil(totalItens / itensPerPage);

  const lastItem = currentPage * itensPerPage;
  const firstItem = lastItem - itensPerPage;

  const paginatedData = columnValues.slice(
    firstItem,
    lastItem
  );

  const changePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const changeItemPerPage = (e: any) => {
    setItensPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col pt-2">
      <h2 className="text-center">{headerTable}</h2>

      <table className="mt-2">
        <thead>
          <tr className="border-b-2 text-left border-gray-300">
            {columnNames.map((col) => (
              <th
                key={col.field}
                className="p-2 font-semibold text-zinc-700"
              >
                {col.label}
              </th>
            ))}
            {colEdit == true && (
              <th className="pl-2 w-0"></th>
            )}
            {colTrash == true && (
              <th className="pl-2 w-0"></th>
            )}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, indexRow) => (
            <tr
              className=" border-b border-zinc-100 "
              key={row.id || indexRow}
            >
              {columnNames.map((col) => (
                <td className="p-2">
                  {col.format(row[col.field])}
                </td>
              ))}
              {colEdit == true && (
                <td className="p-2">
                  <div className="p-2 rounded-xl cursor-pointer hover:bg-slate-100">
                    <PencilLine size={14} />
                  </div>
                </td>
              )}
              {colTrash == true && (
                <td className="p-2 ">
                  <div className="p-2 rounded-xl cursor-pointer hover:bg-slate-100">
                    <Trash2 size={14} />
                  </div>
                </td>
              )}
            </tr>
          ))}
          {columnValues.length === 0 && (
            <tr>
              <td
                colSpan="6"
                className="text-center p-4 text-zinc-400"
              >
                {messageEmpty != null
                  ? messageEmpty
                  : "Nenhum elemento encontrado."}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <PaginatorTable
        itemPerPage={itensPerPage}
        changePerPage={changeItemPerPage}
        totalItens={totalItens}
        totalPages={totalPages}
        currentPage={currentPage}
        changePage={changePage}
      />
    </div>
  );
}
