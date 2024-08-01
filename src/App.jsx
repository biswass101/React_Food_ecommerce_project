import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import "../src/App.css";
import OrderConfirmed from "./pages/OrderConfirmed/OrderConfirmed";
import { HamburgerContext } from "./context/HamburgerDisplay";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [hamDis, setHamDis] = useState("inline");
  return (
    <div className="app-container">
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <HamburgerContext.Provider value={{ hamDis, setHamDis }}>
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
            <Route path="/order-confirmed" element={<OrderConfirmed />} />
          </Routes>
        </HamburgerContext.Provider>
      </div>
      <Footer />
    </div>
  );
};

export default App;
