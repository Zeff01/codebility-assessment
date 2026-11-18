import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { QuantitySelector } from "./quantity-selector";

describe("QuantitySelector", () => {
  it("increments and decrements the value", async () => {
    const onChange = vi.fn();
    render(<QuantitySelector value={2} max={5} onChange={onChange} />);

    await userEvent.click(screen.getByRole("button", { name: "Increase quantity" }));
    await userEvent.click(screen.getByRole("button", { name: "Decrease quantity" }));

    expect(onChange).toHaveBeenNthCalledWith(1, 3);
    expect(onChange).toHaveBeenNthCalledWith(2, 1);
  });

  it("disables the buttons at the bounds", () => {
    const { rerender } = render(<QuantitySelector value={1} max={3} onChange={() => {}} />);
    expect(screen.getByRole("button", { name: "Decrease quantity" })).toBeDisabled();

    rerender(<QuantitySelector value={3} max={3} onChange={() => {}} />);
    expect(screen.getByRole("button", { name: "Increase quantity" })).toBeDisabled();
  });

  it("disables everything when disabled", () => {
    render(<QuantitySelector value={2} max={5} disabled onChange={() => {}} />);

    for (const button of screen.getAllByRole("button")) {
      expect(button).toBeDisabled();
    }
  });
});
