import { useState } from "react";
import Table from "../../components/ui/Table/Table";
import { ButtonSave } from "../../components/ui/ButtonSave";
import DefaultModal from "../../components/modal/DefaultModal";

type DataListLayoutProps = {
  title: string;
  modalTitle: string;
  formModal: React.ReactNode;
  isLoading?: boolean;
  columns: any[];
  data: any[];
  navigation: any;
};

export function DataListLayout({
  title,
  modalTitle,
  formModal,
  isLoading,
  columns,
  data,
  navigation,
}: DataListLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const buttons = {
    confirm: {
      text: "Salvar",
      action: () => {
        console.log("executou...");
        onClose();
      },
    },
    cancel: {
      text: "Cancelar",
      action: onClose,
    },
  };
  return (
    <>
      <DefaultModal
        isOpen={isOpen}
        onClose={onClose}
        title={modalTitle}
        buttons={buttons}
      >
        {formModal}
      </DefaultModal>
      <div className="flex flex-col justify-center bg-white p-4 gap-2">
        <div className="flex justify-end">
          <ButtonSave
            action={() => setIsOpen(true)}
            showIcon={false}
            text="Novo"
          />
        </div>
        <Table
          headerTable={title}
          isLoading={isLoading}
          columnNames={columns}
          columnValues={data}
          navigation={navigation}
        />
      </div>
    </>
  );
}
