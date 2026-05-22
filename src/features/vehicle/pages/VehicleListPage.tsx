import { useState } from "react";
import Table from "../../../components/ui/Table/Table";
import { ButtonSave } from "../../../components/ui/ButtonSave";
import DefaultModal from "../../../components/modal/DefaultModal";
import { VehicleCreatePage } from "./VehicleCreatePage";
import { useVehicles } from "../hooks/useVehicles";

export function VehicleListPage() {
  const { vehicles, isLoading } = useVehicles();
  const [isOpen, setIsOpen] = useState(true);

  //const [currentPage, setCurrentPage] = useState(1);
  //const [itensPerPage, setItensPerPage] = useState(5);

  const columnNames = [
    {
      field: "id",
      label: "Id",
      format: (data: any) => data,
    },
    {
      field: "plate",
      label: "Placa",
      format: (data: any) => data,
    },
    {
      field: "vehicleType",
      label: "Tipo de veiculo",
      format: (data: any) => data,
    },
    {
      field: "mileage",
      label: "Quilometragem",
      format: (data: any) => data.toFixed(1) + " Km",
    },
  ];

  const totalPages = 1; //Math.ceil(totalItens / itensPerPage);
  const changeItemPerPage = (e: any) => {
    //setItensPerPage(Number(e.target.value));
    //setCurrentPage(1);
  };

  const changePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      //setCurrentPage(newPage);
    }
  };

  const navegation = {
    totalItens: vehicles.length,
    currentPage: 1,
    itensPerPage: 5,
    changePage: changePage,
    changeItemPerPage: changeItemPerPage,
  };

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
          columnNames={columnNames}
          columnValues={vehicles}
          navegation={navegation}
        />
      </div>
    </>
  );
}
