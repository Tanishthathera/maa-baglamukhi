import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const AboutMaaFull = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("aboutMaaFull.pageTitle")}</title>
        <meta name="description" content={t("aboutMaaFull.metaDescription")} />
      </Helmet>

      <section className="about-maa-full">
        <h1>{t("aboutMaaFull.title")}</h1>
        <p>{t("aboutMaaFull.content")}</p>
      </section>
    </>
  );
};

export default AboutMaaFull;
