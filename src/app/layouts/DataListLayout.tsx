import Table from "../../components/ui/Table/Table";
import { ButtonSave } from "../../components/ui/ButtonSave";
import type { ElementButtonForm } from "../../services/types/elementButtonsForm.type";

type DataListLayoutProps = {
  title: string;
  isLoading?: boolean;
  buttonDefault?: ElementButtonForm;
  columns: any[];
  data: any[];
  messageEmpty?: string;
  navigation: any;
};

export function DataListLayout({
  title,
  isLoading,
  buttonDefault,
  columns,
  data,
  messageEmpty,
  navigation,
}: DataListLayoutProps) {
  return (
    <div className="flex flex-col justify-center bg-white p-4 gap-2">
      <div className="flex justify-end">
        <ButtonSave
          action={() => buttonDefault?.action()}
          showIcon={false}
          text={buttonDefault?.text}
        />
      </div>
      <Table
        headerTable={title}
        isLoading={isLoading}
        columnNames={columns}
        columnValues={data}
        messageEmpty={messageEmpty}
        navigation={navigation}
      />
    </div>
  );
}
