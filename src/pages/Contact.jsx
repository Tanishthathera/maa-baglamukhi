import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-section">
      <img
        src="/assets/images/Shri_Yantra.png"
        alt="Shri Yantra"
        className="yantra-bg"
      />

      <h2 className="section-title glow-text">📿 {t("contact.title")}</h2>
      <p className="contact-subtext">{t("contact.subtitle")}</p>

      <form className="contact-form glass-card">
        <input type="text" placeholder={t("contact.name")} required />
        <input type="email" placeholder={t("contact.email")} required />
        <input type="tel" placeholder={t("contact.mobile")} required />
        <textarea placeholder={t("contact.message")} required></textarea>
        <button type="submit">🔱 {t("contact.button")}</button>
      </form>

      <div className="contact-info">
        <p>
          <strong>📞 {t("contact.direct")}:</strong>
        </p>
        <p>+91-9876543210</p>
        <p>📧 panditji@example.com</p>
      </div>
    </section>
  );
};

export default Contact;
