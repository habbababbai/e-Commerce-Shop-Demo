import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Counter } from "./counter";

describe("counter", () => {
    test("shows value", () => {
        render(
            <Counter value={1} increment={() => null} decrement={() => null} />
        );
        const value = screen.getByText(/1/i);
        expect(value).toBeInTheDocument();
    });
    test("runs function", () => {
        let number = 1;
        const increment = () => {
            number++;
        };
        const decrement = () => {
            number--;
        };
        render(
            <Counter
                value={number}
                increment={increment}
                decrement={decrement}
            />
        );
        const incButton = screen.getByText("+");
        fireEvent.click(incButton);
        expect(number).toBe(2);

        const decButton = screen.getByText("-");
        fireEvent.click(decButton);
        expect(number).toBe(1);
    });
});
