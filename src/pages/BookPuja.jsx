import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const BookPuja = () => {
  const { t } = useTranslation();

  return (
    <section className="book-puja-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("bookPuja.title")}
      </motion.h2>

      <p className="section-subtitle">{t("bookPuja.subtitle")}</p>

      <motion.form
        className="puja-form"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <input type="text" placeholder={t("bookPuja.name")} required />
        <input type="tel" placeholder={t("bookPuja.mobile")} required />
        <input type="email" placeholder={t("bookPuja.email")} required />

        <select required>
          <option value="">{t("bookPuja.selectPuja")}</option>
          <option value="Baglamukhi Anushthan">{t("bookPuja.pujaTypes.anushthan")}</option>
          <option value="Sarva Karya Siddhi">{t("bookPuja.pujaTypes.karyaSiddhi")}</option>
          <option value="Shatru Vinash">{t("bookPuja.pujaTypes.shatruVinash")}</option>
          <option value="Court Case Victory">{t("bookPuja.pujaTypes.courtCase")}</option>
        </select>

        <input type="date" required />
        <textarea placeholder={t("bookPuja.message")}></textarea>
        <button type="submit">📿 {t("bookPuja.bookNow")}</button>
      </motion.form>
    </section>
  );
};

export default BookPuja;
