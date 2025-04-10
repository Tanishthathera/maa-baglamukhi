import React from 'react';

const AboutMaa = () => {
  return (
    <section className="about-maa">
      <div className="about-container">
        <div className="about-image">
          <img src="/assets/images/maa-yantra.png" alt="Maa Baglamukhi Yantra" />
        </div>
        <div className="about-text">
          <h2>About Maa Baglamukhi</h2>
          <p>
            Maa Baglamukhi, also known as Pitambara Maa, is one of the ten Mahavidyas (wisdom goddesses) in Hinduism. 
            She holds divine power to silence negative energies and bless her devotees with victory, stability, and peace.
          </p>
          <p>
            The holy shrine at Nalkheda, Madhya Pradesh, draws thousands who seek divine blessings, protection from enemies, and fulfillment of their wishes.
          </p>

          <div className="mantra-highlight">
            “ॐ ह्लीं बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिव्हां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा॥”
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMaa;
