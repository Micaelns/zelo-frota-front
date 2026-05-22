import {
  PencilLine,
  Trash2,
  LoaderCircle,
} from "lucide-react";
import PaginatorTable from "./PaginatorTable";
import type { NavigationData } from "../../../services/types/navigatorData.types";
import type { ElementProps } from "../../../services/types/ElementProps.type";

interface TableProps {
  headerTable: string;
  columnNames: ElementProps[];
  columnValues: any[];
  isLoading?: boolean;
  messageEmpty?: string;
  navigation: NavigationData;
  colEdit?: boolean;
  colTrash?: boolean;
}

export default function Table({
  headerTable,
  columnNames,
  columnValues,
  isLoading = false,
  messageEmpty,
  navigation,
  colEdit = true,
  colTrash = true,
}: TableProps) {
  const messageNoData =
    messageEmpty != null
      ? messageEmpty
      : "Nenhum elemento encontrado.";
  const spinAnimated = (
    <span className="flex justify-center">
      <LoaderCircle className="animate-spin" />
    </span>
  );
  return (
    <div className="flex flex-col pt-2">
      <h2 className="text-center text-2xl font-semibold text-zinc-700">
        {headerTable}
      </h2>
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
          {isLoading == false &&
            columnValues.map((row, indexRow) => (
              <tr
                className=" border-b border-zinc-100 hover:bg-slate-200"
                key={row.id || indexRow}
              >
                {columnNames.map((col) => (
                  <td
                    key={col.field || col.label}
                    className="p-2"
                  >
                    {col.format(row[col.field])}
                  </td>
                ))}
                {colEdit == true && (
                  <td className="p-2">
                    <div className="p-2 rounded-xl cursor-pointer">
                      <PencilLine size={14} />
                    </div>
                  </td>
                )}
                {colTrash == true && (
                  <td className="p-2 ">
                    <div className="p-2 rounded-xl cursor-pointer">
                      <Trash2 size={14} />
                    </div>
                  </td>
                )}
              </tr>
            ))}
          {(columnValues.length === 0 ||
            isLoading == true) && (
            <tr>
              <td
                colSpan="6"
                className="text-center p-4 text-zinc-400"
              >
                {isLoading == true
                  ? spinAnimated
                  : messageNoData}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {isLoading == false && columnValues.length != 0 && (
        <PaginatorTable
          itemPerPage={navigation.itemPerPage}
          changePerPage={navigation.changePerPage}
          totalItens={navigation.totalItens}
          totalPages={navigation.totalPages}
          currentPage={navigation.currentPage}
          changePage={navigation.changePage}
        />
      )}
    </div>
  );
}
