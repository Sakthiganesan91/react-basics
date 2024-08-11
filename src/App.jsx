import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Order from "./Pages/Order";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/**root - / */}

        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
