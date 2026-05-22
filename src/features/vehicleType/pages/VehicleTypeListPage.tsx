import { useState } from "react";
import Table from "../../../components/ui/Table/Table";
import { ButtonSave } from "../../../components/ui/ButtonSave";
import DefaultModal from "../../../components/modal/DefaultModal";
import { useVehicleTypes } from "../hooks/useVehicleTypes";
import { VehicleTypeCreatePage } from "./VehicleTypeCreatePage";

export function VehicleTypeListPage() {
  const {
    vehicleTypes,
    isLoading,
    columnsMap,
    navigation,
  } = useVehicleTypes();
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
        title="Formulário Tipo de veículo"
        buttonConfirm={buttonConfirm}
      >
        <VehicleTypeCreatePage />
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
          headerTable="Lista de tipo de veiculos"
          isLoading={isLoading}
          columnNames={columnsMap}
          columnValues={vehicleTypes}
          navigation={navigation}
        />
      </div>
    </>
  );
}
