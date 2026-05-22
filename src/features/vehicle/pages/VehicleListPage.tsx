import { useState } from "react";
import Table from "../../../components/ui/Table/Table";
import { ButtonSave } from "../../../components/ui/ButtonSave";
import DefaultModal from "../../../components/modal/DefaultModal";
import { VehicleCreatePage } from "./VehicleCreatePage";
import { useVehicles } from "../hooks/useVehicles";

export function VehicleListPage() {
  const { vehicles, isLoading, columnsMap, navigation } =
    useVehicles();
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };
  const buttonConfirm = {
    text: "Salvar",
    action: () => {
      console.log("executou...");
    },
  };
  return (
    <>
      <DefaultModal
        isOpen={isOpen}
        onClose={onClose}
        title="Formulário Veículo"
        buttonConfirm={buttonConfirm}
      >
        <VehicleCreatePage />
      </DefaultModal>
      <div className="flex flex-col justify-center bg-white p-4 gap-2">
        <div className="flex justify-end">
          <ButtonSave
            action={() => setIsOpen(true)}
            showIcon={false}
            label="Novo"
          />
        </div>
        <Table
          headerTable="Lista de Produtos"
          isLoading={isLoading}
          columnNames={columnsMap}
          columnValues={vehicles}
          navigation={navigation}
        />
      </div>
    </>
  );
}
