import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./errorPage";
import { createMemoryHistory } from "history";

describe("error page", () => {
    test("display text", () => {
        render(
            <MemoryRouter>
                <ErrorPage />
            </MemoryRouter>
        );
        expect(screen.getByRole("button")).toHaveTextContent("Homepage");
        expect(screen.getByRole("heading")).toHaveTextContent(
            "Sorry, something went wrong!"
        );
    });
    test("go home", () => {
        const history = createMemoryHistory({
            initialEntries: [`/items/1`],
        });
        history.push = jest.fn();

        render(
            <Router location={history.location} navigator={history}>
                <Routes>
                    <Route path="*" element={<ErrorPage />}></Route>
                </Routes>
            </Router>
        );
        const home = screen.getByText("Homepage");
        fireEvent.click(home);

        expect(history.push).toHaveBeenCalledTimes(1);
        expect(history.push).toBeCalledWith(
            { hash: "", pathname: "/", search: "" },
            undefined,
            {
                preventScrollReset: undefined,
                relative: undefined,
                replace: false,
                state: undefined,
            }
        );
    });
});
