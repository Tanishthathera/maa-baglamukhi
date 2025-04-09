import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/book-puja">Book Puja</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/astrology">Astrology</Link>
        </div>

        <p className="footer-text">
          © {new Date().getFullYear()} Maa Baglamukhi Mandir, Nalkheda. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;