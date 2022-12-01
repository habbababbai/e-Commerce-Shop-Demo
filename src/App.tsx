import React, { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import Shop from "./components/shopPage/shopPage";
import FilteredShopPage from "./components/shopPage/filteredShopPage";
import ItemPage from "./components/itemPage/itemPage";
import Navbar from "./components/navbar/navbar";
import Cart from "./components/cart/cart";
import OrderForm from "./components/orderForm/orderForm";
import ThankYouPage from "./components/thankYouPage/thankYouPage";
import ErrorPage from "./components/errorPage/errorPage";

// wrapper which on page change scrolls to the top
const Wrapper = ({ children }: any) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
};

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar></Navbar>
                <Wrapper>
                    <Routes>
                        <Route path="*" element={<ErrorPage />} />
                        <Route path="/" element={<Shop />} />
                        <Route path="/items/:id" element={<ItemPage />} />
                        <Route
                            path="/category/:id"
                            element={<FilteredShopPage />}
                        />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/orderForm" element={<OrderForm />} />

                        <Route
                            path="/thankYouPage"
                            element={<ThankYouPage />}
                        ></Route>
                    </Routes>
                </Wrapper>
            </div>
        </BrowserRouter>
    );
}

export default App;
