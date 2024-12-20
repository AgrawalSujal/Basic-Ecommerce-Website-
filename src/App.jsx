import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./Pages/Registration.jsx";
import Login from "./Pages/Login.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
// import Product from "./components/Products.jsx";
import Home from "./Pages/Home.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./Pages/Cart";
import ScrollToTop from "./components/ScrollToTop.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import Products from "./components/Products.jsx";
import { Product } from "./Pages/Product.jsx";
import Checkout from "./Pages/Checkout.jsx";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/*" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
