import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import {motion} from 'framer-motion'
import hamburger from "../../assets/hamburger.png";
import { HamburgerContext } from "../../context/HamburgerDisplay";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount } = useContext(StoreContext);
  const [wWidth, setWWdith] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamVal = useContext(HamburgerContext)
  const smDevice = window.innerWidth <= 768 ? true : false;
  const location = useLocation()
  // console.log(location);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWWdith(window.innerWidth);
    });
  }, []);
  // console.log(hamVal);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
      {smDevice && !isMenuOpen ? (
        <img style={{display : hamVal.hamDis}} onClick={() => setIsMenuOpen(true)} className="hamburger-icon" src={hamburger} alt="" />
      ) : (
        <motion.ul 
            initial = {{opacity: 0}}
            animate = {{x : [230, 0],
                opacity : 1
            }}
            transition={{duration: 0.25}}

        className="navbar-menu">
          <a
            href="#header"
            onClick={() => {
              setMenu("home")
              setIsMenuOpen(false)
            }}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </a>
          <a
            href="#explore-menu"
            onClick={() => {
              setMenu("menu")
              setIsMenuOpen(false)
            }}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
          <a
            href="#app-download"
            onClick={() => {
              setMenu("mobile-app");
              setIsMenuOpen(false)
            }}
            className={menu === "mobile-app" ? "active" : ""}
          >
            Mobile App
          </a>
          <a
            href="#footer"
            onClick={() => {
              setMenu("contact-us");
              setIsMenuOpen(false)
            }}
            className={menu === "contact-us" ? "active" : ""}
          >
            Contact Us
          </a>
        </motion.ul>
      )}
    </div>
  );
};

export default Navbar;
