import Table from "../../components/ui/Table/Table";
import { ButtonSave } from "../../components/ui/ButtonSave";
import type { ElementButtonForm } from "../../services/types/elementButtonsForm.type";
import type { ElementProps } from "../../services/types/elementProps.type";
import type { NavigationData } from "../../services/types/navigationData.type";

type DataListLayoutProps<T> = {
  title: string;
  isLoading?: boolean;
  buttonDefault?: ElementButtonForm;
  columns: ElementProps<T>[];
  data: T[];
  messageEmpty?: string;
  navigation: NavigationData;
  actionUpdate: (row: T) => void;
  actionDelete: (row: T) => void;
};

export function DataListLayout<T>({
  title,
  isLoading,
  buttonDefault,
  columns,
  data,
  messageEmpty,
  navigation,
  actionUpdate,
  actionDelete,
}: DataListLayoutProps<T>) {
  return (
    <div className="flex flex-col justify-center bg-white p-4 gap-2">
      {buttonDefault && (
        <div className="flex justify-end">
          <ButtonSave
            action={() => buttonDefault?.action()}
            showIcon={false}
            text={buttonDefault?.text}
          />
        </div>
      )}
      <Table
        headerTable={title}
        isLoading={isLoading}
        columnNames={columns}
        columnValues={data}
        messageEmpty={messageEmpty}
        navigation={navigation}
        actionUpdate={actionUpdate}
        actionDelete={actionDelete}
      />
    </div>
  );
}
