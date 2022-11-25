import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./errorPage";

describe("error page", () => {
    test("display text", () => {
        render(
            <BrowserRouter>
                <ErrorPage />
            </BrowserRouter>
        );
        expect(screen.getByRole("button")).toHaveTextContent("Homepage");
        expect(screen.getByRole("heading")).toHaveTextContent(
            "Sorry, something went wrong!"
        );
    });
});
