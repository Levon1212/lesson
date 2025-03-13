import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import './assets/styles/globa;.scss';
import Positions from "./pages/Positions";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/position" element={<Positions/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default Routing;