import ItemPage from "./itemPage";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import localCart from "../../features/localCart/localCart";

const itemData = {
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: "Price: 109.95$",
    category: "Category: men's clothing",
    description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
};

describe("item page", () => {
    test("display item data", async () => {
        const itemID = "1";
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[`/items/${itemID}`]}>
                    <Routes>
                        <Route path="/items/:id" element={<ItemPage />}></Route>
                    </Routes>
                </MemoryRouter>
            </Provider>
        );
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
        const itemID = "1";

        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[`/items/${itemID}`]}>
                    <Routes>
                        <Route path="/items/:id" element={<ItemPage />}></Route>
                    </Routes>
                </MemoryRouter>
            </Provider>
        );
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
        const itemID = "1";

        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[`/items/${itemID}`]}>
                    <Routes>
                        <Route path="/items/:id" element={<ItemPage />}></Route>
                    </Routes>
                </MemoryRouter>
            </Provider>
        );
        const add = await screen.findByText("Add to Cart");
        fireEvent.click(add);
        expect(store.getState().localCart.length).toBe(1);
    });
});
