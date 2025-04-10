import React from "react";
import { motion } from "framer-motion";

const references = [
  {
    title: "Shirdi Sai Mandir, Maharashtra",
    desc: "Conducted Navgraha Shanti Puja and Baglamukhi Anushthan in 2022.",
  },
  {
    title: "Online Puja (USA, Canada, UK)",
    desc: "Live-streamed Hawans for international devotees via Zoom & YouTube.",
  },
  {
    title: "Kalkaji Mandir, New Delhi",
    desc: "Performed Shatru Vinash Puja during Navratri Mahotsav.",
  },
  {
    title: "Baglamukhi Peeth, Nalkheda (MP)",
    desc: "Specialized pujas for court cases, career success & protection rituals.",
  },
];

const PanditReference = () => {
  return (
    <section className="pandit-reference">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pandit Ji's Puja Experience
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Trusted across India and globally for sacred rituals
        </motion.p>

        <div className="references">
          {references.map((ref, idx) => (
            <motion.div
              className="reference-card"
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.2 }}
            >
              <h3>{ref.title}</h3>
              <p>{ref.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PanditReference;
