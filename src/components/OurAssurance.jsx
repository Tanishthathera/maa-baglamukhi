import React from "react";

const OurAssurance = () => {
  return (
    <section className="assurance-section">
      <div className="container">
        <h2 className="section-title">Our Assurance</h2>
        <p className="section-subtitle">Your spiritual journey is in safe hands</p>

        <div className="assurance-cards">
          <div className="assurance-card">
            <h3>🔒 100% Authentic Puja</h3>
            <p>Every ritual is performed as per Vedic Vidhi by experienced Pandit Ji.</p>
          </div>

          <div className="assurance-card">
            <h3>📸 Live Puja Updates</h3>
            <p>Get images/videos of your puja in real-time for complete transparency.</p>
          </div>

          <div className="assurance-card">
            <h3>📿 Personalised Rituals</h3>
            <p>Puja is customised as per your name, gotra, and sankalp details.</p>
          </div>

          <div className="assurance-card">
            <h3>📞 24x7 Support</h3>
            <p>Our team is always available to assist you before, during & after the puja.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAssurance;