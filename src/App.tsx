import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Shop from "./components/shopPage/shopPage";
import ItemPage from "./components/itemPage/itemPage";
import Navbar from "./components/navbar/navbar";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Shop />} />
                    <Route path="/items/:id" element={<ItemPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
