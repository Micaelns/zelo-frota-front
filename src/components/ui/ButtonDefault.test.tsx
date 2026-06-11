import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { describe, expect, it, vi } from "vitest";
import { ButtonDefault } from "./ButtonDefault";

describe("ButtonDefault", () => {
  it("deve chamar action ao clicar", async () => {
    const action = vi.fn();

    render(
      <ButtonDefault text="Cancelar" action={action} />
    );

    await userEvent.click(screen.getByRole("button"));

    expect(action).toHaveBeenCalledOnce();
  });

  it("deve exibir o text corretamente", () => {
    render(
      <ButtonDefault
        text="Voltar"
        action={vi.fn()}
        showIcon={true}
      />
    );

    expect(screen.getByText("Voltar")).toBeInTheDocument();
  });

  it("deve exibir o ícone quando showIcon=true", () => {
    render(
      <ButtonDefault
        text="Voltar"
        action={vi.fn()}
        showIcon={true}
      />
    );

    expect(
      screen.getByTestId("back-icon")
    ).toBeInTheDocument();
  });

  it("não deve exibir o ícone quando showIcon=false", () => {
    render(
      <ButtonDefault
        text="Voltar"
        action={vi.fn()}
        showIcon={false}
      />
    );

    expect(
      screen.queryByTestId("back-icon")
    ).not.toBeInTheDocument();
  });
});
