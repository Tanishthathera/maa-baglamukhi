import React from "react";
import { motion } from "framer-motion";

const PanditServices = () => {
  return (
    <section className="pandit-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Meet Our Pandit Ji
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Your Guide for Divine Rituals
        </motion.p>

        <div className="pandit-content">
          <motion.img
            src="/assets/images/panditji.png"
            alt="Pandit Ji"
            className="pandit-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          <motion.div
            className="pandit-details"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p>
              Our experienced Pandit Ji has performed hundreds of powerful
              <strong> Baglamukhi Anushthans</strong> and <strong> Hawans</strong> across India.
              With deep spiritual knowledge and Vedic mastery, he guides every puja with utmost devotion and accuracy.
            </p>

            <ul className="puja-services">
              <li>✅ Baglamukhi Anushthan (11 days)</li>
              <li>✅ Pitambara Sadhna</li>
              <li>✅ Baglamukhi Hawan</li>
              <li>✅ Tantra Removal Puja</li>
              <li>✅ Court Case & Enemy Defeat Puja</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PanditServices;
