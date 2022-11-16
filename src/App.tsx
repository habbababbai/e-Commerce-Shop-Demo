import React from "react";
import "./App.css";
import Shop from "./components/shopPage/shopPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Item } from "./common/data";
import ItemPage from "./components/itemPage/itemPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Shop />} />
                    <Route path="/items/:id" element={<ItemPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
