import React from "react";
import { motion } from "framer-motion";

const Mantras = () => {
  return (
    <section className="mantras-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sacred Mantras
        </motion.h2>

        <motion.div
          className="mantra-block"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>🔱 Beej Mantra</h3>
          <p className="mantra-text glow-text">
            || ह्लीं बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय <br />
            जिव्हां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा ||
          </p>
        </motion.div>

        <motion.div
          className="mantra-block"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>📿 Maha Mantra</h3>
          <p className="mantra-text glow-text">
            || ॐ बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय <br />
            जिव्हां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा ||
          </p>
        </motion.div>

        <motion.div
          className="mantra-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>🙏 Benefits</h3>
          <ul>
            <li>Victory over enemies</li>
            <li>Protection from evil forces</li>
            <li>Success in court cases</li>
            <li>Mental peace and divine blessings</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Mantras;
