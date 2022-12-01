import { NavbarMenu } from "./navbarMenu";
import { screen, render, fireEvent } from "@testing-library/react";
import { store } from "../../redux/store";
import { Provider } from "react-redux";
import { Router, Routes, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

const history = createMemoryHistory({
    initialEntries: [`/`],
});
history.push = jest.fn();

function TestComponent() {
    return (
        <Provider store={store}>
            <Router location={history.location} navigator={history}>
                <Routes>
                    <Route
                        path="/"
                        element={<NavbarMenu onClickFn={() => {}} />}
                    ></Route>
                </Routes>
            </Router>
        </Provider>
    );
}

describe("navbar menu", () => {
    test("displays categories", async () => {
        render(<TestComponent />);
        const home = screen.getByText("Home");
        expect(home).toBeInTheDocument();
        const cart = screen.getByText("Cart");
        expect(cart).toBeInTheDocument();
        const electronics = await screen.findByText("Electronics");
        expect(electronics).toBeInTheDocument();
        const jewelry = await screen.findByText("Jewelery");
        expect(jewelry).toBeInTheDocument();
        const mclothing = await screen.findByText("Men's clothing");
        expect(mclothing).toBeInTheDocument();
        const wclothing = await screen.findByText("Women's clothing");
        expect(wclothing).toBeInTheDocument();
    });
});
