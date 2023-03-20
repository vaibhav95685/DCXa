import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (

    <nav className="app__navbar">
      <div className="app__navbar-logo">
        
        <h1 className="logo">DCXa</h1>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#clients">Blogs & News</a>
        </li>
        <li className="p__opensans">
          <a href="#certification">Planning & Documents</a>
        </li>
        <li className="p__opensans">
          <a href="#brands">Contact</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Buy Now</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In/ Register
        </a>
        
       
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li className="p__opensans">
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li className="p__opensans">
                <a href="#client" onClick={() => setToggleMenu(false)}>
                  Blog & News
                </a>
              </li>
              <li className="p__opensans">
                <a href="#certification" onClick={() => setToggleMenu(false)}>
                  Planning & Documents
                </a>
              </li>
              <li className="p__opensans">
                <a href="#brand" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
              <li className="p__opensans">
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Buy Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
