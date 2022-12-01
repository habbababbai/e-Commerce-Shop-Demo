import { NavbarButton } from "./navbarButton";
import { fireEvent, render, screen } from "@testing-library/react";

describe("navbar button", () => {
    test("button check", () => {
        let checked = false;

        function Toggle() {
            checked = !checked;
        }

        render(<NavbarButton checked={checked} onclick={() => Toggle()} />);
        const button = screen.getByRole("checkbox");

        fireEvent.click(button);
        expect(checked).toBe(true);

        fireEvent.click(button);
        expect(checked).toBe(false);
    });
});
