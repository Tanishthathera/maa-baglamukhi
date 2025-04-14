import React from 'react';
import { FaGavel, FaHandHoldingHeart, FaPrayingHands } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HistoryMiracles = () => {
  return (
    <section className="history-miracles">
      
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          History & Miracles
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          The holy temple of Maa Baglamukhi in Nalkheda, Madhya Pradesh, has been a powerful spiritual center for centuries. 
          Known for its unique energy and sacred rituals, it attracts countless devotees, saints, and seekers.
        </motion.p>

        <div className="miracle-cards">
          <motion.div
            className="miracle-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <FaGavel className="icon" />
            <h3>Victory in Legal Matters</h3>
            <p>Many devotees have won tough court cases after doing Maa Baglamukhi’s anushthan.</p>
          </motion.div>

          <motion.div
            className="miracle-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <FaHandHoldingHeart className="icon" />
            <h3>Protection from Negativity</h3>
            <p>Her blessings have shielded people from evil energies, black magic, and jealousy.</p>
          </motion.div>

          <motion.div
            className="miracle-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <FaPrayingHands className="icon" />
            <h3>Divine Interventions</h3>
            <p>People have experienced divine signs and fulfilled wishes after sincere prayers.</p>
          </motion.div>
        </div>

        <motion.p
          className="final-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          The temple holds special importance during <strong>Navratri</strong>, when powerful rituals like <em>Baglamukhi Anushthan</em> are performed for spiritual upliftment, peace, and prosperity.
        </motion.p>
      
    </section>
  );
};

export default HistoryMiracles;
