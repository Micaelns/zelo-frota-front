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
            {columnNames.map((col, indexCol) => (
              <th
                key={`${col.field}-${indexCol}`}
                className="p-2 font-semibold text-zinc-700"
              >
                {col.label}
              </th>
            ))}
            {colEdit && <th className="pl-2 w-0"></th>}
            {colTrash && <th className="pl-2 w-0"></th>}
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            columnValues.map((row, indexRow) => (
              <tr
                className=" border-b border-zinc-100 hover:bg-slate-200"
                key={row.id || indexRow}
              >
                {columnNames.map((col, indexCol) => (
                  <td
                    key={`${col.field}-${indexRow}-${indexCol}`}
                    className="p-2"
                  >
                    {col.format(row[col.field], row)}
                  </td>
                ))}
                {colEdit && (
                  <td className="p-2">
                    <div className="p-2 rounded-xl cursor-pointer">
                      <PencilLine size={14} />
                    </div>
                  </td>
                )}
                {colTrash && (
                  <td className="p-2 ">
                    <div className="p-2 rounded-xl cursor-pointer">
                      <Trash2 size={14} />
                    </div>
                  </td>
                )}
              </tr>
            ))}
          {(columnValues.length === 0 || isLoading) && (
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
        <PaginatorTable navigation={navigation} />
      )}
    </div>
  );
}
