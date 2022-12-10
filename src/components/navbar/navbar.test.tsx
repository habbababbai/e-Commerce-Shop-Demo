import Navbar from "./navbar";
import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { createMemoryHistory } from "history";
import { Router, Routes, Route } from "react-router-dom";

const history = createMemoryHistory({
    initialEntries: ["/"],
});
history.push = jest.fn();

function TestComponent() {
    return (
        <Provider store={store}>
            <Router location={history.location} navigator={history}>
                <Routes>
                    <Route path="/" element={<Navbar />}></Route>
                </Routes>
            </Router>
        </Provider>
    );
}

describe("navbar", () => {
    test("displays icons", () => {
        render(<TestComponent />);
        const menu = screen.getByRole("checkbox");
        expect(menu).toBeInTheDocument();
        const home = screen.getByAltText("home");
        expect(home).toBeInTheDocument();
        const cart = screen.getByAltText("cart");
        expect(cart).toBeInTheDocument();
    });
    test("toggles menu", () => {
        render(<TestComponent />);
        const menuButton = screen.getByRole("checkbox");
        fireEvent.click(menuButton);

        expect(screen.getByRole("menu")).toBeInTheDocument();
        fireEvent.click(menuButton);
        expect(screen.queryByRole("menu")).toBeNull();
    });
    test("navigates to cart", () => {
        render(<TestComponent />);
        const menuButton = screen.getByRole("checkbox");
        fireEvent.click(menuButton);
        const home = screen.getByText("Cart");
        fireEvent.click(home);
        expect(history.push).toHaveBeenCalledTimes(1);
        expect(history.push).toBeCalledWith(
            { hash: "", pathname: "/cart", search: "" },
            undefined,
            {
                preventScrollReset: undefined,
                relative: undefined,
                replace: false,
                state: undefined,
            }
        );
    });
    test("navigates to jewerly", async () => {
        render(<TestComponent />);
        const menuButton = screen.getByRole("checkbox");
        fireEvent.click(menuButton);
        const jewelry = await screen.findByText("Jewelery");
        fireEvent.click(jewelry);
        expect(history.push).toHaveBeenCalledTimes(1);
        expect(history.push).toBeCalledWith(
            { hash: "", pathname: "/category/jewelery", search: "" },
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
