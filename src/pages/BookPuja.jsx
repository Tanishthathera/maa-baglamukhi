import React from "react";
import { motion } from "framer-motion";

const BookPuja = () => {
  return (
    <section className="book-puja-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Book a Divine Puja
        </motion.h2>

        <p className="section-subtitle">
          Invoke the blessings of Maa Baglamukhi through a spiritual ceremony.
        </p>

        <motion.form
          className="puja-form"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <input type="text" placeholder="Full Name" required />
          <input type="tel" placeholder="Mobile Number" required />
          <input type="email" placeholder="Email Address" required />
          <select required>
            <option value="">Select Puja Type</option>
            <option value="Baglamukhi Anushthan">Baglamukhi Anushthan</option>
            <option value="Sarva Karya Siddhi">Sarva Karya Siddhi</option>
            <option value="Shatru Vinash">Shatru Vinash</option>
            <option value="Court Case Victory">Court Case Victory</option>
          </select>
          <input type="date" required />
          <textarea placeholder="Additional Info or Questions..."></textarea>
          <button type="submit">📿 Book Now</button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookPuja;
