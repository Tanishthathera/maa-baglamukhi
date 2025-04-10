import React from "react";
import { motion } from "framer-motion";

const milestoneData = [
  {
    title: "📿 10,000+ Pujas",
    desc: "Performed across India with complete Vedic rituals.",
  },
  {
    title: "🌍 20+ Countries",
    desc: "Devotees from around the globe trust our services.",
  },
  {
    title: "🏛️ 15+ Years",
    desc: "Of dedicated spiritual service by our Pandit Ji.",
  },
  {
    title: "🙏 50,000+ Devotees",
    desc: "Connected to Maa Baglamukhi through our platform.",
  },
];

const Milestones = () => {
  return (
    <section className="milestones-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Milestones
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A divine journey of trust & devotion
        </motion.p>

        <div className="milestone-cards">
          {milestoneData.map((card, index) => (
            <motion.div
              key={index}
              className="milestone-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
