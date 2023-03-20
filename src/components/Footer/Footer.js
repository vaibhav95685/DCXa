import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">


    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Your address will be here !</p>
        <p className="p__opensans">+91 1234567891</p>
        <p className="p__opensans">+91 1234567891</p>
        <p className="p__opensans">demo@demo.com</p>
      </div>

      <div className="app__footer-links_logo">
       <h1 className="logo">DCXa</h1>
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <h6 className="logo">DCXa</h6>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Company Info</h1>
        <p className="p__opensans">GST IN : ABCDEFGHIJHKLMNOP</p>
        <p className="p__opensans">LANDLINE N : +91 12-3456789</p>
        <p className="p__opensans">Whatsapp No : 1234567891</p>
        
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 DXCa. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
