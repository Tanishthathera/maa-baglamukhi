import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-image-left">
            <img src="/assets/images/maa-baglamukhi.jpg" alt="Maa Baglamukhi" />
          </div>
          <div className="hero-text-right">
            <h1>Maa Baglamukhi Mandir - Nalkheda, MP</h1>
            <p>Experience the Divine Power & Miracles of Maa Baglamukhi</p>
            <Link to="/book-puja" className="puja-btn">
              Book a Puja
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
