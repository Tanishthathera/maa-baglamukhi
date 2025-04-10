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
            <h1 className="fade-in-up">जय माँ बगलामुखी</h1>
            <p className="fade-in-up delay-1">
              नालखेड़ा, मध्यप्रदेश में स्थित शक्तिपीठ — जहाँ होते हैं चमत्कार
            </p>
            <Link to="/book-puja" className="puja-btn fade-in-up delay-2">
              Book Your Puja
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
