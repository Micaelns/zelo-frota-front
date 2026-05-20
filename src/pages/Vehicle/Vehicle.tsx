import { useState } from "react";
import { DefaultLayout } from "../../components/layouts/DefaultLayout";
import Table from "../../components/ui/Table/Table";
import DefaultModal from "../../components/modal/defaultModal";

export function VehiclePage() {
  const [isOpen, setIsOpen] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [itensPerPage, setItensPerPage] = useState(5);

  const [itens] = useState([
    {
      id: 1,
      nome: "Teclado Mecânico",
      categoria: "Periféricos",
      preco: 350.0,
    },
    {
      id: 2,
      nome: 'Monitor 24" IPS',
      categoria: "Monitores",
      preco: 899.9,
    },
    {
      id: 3,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 4,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 5,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 6,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 7,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 8,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 9,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 10,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 11,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 12,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 13,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 14,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 15,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 16,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 17,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 18,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 19,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 20,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 21,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 22,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 23,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 24,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 25,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 26,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 27,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 28,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 29,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 30,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 31,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 32,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
    {
      id: 33,
      nome: "Mouse Gamer Wireless",
      categoria: "Periféricos",
      preco: 210.5,
    },
  ]);

  const columnNames = [
    {
      field: "id",
      label: "Id",
      format: (data: any) => data,
    },
    {
      field: "nome",
      label: "Nome",
      format: (data: any) => data,
    },
    {
      field: "categoria",
      label: "Categoria",
      format: (data: any) => data,
    },
    {
      field: "preco",
      label: "Preço",
      format: (data: any) => "R$ " + data.toFixed(2),
    },
  ];

  const lastItem = currentPage * itensPerPage;
  const firstItem = lastItem - itensPerPage;

  const paginatedData = itens.slice(firstItem, lastItem);

  const totalItens = 33;
  const totalPages = Math.ceil(totalItens / itensPerPage);
  const changeItemPerPage = (e: any) => {
    setItensPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const changePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const navegation = {
    totalItens: totalItens,
    currentPage: currentPage,
    itensPerPage: itensPerPage,
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
    <DefaultLayout>
      <DefaultModal
        isOpen={isOpen}
        onClose={onClose}
        title="Exemplo"
        buttonConfirm={buttonConfirm}
      >
        Micael Nunesss
      </DefaultModal>
      <div className="flex flex-col justify-center bg-white p-4 gap-2">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-700 cursor-pointer w-24 rounded-xl p-1 text-white m-2"
        >
          Abrir modal
        </button>
        <Table
          headerTable="Lista de Produtos"
          columnNames={columnNames}
          columnValues={paginatedData}
          navegation={navegation}
        />
      </div>
    </DefaultLayout>
  );
}
