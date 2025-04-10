import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-container">
        {/* <h1 className="logo">Maa Baglamukhi</h1> */}

        {/* Hamburger */}
        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span className="bar top"></span>
          <span className="bar middle"></span>
          <span className="bar bottom"></span>
        </div>

        {/* Nav Links */}
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/book-puja" onClick={closeMenu}>Book Puja</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to="/astrology" onClick={closeMenu}>Astrology</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
