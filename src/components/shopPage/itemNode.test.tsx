import ItemNode from "./itemNode";
import { screen, render, fireEvent } from "@testing-library/react";
import { store } from "../../redux/store";
import { Provider } from "react-redux";
import { Router, Routes, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

const item = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    category: "men's clothing",
    description: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
};

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
                        element={
                            <ItemNode
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                category={item.category}
                                description={item.description}
                                image={item.image}
                            />
                        }
                    ></Route>
                </Routes>
            </Router>
        </Provider>
    );
}

describe("item node", () => {
    test("display item info", () => {
        render(<TestComponent />);
        const title = screen.getByText(item.title);
        const img = screen.getByAltText("item");
        const price = screen.getByText(`${item.price} $`);
        const category = screen.getByText(item.category);

        expect(title).toBeInTheDocument();
        expect(img).toBeInTheDocument();
        expect(price).toBeInTheDocument();
        expect(category).toBeInTheDocument();
    });
    test("increment decrement buttons", () => {
        render(<TestComponent />);
        const increment = screen.getByText("+");
        const decrement = screen.getByText("-");

        const value = screen.getByText("1");
        expect(value).toBeInTheDocument();

        fireEvent.click(decrement);
        expect(screen.getByText("1")).toBeInTheDocument();

        fireEvent.click(increment);
        expect(screen.getByText("2")).toBeInTheDocument();

        for (let i = 0; i < 10; i++) {
            fireEvent.click(increment);
        }
        expect(screen.getByText("5")).toBeInTheDocument();

        fireEvent.click(decrement);
        expect(screen.getByText("4")).toBeInTheDocument();
    });
    test("go details", () => {
        render(<TestComponent />);
        const details = screen.getByText("Details");
        fireEvent.click(details);
        expect(history.push).toHaveBeenCalledTimes(1);
        expect(history.push).toBeCalledWith(
            { hash: "", pathname: "/items/1", search: "" },
            undefined,
            {
                preventScrollReset: undefined,
                relative: undefined,
                replace: false,
                state: undefined,
            }
        );
    });
    test("add to cart", () => {
        render(<TestComponent />);
        const add = screen.getByText("Add to Cart");
        fireEvent.click(add);
        expect(store.getState().localCart.length).toBe(1);
        expect(
            screen.getByText("Succesfully added items!")
        ).toBeInTheDocument();
        expect(add).toBeDisabled();

        setTimeout(() => {
            expect(add).toBeEnabled();
        }, 5000);
    });
});
