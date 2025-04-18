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

        <h2>{t("aboutMaaFull.historyAndMiracles.heading")}</h2>

        <h3>{t("aboutMaaFull.historyAndMiracles.ancientHistory.heading")}</h3>
        <ul>
          <li>
            {t("aboutMaaFull.historyAndMiracles.ancientHistory.establishment")}
          </li>
          <li>
            {t(
              "aboutMaaFull.historyAndMiracles.ancientHistory.selfManifestedIdol"
            )}
          </li>
          <li>
            {t("aboutMaaFull.historyAndMiracles.ancientHistory.trishaktiForm")}
          </li>
        </ul>

        <h3>{t("aboutMaaFull.historyAndMiracles.tantricPractices.heading")}</h3>
        <ul>
          <li>
            {t(
              "aboutMaaFull.historyAndMiracles.tantricPractices.tantraSadhana"
            )}
          </li>
          <li>
            {t(
              "aboutMaaFull.historyAndMiracles.tantricPractices.specialRituals"
            )}
          </li>
          <li>
            {t(
              "aboutMaaFull.historyAndMiracles.tantricPractices.peetambaraShaktipeeth"
            )}
          </li>
        </ul>

        <h3>
          {t("aboutMaaFull.historyAndMiracles.miraculousExperiences.heading")}
        </h3>
        <ul>
          <li>
            {t(
              "aboutMaaFull.historyAndMiracles.miraculousExperiences.enemyObstacleRelief"
            )}
          </li>
          <li>
            {t(
              "aboutMaaFull.historyAndMiracles.miraculousExperiences.legalSuccess"
            )}
          </li>
          <li>
            {t(
              "aboutMaaFull.historyAndMiracles.miraculousExperiences.businessCareerSuccess"
            )}
          </li>
        </ul>

        <h3>{t("aboutMaaFull.historyAndMiracles.notableVisitors.heading")}</h3>
        <ul>
          <li>
            {t(
              "aboutMaaFull.historyAndMiracles.notableVisitors.politicalFigures"
            )}
          </li>
          <li>
            {t("aboutMaaFull.historyAndMiracles.notableVisitors.otherNotables")}
          </li>
        </ul>
      </section>
    </>
  );
};

export default AboutMaaFull;
