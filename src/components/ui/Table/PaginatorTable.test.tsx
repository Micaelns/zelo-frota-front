import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import PaginatorTable from "./PaginatorTable";
import type { NavigationData } from "../../../services/types/navigationData.type";

function createNavigation(
  override: Partial<NavigationData> = {}
): NavigationData {
  return {
    currentPage: 1,
    totalItens: 100,
    totalPages: 20,
    itemPerPage: 10,
    changePerPage: vi.fn(),
    changePage: vi.fn(),
    ...override,
  };
}

describe("PaginatorTable", () => {
  describe("Renderização", () => {
    it("deve renderizar a página atual", () => {
      render(
        <PaginatorTable
          navigation={createNavigation({
            currentPage: 5,
          })}
        />
      );

      expect(
        screen.getByRole("button", {
          name: "5",
        })
      ).toBeInTheDocument();
    });

    it("deve renderizar o intervalo de itens", () => {
      render(
        <PaginatorTable
          navigation={createNavigation({
            currentPage: 3,
            itemPerPage: 10,
            totalItens: 100,
          })}
        />
      );

      expect(
        screen.getByText("21 - 30 de 100")
      ).toBeInTheDocument();
    });

    it("não deve renderizar quando não existirem itens", () => {
      const { container } = render(
        <PaginatorTable
          navigation={createNavigation({
            totalItens: 0,
          })}
        />
      );

      expect(container.firstChild).toBeNull();
    });

    it("deve exibir reticências quando houver muitas páginas", () => {
      render(
        <PaginatorTable
          navigation={createNavigation({
            currentPage: 10,
            totalPages: 20,
          })}
        />
      );

      expect(
        screen.getAllByText("...").length
      ).toBeGreaterThan(0);
    });
  });

  describe("Paginação", () => {
    it("deve chamar changePage ao clicar em uma página", async () => {
      const changePage = vi.fn();

      render(
        <PaginatorTable
          navigation={createNavigation({
            changePage,
          })}
        />
      );

      await userEvent.click(
        screen.getByRole("button", {
          name: "2",
        })
      );

      expect(changePage).toHaveBeenCalledWith(2);
    });

    it("deve chamar changePage ao clicar em próximo", async () => {
      const changePage = vi.fn();

      render(
        <PaginatorTable
          navigation={createNavigation({
            currentPage: 3,
            changePage,
          })}
        />
      );

      const buttons = screen.getAllByRole("button");

      // último botão = próximo
      await userEvent.click(buttons[buttons.length - 1]);

      expect(changePage).toHaveBeenCalledWith(4);
    });

    it("deve chamar changePage ao clicar em anterior", async () => {
      const changePage = vi.fn();

      render(
        <PaginatorTable
          navigation={createNavigation({
            currentPage: 3,
            changePage,
          })}
        />
      );

      const buttons = screen.getAllByRole("button");

      // primeiro botão = anterior
      await userEvent.click(buttons[0]);

      expect(changePage).toHaveBeenCalledWith(2);
    });

    it("deve desabilitar o botão anterior na primeira página", () => {
      render(
        <PaginatorTable
          navigation={createNavigation({
            currentPage: 1,
          })}
        />
      );

      const buttons = screen.getAllByRole("button");

      expect(buttons[0]).toBeDisabled();
    });

    it("deve desabilitar o botão próximo na última página", () => {
      render(
        <PaginatorTable
          navigation={createNavigation({
            currentPage: 20,
            totalPages: 20,
          })}
        />
      );

      const buttons = screen.getAllByRole("button");

      expect(buttons[buttons.length - 1]).toBeDisabled();
    });
  });

  describe("Itens por página", () => {
    it("deve chamar changePerPage ao alterar a quantidade de itens", async () => {
      const changePerPage = vi.fn();

      render(
        <PaginatorTable
          navigation={createNavigation({
            changePerPage,
          })}
        />
      );

      await userEvent.selectOptions(
        screen.getByRole("combobox"),
        "20"
      );

      expect(changePerPage).toHaveBeenCalledWith(20);
    });
  });
});
