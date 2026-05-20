import { PencilLine, Trash2 } from "lucide-react";
import PaginatorTable from "./PaginatorTable";

type colNames = {
  field: string;
  label: string;
  format: (data: any) => any;
};
interface NavegatorTable {
  totalItens: number;
  currentPage: number;
  itensPerPage: number;
  changePage: (page: number) => void;
  changeItemPerPage: (e: any) => void;
}
interface TableProps {
  headerTable: string;
  columnNames: colNames[];
  columnValues: any[];
  messageEmpty?: string;
  navegation: NavegatorTable;
  colEdit?: boolean;
  colTrash?: boolean;
}

export default function Table({
  headerTable,
  columnNames,
  columnValues,
  messageEmpty,
  navegation,
  colEdit = true,
  colTrash = true,
}: TableProps) {
  const totalPages = Math.ceil(
    navegation.totalItens / navegation.itensPerPage
  );

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
          {columnValues.map((row, indexRow) => (
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
        itemPerPage={navegation.itensPerPage}
        changePerPage={navegation.changeItemPerPage}
        totalItens={navegation.totalItens}
        totalPages={totalPages}
        currentPage={navegation.currentPage}
        changePage={navegation.changePage}
      />
    </div>
  );
}
