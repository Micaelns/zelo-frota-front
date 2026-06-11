import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { describe, expect, it, vi } from "vitest";
import { ButtonsForm } from "./ButtonsForm";

describe("ButtonsForm", () => {
  it("deve existir 2 buttons clicáveis", async () => {
    const confirmAction = vi.fn();
    const cancelAction = vi.fn();

    const buttons = {
      confirm: {
        text: "Salvar",
        action: confirmAction,
      },
      cancel: {
        text: "Cancelar",
        action: cancelAction,
      },
    };

    render(<ButtonsForm buttonsGroup={buttons} />);

    await userEvent.click(
      screen.getByRole("button", {
        name: "Cancelar",
      })
    );

    expect(cancelAction).toHaveBeenCalledTimes(1);

    await userEvent.click(
      screen.getByRole("button", {
        name: "Salvar",
      })
    );

    expect(confirmAction).toHaveBeenCalledTimes(1);
  });
});
