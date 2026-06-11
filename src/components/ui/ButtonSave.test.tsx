import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ButtonSave } from "./ButtonSave";
import { describe, expect, it, vi } from "vitest";

describe("ButtonSave", () => {
  it("deve chamar action ao clicar", async () => {
    const action = vi.fn();

    render(<ButtonSave text="Salvar" action={action} />);

    await userEvent.click(screen.getByRole("button"));

    expect(action).toHaveBeenCalledOnce();
  });

  it("deve exibir o text corretamente", () => {
    render(
      <ButtonSave
        text="Salvar"
        action={vi.fn()}
        showIcon={true}
      />
    );

    expect(screen.getByText("Salvar")).toBeInTheDocument();
  });

  it("deve exibir o ícone quando showIcon=true", () => {
    render(
      <ButtonSave
        text="Salvar"
        action={vi.fn()}
        showIcon={true}
      />
    );

    expect(
      screen.getByTestId("save-icon")
    ).toBeInTheDocument();
  });

  it("não deve exibir o ícone quando showIcon=false", () => {
    render(
      <ButtonSave
        text="Salvar"
        action={vi.fn()}
        showIcon={false}
      />
    );

    expect(
      screen.queryByTestId("save-icon")
    ).not.toBeInTheDocument();
  });
});
