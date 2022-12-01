import ItemPage from "./itemPage";
import { MemoryRouter, Router, Routes, Route } from "react-router-dom";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { createMemoryHistory, MemoryHistory } from "history";
import localCart from "../../features/localCart/localCart";

const itemData = {
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: "Price: 109.95$",
    category: "Category: men's clothing",
    description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
};

const history = createMemoryHistory({
    initialEntries: [`/items/1`],
});
history.push = jest.fn();

function TestComponent() {
    return (
        <Provider store={store}>
            <Router location={history.location} navigator={history}>
                <Routes>
                    <Route path="/items/:id" element={<ItemPage />}></Route>
                </Routes>
            </Router>
        </Provider>
    );
}

describe("item page", () => {
    test("display item data", async () => {
        render(<TestComponent />);
        const title = await screen.findByText(itemData.title);
        expect(title).toBeInTheDocument();

        const image = await screen.findByAltText("item");
        expect(image).toHaveAttribute("src", itemData.url);
        expect(image).toBeInTheDocument();

        const price = await screen.findByText(itemData.price);
        expect(price).toBeInTheDocument();

        const category = await screen.findByText(itemData.category);
        expect(category).toBeInTheDocument();

        const descriptionHeader = await screen.findByText(
            "Product Description:"
        );
        expect(descriptionHeader).toBeInTheDocument();
        const description = await screen.findByText(itemData.description);
        expect(description).toBeInTheDocument();
    });

    test("add to cart values", async () => {
        render(<TestComponent />);
        const increment = await screen.findByText("+");
        const decrement = await screen.findByText("-");
        const value = await screen.findByText("1");

        expect(increment).toBeInTheDocument();
        expect(decrement).toBeInTheDocument();
        expect(value).toBeInTheDocument();

        fireEvent.click(increment);
        expect(await screen.findByText("2")).toBeInTheDocument();

        fireEvent.click(decrement);
        expect(await screen.findByText("1")).toBeInTheDocument();

        for (let i = 0; i < 10; i++) {
            fireEvent.click(increment);
        }
        expect(await screen.findByText("5")).toBeInTheDocument();

        for (let i = 0; i < 10; i++) {
            fireEvent.click(decrement);
        }
        expect(await screen.findByText("1")).toBeInTheDocument();
    });
    test("add to local cart", async () => {
        render(<TestComponent />);
        const add = await screen.findByText("Add to Cart");
        fireEvent.click(add);
        expect(store.getState().localCart.length).toBe(1);
        expect(
            await screen.findByText("Succesfully added items!")
        ).toBeInTheDocument();
        expect(add).toBeDisabled();

        setTimeout(() => {
            expect(add).toBeEnabled();
        }, 5000);
    });
    test("go home", async () => {
        render(<TestComponent />);
        const add = await screen.findByText("Go home");
        fireEvent.click(add);

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
