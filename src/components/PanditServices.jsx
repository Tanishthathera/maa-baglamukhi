import React from "react";


const PanditServices = () => {
  return (
    <section className="pandit-section">
      <div className="container">
        <h2 className="section-title">Meet Our Pandit Ji</h2>
        <p className="section-subtitle">Your Guide for Divine Rituals</p>

        <div className="pandit-content">
          <img src="/assets/images/panditji.png" alt="Pandit Ji" className="pandit-image" />

          <div className="pandit-details">
            <p>
              Our experienced Pandit Ji has performed hundreds of powerful
              <strong> Baglamukhi Anushthans</strong> and <strong>Hawans</strong>
              across India. With deep spiritual knowledge and Vedic mastery, he guides every puja with utmost devotion and accuracy.
            </p>

            <ul className="puja-services">
              <li>✅ Baglamukhi Anushthan (11 days)</li>
              <li>✅ Pitambara Sadhna</li>
              <li>✅ Baglamukhi Hawan</li>
              <li>✅ Tantra Removal Puja</li>
              <li>✅ Court Case & Enemy Defeat Puja</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanditServices;