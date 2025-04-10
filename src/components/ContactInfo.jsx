import React from "react";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <section className="contact-info-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Information
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Reach out to us for any queries or puja bookings.
        </motion.p>

        <motion.div
          className="contact-details"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="contact-item">
            <h3>📍 Address</h3>
            <p>
              Maa Baglamukhi Mandir, Nalkheda, Agar Malwa, Madhya Pradesh, India
            </p>
          </div>
          <div className="contact-item">
            <h3>📞 Phone</h3>
            <p>+91 9876543210</p>
          </div>
          <div className="contact-item">
            <h3>✉️ Email</h3>
            <p>panditji@maabaglamukhi.org</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
