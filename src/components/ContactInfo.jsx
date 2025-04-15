import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-info-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("contact.title")}
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t("contact.subtitle")}
        </motion.p>

        <motion.div
          className="contact-details"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="contact-item">
            <h3>📍 {t("contact.addressLabel")}</h3>
            <p>{t("contact.address")}</p>
          </div>
          <div className="contact-item">
            <h3>📞 {t("contact.phoneLabel")}</h3>
            <p>{t("contact.phone")}</p>
          </div>
          <div className="contact-item">
            <h3>✉️ {t("contact.emailLabel")}</h3>
            <p>{t("contact.email")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
