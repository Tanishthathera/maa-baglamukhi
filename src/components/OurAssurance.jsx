import React from "react";
import { motion } from "framer-motion";

const assuranceData = [
  {
    title: "🔒 100% Authentic Puja",
    desc: "Every ritual is performed as per Vedic Vidhi by experienced Pandit Ji.",
  },
  {
    title: "📸 Live Puja Updates",
    desc: "Get images/videos of your puja in real-time for complete transparency.",
  },
  {
    title: "📿 Personalised Rituals",
    desc: "Puja is customised as per your name, gotra, and sankalp details.",
  },
  {
    title: "📞 24x7 Support",
    desc: "Our team is always available to assist you before, during & after the puja.",
  },
];

const OurAssurance = () => {
  return (
    <section className="assurance-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Assurance
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Your spiritual journey is in safe hands
      </motion.p>

      <div className="assurance-cards">
        {assuranceData.map((card, index) => (
          <motion.div
            key={index}
            className="assurance-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurAssurance;
