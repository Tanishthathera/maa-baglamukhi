import React from "react";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Experience divinity in just 3 simple steps</p>

        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Select Your Puja</h3>
            <p>Choose from a variety of Vedic pujas and rituals as per your need.</p>
          </div>

          <div className="step">
            <span className="step-number">2</span>
            <h3>Book Instantly</h3>
            <p>Fill in your details and confirm your booking in just a few clicks.</p>
          </div>

          <div className="step">
            <span className="step-number">3</span>
            <h3>Enjoy Divine Experience</h3>
            <p>Our Pandit Ji performs the puja with pure Vedic rituals and devotion.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
